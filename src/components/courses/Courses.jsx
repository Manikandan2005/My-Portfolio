import "./courses.scss"
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

function Courses() {
    const ref = useRef();
    const isInView = useInView(ref, { margin: "-100px" });
  return (

    <div className="pagewrap">
      <motion.div className='courses'
        initial="initial"
        variants={variants}
        ref={ref}
        animate={isInView ? "animate" : "initial"}>
        <div className="titleContainer">
            <img src='./guvi.png' alt='KaarTech'></img>
            <motion.h1 variants={variants}><b>Full Stack Developer Course</b></motion.h1>
            <h3>MERN Stack</h3><br/>
            <h5>Nov 2023 - Feb 2023</h5>
        </div>
        <div className="textContainer">
            <ul>
                <li>Attended 50 live training session for HTML/CSS, Javascript, React, MySQL, MongoDB, Mongoose, Redux,
                    NodeJS, ExpressJS, Password Hashing, JWT Auth</li>
                <li>Done CRUD Using MERN, Getting the Data in the frontend, Passing it to NodeJs(Backend) and 
                    fetching data from the MongoDB,Used mongoose Schema for Database
                </li>
                <li>Acquired Knowledge to create a Secured website by learning the concepts of JWT Token 
                    Authentication and also worked on Role Based Authorization to Resources
                </li>
                <li>Acquired proficient skill in Node/Express Js, Wrote API'S and used Postman for API testing
                    and used the API in the frontend, Learned frontend and Backend connectivity
                </li>
                <li>Used bcryptjs to hash the sensitive data before storing it to the DataBase.</li>
                <li>Done Tasks for each concepts taught and pushed it in Github and deployed it.</li>
            </ul>
        </div>
    </motion.div>
    </div>
  )
}

export default Courses