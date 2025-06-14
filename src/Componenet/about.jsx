

import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./about.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <h2 className="about-heading">
          <Typewriter
            words={["About Me", "Hello, I'm Sumit Prajapati!"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>
        <p>
          I am a passionate full-stack developer currently pursuing B.E. in
          Computer Engineering at St. Francis Institute of Technology with an
          average CGPA of 9.03.
        </p>
        <p>
          I specialize in building web applications using the MERN Stack —
          MongoDB, Express.js, React.js, and Node.js — along with solid
          experience in Java, C++, and SQL.
        </p>
        <p>
          I have a strong foundation in both frontend and backend development
          and have built multiple full-stack projects, including doctor
          appointment systems, billing systems, and e-commerce solutions.
        </p>
      </div>
    </section>
  );
};

export default About;
