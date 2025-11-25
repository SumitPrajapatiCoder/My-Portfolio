import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import {
  FaUserAlt,
  FaGraduationCap,
  FaTools,
  FaProjectDiagram,
  FaEnvelope,
  FaFileAlt,
  FaGithub,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import "./header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="navbar">
      <div className="header-top">
        <div className="header-content">
          <h1 className="header-title">Hi, I'm Sumit Prajapati</h1>
          <h2 className="header-subtitle">
            <Typewriter
              words={[
                "Full Stack Developer",
                "MERN Stack Enthusiast",
                "Java Developer",
                "Python Programmer",
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

        <div className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      <nav className={`nav-container ${menuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              <FaUserAlt /> About
            </a>
          </li>
          <li>
            <a href="#education" onClick={() => setMenuOpen(false)}>
              <FaGraduationCap /> Education
            </a>
          </li>
          <li>
            <a href="#skill" onClick={() => setMenuOpen(false)}>
              <FaTools /> Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              <FaProjectDiagram /> Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              <FaEnvelope /> Contact
            </a>
          </li>
          <li>
            <a
              href="/Sumit-Prajapati-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              <FaFileAlt /> Resume
            </a>
          </li>
          <li>
            <a
              href="https://github.com/SumitPrajapatiCoder"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
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
