import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function CourseDetail() {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState('overview')
  const [course, setCourse] = useState(null)

  // Mock data - This will be replaced with actual API call
  useEffect(() => {
    // Simulate API call
    const fetchCourseData = () => {
      const mockCourse = {
        id: id,
        title: 'Complete Web Development Bootcamp',
        subtitle: 'Learn HTML, CSS, JavaScript, React, Node.js, MongoDB and more!',
        instructor: {
          name: 'John Doe',
          title: 'Senior Full Stack Developer',
          bio: 'I am a passionate developer with 10+ years of experience in web development. I have taught over 100,000 students worldwide.',
          image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
          students: 125000,
          courses: 15,
          rating: 4.8
        },
        category: 'Development',
        level: 'Beginner',
        rating: 4.8,
        reviews: 2345,
        students: 12500,
        price: 49.99,
        originalPrice: 99.99,
        duration: '40 hours',
        lectures: 156,
        lastUpdated: 'November 2024',
        language: 'English',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=600&fit=crop',
        description: 'This comprehensive course will take you from beginner to advanced in web development. You will learn everything you need to know to build modern, responsive websites and web applications.',
        whatYouWillLearn: [
          'Build real-world websites and web applications',
          'Master HTML5, CSS3, and modern JavaScript (ES6+)',
          'Learn React.js for building interactive user interfaces',
          'Understand Node.js and Express for backend development',
          'Work with MongoDB and database design',
          'Implement authentication and authorization',
          'Deploy applications to production',
          'Follow best practices and industry standards'
        ],
        requirements: [
          'A computer with internet connection',
          'No prior programming experience needed',
          'Willingness to learn and practice',
          'Basic understanding of how to use a computer'
        ],
        curriculum: [
          {
            section: 'Introduction to Web Development',
            lectures: 8,
            duration: '45min',
            lessons: [
              { title: 'Welcome to the Course', duration: '5:23', preview: true },
              { title: 'Course Overview and Structure', duration: '8:15', preview: true },
              { title: 'Setting Up Your Development Environment', duration: '12:30', preview: false },
              { title: 'Introduction to HTML', duration: '10:45', preview: false },
              { title: 'HTML Elements and Structure', duration: '15:20', preview: false }
            ]
          },
          {
            section: 'CSS Fundamentals',
            lectures: 15,
            duration: '2hr 30min',
            lessons: [
              { title: 'Introduction to CSS', duration: '8:45', preview: false },
              { title: 'CSS Selectors and Properties', duration: '12:20', preview: false },
              { title: 'Box Model and Layout', duration: '15:30', preview: false },
              { title: 'Flexbox Layout System', duration: '18:45', preview: false },
              { title: 'CSS Grid Layout', duration: '20:15', preview: false }
            ]
          },
          {
            section: 'JavaScript Basics',
            lectures: 20,
            duration: '4hr 15min',
            lessons: [
              { title: 'Introduction to JavaScript', duration: '10:30', preview: false },
              { title: 'Variables and Data Types', duration: '12:45', preview: false },
              { title: 'Functions and Scope', duration: '15:20', preview: false },
              { title: 'Arrays and Objects', duration: '18:30', preview: false },
              { title: 'DOM Manipulation', duration: '22:15', preview: false }
            ]
          },
          {
            section: 'Advanced JavaScript',
            lectures: 18,
            duration: '3hr 45min',
            lessons: [
              { title: 'ES6+ Features', duration: '16:30', preview: false },
              { title: 'Async JavaScript and Promises', duration: '20:15', preview: false },
              { title: 'Fetch API and AJAX', duration: '18:45', preview: false },
              { title: 'Modern JavaScript Patterns', duration: '22:30', preview: false }
            ]
          },
          {
            section: 'React.js Fundamentals',
            lectures: 25,
            duration: '5hr 30min',
            lessons: [
              { title: 'Introduction to React', duration: '12:30', preview: false },
              { title: 'Components and Props', duration: '15:45', preview: false },
              { title: 'State and Lifecycle', duration: '18:20', preview: false },
              { title: 'Hooks Deep Dive', duration: '25:15', preview: false }
            ]
          },
          {
            section: 'Backend Development with Node.js',
            lectures: 22,
            duration: '4hr 45min',
            lessons: [
              { title: 'Introduction to Node.js', duration: '10:30', preview: false },
              { title: 'Express.js Framework', duration: '18:45', preview: false },
              { title: 'RESTful API Design', duration: '22:15', preview: false },
              { title: 'Database Integration', duration: '20:30', preview: false }
            ]
          },
          {
            section: 'MongoDB and Database Design',
            lectures: 16,
            duration: '3hr 20min',
            lessons: [
              { title: 'Introduction to MongoDB', duration: '12:15', preview: false },
              { title: 'CRUD Operations', duration: '16:30', preview: false },
              { title: 'Data Modeling', duration: '18:45', preview: false },
              { title: 'Mongoose ODM', duration: '15:20', preview: false }
            ]
          },
          {
            section: 'Deployment and Production',
            lectures: 12,
            duration: '2hr 30min',
            lessons: [
              { title: 'Preparing for Deployment', duration: '10:30', preview: false },
              { title: 'Deploying to Heroku', duration: '15:45', preview: false },
              { title: 'CI/CD Best Practices', duration: '18:20', preview: false },
              { title: 'Performance Optimization', duration: '20:15', preview: false }
            ]
          }
        ],
        reviews: [
          {
            id: 1,
            userName: 'Sarah Johnson',
            userImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop',
            rating: 5,
            date: '2 weeks ago',
            comment: 'This course is absolutely fantastic! John explains everything clearly and the projects are very practical. I landed my first web development job after completing this course.'
          },
          {
            id: 2,
            userName: 'Michael Chen',
            userImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop',
            rating: 5,
            date: '1 month ago',
            comment: 'Best investment I have made in my career. The content is up-to-date and covers everything you need to become a full-stack developer.'
          },
          {
            id: 3,
            userName: 'Emily Rodriguez',
            userImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop',
            rating: 4,
            date: '1 month ago',
            comment: 'Great course with lots of practical examples. The only minor issue is that some sections could be a bit more detailed, but overall highly recommended!'
          }
        ]
      }
      setCourse(mockCourse)
    }

    fetchCourseData()
  }, [id])

  if (!course) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="min-vh-100" style={{ background: '#f8f9fa' }}>
      {/* Hero Section */}
      <section className="py-5" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {/* Breadcrumb */}
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/dashboard" className="text-white text-decoration-none">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/courses" className="text-white text-decoration-none">Courses</Link>
                  </li>
                  <li className="breadcrumb-item active text-white" aria-current="page">{course.category}</li>
                </ol>
              </nav>

              {/* Course Title */}
              <h1 className="display-5 fw-bold text-white mb-3">{course.title}</h1>
              <p className="lead text-white mb-4">{course.subtitle}</p>

              {/* Course Meta */}
              <div className="d-flex flex-wrap gap-4 text-white mb-4">
                <div className="d-flex align-items-center">
                  <span className="text-warning me-2"></span>
                  <strong>{course.rating}</strong>
                  <span className="ms-2">({course.reviews.toLocaleString()} reviews)</span>
                </div>
                <div className="d-flex align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people me-2" viewBox="0 0 16 16">
                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
                  </svg>
                  {course.students.toLocaleString()} students
                </div>
                <div className="d-flex align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock me-2" viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                  </svg>
                  {course.duration}
                </div>
              </div>

              {/* Instructor */}
              <div className="d-flex align-items-center text-white">
                <span className="me-2">Created by</span>
                <img
                  src={course.instructor.image}
                  alt={course.instructor.name}
                  className="rounded-circle me-2"
                  style={{ width: '30px', height: '30px', objectFit: 'cover' }}
                />
                <strong>{course.instructor.name}</strong>
              </div>

              <div className="mt-3 text-white small">
                <span className="me-3">Last updated {course.lastUpdated}</span>
                <span className="me-3">" {course.language}</span>
                <span className="me-3">" {course.lectures} lectures</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-5">
        <div className="row">
          {/* Main Content */}
          <div className="col-lg-8">
            {/* Navigation Tabs */}
            <ul className="nav nav-tabs mb-4">
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === 'overview' ? 'active' : ''}`}
                  onClick={() => setActiveTab('overview')}
                >
                  Overview
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === 'curriculum' ? 'active' : ''}`}
                  onClick={() => setActiveTab('curriculum')}
                >
                  Curriculum
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === 'instructor' ? 'active' : ''}`}
                  onClick={() => setActiveTab('instructor')}
                >
                  Instructor
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === 'reviews' ? 'active' : ''}`}
                  onClick={() => setActiveTab('reviews')}
                >
                  Reviews
                </button>
              </li>
            </ul>

            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div>
                <div className="card border-0 shadow-sm mb-4">
                  <div className="card-body p-4">
                    <h3 className="fw-bold mb-3">About This Course</h3>
                    <p className="text-muted">{course.description}</p>
                  </div>
                </div>

                <div className="card border-0 shadow-sm mb-4">
                  <div className="card-body p-4">
                    <h3 className="fw-bold mb-4">What You'll Learn</h3>
                    <div className="row g-3">
                      {course.whatYouWillLearn.map((item, index) => (
                        <div key={index} className="col-md-6">
                          <div className="d-flex align-items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#6366f1" className="bi bi-check-circle-fill me-2 flex-shrink-0 mt-1" viewBox="0 0 16 16">
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                            </svg>
                            <span>{item}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4">
                    <h3 className="fw-bold mb-4">Requirements</h3>
                    <ul className="text-muted">
                      {course.requirements.map((req, index) => (
                        <li key={index} className="mb-2">{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Curriculum Tab */}
            {activeTab === 'curriculum' && (
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="fw-bold mb-4">Course Curriculum</h3>
                  <p className="text-muted mb-4">
                    {course.lectures} lectures " {course.duration} total length
                  </p>

                  <div className="accordion" id="curriculumAccordion">
                    {course.curriculum.map((section, sectionIndex) => (
                      <div key={sectionIndex} className="accordion-item border mb-2">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#section${sectionIndex}`}
                            aria-expanded="false"
                          >
                            <div className="d-flex justify-content-between w-100 pe-3">
                              <strong>{section.section}</strong>
                              <span className="text-muted small">
                                {section.lectures} lectures " {section.duration}
                              </span>
                            </div>
                          </button>
                        </h2>
                        <div
                          id={`section${sectionIndex}`}
                          className="accordion-collapse collapse"
                          data-bs-parent="#curriculumAccordion"
                        >
                          <div className="accordion-body p-0">
                            <ul className="list-group list-group-flush">
                              {section.lessons.map((lesson, lessonIndex) => (
                                <li key={lessonIndex} className="list-group-item d-flex justify-content-between align-items-center">
                                  <div className="d-flex align-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-circle me-2" viewBox="0 0 16 16">
                                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                      <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
                                    </svg>
                                    <span>{lesson.title}</span>
                                    {lesson.preview && (
                                      <span className="badge bg-primary ms-2">Preview</span>
                                    )}
                                  </div>
                                  <span className="text-muted small">{lesson.duration}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Instructor Tab */}
            {activeTab === 'instructor' && (
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="fw-bold mb-4">Your Instructor</h3>
                  <div className="d-flex align-items-start mb-4">
                    <img
                      src={course.instructor.image}
                      alt={course.instructor.name}
                      className="rounded-circle me-4"
                      style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                    />
                    <div>
                      <h4 className="fw-bold mb-1">{course.instructor.name}</h4>
                      <p className="text-muted mb-3">{course.instructor.title}</p>
                      <div className="d-flex flex-wrap gap-4 mb-3">
                        <div className="d-flex align-items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill text-warning me-2" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                          </svg>
                          <span>{course.instructor.rating} Instructor Rating</span>
                        </div>
                        <div className="d-flex align-items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people me-2" viewBox="0 0 16 16">
                            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
                          </svg>
                          <span>{course.instructor.students.toLocaleString()} Students</span>
                        </div>
                        <div className="d-flex align-items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-btn me-2" viewBox="0 0 16 16">
                            <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
                          </svg>
                          <span>{course.instructor.courses} Courses</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted">{course.instructor.bio}</p>
                </div>
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === 'reviews' && (
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="fw-bold mb-4">Student Reviews</h3>
                  <div className="d-flex align-items-center mb-4 pb-4 border-bottom">
                    <div className="text-center me-5">
                      <h1 className="display-4 fw-bold mb-0">{course.rating}</h1>
                      <div className="text-warning mb-2"></div>
                      <p className="text-muted mb-0">{course.reviews.toLocaleString()} reviews</p>
                    </div>
                  </div>

                  {course.reviews.map((review) => (
                    <div key={review.id} className="mb-4 pb-4 border-bottom">
                      <div className="d-flex align-items-start">
                        <img
                          src={review.userImage}
                          alt={review.userName}
                          className="rounded-circle me-3"
                          style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                        />
                        <div className="flex-grow-1">
                          <div className="d-flex justify-content-between align-items-start mb-2">
                            <div>
                              <h6 className="fw-bold mb-0">{review.userName}</h6>
                              <small className="text-muted">{review.date}</small>
                            </div>
                            <div className="text-warning">
                              {''.repeat(review.rating)}{''.repeat(5 - review.rating)}
                            </div>
                          </div>
                          <p className="text-muted mb-0">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-lg sticky-top" style={{ top: '20px' }}>
              <img
                src={course.image}
                className="card-img-top"
                alt={course.title}
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body p-4">
                <div className="mb-4">
                  <div className="d-flex align-items-center mb-2">
                    <h2 className="fw-bold mb-0 me-2" style={{ color: '#6366f1' }}>
                      ${course.price}
                    </h2>
                    <span className="text-muted text-decoration-line-through">
                      ${course.originalPrice}
                    </span>
                    <span className="badge bg-success ms-2">
                      {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}% OFF
                    </span>
                  </div>
                  <small className="text-danger">=% Limited time offer!</small>
                </div>

                <div className="d-grid gap-2 mb-4">
                  <button className="btn btn-primary btn-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-plus me-2" viewBox="0 0 16 16">
                      <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
                      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                    </svg>
                    Add to Cart
                  </button>
                  <button className="btn btn-outline-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart me-2" viewBox="0 0 16 16">
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                    </svg>
                    Add to Wishlist
                  </button>
                </div>

                <div className="mb-3">
                  <h6 className="fw-bold mb-3">This course includes:</h6>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-circle me-2" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
                      </svg>
                      {course.duration} on-demand video
                    </li>
                    <li className="mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-text me-2" viewBox="0 0 16 16">
                        <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
                        <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
                      </svg>
                      Downloadable resources
                    </li>
                    <li className="mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-infinity me-2" viewBox="0 0 16 16">
                        <path d="M5.68 5.792 7.345 7.75 5.681 9.708a2.75 2.75 0 1 1 0-3.916ZM8 6.978 6.416 5.113l-.014-.015a3.75 3.75 0 1 0 0 5.304l.014-.015L8 8.522l1.584 1.865.014.015a3.75 3.75 0 1 0 0-5.304l-.014.015zm.656.772 1.663-1.958a2.75 2.75 0 1 1 0 3.916z"/>
                      </svg>
                      Full lifetime access
                    </li>
                    <li className="mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-phone me-2" viewBox="0 0 16 16">
                        <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                        <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                      </svg>
                      Access on mobile and TV
                    </li>
                    <li className="mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-award me-2" viewBox="0 0 16 16">
                        <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z"/>
                        <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
                      </svg>
                      Certificate of completion
                    </li>
                  </ul>
                </div>

                <div className="text-center pt-3 border-top">
                  <button className="btn btn-link text-decoration-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-share me-2" viewBox="0 0 16 16">
                      <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/>
                    </svg>
                    Share this course
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
