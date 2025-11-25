

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
          I am passionate about backend development and enjoy building scalable,
          secure, and performance-oriented server-side applications that solve
          real-world problems.
        </p>

        <p>
          I am a dedicated full-stack developer currently pursuing my B.E. in
          Computer Engineering at St. Francis Institute of Technology, maintaining
          a strong academic record with an average CGPA of 9.0 .
        </p>

        <p>
          My core expertise lies in the <strong>MERN Stack</strong>—MongoDB,
          Express.js, React.js, and Node.js. I also have solid programming
          experience in <strong>Java, C++, and SQL</strong>.
        </p>

        <p>
          Beyond MERN, I am also experienced in modern backend frameworks such as
          <strong> Django (Python)</strong> and <strong>Spring Boot (Java)</strong>.
          These technologies help me design robust APIs, microservices, and
          production-ready backend architectures.
        </p>

        <p>
          With a strong foundation in both frontend and backend development, I
          have built multiple end-to-end applications, including doctor appointment
          systems, billing platforms, and e-commerce solutions. I enjoy writing
          clean, efficient code and continuously improving my skills to stay
          aligned with industry standards.
        </p>
      </div>
    </section>
  );
};

export default About;
