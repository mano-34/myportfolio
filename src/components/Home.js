

import React from "react";
import { FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6"; 
import profile from "../assets/profile.jpg";


export default function Home() {
  return (
    <section id="home" className="home">
      <div className="home-text">
        <h1>Manojkumar</h1>
        <p className="tagline">I'm Web Developer</p>
        
        <ul className="points">
          <li>Specialized in building responsive and user-friendly websites.</li>
         
        </ul>

        <a href="#projects" className="btn">View My Work</a>

        <div className="socials">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram size={20} />
          </a>
          <a href="https://x.com" target="_blank" rel="noreferrer">
            <FaXTwitter size={20} />
          </a>
        </div>
      </div>

      <div className="home-image">
        <img src={profile} alt="Profile" className="profile-pic" />
        
      </div>
    
    </section>
  
  );
}
