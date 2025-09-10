/*

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";

export default function Skills() {
  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 color="#E34F26" size={30} />,
      points: [
        "Defines the Structure",
        "Semantic Elements",
        "Foundation for Web Development",
      ],
    },
    {
      name: "CSS",
      icon: <FaCss3Alt color="#1572B6" size={30} />,
      points: [
        "Presentation & Styling",
        "Responsive Design",
        "Reusability & Maintainability",
      ],
    },
    {
      name: "JavaScript",
      icon: <FaJs color="#F7DF1E" size={30} />,
      points: [
        "Makes websites interactive",
        "DOM manipulation",
        "Runs on both frontend and backend",
      ],
    },
    {
      name: "React",
      icon: <FaReact color="#61DAFB" size={30} />,
      points: [
        "Component-based UI library",
        "Fast rendering using Virtual DOM",
        "Reusable and scalable code",
      ],
    },
   
  ];

  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <div className="skills-list">
        {skills.map((skill, i) => (
          <div key={i} className="skill">
            <div className="skill-title">
              {skill.icon}
              <h3>{skill.name}</h3>
            </div>
            <ul>
              {skill.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
*/
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si"; // new imports

export default function Skills() {
  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 color="#E34F26" size={30} />,
      points: [
        "Defines the Structure",
        "Semantic Elements",
        "Foundation for Web Development",
      ],
    },
    {
      name: "CSS",
      icon: <FaCss3Alt color="#1572B6" size={30} />,
      points: [
        "Presentation & Styling",
        "Responsive Design",
        "Reusability & Maintainability",
      ],
    },
    {
      name: "JavaScript",
      icon: <FaJs color="#F7DF1E" size={30} />,
      points: [
        "Makes websites interactive",
        "DOM manipulation",
        "Runs on both frontend and backend",
      ],
    },
    {
      name: "React",
      icon: <FaReact color="#61DAFB" size={30} />,
      points: [
        "Component-based UI library",
        "Fast rendering using Virtual DOM",
        "Reusable and scalable code",
      ],
    },
    {
      name: "Node.js",
      icon: <FaNodeJs color="#339933" size={30} />,
      points: [
        "JavaScript runtime environment",
        "Non-blocking I/O model",
        "Builds scalable network applications",
      ],
    },
    {
      name: "Express.js",
      icon: <SiExpress color="#000000" size={30} />,
      points: [
        "Minimal and flexible Node.js framework",
        "Middleware support",
        "Simplifies server-side development",
      ],
    },
    {
      name: "MongoDB",
      icon: <SiMongodb color="#47A248" size={30} />,
      points: [
        "NoSQL document-oriented database",
        "Stores data in JSON-like format",
        "High performance and scalability",
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <div className="skills-list">
        {skills.map((skill, i) => (
          <div key={i} className="skill">
            <div className="skill-title">
              {skill.icon}
              <h3>{skill.name}</h3>
            </div>
            <ul>
              {skill.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
