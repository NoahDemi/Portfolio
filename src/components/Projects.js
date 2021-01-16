import React from "react";
import "../styles.css";
import { ProjectData } from "./ProjectData";

function Projects() {
  return (
    <containter className="homePage">
      <ul className="projects">
        {ProjectData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <h1>{item.title}</h1>
            </li>
          );
        })}
      </ul>
    </containter>
  );
}

export default Projects;
