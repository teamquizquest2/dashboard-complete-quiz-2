import React from "react";
import "./Services.css";

function Services() {
  return (
    <div className="services-wrapper">
      <div className="services-overlay"></div>

      <div className="services-content">
        <h1 className="services-title">
          Our <span>Services</span>
        </h1>
        <p className="services-subtitle">
          We make learning smarter, faster, and more fun with our interactive tools.
        </p>

        <div className="services-grid">
          <div className="service-card">
            <h2>🧩 Interactive Quizzes</h2>
            <p>
              Engage yourself with exciting quizzes designed to test and improve your knowledge.
            </p>
          </div>

          <div className="service-card">
            <h2>📊 Score Analytics</h2>
            <p>
              Track your performance with detailed analytics and score insights.
            </p>
          </div>

          <div className="service-card">
            <h2>💡 User-Friendly Interface</h2>
            <p>
              Enjoy a smooth and responsive design — simple, intuitive, and fast.
            </p>
          </div>

          <div className="service-card">
            <h2>📚 Multiple Categories</h2>
            <p>
              Explore quizzes from various domains — Science, Tech, GK, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
