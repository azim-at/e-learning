import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

export default function CourseDetail() {
  const { id } = useParams()
  const [course, setCourse] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await axios.get(`/courses/${id}`)
        setCourse(response.data)
      } catch (err) {
        console.error('Error fetching course:', err)
        setError(err.response?.data?.message || 'Failed to load course. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchCourseData()
    }
  }, [id])

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

  if (error) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center" style={{ background: '#f8f9fa' }}>
        <div className="text-center">
          <div className="card border-0 shadow-lg" style={{ maxWidth: '500px' }}>
            <div className="card-body p-5">
              <div className="text-danger mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-exclamation-triangle" viewBox="0 0 16 16">
                  <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
                  <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
                </svg>
              </div>
              <h4 className="fw-bold mb-3">Error Loading Course</h4>
              <p className="text-muted mb-4">{error}</p>
              <Link to="/courses" className="btn btn-primary px-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left me-2" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                </svg>
                Back to Courses
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!course) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center" style={{ background: '#f8f9fa' }}>
        <div className="text-center">
          <div className="card border-0 shadow-lg" style={{ maxWidth: '500px' }}>
            <div className="card-body p-5">
              <div className="text-warning mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
              </div>
              <h4 className="fw-bold mb-3">Course Not Found</h4>
              <p className="text-muted mb-4">The course you're looking for doesn't exist or has been removed.</p>
              <Link to="/courses" className="btn btn-primary px-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left me-2" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                </svg>
                Back to Courses
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-vh-100" style={{ background: '#f8f9fa' }}>
      <style>{`
        .course-hero {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          position: relative;
          overflow: hidden;
        }
        .course-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="0.5" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
          opacity: 0.3;
        }
        .breadcrumb-item + .breadcrumb-item::before {
          color: rgba(255,255,255,0.6);
        }
        .stat-badge {
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          transition: all 0.3s ease;
        }
        .stat-badge:hover {
          background: rgba(255,255,255,0.3);
          transform: translateY(-2px);
        }
        .course-card {
          transition: all 0.3s ease;
          border: none;
          overflow: hidden;
        }
        .course-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important;
        }
        .price-tag {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 1.5rem;
          border-radius: 15px;
          margin: -1rem -1rem 1.5rem -1rem;
        }
        .feature-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }
        .enroll-btn {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          padding: 1rem 2rem;
          font-weight: 600;
          font-size: 1.1rem;
          border-radius: 50px;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
        }
        .enroll-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(102, 126, 234, 0.6);
        }
        .material-item {
          transition: all 0.3s ease;
          border-left: 3px solid transparent;
        }
        .material-item:hover {
          border-left-color: #667eea;
          background: #f8f9fa;
          transform: translateX(5px);
        }
        .section-title {
          position: relative;
          padding-bottom: 1rem;
          margin-bottom: 2rem;
        }
        .section-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 60px;
          height: 4px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 2px;
        }
        .learning-item {
          padding: 0.75rem;
          transition: all 0.3s ease;
          border-radius: 8px;
        }
        .learning-item:hover {
          background: #f8f9fa;
        }
        .thumbnail-image {
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
        }
        .sticky-sidebar {
          position: sticky;
          top: 20px;
        }
      `}</style>

      {/* Hero Section */}
      <section className="course-hero py-5">
        <div className="container position-relative" style={{ zIndex: 1 }}>
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/dashboard" className="text-white text-decoration-none opacity-75">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-house-fill me-1" viewBox="0 0 16 16">
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
                    <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z"/>
                  </svg>
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/courses" className="text-white text-decoration-none opacity-75">Courses</Link>
              </li>
              <li className="breadcrumb-item">
                <span className="text-white opacity-75">{course.category}</span>
              </li>
            </ol>
          </nav>

          <div className="row align-items-center">
            <div className="col-lg-8">
              {/* Category Badge */}
              <div className="mb-3">
                <span className="badge" style={{
                  background: 'rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>
                  {course.category}
                </span>
              </div>

              {/* Course Title */}
              <h1 className="display-4 fw-bold text-white mb-3" style={{ lineHeight: '1.2' }}>
                {course.title}
              </h1>

              <p className="lead text-white opacity-90 mb-4">{course.description}</p>

              {/* Stats */}
              <div className="d-flex flex-wrap gap-3 mb-4">
                <div className="stat-badge">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill text-warning me-2" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  <strong>{course.rating || 0}</strong>
                  <span className="text-white opacity-75 ms-1">({(course.totalRatings || 0).toLocaleString()})</span>
                </div>

                <div className="stat-badge">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people-fill text-white me-2" viewBox="0 0 16 16">
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                  </svg>
                  <span className="text-white">{(course.students || 0).toLocaleString()} students</span>
                </div>

                <div className="stat-badge">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock-fill text-white me-2" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                  </svg>
                  <span className="text-white">{course.duration}</span>
                </div>

                <div className="stat-badge">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bar-chart-fill text-white me-2" viewBox="0 0 16 16">
                    <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"/>
                  </svg>
                  <span className="text-white">{course.level}</span>
                </div>
              </div>

              {/* Instructor */}
              <div className="d-flex align-items-center text-white">
                <div className="me-3">
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'rgba(255,255,255,0.2)',
                    backdropFilter: 'blur(10px)',
                    border: '2px solid rgba(255,255,255,0.3)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="small opacity-75">Instructor</div>
                  <div className="fw-bold fs-5">{course.instructor}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {/* Left Content */}
            <div className="col-lg-8">
              {/* Course Image */}
              {course.thumbnail && (
                <div className="thumbnail-image mb-4">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="img-fluid w-100"
                    style={{ maxHeight: '450px', objectFit: 'cover' }}
                  />
                </div>
              )}

              {/* About Course */}
              <div className="card course-card shadow-sm mb-4">
                <div className="card-body p-4">
                  <h3 className="section-title fw-bold">About This Course</h3>
                  <p className="text-muted fs-6 lh-lg">{course.description}</p>
                </div>
              </div>

              {/* What You'll Learn */}
              {course.whatYouWillLearn && course.whatYouWillLearn.length > 0 && (
                <div className="card course-card shadow-sm mb-4">
                  <div className="card-body p-4">
                    <h3 className="section-title fw-bold">What You'll Learn</h3>
                    <div className="row g-3">
                      {course.whatYouWillLearn.map((item, index) => (
                        <div key={index} className="col-md-6">
                          <div className="learning-item d-flex align-items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-check-circle-fill text-success me-3 mt-1 flex-shrink-0" viewBox="0 0 16 16">
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                            </svg>
                            <span className="text-muted">{item}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Requirements */}
              {course.requirements && course.requirements.length > 0 && (
                <div className="card course-card shadow-sm mb-4">
                  <div className="card-body p-4">
                    <h3 className="section-title fw-bold">Requirements</h3>
                    <ul className="list-unstyled mb-0">
                      {course.requirements.map((req, index) => (
                        <li key={index} className="mb-3 d-flex align-items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="currentColor" className="bi bi-circle-fill text-primary me-3 mt-2" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8"/>
                          </svg>
                          <span className="text-muted">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Course Materials */}
              {course.materials && course.materials.length > 0 && (
                <div className="card course-card shadow-sm mb-4">
                  <div className="card-body p-4">
                    <h3 className="section-title fw-bold">Course Materials</h3>
                    <div className="list-group list-group-flush">
                      {course.materials.map((material, index) => (
                        <div key={index} className="list-group-item material-item px-0 py-3">
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-start flex-grow-1">
                              <div className="feature-icon me-3">
                                {material.type === 'video' && (
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                                  </svg>
                                )}
                                {material.type === 'document' && (
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-file-earmark-text-fill" viewBox="0 0 16 16">
                                    <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z"/>
                                  </svg>
                                )}
                                {material.type === 'presentation' && (
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-file-earmark-slides-fill" viewBox="0 0 16 16">
                                    <path d="M7 7.5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1z"/>
                                    <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M5 6h6a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1"/>
                                  </svg>
                                )}
                              </div>
                              <div>
                                <h6 className="mb-1 fw-semibold">{material.title}</h6>
                                <div className="d-flex align-items-center gap-2">
                                  <span className="badge bg-primary">{material.type}</span>
                                  <small className="text-muted">{(material.size / (1024 * 1024)).toFixed(2)} MB</small>
                                </div>
                              </div>
                            </div>
                            <a href={material.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download me-1" viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
                              </svg>
                              Download
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Sidebar */}
            <div className="col-lg-4">
              <div className="sticky-sidebar">
                <div className="card course-card shadow-lg border-0">
                  <div className="card-body p-0">
                    {/* Price Section */}
                    <div className="price-tag text-center">
                      <div className="small text-white-50 mb-2">Course Price</div>
                      <h2 className="display-4 fw-bold mb-0">${course.price}</h2>
                    </div>

                    <div className="p-4">
                      {/* Enroll Button */}
                      <button className="btn enroll-btn w-100 mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart-plus-fill me-2" viewBox="0 0 16 16">
                          <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0"/>
                        </svg>
                        Enroll Now
                      </button>

                      <div className="text-center mb-4">
                        <small className="text-muted">30-Day Money-Back Guarantee</small>
                      </div>

                      {/* Course Includes */}
                      <h5 className="fw-bold mb-3">This course includes:</h5>
                      <ul className="list-unstyled">
                        <li className="mb-3 d-flex align-items-center">
                          <div className="feature-icon me-3" style={{ width: '35px', height: '35px' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                              <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
                            </svg>
                          </div>
                          <div>
                            <div className="fw-semibold">{course.lessons || 0} Lessons</div>
                            <small className="text-muted">Video lectures</small>
                          </div>
                        </li>
                        <li className="mb-3 d-flex align-items-center">
                          <div className="feature-icon me-3" style={{ width: '35px', height: '35px' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                            </svg>
                          </div>
                          <div>
                            <div className="fw-semibold">{course.duration}</div>
                            <small className="text-muted">Total duration</small>
                          </div>
                        </li>
                        <li className="mb-3 d-flex align-items-center">
                          <div className="feature-icon me-3" style={{ width: '35px', height: '35px' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022z"/>
                              <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995q.289.451.63.846c-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6 6 0 0 1-.415-.492 2 2 0 0 1-.94.31"/>
                            </svg>
                          </div>
                          <div>
                            <div className="fw-semibold">{course.language || 'English'}</div>
                            <small className="text-muted">Course language</small>
                          </div>
                        </li>
                        <li className="mb-3 d-flex align-items-center">
                          <div className="feature-icon me-3" style={{ width: '35px', height: '35px' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M5.68 5.792 7.345 7.75 5.681 9.708a2.75 2.75 0 1 1 0-3.916ZM8 6.978 6.416 5.113l-.014-.015a3.75 3.75 0 1 0 0 5.304l.014-.015L8 8.522l1.584 1.904.014.015a3.75 3.75 0 1 0 0-5.304l-.014.015zm.656.772 1.663-1.958a2.75 2.75 0 1 1 0 3.916z"/>
                            </svg>
                          </div>
                          <div>
                            <div className="fw-semibold">Lifetime Access</div>
                            <small className="text-muted">Learn at your pace</small>
                          </div>
                        </li>
                        <li className="mb-3 d-flex align-items-center">
                          <div className="feature-icon me-3" style={{ width: '35px', height: '35px' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z"/>
                              <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"/>
                            </svg>
                          </div>
                          <div>
                            <div className="fw-semibold">Certificate</div>
                            <small className="text-muted">Upon completion</small>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
