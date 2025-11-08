import React from "react";


export default function  Contact() {
  return (
    <div id="contact" className="contact-container">
      <h1>Contact Me</h1>
      <p className="contact-intro">If you’re interested in collaborating or have a project opportunity, I’d be glad to connect and discuss how I can contribute.</p>

      <div className="contact-info">
        <p>
          📧 <a href="mailto:yourname@email.com">yourname@email.com</a>
        </p>
        <p>
          💼 <a href="https://linkedin.com/in/yourname" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/yourname
          </a>
        </p>
         <p>
          📞 <a href="tel:91+ 9626517492">91+ 9626517492</a>
        </p>
      </div>
    </div>
  );
};



