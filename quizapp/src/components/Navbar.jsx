import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";


import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Left Side - Logo */}
      <div className="navbar-logo">
        <Link to="/" className="logo">
  <FontAwesomeIcon icon={faBookOpen} className="logo-icon" /> QuizApp
</Link>

      </div>

      {/* Center - Links */}
      <ul className="navbar-links">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" className={({ isActive }) => (isActive ? "active" : "")}>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
            Contact
          </NavLink>
        </li>


        <li>
  {/* <Link to="/dashboard" className="nav-link">Dashboard</Link> */}
</li>

      </ul>

      {/* Right Side - Buttons */}
      <div className="navbar-buttons">
        
        <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>
        
        <Link to="/signup">
        <button className="signup-btn">Sign Up</button>
      </Link>
      </div>
    </nav>
  );
}

export default Navbar;
