


import React from 'react'
import Navbar from '../Navbar/Navbar';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import HomePage from '../Homepage/Homepage';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';
import AboutSection from '../AboutSection/AboutSection';
import ProjectCard from '../Projects/ProjectCard/ProjectCard';
import Achievements from '../Achievements/Achievements';



const Home = () => {
  return (
   
        <div className=''>
           <Navbar/>
         <hr />
       <HomePage/>
       <About/>
       <AboutSection/>
       <Skills/>
       <Projects/>
       <ProjectCard/>
       <Achievements/>
       <Contact/>
       <Footer/>
        </div>
      );
    }
    
 

export default Home