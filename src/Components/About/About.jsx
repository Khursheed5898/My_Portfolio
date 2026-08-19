import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      {/* Section Header */}
      <div className="about-header">
        <span className="about-badge">GET TO KNOW ME</span>
        <h1 className="about-title">About Me</h1>
      </div>

      {/* Main Grid: Bio + 4-Domain Skills */}
      <div className="about-grid">
        {/* Bio Card */}
        <div className="about-bio-card">
          <p className="bio-lead">
            I am a CS (AI) Engineer & Multi-Disciplinary Developer actively operating across <strong style={{ color: "#fff" }}>Machine Learning, Data Analytics, Robotics, and Web Dev</strong>.
          </p>
          <p className="bio-text">
            My engineering journey bridges high-level full-stack MERN software architectures with intelligent AI models, complex data analytics pipelines, and low-level embedded hardware systems. I focus on writing clean, modular code, optimizing algorithmic efficiency, and engineering scalable real-world systems.
          </p>
          <div className="bio-tags">
            <span className="bio-tag tag-ml">🤖 ML & Computer Vision</span>
            <span className="bio-tag tag-data">📊 Data Analytics & SQL</span>
            <span className="bio-tag tag-robotics">🔌 Embedded & Robotics</span>
            <span className="bio-tag tag-web">💻 Full-Stack MERN</span>
          </div>
        </div>

        {/* 4-Domain Skill Progress Bars */}
        <div className="about-skills">
          <div className="skill-box skill-ml">
            <div className="skill-info">
              <span>Machine Learning & AI (Python, PyTorch, OpenCV)</span>
              <span className="skill-percent">95%</span>
            </div>
            <div className="skill-bar"><div className="skill-fill" style={{ width: "95%" }}></div></div>
          </div>

          <div className="skill-box skill-data">
            <div className="skill-info">
              <span>Data Analytics & BI (SQL, Pandas, PowerBI)</span>
              <span className="skill-percent">90%</span>
            </div>
            <div className="skill-bar"><div className="skill-fill" style={{ width: "90%" }}></div></div>
          </div>

          <div className="skill-box skill-robotics">
            <div className="skill-info">
              <span>Embedded Systems & Robotics (C/C++, ESP32, IoT)</span>
              <span className="skill-percent">86%</span>
            </div>
            <div className="skill-bar"><div className="skill-fill" style={{ width: "86%" }}></div></div>
          </div>

          <div className="skill-box skill-web">
            <div className="skill-info">
              <span>Full-Stack Web Dev (MERN, React, Node)</span>
              <span className="skill-percent">82%</span>
            </div>
            <div className="skill-bar"><div className="skill-fill" style={{ width: "82%" }}></div></div>
          </div>
        </div>
      </div>

      {/* 3D Glass Stats Grid */}
      <div className="about-stats-grid">
        <div className="stat-card">
          <h2>4+</h2>
          <p>Technical Domains</p>
        </div>
        <div className="stat-card">
          <h2>15+</h2>
          <p>Projects Built</p>
        </div>
        <div className="stat-card">
          <h2>2040</h2>
          <p>Vision Roadmap</p>
        </div>
      </div>
    </section>
  );
};

export default About;
