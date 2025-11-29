import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title">Contact Us</h1>
        <p className="page-subtitle">
          We'd love to hear from you! Reach out to us through the details below.
        </p>

        <div className="contact-info">
          <p><strong>Email:</strong> support@quizapp.com</p>
          <p><strong>Phone:</strong> +123 456 789</p>
          <p><strong>Address:</strong> 123 Learning Street, Knowledge City</p>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
