import React from "react";
import { motion } from "framer-motion";
import "./About.css"
export default function About() {
  const skills = [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "JavaScript",
    "Tailwind CSS",
    "MUI",
    "Microsoft Azure",
    "Git & GitHub",
  ];

  return (
    <motion.section
      id="about"
      className="about-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">About Me</h2>

          <p className="about-intro">
            👋 Hi there! I’m a <strong>Full Stack Developer</strong> who loves
            building clean, efficient, and visually appealing web applications.
            I’m passionate about turning ideas into interactive digital
            experiences using the power of the <strong>MERN stack</strong>.
          </p>

          <p className="about-body">
            I specialize in creating responsive, high-performance applications
            with a focus on user experience and scalability. My goal is to write
            code that not only works but also makes a real difference — clean,
            optimized, and future-proof.
          </p>

          <p className="about-body">
            When I’m not coding, I explore new UI trends, contribute to open
            source, or experiment with motion design and creative web
            animations.
          </p>

          <h3 className="skills-title">Core Technologies</h3>
          <div className="skills-chips">
            {skills.map((s) => (
              <motion.span
                key={s}
                className="skill-chip"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {s}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
