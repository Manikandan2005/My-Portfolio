import "./app.scss"
import About from "./components/about/About";
import Courses from "./components/courses/Courses";
import Experience from "./components/experience/Experience";
import Home from "./components/home/Home";
import NavBar from "./components/navbar/NavBar";
import Project from "./components/projects/Project";
import SectionIntro from "./components/sectionintro/SectionIntro";
import Contact from './components/contact/Contact'


const App = () => {
  return <div>
    
    <section id="Home">
      <NavBar/>
      <Home/>
    </section>
    <section id="About">
      <About/>
    </section>
    <section id="Experience">
      <Experience/>
    </section>
    <section id="Projects">
      <SectionIntro/>
    </section>
    <Project/>
    <section id="Courses"><Courses/></section>
    <section id="Skills&Contact"><Contact/></section>
  </div>;
};

export default App;
