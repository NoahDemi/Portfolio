import React from "react";
import "../styles.css";
import config from "./Firebase";

function Contact() {
  return (
    <form className="form">
      <h1> Contact Form </h1>

      <label>Name:</label>
      <input type="text" name="name" id="name" />
      <br />
      <label>Email:</label>
      <input type="text" name="email" id="email" />

      <label>
        Message: <br />{" "}
      </label>
      <input type="text" name="message" id="message" />
      <br />
      <button type="submit"> Submit </button>
    </form>
  );
}

export default Contact;
