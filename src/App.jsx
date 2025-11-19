import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import CourseList from './pages/CourseList'
import CourseDetail from './pages/CourseDetail'
import UserProfile from './pages/UserProfile'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminCourses from './pages/admin/AdminCourses'
import AdminUsers from './pages/admin/AdminUsers'
import AdminCertificates from './pages/admin/AdminCertificates'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Auth Routes - Without Header/Footer */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Dashboard Routes - With Header/Footer - Public */}
          <Route
            path="/dashboard"
            element={
              <>
                <Header />
                <Dashboard />
                <Footer />
              </>
            }
          />

          {/* Courses Route - With Header/Footer */}
          <Route
            path="/courses"
            element={
              <>
                <Header />
                <CourseList />
                <Footer />
              </>
            }
          />

          {/* Course Detail Route - With Header/Footer */}
          <Route
            path="/course/:id"
            element={
              <>
                <Header />
                <CourseDetail />
                <Footer />
              </>
            }
          />

          {/* User Profile Route - With Header/Footer - Protected */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Header />
                <UserProfile />
                <Footer />
              </ProtectedRoute>
            }
          />

          {/* Admin Routes - Without Header/Footer - Admin Only */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute adminOnly>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/courses"
            element={
              <ProtectedRoute adminOnly>
                <AdminCourses />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/users"
            element={
              <ProtectedRoute adminOnly>
                <AdminUsers />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/certificates"
            element={
              <ProtectedRoute adminOnly>
                <AdminCertificates />
              </ProtectedRoute>
            }
          />

          {/* Default Route - Redirect to Dashboard */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          {/* Catch all - Redirect to Dashboard */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
