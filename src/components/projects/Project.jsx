import { useRef } from "react";
import {motion,useScroll,useSpring,useTransform} from "framer-motion"
import '../projects/Project.scss'
const items = [
  {
    id: 1,
    title: "Sales Predictor",
    img: "https://static.javatpoint.com/tutorial/machine-learning/images/sales-prediction-using-machine-learning7.png",
    desc: "Developed a SARIMA model for sales forecasting using Flask and integrated it with Angular for an interactive user interface Employed MongoDB for secure user authentication, leveraging Express.js to host the server Facilitated seamless communication between frontend and backend components for efficient data exchange.",
  },
  {
    id: 2,
    title: "User Authentication",
    img: "https://nordvpn.com/wp-content/uploads/blog-social-securing-cryptocurrency-a-way-out-of-the-hackers-target.svg",
    desc: "Created Admin and User Page, When the user initially Signup the data is stored in MongoDB Collection, Sensitive information like password is hashed using bcryptjs before storing it in DB. Used JWT , for Role-Based Authorization of resources, User is allowed access the API based on role.Wrote Mongoose schema to maintain a structure in MongoDB, Developed a secured website.",
  },
  {
    id: 3,
    title: "Job Board App",
    img: "https://st.depositphotos.com/1074452/4552/i/450/depositphotos_45520643-stock-photo-jobs-map-represents-worldwide-or.jpg",
    desc:"Developed a job portal app using the MERN stack that employs MongoDB for data storage, Express.js for API development, React.js for the frontend, and Node.js for server-side operations.Incorporated JWT for authentication, Mongoose for data modeling, Axios for API communication, and Redux for state management, enhancing user experience with features like job recommendations and chat functionality."
  }
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Project = ()=>{
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
      <div className="portfolio" ref={ref}>
        <div className="progress">
          <h1>Projects</h1>
          <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map((item) => (
          <Single item={item} key={item.id} />
        ))}
      </div>
    );
  };


export default Project