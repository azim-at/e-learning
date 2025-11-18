import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function CourseList() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedLevel, setSelectedLevel] = useState('all')

  const courses = [
    {
      id: 1,
      title: 'Complete Web Development Bootcamp',
      instructor: 'John Doe',
      category: 'Development',
      level: 'Beginner',
      rating: 4.8,
      reviews: 2345,
      students: 12500,
      price: 49.99,
      originalPrice: 99.99,
      duration: '40 hours',
      lectures: 156,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
      description: 'Learn web development from scratch with HTML, CSS, JavaScript, React, Node.js and more.'
    },
    {
      id: 2,
      title: 'Python for Data Science and Machine Learning',
      instructor: 'Jane Smith',
      category: 'Data Science',
      level: 'Intermediate',
      rating: 4.9,
      reviews: 3421,
      students: 18750,
      price: 59.99,
      originalPrice: 119.99,
      duration: '55 hours',
      lectures: 201,
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=300&fit=crop',
      description: 'Master Python for data analysis, visualization, and machine learning with real-world projects.'
    },
    {
      id: 3,
      title: 'UI/UX Design Masterclass',
      instructor: 'Sarah Johnson',
      category: 'Design',
      level: 'Beginner',
      rating: 4.7,
      reviews: 1892,
      students: 9800,
      price: 44.99,
      originalPrice: 89.99,
      duration: '30 hours',
      lectures: 98,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
      description: 'Learn to create stunning user interfaces and experiences with Figma and Adobe XD.'
    },
    {
      id: 4,
      title: 'Digital Marketing Fundamentals',
      instructor: 'Mike Wilson',
      category: 'Marketing',
      level: 'Beginner',
      rating: 4.6,
      reviews: 1567,
      students: 8500,
      price: 39.99,
      originalPrice: 79.99,
      duration: '25 hours',
      lectures: 85,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      description: 'Master SEO, social media marketing, content marketing, and paid advertising strategies.'
    },
    {
      id: 5,
      title: 'Advanced React and Redux',
      instructor: 'Emily Chen',
      category: 'Development',
      level: 'Advanced',
      rating: 4.9,
      reviews: 2876,
      students: 15200,
      price: 64.99,
      originalPrice: 129.99,
      duration: '48 hours',
      lectures: 178,
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop',
      description: 'Take your React skills to the next level with advanced patterns, hooks, and state management.'
    },
    {
      id: 6,
      title: 'Graphic Design for Beginners',
      instructor: 'David Brown',
      category: 'Design',
      level: 'Beginner',
      rating: 4.5,
      reviews: 1234,
      students: 6700,
      price: 34.99,
      originalPrice: 69.99,
      duration: '22 hours',
      lectures: 72,
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop',
      description: 'Learn the fundamentals of graphic design with Adobe Photoshop and Illustrator.'
    },
    {
      id: 7,
      title: 'AWS Certified Solutions Architect',
      instructor: 'Robert Taylor',
      category: 'Cloud Computing',
      level: 'Intermediate',
      rating: 4.8,
      reviews: 2156,
      students: 11300,
      price: 69.99,
      originalPrice: 139.99,
      duration: '60 hours',
      lectures: 215,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
      description: 'Prepare for AWS certification and learn to design scalable cloud solutions.'
    },
    {
      id: 8,
      title: 'Business Analytics with Excel',
      instructor: 'Lisa Anderson',
      category: 'Business',
      level: 'Beginner',
      rating: 4.6,
      reviews: 1789,
      students: 9200,
      price: 29.99,
      originalPrice: 59.99,
      duration: '18 hours',
      lectures: 65,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      description: 'Master Excel for business analytics, data visualization, and financial modeling.'
    },
    {
      id: 9,
      title: 'Cybersecurity Fundamentals',
      instructor: 'James Martinez',
      category: 'IT & Security',
      level: 'Intermediate',
      rating: 4.7,
      reviews: 1923,
      students: 10500,
      price: 54.99,
      originalPrice: 109.99,
      duration: '35 hours',
      lectures: 125,
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop',
      description: 'Learn to protect systems and networks from cyber threats and security breaches.'
    }
  ]

  const categories = ['all', 'Development', 'Design', 'Data Science', 'Marketing', 'Business', 'Cloud Computing', 'IT & Security']
  const levels = ['all', 'Beginner', 'Intermediate', 'Advanced']

  const filteredCourses = courses.filter(course => {
    const categoryMatch = selectedCategory === 'all' || course.category === selectedCategory
    const levelMatch = selectedLevel === 'all' || course.level === selectedLevel
    return categoryMatch && levelMatch
  })

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
              <div className="input-group input-group-lg shadow-lg">
                <span className="input-group-text bg-white border-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                  </svg>
                </span>
                <input
                  type="text"
                  className="form-control border-0"
                  placeholder="Search for courses..."
                  style={{ fontSize: '1rem' }}
                />
                <button className="btn btn-primary" type="button">Search</button>
              </div>
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
                <strong>{filteredCourses.length}</strong> courses found
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {filteredCourses.map(course => (
              <div key={course.id} className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm card-hover" style={{ transition: 'all 0.3s ease' }}>
                  {/* Course Image */}
                  <div className="position-relative overflow-hidden" style={{ height: '200px' }}>
                    <img
                      src={course.image}
                      className="card-img-top w-100 h-100"
                      alt={course.title}
                      style={{ objectFit: 'cover' }}
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
                      <Link to={`/course/${course.id}`} className="text-decoration-none text-dark">
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

                    {/* Description */}
                    <p className="card-text text-muted small mb-3">
                      {course.description}
                    </p>

                    {/* Rating & Students */}
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div className="d-flex align-items-center">
                        <span className="text-warning me-1"></span>
                        <strong>{course.rating}</strong>
                        <span className="text-muted small ms-1">({course.reviews.toLocaleString()})</span>
                      </div>
                      <div className="text-muted small">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-people me-1" viewBox="0 0 16 16">
                          <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
                        </svg>
                        {course.students.toLocaleString()} students
                      </div>
                    </div>

                    {/* Course Info */}
                    <div className="d-flex align-items-center gap-3 mb-3 text-muted small">
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-clock me-1" viewBox="0 0 16 16">
                          <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                        </svg>
                        {course.duration}
                      </div>
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-play-circle me-1" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
                        </svg>
                        {course.lectures} lectures
                      </div>
                    </div>

                    {/* Price & Button */}
                    <div className="mt-auto d-flex align-items-center justify-content-between">
                      <div>
                        <h4 className="mb-0 fw-bold" style={{ color: '#6366f1' }}>
                          ${course.price}
                        </h4>
                        <small className="text-muted text-decoration-line-through">
                          ${course.originalPrice}
                        </small>
                      </div>
                      <Link
                        to={`/course/${course.id}`}
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

          {/* No Results */}
          {filteredCourses.length === 0 && (
            <div className="text-center py-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-inbox text-muted mb-3" viewBox="0 0 16 16">
                <path d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4zm-1.17-.437A1.5 1.5 0 0 1 4.98 3h6.04a1.5 1.5 0 0 1 1.17.563l3.7 4.625a.5.5 0 0 1 .106.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374z"/>
              </svg>
              <h4 className="text-muted">No courses found</h4>
              <p className="text-muted">Try adjusting your filters</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
