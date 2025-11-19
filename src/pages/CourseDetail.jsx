import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../context/AuthContext'
import VideoPlayer from '../components/VideoPlayer'

export default function CourseDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { isAuthenticated } = useAuth()

  const [course, setCourse] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [enrollment, setEnrollment] = useState(null)
  const [enrollmentLoading, setEnrollmentLoading] = useState(false)
  const [currentMaterialIndex, setCurrentMaterialIndex] = useState(0)

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await axios.get(`/courses/${id}`)
        setCourse(response.data)

        // Check if user is enrolled
        if (isAuthenticated) {
          try {
            const enrollmentRes = await axios.get(`/enrollments/check/${id}`)
            if (enrollmentRes.data.enrolled) {
              setEnrollment(enrollmentRes.data.enrollment)
              setCurrentMaterialIndex(enrollmentRes.data.enrollment.currentMaterial || 0)
            }
          } catch (err) {
            // User not enrolled, ignore error
            console.log('Not enrolled')
          }
        }
      } catch (err) {
        console.error('Error fetching course:', err)
        setError(err.response?.data?.message || 'Failed to load course')
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchCourseData()
    }
  }, [id, isAuthenticated])

  const handleEnroll = async () => {
    if (!isAuthenticated) {
      navigate('/login')
      return
    }

    try {
      setEnrollmentLoading(true)
      const response = await axios.post(`/enrollments/${id}`)
      setEnrollment(response.data)
      setError(null)
    } catch (err) {
      console.error('Error enrolling:', err)
      setError(err.response?.data?.message || 'Failed to enroll in course')
    } finally {
      setEnrollmentLoading(false)
    }
  }

  const handleProgressUpdate = async (progressData) => {
    if (!enrollment) return

    try {
      await axios.put(`/enrollments/${enrollment._id}/progress`, progressData)
    } catch (err) {
      console.error('Error updating progress:', err)
    }
  }

  if (loading) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <div className="text-center">
          <div className="spinner-border text-white mb-3" style={{ width: '3rem', height: '3rem' }} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="text-white fs-5">Loading course details...</p>
        </div>
      </div>
    )
  }

  if (error && !course) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center" style={{ background: '#f8f9fa' }}>
        <div className="text-center">
          <div className="card border-0 shadow-lg" style={{ maxWidth: '500px' }}>
            <div className="card-body p-5">
              <div className="text-danger mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
                  <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
                </svg>
              </div>
              <h4 className="fw-bold mb-3">Error Loading Course</h4>
              <p className="text-muted mb-4">{error}</p>
              <Link to="/courses" className="btn btn-primary px-4">Back to Courses</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!course) return null

  const currentMaterial = course.materials && course.materials[currentMaterialIndex]
  const getMaterialProgress = (index) => {
    if (!enrollment) return 0
    const materialProgress = enrollment.materialsProgress?.find(m => m.materialIndex === index)
    return materialProgress ? (materialProgress.watchedDuration / materialProgress.totalDuration) * 100 : 0
  }

  return (
    <div className="min-vh-100" style={{ background: '#f8f9fa' }}>
      {/* Course Header */}
      <div className="course-header" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '2rem 0' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><Link to="/" className="text-white">Home</Link></li>
                  <li className="breadcrumb-item"><Link to="/courses" className="text-white">Courses</Link></li>
                  <li className="breadcrumb-item active text-white" aria-current="page">{course.title}</li>
                </ol>
              </nav>
              <h1 className="text-white fw-bold mb-3">{course.title}</h1>
              <p className="text-white opacity-75 mb-3">{course.description}</p>
              <div className="d-flex flex-wrap gap-3 text-white">
                <div>
                  <svg width="16" height="16" fill="currentColor" className="me-1" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  {(course.rating || 0).toFixed(1)} ({(course.totalRatings || 0).toLocaleString()} ratings)
                </div>
                <div>
                  <svg width="16" height="16" fill="currentColor" className="me-1" viewBox="0 0 16 16">
                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
                  </svg>
                  {(course.students || 0).toLocaleString()} students
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
              {!enrollment ? (
                <button
                  className="btn btn-light btn-lg px-5"
                  onClick={handleEnroll}
                  disabled={enrollmentLoading}
                >
                  {enrollmentLoading ? 'Enrolling...' : `Enroll Now - $${course.price}`}
                </button>
              ) : (
                <div className="text-white">
                  <div className="bg-white bg-opacity-25 rounded p-3">
                    <div className="fw-bold mb-2">Your Progress</div>
                    <div className="progress" style={{ height: '10px' }}>
                      <div
                        className="progress-bar bg-success"
                        style={{ width: `${enrollment.progress}%` }}
                      ></div>
                    </div>
                    <div className="small mt-2">{enrollment.progress}% Complete</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-5">
        {error && (
          <div className="alert alert-danger alert-dismissible fade show mb-4">
            {error}
            <button type="button" className="btn-close" onClick={() => setError(null)}></button>
          </div>
        )}

        {enrollment && course.materials && course.materials.length > 0 ? (
          <div className="row">
            {/* Video Player */}
            <div className="col-lg-8 mb-4">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-0">
                  <VideoPlayer
                    material={currentMaterial}
                    materialIndex={currentMaterialIndex}
                    onProgressUpdate={handleProgressUpdate}
                    initialProgress={
                      enrollment.materialsProgress?.find(m => m.materialIndex === currentMaterialIndex)?.watchedDuration || 0
                    }
                  />
                  <div className="p-4">
                    <h4 className="fw-bold mb-2">{currentMaterial.title}</h4>
                    <div className="text-muted">
                      <span className="badge bg-primary me-2">{currentMaterial.type}</span>
                      Lesson {currentMaterialIndex + 1} of {course.materials.length}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Course Materials Sidebar */}
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm sticky-top" style={{ top: '20px' }}>
                <div className="card-header bg-white border-0 p-4">
                  <h5 className="fw-bold mb-0">Course Content</h5>
                  <p className="text-muted small mb-0">{course.materials.length} lessons</p>
                </div>
                <div className="card-body p-0" style={{ maxHeight: '600px', overflowY: 'auto' }}>
                  {course.materials.map((material, index) => {
                    const progress = getMaterialProgress(index)
                    const isCompleted = enrollment.materialsProgress?.find(m => m.materialIndex === index)?.completed

                    return (
                      <div
                        key={index}
                        className={`material-item p-3 border-bottom ${currentMaterialIndex === index ? 'active' : ''}`}
                        onClick={() => setCurrentMaterialIndex(index)}
                        style={{ cursor: 'pointer' }}
                      >
                        <div className="d-flex align-items-start">
                          <div className="me-3">
                            {isCompleted ? (
                              <div className="text-success">
                                <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                </svg>
                              </div>
                            ) : (
                              <div className="text-muted">
                                <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                  <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
                                </svg>
                              </div>
                            )}
                          </div>
                          <div className="flex-grow-1">
                            <div className="fw-semibold small">{material.title}</div>
                            <div className="text-muted small">
                              <span className="badge bg-light text-dark">{material.type}</span>
                            </div>
                            {progress > 0 && !isCompleted && (
                              <div className="progress mt-2" style={{ height: '3px' }}>
                                <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="row">
            {/* Course Information */}
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body p-4">
                  <h4 className="fw-bold mb-3">About This Course</h4>
                  <p className="text-muted">{course.description}</p>
                </div>
              </div>

              {course.whatYouWillLearn && course.whatYouWillLearn.length > 0 && (
                <div className="card border-0 shadow-sm mb-4">
                  <div className="card-body p-4">
                    <h4 className="fw-bold mb-4">What You'll Learn</h4>
                    <div className="row g-3">
                      {course.whatYouWillLearn.map((item, index) => (
                        <div key={index} className="col-md-6">
                          <div className="d-flex align-items-start">
                            <svg width="20" height="20" fill="currentColor" className="text-success me-2 mt-1" viewBox="0 0 16 16">
                              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                            </svg>
                            <span>{item}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {course.requirements && course.requirements.length > 0 && (
                <div className="card border-0 shadow-sm mb-4">
                  <div className="card-body p-4">
                    <h4 className="fw-bold mb-3">Requirements</h4>
                    <ul className="list-unstyled">
                      {course.requirements.map((req, index) => (
                        <li key={index} className="mb-2">
                          <svg width="16" height="16" fill="currentColor" className="text-primary me-2" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                          </svg>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm sticky-top" style={{ top: '20px' }}>
                <div className="card-body p-4">
                  <div className="text-center mb-4">
                    <div className="display-4 fw-bold text-gradient mb-2">${course.price}</div>
                    {!enrollment && (
                      <button
                        className="btn btn-primary btn-lg w-100 mb-3"
                        onClick={handleEnroll}
                        disabled={enrollmentLoading}
                      >
                        {enrollmentLoading ? 'Enrolling...' : 'Enroll Now'}
                      </button>
                    )}
                  </div>

                  <div className="d-flex flex-column gap-3">
                    <div className="d-flex align-items-center">
                      <svg width="24" height="24" fill="currentColor" className="text-primary me-3" viewBox="0 0 16 16">
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                      </svg>
                      <div>
                        <div className="fw-semibold">{course.duration}</div>
                        <small className="text-muted">Total duration</small>
                      </div>
                    </div>

                    <div className="d-flex align-items-center">
                      <svg width="24" height="24" fill="currentColor" className="text-primary me-3" viewBox="0 0 16 16">
                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
                      </svg>
                      <div>
                        <div className="fw-semibold">Lifetime Access</div>
                        <small className="text-muted">Learn at your pace</small>
                      </div>
                    </div>

                    <div className="d-flex align-items-center">
                      <svg width="24" height="24" fill="currentColor" className="text-primary me-3" viewBox="0 0 16 16">
                        <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z"/>
                        <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"/>
                      </svg>
                      <div>
                        <div className="fw-semibold">Certificate</div>
                        <small className="text-muted">Upon completion</small>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-4 pt-3 border-top">
                    <small className="text-muted">30-Day Money-Back Guarantee</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .material-item {
          transition: all 0.3s ease;
        }

        .material-item:hover {
          background: #f8f9fa;
        }

        .material-item.active {
          background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
          border-left: 4px solid #667eea !important;
        }

        .text-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </div>
  )
}
