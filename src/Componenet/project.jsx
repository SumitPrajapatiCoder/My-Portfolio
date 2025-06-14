import React from "react";
import "./project.css";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Doctor Appointment System",
    description: "A full-stack MERN system to schedule and manage appointments.",
    link: "https://github.com/SumitPrajapatiCoder/DAMS-Doctor-Appointment-Management-System",
  },
  {
    title: "Billing System",
    description: "Java Swing billing app with stock management.",
    link: "https://github.com/SumitPrajapatiCoder/Billing-Generating-System",
  },
  {
    title: "Medical Shop Website",
    description: "Frontend medical shop site built using HTML/CSS/JS.",
    link: "https://github.com/SumitPrajapatiCoder/Medical-Shop",
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
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <FaGithub className="project-icon" />
              View Code
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
