
import React from "react";
import Header from "./Componenet/header";
import About from "./Componenet/about";
import Projects from "./Componenet/project";
import Contact from "./Componenet/contact";
import Skill from "./Componenet/skill";
import "./App.css";
import Education from "./Componenet/education";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <main>
        <section id="about">
          <About />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="skill">
          <Skill />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default App;
