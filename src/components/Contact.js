import React, { useState } from "react";
import "../styles.css";
import config from "./Firebase";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    config
      .collection("contacts")
      .add({
        name: name,
        email: email,
        message: message
      })
      .then(() => {
        alert("Message has been submited");
      })
      .catch((error) => {
        alert(error.message);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1> Contact Form </h1>

      <label>
        {" "}
        Name: <br />{" "}
      </label>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.vlaue)}
      />
      <br />
      <label>
        {" "}
        Email: <br />
      </label>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.vlaue)}
      />
      <br />
      <label>
        {" "}
        Message: <br />
      </label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.vlaue)}
      ></textarea>
      <br />
      <button type="submit"> Submit </button>
    </form>
  );
}

export default Contact;
