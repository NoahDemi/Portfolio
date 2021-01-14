import React from "react";
import "../../styles.css";
import { ProjectData } from "../ProjectData";
import Footer from "../common/Footer/Footer";

function Home() {
  return (
    <containter className="homePage">
      <div className="intro">
        <h1> Hi my name is Noah! </h1>
        <br />
        <p>
          I am currently a Computer Science student studying at West Chester
          University!
        </p>
        <br />
      </div>
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

export default Home;
