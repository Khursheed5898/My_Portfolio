import React, { useState } from "react";
import "./MyWork.css";

// 🎯 Practical Machine Learning & Full-Stack Projects Data
const projectsData = [
  {
    w_no: 1,
    w_name: "Customer Churn Risk Predictor & EDA",
    w_category: "Machine Learning",
    w_desc:
      "Exploratory Data Analysis (EDA) & classification ML pipeline predicting customer retention risk using Scikit-Learn models, feature scaling, and correlation heatmaps.",
    w_tech: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Seaborn", "Matplotlib"],
    w_img: "📊",
    live_link: "#",
    github_link: "https://github.com/khursheed5898/customer-churn-ml",
  },
  {
    w_no: 2,
    w_name: "Real Estate Value & Price Estimator",
    w_category: "Machine Learning",
    w_desc:
      "Supervised ML regression algorithm predicting property market prices based on square footage, location features, and historical dataset analytics.",
    w_tech: ["Python", "Scikit-Learn", "Pandas", "Linear Regression", "Matplotlib"],
    w_img: "🏡",
    live_link: "#",
    github_link: "https://github.com/khursheed5898/house-price-estimator",
  },
  {
    w_no: 3,
    w_name: "DiBot.Ai — Transparent AI Debate Partner",
    w_category: "Web Dev (MERN)",
    w_desc:
      "Full-stack AI education platform featuring transparent AI reasoning, structured debate rounds, Gemini API integration, and real-time Socket.io metrics.",
    w_tech: ["React 19", "Node.js", "Express", "Google Gemini API", "Socket.io", "MongoDB"],
    w_img: "🗣️",
    live_link: "https://dibot-ai.render.com",
    github_link: "https://github.com/khursheed5898/dibot-ai",
  },
  {
    w_no: 4,
    w_name: "Full-Stack MERN Portfolio & Avid (AI Co-Pilot)",
    w_category: "Web Dev (MERN)",
    w_desc:
      "Production 3D glassmorphic MERN portfolio with dynamic domain filtering, Express REST APIs, MongoDB contact engine, and integrated AVID AI Recruiter Modal.",
    w_tech: ["React.js", "Node.js", "Express", "MongoDB Atlas", "Groq API", "Vercel"],
    w_img: "💻",
    live_link: "https://khursheed-portfolio.vercel.app",
    github_link: "https://github.com/khursheed5898/MyPortfolio",
  },
  {
    w_no: 5,
    w_name: "Laser-Based Vertical Height Measuring Robot",
    w_category: "Embedded & Robotics",
    w_desc:
      "Non-contact hardware measurement robot prototype capable of calculating object vertical height using laser sensing and control logic programmed in Java.",
    w_tech: ["Arduino IDE", "Java", "Mechatronics", "Hardware Laser Sensors", "Robotics"],
    w_img: "🤖",
    live_link: "#",
    github_link: "https://github.com/khursheed5898/laser-height-robot",
  }
];

const categories = [
  "All",
  "Machine Learning",
  "Data Analytics",
  "Web Dev (MERN)",
  "Embedded & Robotics",
];

const getCategoryClass = (category) => {
  switch (category) {
    case "Machine Learning":
      return "card-ml";
    case "Data Analytics":
      return "card-data";
    case "Embedded & Robotics":
      return "card-robotics";
    case "Web Dev (MERN)":
      return "card-web";
    default:
      return "";
  }
};

const MyWork = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? projectsData
      : projectsData.filter((p) => p.w_category === activeTab);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.setProperty("--rotate-x", `${rotateX}deg`);
    card.style.setProperty("--rotate-y", `${rotateY}deg`);
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.setProperty("--rotate-x", "0deg");
    card.style.setProperty("--rotate-y", "0deg");
  };

  return (
    <section id="projects" className="mywork">
      <div className="mywork-title">
        <span className="mywork-badge">PORTFOLIO SHOWCASE</span>
        <h1>My Featured Projects</h1>
        <p className="mywork-subtitle">
          Practical applications engineered across Machine Learning, Data Analytics, MERN & Robotics
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="mywork-filter">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            className={`filter-btn ${activeTab === cat ? "active" : ""} ${getCategoryClass(cat)}`}
            onClick={() => setActiveTab(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 3D Projects Grid */}
      <div className="mywork-container">
        {filteredProjects.map((project) => {
          const categoryClass = getCategoryClass(project.w_category);
          return (
            <div
              key={project.w_no}
              className={`work-card ${categoryClass}`}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="work-spotlight"></div>

              <div className="work-content">
                <div className="work-img-wrapper">
                  <span className="work-icon">{project.w_img}</span>
                  <span className="work-category">{project.w_category}</span>
                </div>

                <h2 className="work-name">{project.w_name}</h2>
                <p className="work-desc">{project.w_desc}</p>

                <div className="work-tech-stack">
                  {project.w_tech.map((tech, i) => (
                    <span key={i} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="work-links">
                  <a
                    href={project.live_link}
                    className="work-btn live-btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo ↗
                  </a>
                  <a
                    href={project.github_link}
                    className="work-btn code-btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub Code 💻
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MyWork;
