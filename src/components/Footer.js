import React from "react";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} Mano | All Rights Reserved
       <div className="footer-socials">
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
    </footer>
  );
}