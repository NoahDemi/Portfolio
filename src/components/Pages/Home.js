import React from "react";
import "../../styles.css";
import Projects from "../Projects";
import About from "../About";
import Contact from "../Contact";

function Home() {
  return (
    <containter className="homePage">
      <About />
      <Projects />
      <Contact />
    </containter>
  );
}

export default Home;
