import { createContext, useState, useEffect, useContext } from 'react'
import axios from 'axios'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Set axios default base URL
  axios.defaults.baseURL = 'http://localhost:5000/api'

  // Load user from localStorage on mount
  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem('token')

      if (token) {
        try {
          // Set token in axios header
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

          // Get user data
          const { data } = await axios.get('/auth/me')
          setUser(data)
        } catch (error) {
          console.error('Failed to load user:', error)
          localStorage.removeItem('token')
          delete axios.defaults.headers.common['Authorization']
        }
      }

      setLoading(false)
    }

    loadUser()
  }, [])

  // Register user
  const register = async (name, email, password) => {
    try {
      const { data } = await axios.post('/auth/register', {
        name,
        email,
        password
      })

      localStorage.setItem('token', data.token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`

      setUser(data)
      return { success: true }
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Registration failed'
      }
    }
  }

  // Login user
  const login = async (email, password) => {
    try {
      const { data } = await axios.post('/auth/login', {
        email,
        password
      })

      localStorage.setItem('token', data.token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`

      setUser(data)
      return { success: true, user: data }
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Login failed'
      }
    }
  }

  // Logout user
  const logout = () => {
    localStorage.removeItem('token')
    delete axios.defaults.headers.common['Authorization']
    setUser(null)
  }

  // Update profile
  const updateProfile = async (profileData) => {
    try {
      const { data } = await axios.put('/auth/profile', profileData)
      setUser(data)
      return { success: true }
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Update failed'
      }
    }
  }

  const value = {
    user,
    loading,
    register,
    login,
    logout,
    updateProfile,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin'
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export default AuthContext
