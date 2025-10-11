import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./ProjectDetail1.css"
const features = [
  {
    title: "Multi-Stage Approval Workflow",
    desc: "Five-level approval process — Department Head → HRA Head → IT Head → Management → IT Admin for final assignment and credential setup."
  },
  {
    title: "Annexure-1 & Annexure-2 Forms",
    desc: "Annexure-1 handles access requests like Windows ID, Internet, Email, Folder Access. Annexure-2 covers physical assets like Laptop, Desktop, or Printer."
  },
  {
    title: "Dynamic Role-Based Access",
    desc: "Users, Department Heads, and Admins see different dashboards and permissions, ensuring proper access control."
  },
  {
    title: "Email Notifications & Audit Trail",
    desc: "Every action (approve, modify, decline) triggers an automated email notification and is recorded in a detailed audit log."
  },
  {
    title: "Request Tracking Dashboard",
    desc: "Users can track status in real-time — pending approvals, completed requests, and modification notes."
  },
   {
    title: "Dynamic Request CRUD System",
    desc: "Approve, Decline, or Modify requests — easily monitor their status through all workflow stages."
  },
  {
    title: "IT Admin Credential Assignment",
    desc: "After final approval, IT Admin reviews the request and assigns system credentials or physical assets with confirmation."
  },
  {
    title: "Reports & Analytics",
    desc: "Generate summaries for requests by type, department, and status for management review."
  },
  {
    title: "Responsive & Optimized UI",
    desc: "Built with MUI and custom CSS for a modern, responsive design across all devices."
  },
  {
    title: "Secure & Scalable Backend",
    desc: "Node.js + Express.js backend connected to MongoDB for scalable, secure data handling."
  },
   {
    title: "Audit Logs",
    desc: "Track every action across approval stages with a built-in audit trail and one-click PDF report generation."
  }
];

const ProjectDetailITAssets = () => {
  return (
    <motion.section
      className="project-detail-page"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Hero Section */}
      <div className="project-hero">
        <h1>IT Assets Form Approval System</h1>
        <p className="short-desc">
          A complete MERN-based workflow automation platform for managing IT asset and access requests
          with multi-stage approvals, audit tracking, and email notifications.
        </p>

        <div className="tech-badges">
          {["React", "Node.js", "Express.js", "MongoDB", "MUI", "Nodemailer"].map((tech) => (
            <span key={tech} className="badge">{tech}</span>
          ))}
        </div>
      </div>

      {/* Key Features */}
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

      {/* Process Flow */}
      <div className="project-process">
        <h2>Approval Process Flow</h2>
        <ul>
          <li>👤 <b>User:</b> Creates Annexure-1 or Annexure-2 request form.</li>
          <li>🏢 <b>Department Head:</b> Reviews the request.</li>
          <li>👩‍💼 <b>HRA Head:</b> Validates and forwards for IT verification.</li>
          <li>💻 <b>IT Head:</b> Confirms technical feasibility and compliance.</li>
          <li>🏛️ <b>Management:</b> Final approval for high-level oversight.</li>
          <li>🧑‍🔧 <b>IT Admin:</b> Assigns credentials or assets, updates audit log, and closes the request.</li>
        </ul>
      </div>

      {/* Challenges & Learnings */}
      <div className="project-challenges">
        <h2>Challenges & Learnings</h2>
        <p>
          Designing a secure, multi-role workflow with 5-level approvals and email triggers required 
          precise state management and backend optimization.  
          Implementing audit trails and preventing duplicate approvals enhanced my understanding 
          of backend architecture and data integrity in complex enterprise systems.
        </p>
      </div>

      {/* Links */}
      <div className="project-links">
        
        <Link to="/projects" className="btn-outline">
          ← Back to Projects
        </Link>
      </div>
    </motion.section>
  );
};

export default ProjectDetailITAssets;
