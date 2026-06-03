import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";

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
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };
  return (
    <section id="skills" className="skills-section">
      <h2> Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="skill-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={i}
          >
            <div className="outer-circle">
              <motion.div
                className="inner-circle"
                initial={{ background: `conic-gradient(#59b2f4 0deg, #2e3553 0deg)` }}
                whileInView={{
                  background: `conic-gradient(#59b2f4 ${skill.level * 3.6}deg, #2e3553 0deg)`,
                }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              >
                <motion.div
                  className="skill-icon"
                  whileHover={{ scale: 1.3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  {skill.icon}
                </motion.div>
              </motion.div>
            </div>

            <h3>{skill.name}</h3>
            <p className="desc-line">{skill.desc[0]}</p>
            <p className="desc-line">{skill.desc[1]}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
