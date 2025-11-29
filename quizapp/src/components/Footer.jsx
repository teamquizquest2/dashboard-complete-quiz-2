import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Interactive message */}
        <div className="footer-section">
          <h3>Thank You for Visiting!</h3>
          <p>We hope you enjoy exploring our site. Stay connected and visit again soon!</p>
        </div>

        {/* Navigation links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact details */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +92 300 1234567</p>
          <p>Location: Lahore, Pakistan</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Your Website Name | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;