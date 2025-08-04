import React from "react";
import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub,
  FaDocker
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiCplusplus,
  SiPostman,
  SiFigma,
  SiDjango,
  SiMysql,
  SiSqlite
} from "react-icons/si";

import "./skill.css";

const skillGroups = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", icon: <FaJava /> },
      { name: "C/C++", icon: <SiCplusplus /> },
      { name: "Python", icon: <FaPython /> },
      { name: "SQL", icon: <FaDatabase /> },
      {name: "MySQL", icon: <SiMysql /> },
      { name: "OOP" },
    ],
  },
  {
    title: "Frontend Technologies",
    skills: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "React.js", icon: <FaReact /> },
    ],
  },
  {
    title: "Backend Technologies",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "SQL", icon: <FaDatabase /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGithub /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Figma", icon: <SiFigma /> },
      { name : "Docker", icon: <FaDocker/>}
    ],
  },
  {
    title: "Full Stack",
    skills: [{ name: "Django", icon: <SiDjango /> }, { name: "MERN Stack" }],
  },
];

const Skill = () => {
  return (
    <section className="skills-container" id="skill">
      <h2 className="skills-heading">{"< Technical Skills />"}</h2>
      <div className="skills-wrapper">
        {skillGroups.map((group, idx) => (
          <div className="skill-group" key={idx}>
            <h3>{group.title}</h3>
            <ul className="skill-list">
              {group.skills.map((skill, i) => (
                <li key={i} className="skill-item">
                  <span className="skill-icon">{skill.icon}</span>
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
