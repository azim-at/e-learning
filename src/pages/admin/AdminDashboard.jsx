import { Link } from 'react-router-dom'

export default function AdminDashboard() {
  const stats = {
    totalCourses: 45,
    totalUsers: 1250,
    activeCourses: 38,
    certificatesIssued: 487,
    revenue: '$24,500',
    newUsersThisMonth: 89
  }

  const recentActivities = [
    { id: 1, action: 'New course created', course: 'React Advanced Patterns', time: '2 hours ago', type: 'course' },
    { id: 2, action: 'Certificate issued', user: 'John Doe', time: '4 hours ago', type: 'certificate' },
    { id: 3, action: 'New user registered', user: 'Jane Smith', time: '5 hours ago', type: 'user' },
    { id: 4, action: 'Course updated', course: 'Python Basics', time: '1 day ago', type: 'course' }
  ]

  return (
    <div className="min-vh-100" style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
      {/* Modern Header */}
      <nav className="navbar navbar-expand-lg navbar-dark shadow-sm" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <div className="container-fluid px-4">
          <span className="navbar-brand fw-bold d-flex align-items-center">
            <div className="bg-white bg-opacity-25 rounded p-2 me-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-shield-check" viewBox="0 0 16 16">
                <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
                <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
              </svg>
            </div>
            <div>
              <div className="fs-5">Admin Panel</div>
              <small className="opacity-75" style={{ fontSize: '0.75rem' }}>E-Learning Platform</small>
            </div>
          </span>
          <div className="ms-auto">
            <Link to="/dashboard" className="btn btn-light">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house me-1" viewBox="0 0 16 16">
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
              </svg>
              Back to Site
            </Link>
          </div>
        </div>
      </nav>

      <div className="container-fluid px-4 py-4">
        <div className="row g-4">
          {/* Sidebar Navigation */}
          <div className="col-lg-2">
            <div className="card border-0 shadow-sm sticky-top" style={{ top: '20px' }}>
              <div className="list-group list-group-flush">
                <Link to="/admin" className="list-group-item list-group-item-action border-0 active">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-grid-fill me-2" viewBox="0 0 16 16">
                    <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z"/>
                  </svg>
                  Dashboard
                </Link>
                <Link to="/admin/courses" className="list-group-item list-group-item-action border-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-book me-2" viewBox="0 0 16 16">
                    <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
                  </svg>
                  Courses
                </Link>
                <Link to="/admin/users" className="list-group-item list-group-item-action border-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-people me-2" viewBox="0 0 16 16">
                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
                  </svg>
                  Users
                </Link>
                <Link to="/admin/certificates" className="list-group-item list-group-item-action border-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-award me-2" viewBox="0 0 16 16">
                    <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z"/>
                    <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"/>
                  </svg>
                  Certificates
                </Link>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-lg-10">
            {/* Welcome Section */}
            <div className="mb-4">
              <h2 className="fw-bold mb-1" style={{ color: '#2d3748' }}>Welcome back, Admin!</h2>
              <p className="text-muted">Here's what's happening with your platform today.</p>
            </div>

            {/* Stats Cards - Modern Design */}
            <div className="row g-4 mb-4">
              {/* Total Courses */}
              <div className="col-md-6 col-xl-4">
                <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '16px', overflow: 'hidden', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                  <div className="card-body p-4 text-white position-relative">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div>
                        <p className="mb-1 opacity-75 small">Total Courses</p>
                        <h2 className="fw-bold mb-0 display-6">{stats.totalCourses}</h2>
                      </div>
                      <div className="bg-white bg-opacity-25 rounded-3 p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-book" viewBox="0 0 16 16">
                          <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
                        </svg>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="badge bg-white bg-opacity-25 px-3 py-2">{stats.activeCourses} Active</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Total Users */}
              <div className="col-md-6 col-xl-4">
                <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '16px', overflow: 'hidden', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
                  <div className="card-body p-4 text-white">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div>
                        <p className="mb-1 opacity-75 small">Total Users</p>
                        <h2 className="fw-bold mb-0 display-6">{stats.totalUsers.toLocaleString()}</h2>
                      </div>
                      <div className="bg-white bg-opacity-25 rounded-3 p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
                          <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
                        </svg>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="badge bg-white bg-opacity-25 px-3 py-2">+{stats.newUsersThisMonth} This Month</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certificates */}
              <div className="col-md-6 col-xl-4">
                <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '16px', overflow: 'hidden', background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
                  <div className="card-body p-4 text-white">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div>
                        <p className="mb-1 opacity-75 small">Certificates Issued</p>
                        <h2 className="fw-bold mb-0 display-6">{stats.certificatesIssued}</h2>
                      </div>
                      <div className="bg-white bg-opacity-25 rounded-3 p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-award" viewBox="0 0 16 16">
                          <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z"/>
                          <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="badge bg-white bg-opacity-25 px-3 py-2">All Time</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row g-4">
              {/* Quick Actions */}
              <div className="col-lg-8">
                <div className="card border-0 shadow-sm" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-4">
                    <h5 className="fw-bold mb-4" style={{ color: '#2d3748' }}>Quick Actions</h5>
                    <div className="row g-3">
                      <div className="col-sm-6">
                        <Link to="/admin/courses" className="btn btn-lg w-100 text-start border-0 shadow-sm" style={{ background: '#f7fafc', borderRadius: '12px', padding: '1.5rem' }}>
                          <div className="d-flex align-items-center">
                            <div className="rounded-3 p-3 me-3" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                              </svg>
                            </div>
                            <div>
                              <div className="fw-semibold" style={{ color: '#2d3748' }}>Create Course</div>
                              <small className="text-muted">Add new course</small>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6">
                        <Link to="/admin/users" className="btn btn-lg w-100 text-start border-0 shadow-sm" style={{ background: '#f7fafc', borderRadius: '12px', padding: '1.5rem' }}>
                          <div className="d-flex align-items-center">
                            <div className="rounded-3 p-3 me-3" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-people" viewBox="0 0 16 16">
                                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
                              </svg>
                            </div>
                            <div>
                              <div className="fw-semibold" style={{ color: '#2d3748' }}>Manage Users</div>
                              <small className="text-muted">View all users</small>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6">
                        <Link to="/admin/certificates" className="btn btn-lg w-100 text-start border-0 shadow-sm" style={{ background: '#f7fafc', borderRadius: '12px', padding: '1.5rem' }}>
                          <div className="d-flex align-items-center">
                            <div className="rounded-3 p-3 me-3" style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-award" viewBox="0 0 16 16">
                                <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z"/>
                                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"/>
                              </svg>
                            </div>
                            <div>
                              <div className="fw-semibold" style={{ color: '#2d3748' }}>Issue Certificate</div>
                              <small className="text-muted">Generate certificate</small>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6">
                        <Link to="/admin/courses" className="btn btn-lg w-100 text-start border-0 shadow-sm" style={{ background: '#f7fafc', borderRadius: '12px', padding: '1.5rem' }}>
                          <div className="d-flex align-items-center">
                            <div className="rounded-3 p-3 me-3" style={{ background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-gear" viewBox="0 0 16 16">
                                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
                                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
                              </svg>
                            </div>
                            <div>
                              <div className="fw-semibold" style={{ color: '#2d3748' }}>Manage Courses</div>
                              <small className="text-muted">Edit courses</small>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="col-lg-4">
                <div className="card border-0 shadow-sm" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-4">
                    <h5 className="fw-bold mb-4" style={{ color: '#2d3748' }}>Recent Activity</h5>
                    <div className="activity-list">
                      {recentActivities.map((activity) => (
                        <div key={activity.id} className="d-flex mb-3 pb-3 border-bottom">
                          <div className="flex-shrink-0 me-3">
                            <div className="rounded-circle p-2" style={{
                              background: activity.type === 'course' ? '#e8eaf6' : activity.type === 'user' ? '#fce4ec' : '#e1f5fe',
                              width: '40px',
                              height: '40px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}>
                              {activity.type === 'course' && (
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#6366f1" viewBox="0 0 16 16">
                                  <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
                                </svg>
                              )}
                              {activity.type === 'user' && (
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ec407a" viewBox="0 0 16 16">
                                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                  <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                                </svg>
                              )}
                              {activity.type === 'certificate' && (
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0288d1" viewBox="0 0 16 16">
                                  <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z"/>
                                  <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"/>
                                </svg>
                              )}
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <div className="small fw-semibold" style={{ color: '#2d3748' }}>{activity.action}</div>
                            <div className="small text-muted">{activity.course || activity.user}</div>
                            <div className="small text-muted">{activity.time}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
