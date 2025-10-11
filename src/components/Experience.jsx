import React, { useRef} from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Experience.css";

const experiences = [
  {
    role: "Intern  Frontend Developer",
    company: "Softbuild Infotect pvt ltd",
    location: "Ahemdabad",
    period: "July-2023 to Aug-2023",
    desc: "Built a Spotify Clone Web Application using HTML, CSS, and React. Implemented dynamic playlists, audio controls, and a clean responsive design to simulate Spotify’s interface and improve front-end development proficiency.",
  },
  {
    role: " Intern Frontend Developer",
    company: "Tech Elecon ",
    location:"Anand",
    period: "Jan-2024 to Apr-2024",
    desc: "Developed a Gate Pass Management System using React and Material UI (MUI). Designed a responsive, user-friendly interface for gate entry approvals and visitor tracking, integrated REST APIs, and optimized data rendering with reusable components.",
  },
  {
    role: "Full Stack Developer",
    company: "Apothecon Pharmaceuticals pvt ltd",
    location:"Dhabhasa Vadodara",
    period: "Dec-2024 to Present",
    desc: "Built two full-fledged web applications using the MERN stack: an Online Meeting Room Booking System and an IT Forms Portal featuring dynamic multi-level approval flows across departments. ",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.section
      id="experience"
      className="experience-section"
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">Experience</h2>

      <div className="timeline-container">
        {/* ✅ Animated Timeline Fill */}
        <motion.div
          className="timeline-fill"
          style={{ height: lineHeight }}
        />

        {experiences.map((ex, i) => (
          <motion.div
            key={i}
            className={`timeline-item ${i % 2 === 0 ? "left" : "right"}`}
            initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="timeline-dot" />

            <motion.div
              className="content-box"
              whileHover={{
                rotateY: i % 2 === 0 ? 6 : -6,
                rotateX: 3,
                scale: 1.05,
                boxShadow:
                  "0 8px 30px rgba(0, 255, 128, 0.3), inset 0 0 10px rgba(255,255,255,0.1)",
              }}
              transition={{ type: "spring", stiffness: 150, damping: 10 }}
            >
              <div className="glass-reflection"></div>
              <h3>{ex.role}</h3>
              <h4>{ex.company}</h4>
              <h4>{ex.location}</h4>
              <p className="period">{ex.period}</p>
              <p className="desc">{ex.desc}</p>
             
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
