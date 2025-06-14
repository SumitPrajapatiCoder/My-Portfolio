
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import {
  FaUserAlt,
  FaGraduationCap,
  FaTools,
  FaProjectDiagram,
  FaEnvelope,
  FaFileAlt,
  FaGithub,
} from "react-icons/fa";

import "./header.css";

const Header = () => {
  return (
    <header className="navbar">
      <div className="header-content">
        <h1 className="header-title">Hi, I'm Sumit Prajapati</h1>
        <h2 className="header-subtitle">
          <Typewriter
            words={[
              "Full Stack Developer",
              "MERN Stack Enthusiast",
              "Problem Solver",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>
      </div>

      <nav>
        <ul className="nav-links">
          <li>
            <a href="#about">
              <FaUserAlt /> About
            </a>
          </li>
          <li>
            <a href="#education">
              <FaGraduationCap /> Education
            </a>
          </li>
          <li>
            <a href="#skill">
              <FaTools /> Skills
            </a>
          </li>
          <li>
            <a href="#projects">
              <FaProjectDiagram /> Projects
            </a>
          </li>
          <li>
            <a href="#contact">
              <FaEnvelope /> Contact
            </a>
          </li>
          <li>
            <a
              href="/Sumit Prajapati Resume Updated.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFileAlt /> Resume
            </a>
          </li>
          <li>
            <a
              href="https://github.com/SumitPrajapatiCoder"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> GitHub
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
