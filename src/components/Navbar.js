
import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">Portfolio</h1>
        <ul className={open ? "nav-links active" : "nav-links"}>
          {["Home", "About", "Skills", "Projects", "Contact"].map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>
                {link}
              </a>
            </li>
          ))}
        </ul>
        <div className="menu-icon" onClick={() => setOpen(!open)}>
          {open ? "✖" : "☰"}
        </div>
      </div>
    </nav>
  );
}
