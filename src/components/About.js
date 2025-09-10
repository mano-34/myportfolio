import React from "react";
import about from "../assets/profile.jpg";
import { FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
export default function About() {
  return (
    <section id="about" className="about">
      <img src={about} alt="about" className="about-pic" />
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          I'm a passionate <span class="highlight">Full-Stack Web Developer</span> , skilled in <span class="highlight">HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB.</span> I specialize in creating responsive, dynamic, and user-friendly web applications , With a solid foundation in both front-end and back-end technologies , Confident in my problem-solving skills, adaptability, and continuous learning mindset , I am dedicated to delivering clean, efficient, and innovative code that drives real business value.

        </p>
        <div className="about-socials">
          <a href="https://linkedin.com/in/mano305" target="_blank" rel="noreferrer">
            <FaLinkedin size={20} />
          </a>
          <a href="https://instagram.com/in/__man_oo" target="_blank" rel="noreferrer">
            <FaInstagram size={20} />
          </a>
          <a href="https://x.com" target="_blank" rel="noreferrer">
            <FaXTwitter size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
