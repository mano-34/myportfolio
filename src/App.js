import React, { useEffect } from "react";

import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"

function App() {

  useEffect(() => {
    const leftElements = document.querySelectorAll(".scroll-left");
    const rightElements = document.querySelectorAll(".scroll-right");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    [...leftElements, ...rightElements].forEach((el) => observer.observe(el));
  }, []);

  return (
    <>
      {/* STATIC NAVBAR (NO ANIMATION) */}
      <Navbar />

      {/* SECTIONS */}
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
