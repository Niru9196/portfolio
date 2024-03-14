import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./services.scss";

const Services = () => {
  const handleClick = () => {
    window.open('https://drive.google.com/file/d/1ULwyOXLfOodVE_VlhXawl0KWoQ-VoWK0/view', '_blank');
  };
  return (
    <div className="self">
      <div className="intro">
        I'm Nirupama Singh, and I'm thrilled to e-meet you! I am a frontend
        developer passionate about crafting captivating digital experiences.
        With expertise in HTML, CSS, JavaScript, and React, I'm actively
        immersed in building dynamic projects that showcase innovation and
        user-centric design. I thrive on collaboration and am eager to
        contribute to exciting ventures that push the boundaries of web
        development. Let's connect and collaborate on creating remarkable
        digital solutions!
      </div>
      <div className="ed_qual">
        <h1>Education</h1>
        <h4>Bachelor of Technology</h4>
        <p>Batch:2024</p>
        <p>8.03sgpa</p>
      </div>
      <div className="tech_stack">
        <h2>Tech Stack</h2>
        <div className="img_container">
          <img src="/html.webp" alt="HTML" />
          <img src="/css.webp" alt="CSS" />
          <img src="/jss.png" alt="javaScript" className="jslogo" />
          <img src="/bs.png" alt="Bootstrap" className="bslogo" />
          <img src="/tailwind.png" alt="tailwind" className="tailwind" />
          <img src="/rr.png" alt="React" className="react" />
          <img src="/framer.webp" alt="Framer" className="framer" />
        </div>
      </div>
      <div style ={{width: '100%',display:'flex', justifyContent: 'center'}}>
        <button className="button" onClick={handleClick}>Resume</button>
      </div>
      
    </div>
  );
};

export default Services;
