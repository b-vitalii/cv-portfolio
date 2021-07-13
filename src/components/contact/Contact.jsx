import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <a href="https://www.linkedin.com/in/vitalii-boiko-149860b0/?locale=en_US">
          <img src="images/linkedin2.png" alt="" />
        </a>
        <a href="https://github.com/b-vitalii">
          <img src="images/github1.png" alt="" />
        </a>
      </div>
      <div className="right">
        <h2>Contact to me</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply to you!</span>}
        </form>
      </div>
    </div>
  );
}
