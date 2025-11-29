import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user")) || {
    name: "Sehrish",
    email: "example@gmail.com",
  };

  const stats = {
    quizzesTaken: 3,
    avgScore: "78%",
    timeSpent: "1h 20m",
  };

  const subjects = {
    Physics: [
      {
        question: "What is the speed of light?",
        options: ["3×10⁸ m/s", "5×10⁶ m/s", "2×10⁷ m/s", "1×10⁴ m/s"],
        correct: "3×10⁸ m/s",
        explanation:
          "Light travels in vacuum at 3×10⁸ m/s — a fundamental constant.",
      },
      {
        question: "Which quantity is a vector?",
        options: ["Speed", "Distance", "Displacement", "Time"],
        correct: "Displacement",
        explanation: "Displacement has magnitude + direction.",
      },
      {
        question: "Unit of force is:",
        options: ["Joule", "Newton", "Watt", "Pascal"],
        correct: "Newton",
        explanation: "Force is measured in Newtons (F = ma).",
      },
      {
        question: "Gravity on Earth is:",
        options: ["8.8 m/s²", "9.8 m/s²", "10.8 m/s²", "6.2 m/s²"],
        correct: "9.8 m/s²",
        explanation:
          "Standard gravitational acceleration on Earth is 9.8 m/s².",
      },
      {
        question: "Heat travels fastest in:",
        options: ["Solid", "Liquid", "Gas", "Vacuum"],
        correct: "Solid",
        explanation: "Molecules in solids are closest → conduction is fastest.",
      },
    ],
  };

  // ================= STATES =================
  const [showSubjects, setShowSubjects] = useState(false);
  const [screen, setScreen] = useState("home");
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [qIndex, setQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [locked, setLocked] = useState(false);
  const [score, setScore] = useState(0);
  const [answersLog, setAnswersLog] = useState([]);
  const [timer, setTimer] = useState(0);
  const [questionStartTime, setQuestionStartTime] = useState(0);

  // ================= TIMER =================
  useEffect(() => {
    let interval;
    if (screen === "quiz") {
      interval = setInterval(() => setTimer((t) => t + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [screen]);

  // Reset timer for each question
  useEffect(() => {
    if (screen === "quiz") setQuestionStartTime(timer);
  }, [qIndex]);

  const startQuiz = (sub) => {
    setSelectedSubject(sub);
    setScreen("quiz");
    setQIndex(0);
    setScore(0);
    setSelectedOption(null);
    setLocked(false);
    setAnswersLog([]);
    setTimer(0);
    setQuestionStartTime(0);
  };

  const chooseOption = (i) => {
    if (locked) return;

    setSelectedOption(i);
    setLocked(true);

    const currentQ = subjects[selectedSubject][qIndex];
    const correctIndex = currentQ.options.indexOf(currentQ.correct);
    const timeTaken = timer - questionStartTime;

    if (i === correctIndex) setScore((s) => s + 1);

    setAnswersLog((prev) => [
      ...prev,
      {
        question: currentQ.question,
        options: currentQ.options,
        correct: currentQ.correct,
        chosen: currentQ.options[i],
        isCorrect: i === correctIndex,
        timeTaken,
        explanation: currentQ.explanation,
      },
    ]);
  };

  const nextQuestion = () => {
    if (qIndex + 1 === subjects[selectedSubject].length) {
      setScreen("result");
    } else {
      setQIndex((q) => q + 1);
      setSelectedOption(null);
      setLocked(false);
    }
  };

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60)
      .toString()
      .padStart(2, "0");
    const s = (sec % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  // const handleLogout = () => {
  //   localStorage.removeItem("user");
  //   navigate("/");
  // };

  // ✅ Logout function
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };


  const resetQuiz = () => {
    setScreen("home");
    setShowSubjects(false);
    setSelectedSubject(null);
    setSelectedOption(null);
    setLocked(false);
    setTimer(0);
  };

  const progressPercent = selectedSubject
    ? Math.floor((qIndex / subjects[selectedSubject].length) * 100)
    : 0;

  return (
    <div className="dashboard">
      {/* ===== SIDEBAR ===== */}
      <aside className="sidebar static-sidebar">
        <div className="sidebar-top">
          <Link to="/" className="sidebar-logo">
            <FontAwesomeIcon icon={faBookOpen} className="logo-icon" />
            QuizApp
          </Link>
        </div>

        <ul className="sidebar-links">
          <h3>Dashboard</h3>

          {/* <li className={screen === "home" ? "active" : ""}>Home</li> */}
          <li>Quizzes</li>
          <li>Quiz History</li>
          <li>Generate New Quiz</li>
          <li>Fun Quizzes</li>
          {/* <li>AI Tutor</li> */}
        </ul>

        <div className="sidebar-userBox">
          {/* <h3>User Info</h3> */}
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <button onClick={handleLogout} className="logoutBtn">
            Logout
          </button>
        </div>
      </aside>

      {/* ===== MAIN CONTENT ===== */}
      <main className="content">
        {/* TOP SECTION */}
        <div className="topContent">
          <div className="welcomeBox">
            <h1>Welcome Back, {user.name}!</h1>
            <p> Start Your Learning ✨</p>
          </div>

          {/* STATS - hide when quiz starts */}
          {screen === "home" && !showSubjects && (
            <div className="statsRow">
              <div className="statsGrid">
                <div className="card">
                  <h4>Quizzes Taken</h4>
                  <p className="value">{stats.quizzesTaken}</p>
                </div>
                <div className="card">
                  <h4>Average Score</h4>
                  <p className="value">{stats.avgScore}</p>
                </div>
                <div className="card">
                  <h4>Time Spent</h4>
                  <p className="value">{stats.timeSpent}</p>
                </div>
              </div>
            </div>
          )}

          {/* Start New Quiz / Subject Selection */}
          {!showSubjects ? (
            <button className="startBtn" onClick={() => setShowSubjects(true)}>
              Start New Quiz
            </button>
          ) : (
            screen === "home" && (
              <div className="subjects">
                <h3>Select a Subject</h3>
                {Object.keys(subjects).map((sub) => (
                  <button key={sub} onClick={() => startQuiz(sub)}>
                    {sub}
                  </button>
                ))}
              </div>
            )
          )}
        </div>

        {/* QUIZ SECTION OVERLAY */}
        {(screen === "quiz" || screen === "result") && (
          <div className="quizOverlay">
            {screen === "quiz" && (
              <div className="quizHeader">
                <button
                  className="cancelBtn"
                  onClick={() => setScreen("result")}
                >
                  Cancel Quiz
                </button>
              </div>
            )}

            {/* Sticky Timer */}
            {screen === "quiz" && (
              <div className="stickyTimer">{formatTime(timer)}</div>
            )}

            {screen === "quiz" && (
              <div className="quizCard">
                <h2>{selectedSubject} Quiz</h2>
                <p>
                  Question {qIndex + 1} / {subjects[selectedSubject].length}
                </p>

                <div className="progressBarContainer">
                  <div
                    className="progressBar"
                    style={{ width: `${progressPercent}%` }}
                  ></div>
                </div>

                <div className="question">
                  {subjects[selectedSubject][qIndex].question}
                </div>

                <div className="options">
                  {subjects[selectedSubject][qIndex].options.map((op, i) => {
                    const correctIndex = subjects[selectedSubject][
                      qIndex
                    ].options.indexOf(
                      subjects[selectedSubject][qIndex].correct
                    );
                    const cls = ["optionBtn"];
                    if (locked && i === correctIndex) cls.push("correct");
                    if (locked && i === selectedOption && i !== correctIndex)
                      cls.push("wrong");
                    return (
                      <button
                        key={i}
                        className={cls.join(" ")}
                        onClick={() => chooseOption(i)}
                      >
                        {op}
                      </button>
                    );
                  })}
                </div>

                <button
                  className="nextBtn"
                  onClick={nextQuestion}
                  disabled={selectedOption === null}
                >
                  {qIndex + 1 === subjects[selectedSubject].length
                    ? "Finish"
                    : "Next"}
                </button>
              </div>
            )}

            {screen === "result" && (
              <div className="resultCard">
                <h2>Quiz Completed 🎉</h2>
                <h3 className="scoreHighlight">
                  Score: {score} / {subjects[selectedSubject].length}
                </h3>
                <p>Total Time: {formatTime(timer)}</p>

                <h3>Detailed Review</h3>
                {answersLog.map((q, i) => (
                  <div key={i} className="reviewQuestion">
                    <p>
                      <strong>Q{i + 1}:</strong> {q.question}
                    </p>
                    <p>
                      <strong>Your Answer:</strong>{" "}
                      <span style={{ color: q.isCorrect ? "green" : "red" }}>
                        {q.chosen} {q.isCorrect ? "✔️" : "❌"}
                      </span>
                    </p>
                    {!q.isCorrect && (
                      <p>
                        <strong>Correct:</strong>{" "}
                        <span style={{ color: "green" }}>{q.correct}</span>
                      </p>
                    )}
                    <p>
                      <strong>Answered in:</strong> {q.timeTaken}s
                    </p>
                    <p className="explanationBox">
                      <strong>Explanation:</strong> {q.explanation}
                    </p>
                  </div>
                ))}

                <button className="startBtn" onClick={resetQuiz}>
                  Go Home
                </button>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default Dashboard;