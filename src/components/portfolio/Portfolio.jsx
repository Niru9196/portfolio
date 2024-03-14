import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import './portfolio.scss';

const items = [
  {
    id: 1,
    title: "E-Commerce Website",
    technologies_used: 'HTML, CSS, JavaScript, React',
    img: '/ecommerce.png',
    feature: 'Feature:',
    explain: ' Extensive Product Catalog,Fast Loading Speed,User-friendly Interface,utilize search and filter options ',
    describe: 'Get ready to be impressed! Click button and witness the power of each creation!',
    href: 'https://e-commerce-website-sigma-lime.vercel.app/',
  },
  {
    id: 2,
    title: "Hit Correct value",
    technologies_used: 'HTML, CSS, JavaScript,',
    img: '/game.png',
    explain: '',
    describe: 'The adventure awaits! Click and embark on a journey through each project wonders!',
    href: 'https://bubble-game-peach.vercel.app/',
  },
  {
    id: 3,
    title: "Discover Books",
    technologies_used: 'HTML, CSS, JavaScript, Bootstrap',
    img: '/book.png',
    feature: 'Feature:',
    explain: ' User-Friendly Interface, Search Functionality,Statistical Analysis Tools,Responsive Design,etc',
    describe: 'Why imagine when you can explore? Click and immerse yourself in each masterpiece!',
    href: 'https://vercel.com/nirupama-singhs-projects/discover-book',
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return ( 
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt='' />
          </div>
          <motion.div className='textContainer' style={{ y }}>
            <h2>{item.title}</h2>
            <h3 style ={{color: "#6699CC"}}>{item.feature}</h3>
            <p style ={{marginTop: '-25px'}}>{item.explain}</p>
            <h3>{item.describe}</h3>
            <button><a href={item.href} target="_blank">See Demo</a></button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className='portfolio' ref={ref}>
      <div className='progress'>
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className='progressBar'></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
