import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import "./Skills.css";

function Skills() {
  return (
    <ul className="skills">
      <li>
        <FaReact />
      </li>
      <li>
        <FaHtml5 />
      </li>
      <li>
        <FaCss3Alt />
      </li>
      <li>
        <SiJavascript />
      </li>
      <li>
        <FaPython />
      </li>
      <li>
        <FaJava />
      </li>
    </ul>
  );
}

export default Skills;
