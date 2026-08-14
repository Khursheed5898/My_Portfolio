import express from "express";
import Project from "../models/Project.js";

const router = express.Router();

const initialProjects = [
  {
    title: "Deep Vision Autonomous Rover",
    category: "Robotics",
    desc: "Computer-vision powered obstacle detection & spatial mapping using ROS2, YOLOv8 and LiDAR integration.",
    tech: ["ROS2", "YOLOv8", "Python", "C++", "OpenCV"],
    github: "https://github.com",
    live: "https://example.com",
    stars: 124,
    badge: "ROBOTICS MVP",
  },
  {
    title: "Jarvis AI Voice Desktop Agent",
    category: "ML / AI",
    desc: "Offline LLM-powered virtual assistant with custom speech synthesis, system automation, and NLP.",
    tech: ["Python", "PyTorch", "Whisper AI", "LLaMA-3", "FastAPI"],
    github: "https://github.com",
    live: "https://example.com",
    stars: 310,
    badge: "AI AUTOMATION",
  },
  {
    title: "Interactive Data Science Lab",
    category: "Data Science",
    desc: "End-to-end analytical pipeline featuring interactive visualization dashboards and automated ML model training.",
    tech: ["Pandas", "Scikit-Learn", "Streamlit", "Plotly", "Docker"],
    github: "https://github.com",
    live: "https://example.com",
    stars: 98,
    badge: "DATA PIPELINE",
  },
  {
    title: "Real-Time Collaborative Code Editor",
    category: "MERN Stack",
    desc: "Full-stack MERN platform with WebSockets for instant multi-user code editing, execution sandbox, and video rooms.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Socket.io"],
    github: "https://github.com",
    live: "https://example.com",
    stars: 245,
    badge: "FULL-STACK MERN",
  },
];

// @route   GET /api/projects
// @desc    Get all portfolio projects (or fallback array if DB empty)
router.get("/", async (req, res) => {
  try {
    let projects = await Project.find().sort({ createdAt: -1 });
    if (!projects || projects.length === 0) {
      projects = initialProjects;
    }
    res.status(200).json({ success: true, count: projects.length, data: projects });
  } catch (error) {
    res.status(200).json({ success: true, count: initialProjects.length, data: initialProjects });
  }
});

// @route   POST /api/projects/seed
// @desc    Seed initial projects into MongoDB
router.post("/seed", async (req, res) => {
  try {
    await Project.deleteMany({});
    const created = await Project.insertMany(initialProjects);
    res.status(201).json({ success: true, message: "Database seeded with projects!", data: created });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
