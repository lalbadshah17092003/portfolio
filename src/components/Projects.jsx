import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Projects.css";

const projects = [
   {
    id: "it-assets-form",
    title: "IT Forms Management System",
    tech: "MERN Stack",
    desc: "Book and manage meeting rooms online effortlessly with this MERN-powered system.",
  },
  {
    id: "room-booking-management",
    title: "Meeting Room Booking System",
    tech: "MERN Stack",
    desc: "Book and manage meeting rooms online effortlessly with this MERN-powered system. ",
  },
  {
    id: "gatepass-management",
    title: "Gatepass Management System",
    tech: "React + MUI",
    desc: "Smart access control and approval system for organizations.",
  },
  {
    id: "spotify-clone",
    title: "Spotify Clone",
    tech: "HTML + CSS + React",
    desc: "Music player app replicating Spotify’s sleek UI & playlists.",
  },
  
];

export default function Projects() {
  const navigate = useNavigate();

  return (
    <motion.section
      id="projects"
      className="projects modern-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="section-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        🚀 My Projects
      </motion.h2>

      <div className="project-grid">
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            className="project-card glass-card"
            whileHover={{
              scale: 1.05,
              rotateY: 5,
              rotateX: 5,
            }}
            transition={{ type: "spring", stiffness: 150 }}
            onClick={() => navigate(`/project/${p.id}`)}
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(30,30,30,0.7), rgba(0,0,0,0.4)), url(/assets/bg${i + 1}.jpg)`,
            }}
          >
            <div className="project-content">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <span className="tech-tag">{p.tech}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
