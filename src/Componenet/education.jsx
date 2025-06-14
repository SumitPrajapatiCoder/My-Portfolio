import React from "react";
import "./education.css";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    degree: "Bachelor of Engineering (B.E.) in Computer Engineering",
    institute: "St. Francis Institute of Technology, Mumbai",
    year: "2023 – 2027",
    grade: "Avg. CGPA: 9.03",
  },
  {
    degree: "HSC (Class 12) - Science",
    institute: "Matruchhaya College Of Commerce And Science, Mumbai",
    year: "2021 – 2023",
    grade: "Percentage: 84.50%",
  },
  {
    degree: "SSC (Class 10)",
    institute: "Shakti Seva Sangh Madhyamik Vidyalaya, Mumbai",
    year: "2013 – 2021",
    grade: "Percentage: 88.20%",
  },
];

const Education = () => {
  return (
    <section className="education-section" id="education">
      <h2 className="education-heading">
        <FaGraduationCap /> Education
      </h2>
      <div className="education-container">
        {educationData.map((edu, index) => (
          <div className="education-row" key={index}>
            <div className="education-left">
              <h3>{edu.degree}</h3>
              <p>{edu.institute}</p>
            </div>
            <div className="education-right">
              <p>{edu.year}</p>
              <p>{edu.grade}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
