import React from "react";
import "../../styles.css";
import Projects from "../Projects";
import About from "../About";
import Contact from "../Contact";
import Skills from "../Skills/Skills";

function Home() {
  return (
    <containter className="homePage">
      <Skills />
      <About />
      <Projects />
      <Contact />
    </containter>
  );
}

export default Home;
