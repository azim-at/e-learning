import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function CourseList() {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedLevel, setSelectedLevel] = useState('all')
  const [categories, setCategories] = useState([])
  const [levels, setLevels] = useState([])

  // Fetch courses from API
  useEffect(() => {
    fetchCourses()
  }, [searchQuery, selectedCategory, selectedLevel])

  const fetchCourses = async () => {
    try {
      setLoading(true)
      setError(null)

      // Build query parameters
      const params = new URLSearchParams()
      if (searchQuery.trim()) {
        params.append('search', searchQuery)
      }
      if (selectedCategory !== 'all') {
        params.append('category', selectedCategory)
      }
      if (selectedLevel !== 'all') {
        params.append('level', selectedLevel)
      }

      const url = `/courses${params.toString() ? '?' + params.toString() : ''}`
      const response = await axios.get(url)

      setCourses(response.data)
    } catch (err) {
      console.error('Error fetching courses:', err)
      setError('Failed to load courses. Please try again later.')
      setCourses([])
    } finally {
      setLoading(false)
    }
  }

  // Fetch available categories and levels for filters
  useEffect(() => {
    const fetchFilterOptions = async () => {
      try {
        // Default categories and levels (can be replaced with API calls)
        setCategories(['all', 'Development', 'Design', 'Data Science', 'Marketing', 'Business', 'Cloud Computing', 'IT & Security'])
        setLevels(['all', 'Beginner', 'Intermediate', 'Advanced'])
      } catch (err) {
        console.error('Error fetching filter options:', err)
      }
    }

    fetchFilterOptions()
  }, [])

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    // Search is triggered by the useEffect when searchQuery changes
  }

  return (
    <div className="min-vh-100" style={{ background: '#f8f9fa' }}>
      {/* Hero Section */}
      <section className="py-5" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto text-center text-white">
              <h1 className="display-4 fw-bold mb-3">Explore Our Courses</h1>
              <p className="lead mb-4">Choose from over 100,000 online courses with new additions published every month</p>

              {/* Search Bar */}
              <form onSubmit={handleSearchSubmit}>
                <div className="input-group input-group-lg shadow-lg">
                  <span className="input-group-text bg-white border-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                    </svg>
                  </span>
                  <input
                    type="text"
                    className="form-control border-0"
                    placeholder="Search for courses by title or instructor..."
                    style={{ fontSize: '1rem' }}
                    value={searchQuery}
                    onChange={handleSearch}
                  />
                  <button className="btn btn-primary" type="submit">Search</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-4 bg-white border-bottom">
        <div className="container">
          <div className="row g-3 align-items-center">
            <div className="col-12 col-md-auto">
              <h6 className="mb-0 fw-semibold">Filter by:</h6>
            </div>
            <div className="col-12 col-md-auto">
              <select
                className="form-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                disabled={loading}
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat === 'all' ? 'All Categories' : cat}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-12 col-md-auto">
              <select
                className="form-select"
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                disabled={loading}
              >
                {levels.map(level => (
                  <option key={level} value={level}>
                    {level === 'all' ? 'All Levels' : level}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-12 col-md-auto ms-auto">
              <div className="text-muted">
                <strong>{courses.length}</strong> courses found
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Error Message */}
      {error && (
        <div className="container mt-4">
          <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-exclamation-circle me-2" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.753.23 1.018.462.266.232.438.661.438 1.035v.468c0 .017.008.016.008.016h.019l.511-1.641h1.261V9.5c0 .363-.137.691-.346.899l1.344-1.348a4.9 4.9 0 0 0 .342-.614q.213-.465.342-1.03c.224-1.587-.59-3.277-2.046-4.044.137.02.28.03.422.03.712 0 1.38-.135 1.994-.37"/>
            </svg>
            {error}
            <button type="button" className="btn-close" onClick={() => setError(null)}></button>
          </div>
        </div>
      )}

      {/* Courses Grid */}
      <section className="py-5">
        <div className="container">
          {/* Loading State */}
          {loading ? (
            <div className="row g-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map(skeleton => (
                <div key={skeleton} className="col-12 col-sm-6 col-lg-3">
                  <div className="card h-100 border-0 shadow-sm" style={{ transition: 'all 0.3s ease' }}>
                    <div
                      style={{
                        height: '200px',
                        background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
                        backgroundSize: '200% 100%',
                        animation: 'loading 1.5s infinite'
                      }}
                    ></div>
                    <div className="card-body">
                      <div
                        style={{
                          height: '20px',
                          background: '#e0e0e0',
                          borderRadius: '4px',
                          marginBottom: '10px',
                          animation: 'pulse 2s infinite'
                        }}
                      ></div>
                      <div
                        style={{
                          height: '20px',
                          background: '#e0e0e0',
                          borderRadius: '4px',
                          marginBottom: '10px',
                          animation: 'pulse 2s infinite'
                        }}
                      ></div>
                      <div
                        style={{
                          height: '20px',
                          background: '#e0e0e0',
                          borderRadius: '4px',
                          animation: 'pulse 2s infinite'
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : courses.length > 0 ? (
            <div className="row g-4">
              {courses.map(course => (
                <div key={course._id} className="col-12 col-sm-6 col-lg-3">
                  <div className="card h-100 border-0 shadow-sm card-hover" style={{ transition: 'all 0.3s ease' }}>
                    {/* Course Image */}
                    <div className="position-relative overflow-hidden" style={{ height: '200px' }}>
                      <img
                        src={course.thumbnail}
                        className="card-img-top w-100 h-100"
                        alt={course.title}
                        style={{ objectFit: 'cover' }}
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/400x300?text=Course+Image'
                        }}
                      />
                      <div className="position-absolute top-0 end-0 m-3">
                        <span className="badge bg-white text-dark">
                          {course.level}
                        </span>
                      </div>
                      <div className="position-absolute top-0 start-0 m-3">
                        <span className="badge" style={{ background: '#6366f1' }}>
                          {course.category}
                        </span>
                      </div>
                    </div>

                    <div className="card-body d-flex flex-column">
                      {/* Course Title */}
                      <h5 className="card-title fw-bold mb-2">
                        <Link to={`/course/${course._id}`} className="text-decoration-none text-dark">
                          {course.title}
                        </Link>
                      </h5>

                      {/* Instructor */}
                      <p className="text-muted small mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-person me-1" viewBox="0 0 16 16">
                          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                        </svg>
                        {course.instructor}
                      </p>

                      {/* Rating & Students */}
                      <div className="d-flex align-items-center gap-3 mb-3">
                        <div className="d-flex align-items-center">
                          <span className="text-warning me-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                          </span>
                          <strong>{course.rating}</strong>
                          <span className="text-muted small ms-1">({course.reviews ? course.reviews.toLocaleString() : '0'})</span>
                        </div>
                        <div className="text-muted small">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-people me-1" viewBox="0 0 16 16">
                            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
                          </svg>
                          {course.students ? course.students.toLocaleString() : '0'} students
                        </div>
                      </div>

                      {/* Price & Button */}
                      <div className="mt-auto d-flex align-items-center justify-content-between flex-wrap gap-2">
                        <div>
                          <h5 className="mb-0 fw-bold" style={{ color: '#6366f1' }}>
                            ${course.price}
                          </h5>
                          {course.originalPrice && (
                            <small className="text-muted text-decoration-line-through">
                              ${course.originalPrice}
                            </small>
                          )}
                        </div>
                        <Link
                          to={`/course/${course._id}`}
                          className="btn btn-primary btn-sm"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-inbox text-muted mb-3" viewBox="0 0 16 16">
                <path d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4zm-1.17-.437A1.5 1.5 0 0 1 4.98 3h6.04a1.5 1.5 0 0 1 1.17.563l3.7 4.625a.5.5 0 0 1 .106.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374z"/>
              </svg>
              <h4 className="text-muted">No courses found</h4>
              <p className="text-muted">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </section>

      <style>{`
        @keyframes loading {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        .card-hover:hover {
          transform: translateY(-5px) !important;
          box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15) !important;
        }
      `}</style>
    </div>
  )
}
