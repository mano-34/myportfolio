import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";


export default function Skills() {
  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 color="#E34F26" size={40} />,
      level: 95,
      desc: ["Defines structure & content", "Foundation of every web page"],
    },
    {
      name: "CSS",
      icon: <FaCss3Alt color="#1572B6" size={40} />,
      level: 90,
      desc: ["Styles & layouts the page", "Enables responsive design"],
    },
    {
      name: "JavaScript",
      icon: <FaJs color="#F7DF1E" size={40} />,
      level: 85,
      desc: ["Adds interactivity to websites", "Core of modern web apps"],
    },
    {
      name: "React",
      icon: <FaReact color="#61DAFB" size={40} />,
      level: 80,
      desc: ["Component-based UI library", "Fast & reusable code"],
    },
    {
      name: "Node.js",
      icon: <FaNodeJs color="#339933" size={40} />,
      level: 75,
      desc: ["JavaScript on the server", "Non-blocking, scalable apps"],
    },
    {
      name: "Express.js",
      icon: <SiExpress color="#000000" size={40} />,
      level: 70,
      desc: ["Minimal backend framework", "Simplifies routing & APIs"],
    },
    {
      name: "MongoDB",
      icon: <SiMongodb color="#47A248" size={40} />,
      level: 65,
      desc: ["NoSQL document database", "Flexible & high performance"],
    },
    {
      name: "GitHub",
      icon: <FaGithub color="#fff" size={40} />,
      level: 85,
      desc: ["Cloud-based code hosting", "Collaboration & open-source tools"],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2> Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div key={i} className="skill-card">
            <div className="outer-circle">
              <div
                className="inner-circle"
                style={{
                  background: `conic-gradient(#59b2f4 ${skill.level * 3.6}deg, #2e3553 0deg)`,
                }}
              >
                <div className="skill-icon">{skill.icon}</div>
              </div>
            </div>

            <h3>{skill.name}</h3>
            <p className="desc-line">{skill.desc[0]}</p>
            <p className="desc-line">{skill.desc[1]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
