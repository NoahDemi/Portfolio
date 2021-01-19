import React from "react";
import "./Contact.css";
import * as emailjs from "emailjs-com";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ozrx7an",
        "template_rg6mxkk",
        e.target,
        "user_Lj9CxWz9C4eHbOgXimf1G"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <h1> Contact Form </h1>

      <div className="txtb">
        <label>Name: </label>
        <input type="text" name="name" placeholder="Enter Name" />
      </div>
      <div className="txtb">
        <label>Email: </label>
        <input type="email" name="email" placeholder=" Enter Email" />
      </div>
      <div className="txtb">
        <label>Message: </label>
        <textarea name="message" placeholder="Enter Message" />
      </div>
      <input type="submit" value="Send" />
    </form>
  );
}
