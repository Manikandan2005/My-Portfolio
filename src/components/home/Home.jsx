import './Home.scss'
import React from 'react'
import { motion } from "framer-motion";

const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };
  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      transition: {
        repeat: Infinity,
        repeatType:"mirror",
        duration: 20,
      },
    },
  };

const Home = ()=> {
  return (
    <div className='homeimage'>
        <div className="wrapper">
        <motion.div 
            className="textContainer"
            variants={textVariants}
            initial="initial"
            animate="animate">
            <motion.h2 variants={textVariants}>Manikandan R</motion.h2>
            <motion.h1 variants={textVariants}>Mean/Mern Stack developer</motion.h1>
            <motion.div className="buttons">   
                <motion.button variants={textVariants}><motion.a href='./resume.pdf' download="Manikandan R CV">Download CV</motion.a></motion.button>
                <motion.button variants={textVariants}><motion.a href='#Skills&Contact'>Contact me</motion.a></motion.button>
            </motion.div>
            <motion.div className='downArrow'>
                <motion.i className="fa-solid fa-arrow-down fa-bounce fa-xl"  
                  style={{color: "#f2eded"}}/>

            </motion.div>
            </motion.div>
            </div>
            
            <motion.div  
                className="slidingTextContainer"
                variants={sliderVariants}
                initial="initial"
                animate="animate">
            Full Stack Developer
            </motion.div>
        <div className="imageContainer">
            <img src='/Mani.png' alt='Manikandan'></img>
        </div>
    </div>
  )
}

export default Home