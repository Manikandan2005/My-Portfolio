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
    <motion.div className="page" initial="initial"
    variants={variants} 
    ref={ref}
    animate={isInView ? "animate" : "initial"}>
        <div className="heading">
            <h1><i className="fa-solid fa-briefcase" style={{color: "#fafafa"}}/>Experience</h1>
        </div>
    <div className='experience'>
        <div className="titleContainer" >
          <div >
          <img src='./kaar.png' alt='KaarTech' ></img>
          </div>
            <motion.h1 variants={variants} ><b>Kaar Technologies</b></motion.h1>
            <motion.h3 variants={variants} >FTF Intern</motion.h3>
            <motion.h5 variants={variants} >Oct 2023 - Present</motion.h5>
        </div>
        <div className="textContainer"  >
            <ul >
                <li>Underwent trainings in Javascript, Angular, Node.js, MongoDB and developed websites using it.</li>
                <li>Underwent trainings in SAP modules like SAP ABAP, PIPO, Odata, RFC.</li>
                <li>Developed portals using SAP, Angular and SAP provided Middlewares(PIPO, Odata, RFC) and 
                    understood the business process of each portal
                </li>
            </ul>
        </div>
    </div>
    </motion.div>
  )
}

export default Experience
