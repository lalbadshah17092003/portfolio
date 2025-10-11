import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./ProjectDetail3.css";

const features = [
  {
    title: "Gatepass Requests",
    desc: "Employees can submit gatepass requests with purpose, date, and duration. Easy tracking of requests for managers and admin."
  },
  {
    title: "Role-Based Access",
    desc: "Admins, managers, and employees have different dashboards and permissions. Secure role-based data access ensures privacy."
  },
  {
    title: "Approval Workflow",
    desc: "Requests are routed automatically to supervisors or HR for approval/decline. Email notifications keep employees informed."
  },
  {
    title: "Dashboard & Analytics",
    desc: "Visualize pending, approved, and rejected requests. Quick insights for managers to track approvals and gatepass utilization."
  },
  {
    title: "Real-time Updates",
    desc: "Live status updates for all requests. Employees can track their gatepass progress without manual follow-ups."
  },
  {
    title: "Customizable Forms",
    desc: "Flexible forms allow adding new fields like purpose, department, or visitor details. Tailored to company policies."
  },
];

const ProjectDetailGatepass = () => {
  return (
    <motion.section
      className="project-detail-page"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Hero Section */}
      <div className="project-hero">
        <h1>Gatepass Management System</h1>
        <p className="short-desc">
          A modern, React + MUI frontend application to manage employee gatepasses, approvals, and analytics efficiently.
        </p>
        <div className="tech-badges">
          {["React", "MUI", "Node.js", "Express.js", "MongoDB"].map((tech) => (
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
          Designing a flexible approval workflow while ensuring role-based security was challenging. 
          Learned advanced React state management with MUI components and integrating dynamic forms 
          with backend APIs efficiently.
        </p>
      </div>

      {/* Links */}
      <div className="project-links">
      
        <Link to="/projects" className="btn-outline">← Back to Projects</Link>
      </div>
    </motion.section>
  );
};

export default ProjectDetailGatepass;
