import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      name: "Portfolio Website",
      desc: "Interactive React-based music platform that lets users explore and enjoy tracks seamlessly. Focused on elegant design, performance, and immersive listening.",
      link: "https://portfolio-mano15.vercel.app/"
    },
    {
      name: "E-commerce Store Design (SpeedX Bike Website)",
      desc: "An e-commerce project designed for selling bikes online with a responsive layout, product pages, and modern UI components. Built using with HTML,CSS,javascript.",
      link: "https://mano-34.github.io/SPEEDxBikeWebsite/"
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <motion.p className="about-projects"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        my projects focusing on web development,
        using with JavaScript, HTML, CSS and React,
        My projects are designed with a responsive approach, ensuring
        usability across devices, and built to provide practical solutions
        for real-world needs.
      </motion.p>

      <div className="project-list">
        {projects.map((p, i) => {
          const isLeft = i % 2 === 0;

          return (
            <motion.div
              key={i}
              className={`project-card ${isLeft ? "left" : "right"}`}

              initial={{
                opacity: 0,
                x: isLeft ? -200 : 200
              }}

              whileInView={{
                opacity: 1,
                x: 0
              }}

              transition={{
                duration: 0.8,
                ease: "easeOut"
              }}

              viewport={{ once: false }}
            >
              <h3>{p.name}</h3>
              <p>{p.desc}</p>

              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View Project
                </a>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
