import React from "react";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa6";
import profile from "../assets/manodp.jpg";
import resume from "../assets/Resume.mano.pdf"; 

export default function Home() {
  return (
    <section id="home" className="home">
      <div className="home-text">
        <h1>Manojkumar R</h1>
        <p className="tagline">I'm a MERN Stack Developer</p>

        <ul className="points">
          <li>Specialized in building responsive and user-friendly websites.</li>
        </ul>

        <div className="buttons">
          <a href="#projects" className="btn">View My Work</a>
          <a href={resume} download className="btn secondary-btn">Download Resume</a>
        </div>

        <div className="socials">
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

      <div className="home-image">
        <img src={profile} alt="Profile" className="profile-pic" />
      </div>
    </section>
  );
}
