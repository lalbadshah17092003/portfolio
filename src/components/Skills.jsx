import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

import html5 from "../assets/html-5-svgrepo-com.svg";
import css3 from "../assets/css-3-svgrepo-com.svg";
import js from "../assets/javascript.png";
import reactLogo from "../assets/react-svgrepo-com.svg";
import redux from "../assets/redux.png";
import tailwind from "../assets/tailwind-svgrepo-com.svg";

import node from "../assets/nodejs.png";
import express from "../assets/expressjs.png";
import mongo from "../assets/mongodb.webp";
import api from "../assets/restAPI.png";
import socket from "../assets/socketio.png";

import git from "../assets/Github-.png";
import vscode from "../assets/VS Code.jfif";
import postman from "../assets/postman-svgrepo-com.svg";
import figma from "../assets/figma.jfif";
import firebase from "../assets/Firebase.png";




export default function Skills() {
  const skills = [
    {
      title: "Frontend Development",
      items: [
        { name: "HTML5", img: html5 },
        { name: "CSS3", img: css3 },
        { name: "JavaScript", img: js },
        { name: "React", img: reactLogo },
        { name: "Redux", img: redux },
        { name: "Tailwind", img: tailwind },
      ],
    },
    {
      title: "Backend Development",
      items: [
        { name: "Node.js", img: node },
        { name: "Express", img: express },
        { name: "MongoDB", img: mongo },
        { name: "REST API", img: api },
        { name: "Socket.io", img: socket },
      ],
    },
    {
      title: "Other Tools & Platforms",
      items: [
        { name: "Git & GitHub", img: git },
        { name: "VS Code", img: vscode },
        { name: "Postman", img: postman },
        { name: "Figma", img: figma },
        { name: "Firebase", img: firebase },
      ],
    },
  ];

  return (
    <motion.section
      id="skills"
      className="skills-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">Technical Skills</h2>
      <p className="skills-subtitle">
        A blend of front-end finesse, back-end logic, and creative tools that help bring full-stack projects to life.
      </p>

      {skills.map((category, i) => (
        <div className="skills-category" key={i}>
          <h3>{category.title}</h3>

          <motion.div
            className="skills-grid"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
          >
            {category.items.map((s, idx) => (
              <motion.div
                key={idx}
                className="skill-card"
                whileHover={{ scale: 1.08, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="skill-img">
                  <img src={s.img} alt={s.name} />
                </div>
                <p>{s.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}
    </motion.section>
  );
}
