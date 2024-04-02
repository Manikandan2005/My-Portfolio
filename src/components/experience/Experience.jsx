import "./experience.scss"
import { useRef } from "react";
import {motion,useInView} from 'framer-motion'

const variants = {
    initial: {
      x: -1000,
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
  };

function Experience() {
    const ref = useRef();
    const isInView = useInView(ref, { margin: "-100px" });
  return (
    <div className="page">
        <motion.div className="heading">
            <h1><i className="fa-solid fa-briefcase" style={{color: "#fafafa"}}/>Experience</h1>
        </motion.div>
    <motion.div className='experience'
        initial="initial"
        variants={variants}
        ref={ref}
        animate={isInView ? "animate" : "initial"}>
        <motion.div className="titleContainer" variants={variants}>
          <motion.div variants={variants}>
          <img src='./kaar.png' alt='KaarTech' variants={variants}></img>
          </motion.div>
            <motion.h1 variants={variants}><b>Kaar Technologies</b></motion.h1>
            <motion.h3 variants={variants}>FTF Intern</motion.h3>
            <motion.h5 variants={variants}>Oct 2023 - Present</motion.h5>
        </motion.div>
        <motion.div className="textContainer"  variants={variants}>
            <motion.ul variants={variants}>
                <li>Underwent trainings in Javascript, Angular, Node.js, MongoDB and developed websites using it.</li>
                <li>Underwent trainings in SAP modules like SAP ABAP, PIPO, Odata, RFC.</li>
                <li>Developed portals using SAP, Angular and SAP provided Middlewares(PIPO, Odata, RFC) and 
                    understood the business process of each portal
                </li>
            </motion.ul>
        </motion.div>
    </motion.div>
    </div>
  )
}

export default Experience