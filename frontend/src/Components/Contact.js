import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setStatus("Loading");
      let mail = await axios.post("http://localhost:5000/api/submit", {
        name,
        email,
        message,
      });

      if (!mail) return setStatus("Failed");
      setStatus("Success");

    } catch (error) {
      console.log(error);
      setStatus(`Error`)
    }
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>get in touch</h2>
        <div className="underline"></div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Message"
          name="message"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div>{status}</div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Contact;
