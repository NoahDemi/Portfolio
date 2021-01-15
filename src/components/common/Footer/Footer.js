import React from "react";
import ReactDOM from "react-dom";
import style from "./Footer.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";

export default class Footer extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="footer">
        <ul className="myInfo">
          <li>
            <a href="https://github.com/NoahDemi">
              <FaGithub /> GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/noah-demi-bb7158130/">
              <FaLinkedin /> LinkedIn
            </a>
          </li>
          <li>
            <FaFileDownload /> Resume
          </li>
        </ul>
      </div>
    );
  }
}
