import React from "react";
import { motion } from "framer-motion";

export default function Contact() {

  const textVariants = {
    hidden: {
      opacity: 0,
      scale: 0.6,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div id="contact" className="contact-container">
      
      {/* TITLE */}
      <motion.h1
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        Contact Me
      </motion.h1>

      {/* INTRO TEXT */}
      <motion.p
        className="contact-intro"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        whileHover={{ scale: 1.05 }}
      >
       I’m seeking opportunities to contribute my skills in a professional environment while continuing to learn and grow.
      </motion.p>

      {/* CONTACT INFO */}
      <div className="contact-info">

        <motion.p
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          whileHover={{ scale: 1.1 }}
        >
          📧 <a href="mailto:manojkumar15112004@email.com">
            manojkumar15112004@email.com
          </a>
        </motion.p>

        <motion.p
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          whileHover={{ scale: 1.1 }}
        >
          💼 <a
            href="https://linkedin.com/in/mano305"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://linkedin.com/in/mano305
          </a>
        </motion.p>

        <motion.p
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          whileHover={{ scale: 1.1 }}
        >
          📞 <a href="tel:+919626517492">
            +91 9626517492
          </a>
        </motion.p>

      </div>
    </div>
  );
}
