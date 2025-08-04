import React from "react";
import "./project.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Doctor Appointment System",
    description:
      "A full-stack MERN system to schedule and manage appointments.",
    link: "https://github.com/SumitPrajapatiCoder/DAMS-Doctor-Appointment-Management-System",
  },
  {
    title: "Billing System",
    description: "Java Swing billing app with stock management.",
    link: "https://github.com/SumitPrajapatiCoder/Billing-Generating-System",
  },
  {
    title: "Math Challenging Game",
    description:
      "A browser-based math quiz built with HTML, CSS, and JavaScript. Features score tracking, random challenges, and a timer.",
    link: "https://github.com/SumitPrajapatiCoder/Math-Challenging-Game.git",
    live: "https://math-game-7jdg.onrender.com",
  },
  {
    title: "Group Chat Application",
    description:
      "Django-based chat app where users log in and join rooms to send real-time messages.",
    link: "https://github.com/SumitPrajapatiCoder/Group-Chat-System.git",
    live: "http://group-chat-system-production-9ddd.up.railway.app",
  },
  {
    title: "Gemini Chatbot",
    description:
      "AI chatbot built with Django and Gemini API to respond to user prompts instantly.",
    link: "https://github.com/SumitPrajapatiCoder/Chat-With-Gemini.git",
    live: "http://sumitprajapaticoder-django--8000.prod1.defang.dev",
  },
];


const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="project-heading">{"< My Projects />"}</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card zoom-in" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <FaGithub className="project-icon" />
                View Code
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt className="project-icon" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
