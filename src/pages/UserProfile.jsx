import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState('profile')
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+1 (555) 123-4567',
    bio: 'Passionate learner and web developer enthusiast. Always eager to learn new technologies and improve my skills.',
    location: 'San Francisco, CA',
    website: 'https://johndoe.com',
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop'
  })

  // Mock purchased courses data
  const purchasedCourses = [
    {
      id: 1,
      title: 'Complete Web Development Bootcamp',
      instructor: 'John Doe',
      progress: 65,
      thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=200&fit=crop',
      enrolledDate: 'Oct 15, 2024',
      lastAccessed: '2 days ago',
      totalLectures: 156,
      completedLectures: 101
    },
    {
      id: 2,
      title: 'Python for Data Science',
      instructor: 'Jane Smith',
      progress: 100,
      thumbnail: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=300&h=200&fit=crop',
      enrolledDate: 'Sep 20, 2024',
      lastAccessed: '1 week ago',
      totalLectures: 201,
      completedLectures: 201
    },
    {
      id: 3,
      title: 'UI/UX Design Masterclass',
      instructor: 'Sarah Johnson',
      progress: 35,
      thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=200&fit=crop',
      enrolledDate: 'Nov 1, 2024',
      lastAccessed: 'Today',
      totalLectures: 98,
      completedLectures: 34
    }
  ]

  // Mock certificates data
  const certificates = [
    {
      id: 1,
      courseTitle: 'Python for Data Science',
      completedDate: 'Nov 10, 2024',
      certificateNumber: 'CERT-2024-001234',
      instructor: 'Jane Smith',
      thumbnail: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=300&h=200&fit=crop'
    },
    {
      id: 2,
      courseTitle: 'Advanced JavaScript',
      completedDate: 'Oct 5, 2024',
      certificateNumber: 'CERT-2024-001156',
      instructor: 'Mike Wilson',
      thumbnail: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=300&h=200&fit=crop'
    }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSaveProfile = (e) => {
    e.preventDefault()
    // Here you would make an API call to save the profile
    console.log('Saving profile:', profileData)
    setIsEditing(false)
  }

  const handleCancelEdit = () => {
    // Reset to original data or fetch from API
    setIsEditing(false)
  }

  return (
    <div className="min-vh-100" style={{ background: '#f8f9fa' }}>
      {/* Hero Section */}
      <section className="py-5" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="d-flex align-items-center text-white">
                <img
                  src={profileData.profileImage}
                  alt={profileData.name}
                  className="rounded-circle border border-4 border-white"
                  style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                />
                <div className="ms-4">
                  <h1 className="display-6 fw-bold mb-2">{profileData.name}</h1>
                  <p className="mb-2 opacity-75">{profileData.email}</p>
                  <div className="d-flex gap-3">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-book me-1" viewBox="0 0 16 16">
                        <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
                      </svg>
                      {purchasedCourses.length} Courses Enrolled
                    </span>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-award me-1" viewBox="0 0 16 16">
                        <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z"/>
                        <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
                      </svg>
                      {certificates.length} Certificates
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-5">
        <div className="row">
          {/* Sidebar */}
          <div className="col-lg-3 mb-4">
            <div className="card border-0 shadow-sm">
              <div className="list-group list-group-flush">
                <button
                  className={`list-group-item list-group-item-action ${activeTab === 'profile' ? 'active' : ''}`}
                  onClick={() => setActiveTab('profile')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person me-2" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                  </svg>
                  Profile Settings
                </button>
                <button
                  className={`list-group-item list-group-item-action ${activeTab === 'courses' ? 'active' : ''}`}
                  onClick={() => setActiveTab('courses')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-book me-2" viewBox="0 0 16 16">
                    <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
                  </svg>
                  My Courses
                </button>
                <button
                  className={`list-group-item list-group-item-action ${activeTab === 'certificates' ? 'active' : ''}`}
                  onClick={() => setActiveTab('certificates')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-award me-2" viewBox="0 0 16 16">
                    <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z"/>
                    <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
                  </svg>
                  Certificates
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-lg-9">
            {/* Profile Settings Tab */}
            {activeTab === 'profile' && (
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3 className="fw-bold mb-0">Profile Settings</h3>
                    {!isEditing && (
                      <button
                        className="btn btn-primary"
                        onClick={() => setIsEditing(true)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil me-2" viewBox="0 0 16 16">
                          <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                        </svg>
                        Edit Profile
                      </button>
                    )}
                  </div>

                  <form onSubmit={handleSaveProfile}>
                    {/* Profile Image */}
                    <div className="text-center mb-4">
                      <img
                        src={profileData.profileImage}
                        alt="Profile"
                        className="rounded-circle mb-3"
                        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                      />
                      {isEditing && (
                        <div>
                          <button type="button" className="btn btn-sm btn-outline-primary">
                            Change Photo
                          </button>
                        </div>
                      )}
                    </div>

                    <div className="row g-3">
                      {/* Name */}
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          value={profileData.name}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                        />
                      </div>

                      {/* Email */}
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Email Address</label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          value={profileData.email}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                        />
                      </div>

                      {/* Phone */}
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Phone Number</label>
                        <input
                          type="tel"
                          className="form-control"
                          name="phone"
                          value={profileData.phone}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                        />
                      </div>

                      {/* Location */}
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Location</label>
                        <input
                          type="text"
                          className="form-control"
                          name="location"
                          value={profileData.location}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                        />
                      </div>

                      {/* Website */}
                      <div className="col-12">
                        <label className="form-label fw-semibold">Website</label>
                        <input
                          type="url"
                          className="form-control"
                          name="website"
                          value={profileData.website}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                        />
                      </div>

                      {/* Bio */}
                      <div className="col-12">
                        <label className="form-label fw-semibold">Bio</label>
                        <textarea
                          className="form-control"
                          name="bio"
                          rows="4"
                          value={profileData.bio}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                        ></textarea>
                      </div>

                      {/* Action Buttons */}
                      {isEditing && (
                        <div className="col-12">
                          <div className="d-flex gap-2">
                            <button type="submit" className="btn btn-primary">
                              Save Changes
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary"
                              onClick={handleCancelEdit}
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* My Courses Tab */}
            {activeTab === 'courses' && (
              <div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h3 className="fw-bold mb-0">My Courses</h3>
                  <span className="text-muted">{purchasedCourses.length} courses enrolled</span>
                </div>

                <div className="row g-4">
                  {purchasedCourses.map((course) => (
                    <div key={course.id} className="col-12">
                      <div className="card border-0 shadow-sm card-hover">
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src={course.thumbnail}
                              className="img-fluid rounded-start h-100"
                              alt={course.title}
                              style={{ objectFit: 'cover', minHeight: '200px' }}
                            />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <div className="d-flex justify-content-between align-items-start mb-2">
                                <div>
                                  <h5 className="card-title fw-bold mb-1">
                                    <Link to={`/course/${course.id}`} className="text-decoration-none text-dark">
                                      {course.title}
                                    </Link>
                                  </h5>
                                  <p className="text-muted small mb-2">by {course.instructor}</p>
                                </div>
                                {course.progress === 100 && (
                                  <span className="badge bg-success">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle me-1" viewBox="0 0 16 16">
                                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                      <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                                    </svg>
                                    Completed
                                  </span>
                                )}
                              </div>

                              <div className="mb-3">
                                <div className="d-flex justify-content-between align-items-center mb-1">
                                  <small className="text-muted">
                                    {course.completedLectures} of {course.totalLectures} lectures completed
                                  </small>
                                  <small className="fw-semibold">{course.progress}%</small>
                                </div>
                                <div className="progress" style={{ height: '8px' }}>
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: `${course.progress}%`, background: '#6366f1' }}
                                    aria-valuenow={course.progress}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>

                              <div className="d-flex justify-content-between align-items-center">
                                <div className="text-muted small">
                                  <div>Enrolled: {course.enrolledDate}</div>
                                  <div>Last accessed: {course.lastAccessed}</div>
                                </div>
                                <Link to={`/course/${course.id}`} className="btn btn-primary btn-sm">
                                  Continue Learning
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {purchasedCourses.length === 0 && (
                  <div className="text-center py-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-inbox text-muted mb-3" viewBox="0 0 16 16">
                      <path d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4zm-1.17-.437A1.5 1.5 0 0 1 4.98 3h6.04a1.5 1.5 0 0 1 1.17.563l3.7 4.625a.5.5 0 0 1 .106.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374z"/>
                    </svg>
                    <h4 className="text-muted">No courses yet</h4>
                    <p className="text-muted mb-3">Start learning by enrolling in a course</p>
                    <Link to="/courses" className="btn btn-primary">
                      Browse Courses
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* Certificates Tab */}
            {activeTab === 'certificates' && (
              <div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h3 className="fw-bold mb-0">My Certificates</h3>
                  <span className="text-muted">{certificates.length} certificates earned</span>
                </div>

                <div className="row g-4">
                  {certificates.map((cert) => (
                    <div key={cert.id} className="col-md-6">
                      <div className="card border-0 shadow-sm card-hover h-100">
                        <div className="position-relative">
                          <img
                            src={cert.thumbnail}
                            className="card-img-top"
                            alt={cert.courseTitle}
                            style={{ height: '200px', objectFit: 'cover' }}
                          />
                          <div className="position-absolute top-0 start-0 m-3">
                            <span className="badge bg-success">
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-award me-1" viewBox="0 0 16 16">
                                <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z"/>
                                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
                              </svg>
                              Certified
                            </span>
                          </div>
                        </div>
                        <div className="card-body">
                          <h5 className="card-title fw-bold mb-2">{cert.courseTitle}</h5>
                          <p className="text-muted small mb-2">by {cert.instructor}</p>
                          <div className="mb-3">
                            <div className="text-muted small">
                              <div>Completed: {cert.completedDate}</div>
                              <div>Certificate #: {cert.certificateNumber}</div>
                            </div>
                          </div>
                          <div className="d-flex gap-2">
                            <button className="btn btn-primary btn-sm flex-grow-1">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download me-1" viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
                              </svg>
                              Download
                            </button>
                            <button className="btn btn-outline-secondary btn-sm">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-share" viewBox="0 0 16 16">
                                <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {certificates.length === 0 && (
                  <div className="text-center py-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-award text-muted mb-3" viewBox="0 0 16 16">
                      <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z"/>
                      <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
                    </svg>
                    <h4 className="text-muted">No certificates yet</h4>
                    <p className="text-muted mb-3">Complete courses to earn certificates</p>
                    <Link to="/courses" className="btn btn-primary">
                      Browse Courses
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
