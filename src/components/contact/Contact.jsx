import { useRef } from "react";
import './contact.scss'
import {motion,useInView} from "framer-motion"

const variants = {
    initial: {
      x: -1000,
      opacity: 0,
    },
    animate: {
      x: 1,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };


function Contact() {
    const ref = useRef();
    const isInView = useInView(ref, { margin: "-100px" });
    return (
    <motion.div 
        className='pagewrapper'  
        initial="initial"
        variants={variants}
        ref={ref}
        animate={isInView ? "animate" : "initial"}>
    <motion.div className='skillwrapper' variants={variants}>

        <div className="skillhead">
            Skills
        </div>

        <div className="columns">
            <ul className='frontend'>
            <h2>Frontend</h2>
                <li>Javascript</li>
                <li>HTML/CSS</li>
                <li>React</li>
                <li>Angular</li>
            </ul>
        </div>

        <div>
            <ul className='backend'>
            <h2>Backend</h2>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MySQL</li>
                <li>MongoDB</li>
            </ul>
        </div>

        <div>
            <ul className='SAP'>
            <h2>SAP</h2>
                <li>SAP ABAP</li>
                <li>PIPO</li>
                <li>Odata</li>
                <li>RFC</li>
            </ul>
        </div>

        <div>
            <ul className='frameworks'>
                <h2>Frameworks</h2>
                <li>Github</li>
                <li>Postman</li>
                <li>SoapUI</li>
                <li>SAP Logon</li>
            </ul>
        </div>

    </motion.div>     

    <div className="contactwrapper" variants={variants}>
        <div className='contactdetails'>
        <div className="contacthead">
            <button>Contact</button>
        </div>
        <div className="email">
            <b><i className="fa-solid fa-envelope" style={{color: "#f7f9fc"}}/>&nbsp;Email : </b>manismvr321@gmail.com
        </div>
        <div className='phone'>
            <b><i className="fa-solid fa-phone" style={{color: "#f7f9fc"}}/>&nbsp;Phone : </b>+91 7904782957
        </div>
        <div className='address'>
            <b><i className="fa-solid fa-location-dot" style={{color: "#f7f9fc"}}/>&nbsp;Address : </b>18/2, Kumarappa Lane, &nbsp;&nbsp;Nungambakkam, Chennai-600034
        </div>
        </div>
    </div>

    </motion.div>
    )
}

export default Contact