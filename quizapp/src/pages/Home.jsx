import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
      {/* 🎥 HERO SECTION */}
      <div className="hero-wrapper">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/8199326-hd_1920_1080_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span>QuizApp</span> 🎉
          </h1>
          <p className="hero-sub">
            Your interactive quiz platform — start testing your knowledge now.
          </p>
          <button className="btn-start">Test Yourself</button>
        </div>
      </div>

      {/* 🌟 FEATURES SECTION */}
      <section className="features-section">
        <h2 className="features-heading">
          Why Choose <span>QuizApp?</span>
        </h2>
        <p className="features-subtitle">
          Empower your learning journey with AI-based quizzes, personalized feedback,
          and smart tools — all in one platform.
        </p>

        <div className="features-grid">
          <div className="feature-card">
            <i className="fas fa-user-plus feature-icon"></i>
            <h3>Quick Registration</h3>
            <p>Create your account in seconds and start exploring interactive quizzes instantly.</p>
          </div>

          <div className="feature-card">
            <i className="fas fa-tachometer-alt feature-icon"></i>
            <h3>Smart Dashboard</h3>
            <p>Track your progress, attempt new quizzes, and view performance insights in one place.</p>
          </div>

          <div className="feature-card">
            <i className="fas fa-comments feature-icon"></i>
            <h3>Instant Chat</h3>
            <p>Interact with mentors and classmates for real-time learning support and discussion.</p>
          </div>

          <div className="feature-card">
            <i className="fas fa-star feature-icon"></i>
            <h3>Live Feedback</h3>
            <p>Receive instant ratings and feedback to improve your learning performance.</p>
          </div>

          <div className="feature-card">
            <i className="fas fa-robot feature-icon"></i>
            <h3>AI ChatBot</h3>
            <p>Your personal assistant for guidance, study tips, and subject-based queries.</p>
          </div>

          <div className="feature-card">
            <i className="fas fa-smile feature-icon"></i>
            <h3>Fun Quizzes</h3>
            <p>Enjoy personality and topic-based quizzes designed to make learning fun and exciting!</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
