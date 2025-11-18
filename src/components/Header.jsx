import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary p-4 gradient-header">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/dashboard">E - Learning</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/dashboard">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/courses">Courses</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categories
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/dashboard">Development</Link></li>
                <li><Link className="dropdown-item" to="/dashboard">Design</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/dashboard">Business</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">About</Link>
            </li>
          </ul>
          <div className="d-flex gap-2 align-items-center">
            <Link to="/profile" className="nav-link text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
              </svg>
            </Link>
            <Link to="/login" className="btn btn-outline-light">Login</Link>
            <Link to="/signup" className="btn btn-light">Sign Up</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
