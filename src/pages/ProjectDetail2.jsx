import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./ProjectDetail2.css";

import login from "../screenshots/LoginPageSS.PNG";
import dashboard from "../screenshots/DashboardSS.PNG";

import bookingpage from "../screenshots/BookingPageSS.PNG"
import report from "../screenshots/report.PNG";
import calendarview from "../screenshots/CalendarViewSS.PNG";
import landing from "../screenshots/LandingPageSS.PNG";
import report2 from "../screenshots/ReportSS3.PNG"
import report3 from "../screenshots/ReportSS2.PNG"

const screenshots = [
  { src: landing, alt: "Landing Page" },
  { src: login, alt: "Login Page" },
  { src: dashboard, alt: "Dashboard" },
  {src :bookingpage , alt : "Booking Page"},
  { src: calendarview, alt: "Calendar View" },
  { src: report, alt: "Report Page" },
  { src: report2, alt: "Report Page" },
  { src: report3, alt: "Report Page" },
];

const features = [
  { title: "User Management", desc: "Manage users with different roles and editable profile details. Secure authentication and role-based access." },
  { title: "Dashboard & Tracking", desc: "Monitor all bookings easily with a responsive dashboard. Quick overview and analytics for every user." },
  { title: "Calendar Integration", desc: "Visualize meetings in a calendar view. Avoid booking conflicts and see schedules at a glance." },
  { title: "Approval Workflow", desc: "Room booking requests automatically go to HR for approval. Outlook integration allows accept/decline actions directly from email." },
  { title: "Microsoft Teams Integration", desc: "Generate Teams meeting links automatically for online meetings. All meetings sync seamlessly." },
  { title: "Reports & Analytics", desc: "Generate reports for different users and meetings. Insights to optimize room usage and meeting schedules." },
];

const ProjectDetailOnlineBooking = () => {
  return (
    <motion.section
      className="project-detail-page"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Hero Section */}
      <div className="project-hero">
        <h1>Online Meeting Room Booking System</h1>
        <p className="short-desc">
          A MERN stack web application to manage room bookings, approvals, and
          team meetings with Outlook & Microsoft Teams integration.
        </p>
        <div className="tech-badges">
          {["React", "Node.js", "Express.js", "MongoDB", "MUI","Bootstrape","Microsoft Azure API", "Nodemailer"].map((tech) => (
            <span key={tech} className="badge">{tech}</span>
          ))}
        </div>
      </div>

      {/* Screenshots Grid (3 per row) */}
      <div className="project-screenshots">
        <h2>Screenshots & Preview</h2>
        <div className="screenshot-grid">
          {screenshots.map((img, idx) => (
            <motion.div key={idx} className="screenshot-item" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 200 }}>
              <img src={img.src} alt={img.alt} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Key Features 3x3 Grid */}
      <div className="project-features">
        <h2>Key Features</h2>
        <div className="features-grid">
          {features.map((f, idx) => (
            <motion.div key={idx} className="feature-card" whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,255,163,0.2)" }} transition={{ type: "spring", stiffness: 200 }}>
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
          Implementing Outlook & Teams integration was complex. Managing
          real-time booking conflicts required efficient backend logic. Learned
          advanced React state management and backend API optimization for
          performance.
        </p>
      </div>

      {/* Links */}
      <div className="project-links">
        <Link to="/projects" className="btn-outline">← Back to Projects</Link>
      </div>
    </motion.section>
  );
};

export default ProjectDetailOnlineBooking;