import React from "react";
import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial : {
    x: -500,
    opacity: 0,
  },
  animate: {
    x : 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    }
  },
  scrollButton : {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity
    }
  },
};

const sliderVariants = {
  initial : {
    x: 0,
  },
  animate: {
    x : '-220%',
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: "mirror"
    }
  },
}; 

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div className="textContainer" variants= {textVariants} initial = 'initial' animate ='animate'>
          <motion.h2 variants={textVariants}>NIRUPAMA SINGH</motion.h2>
          <motion.h1 variants ={textVariants}>FRONTEND DEVELOPER<br/><span className="breakpoint"> &</span><br/> UI/UX DESGINER</motion.h1>
          {/* <motion.div variants ={textVariants} className="buttons">
            <motion.button variants ={textVariants}><a></a>Contact</motion.button>
            <motion.button variants ={textVariants}><a href="https://drive.google.com/file/d/1ULwyOXLfOodVE_VlhXawl0KWoQ-VoWK0/view" target="_blank">Resume</a></motion.button>
          </motion.div> */}
          <motion.img variants ={textVariants} animate ='scrollButton' src="/scroll.png" alt="scroll" />
        </motion.div>
      </div>
      <motion.div className="slidingTextContainer" variants = {sliderVariants} initial = 'initial' animate = 'animate'>
        Frontend Developer & UI/UX Designer
      </motion.div> 
      <div className="imageContainer"  >
        <img
          src="/profile.jpg" 
          alt="picture of mine"
          style={{ height: "70%", width: "100%", borderRadius: "10%" }}
        />
      </div>
    </div>
  );
};

export default Hero;
