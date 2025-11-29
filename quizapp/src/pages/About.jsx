import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-wrapper">
      <div className="about-overlay"></div>

      <div className="about-content">
        <h1 className="about-title">
          About <span>QuizMaster</span> 💡
        </h1>

        <p className="about-subtitle">
          Welcome to <strong>QuizMaster</strong> — your ultimate destination for smart,
          interactive, and fun learning. We believe knowledge should be exciting and
          accessible for everyone, from students to professionals.
        </p>

        <div className="about-grid">
          <div className="about-card">
            <h2>🎯 Our Mission</h2>
            <p>
              To make learning enjoyable through interactive quizzes that challenge
              your mind while keeping you motivated and confident.
            </p>
          </div>

          <div className="about-card">
            <h2>🚀 Our Vision</h2>
            <p>
              To become the leading platform for online knowledge testing — bridging
              education and fun with technology.
            </p>
          </div>

          <div className="about-card">
            <h2>🤝 Our Commitment</h2>
            <p>
              We are dedicated to providing a smooth, user-friendly experience where
              every learner feels empowered to grow and succeed.
            </p>
          </div>
        </div>

        <button className="about-btn">Join the Journey</button>
      </div>
    </div>
  );
}

export default About;
