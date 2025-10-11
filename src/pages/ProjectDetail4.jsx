import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./ProjectDetail4.css"
const features = [
  {
    title: "User Interface",
    desc: "Clean and responsive UI inspired by Spotify, including playlists, albums, and track listings."
  },
  {
    title: "Audio Player",
    desc: "Custom React audio player with play, pause, skip, and volume controls."
  },
  {
    title: "Search & Filter",
    desc: "Search tracks, albums, and artists easily with instant filter results."
  },
  {
    title: "Playlist Management",
    desc: "Create, edit, and delete playlists. Add/remove songs dynamically."
  },
  {
    title: "Responsive Design",
    desc: "Fully responsive design using HTML, CSS, and React for desktop and mobile."
  },
  {
    title: "Routing & Navigation",
    desc: "React Router used for smooth navigation between pages like Home, Playlist, and Now Playing."
  },
];

const ProjectDetailSpotify = () => {
  return (
    <motion.section
      className="project-detail-page"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Hero Section */}
      <div className="project-hero">
        <h1>Spotify Clone</h1>
        <p className="short-desc">
          A frontend web application that replicates key features of Spotify, built using HTML, CSS, and React for a responsive and interactive music experience.
        </p>
        <div className="tech-badges">
          {["React", "HTML", "CSS", "JavaScript"].map((tech) => (
            <span key={tech} className="badge">{tech}</span>
          ))}
        </div>
      </div>

      {/* Key Features Grid */}
      <div className="project-features">
        <h2>Key Features</h2>
        <div className="features-grid">
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              className="feature-card"
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px rgba(0,255,163,0.2)"
              }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Challenges & Learnings */}
      <div className="project-challenges">
        <h2>Challenges & Learnings</h2>
        <p>
          Replicating Spotify’s smooth interface and interactive audio features required careful state management in React.
          Learned advanced React hooks for player state, handling dynamic playlists, and ensuring responsiveness across devices.
        </p>
      </div>

      {/* Links */}
      <div className="project-links">
        <Link to="/projects" className="btn-outline">← Back to Projects</Link>
      </div>
    </motion.section>
  );
};

export default ProjectDetailSpotify;
