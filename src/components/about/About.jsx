import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './About.scss';

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


const About = () => {

    const ref = useRef();
    const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div className='about'  
      initial="initial"
      variants={variants}
      ref={ref}
      animate={isInView ? "animate" : "initial"}>
      <div className="heading" >
        About
      </div>
      <motion.div className="textContainer" variants={variants}>
        <p>
          <b>
            &nbsp;&nbsp;&nbsp;&nbsp;I'm a 2023 graduate in Computer Science from Loyola ICAM College of Engineering
            and Technology, with a year of internship experience at Kaar Technologies. During my internship at Kaar
            Technologies, I delved into the realms of full-stack development, honing my skills in MEAN (MongoDB,
            Express, Angular, Node.js) stack, SAP Modules (SAP ABAP, PIPO, Odata, RFC, SAP BTP) and Building upon this
            foundation, I furthered my skills by completing a rigorous 6-month full-stack course from GUVI, IIT Research
            Park, Chennai. specializing in the MERN stack. With a solid grasp of both the MEAN and MERN stacks, I bring
            a comprehensive understanding of modern web development technologies. My strengths lie in effective
            communication, team coordination, and a passion for leveraging technology to solve complex problems.
          </b>
        </p>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box" variants={variants}>
          <h1>
            <i className="fa-solid fa-graduation-cap" style={{ color: "#f5f7f9" }}></i>&nbsp;&nbsp;UnderGraduation
          </h1>
          <br />
          <br />
          <h2>Loyola ICAM College of Engineering and Technology</h2>
          <br />
          <h2>B.E Computer science-2023 Batch</h2>
          <br />
          <h2>8.31 CGPA</h2>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
