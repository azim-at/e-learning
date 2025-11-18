import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
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
      <Routes>
        {/* Auth Routes - Without Header/Footer */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Dashboard Routes - With Header/Footer */}
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

        {/* User Profile Route - With Header/Footer */}
        <Route
          path="/profile"
          element={
            <>
              <Header />
              <UserProfile />
              <Footer />
            </>
          }
        />

        {/* Admin Routes - Without Header/Footer */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/courses" element={<AdminCourses />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/certificates" element={<AdminCertificates />} />

        {/* Default Route - Redirect to Dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        {/* Catch all - Redirect to Dashboard */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  )
}

export default App
