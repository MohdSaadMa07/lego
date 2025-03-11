import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <h2>Contact Us</h2>
      <p>Have questions or need help? Reach out to us!</p>

      <div className="contact-container">
        <form className="contact-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter your name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" rows="4" placeholder="Type your message..." required></textarea>

          <button type="submit" className="send-btn">Send Message</button>
        </form>

        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>📍 Address: 123 LEGO Street, Denmark</p>
          <p>📞 Phone: +45 1234 5678</p>
          <p>📧 Email: support@lego.com</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
