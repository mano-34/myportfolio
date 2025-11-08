import React from "react";
import about from "../assets/manodp.jpg";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa6";
export default function About() {
  return (
    <section id="about" className="about">
    <div className="about-img">
      <img src={about} alt="about" className="about-pic" />
    </div>
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          I'm a passionate <span class="highlight">Full-Stack Web Developer</span> , skilled in <span class="highlight">HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB.</span> I specialize in creating responsive, dynamic, and user-friendly web applications , With a solid foundation in both front-end and back-end technologies , Confident in my problem-solving skills, adaptability, and continuous learning mindset , I am dedicated to delivering clean, efficient, and innovative code that drives real business value.

        </p>
        <div className="about-socials">
          <a href="https://linkedin.com/in/mano305" target="_blank" rel="noreferrer">
            <FaLinkedin size={20} />
          </a>
          <a href="mailto:manojkumar15112004@email.com" target="_blank" rel="noreferrer">
            <FaEnvelope size={20} />
          </a>
          <a href="https://github.com/mano-34" target="_blank" rel="noreferrer">
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
