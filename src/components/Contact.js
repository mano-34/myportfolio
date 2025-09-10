
import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h5>Contact Me</h5>
      <div className="contact-info">
        <p><FaEnvelope className="icon" /> <a href="mailto:mano@example.com">manojkumar15112004@gmail.com</a></p>
        <p><FaPhoneAlt className="icon" /> <a href="tel:+919876543210">+91 9626517492</a></p>
      </div>

      <div className="social-links">
        <a href="https://linkedin.com/in/mano305" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://instagram.com/in/__mano_oo" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://x.com" target="_blank" rel="noreferrer">
          <FaXTwitter />
        </a>
      </div>
    </section>
  );
}
