
import React from 'react'
import './Style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import img from '../../../Images/learnhub1.png'
import img1 from '../../../Images/portfolio.png'
import img2 from '../../../Images/travel-app.png'
// import { faHouse } from '@awesome.me/kit-KIT_CODE/icons/classic/solid'


const ProjectCard = () => {
  return (
    <main className='projectCard-main'>
        <section className="project-card">
         <img src={img1} alt="" />
         <p className='projectCard-para'>My Portfolio website.</p>
         <div className="link-container">
         <FontAwesomeIcon icon={faLink} />
         <Link to='https://harsh-portfolio-m8j39lxbn-harsh264209s-projects.vercel.app/' className='card-link'>Portfolio</Link>
         </div>
        </section>
        <section className="project-card">
        <img src={img} alt="" />
         <p className='projectCard-para'>Community platform for miniature painters to <br/> learn, connect, and showcase work.</p>
         <div className="link-container">
         <FontAwesomeIcon icon={faLink} />
         <Link to='https://eservices-rho.vercel.app/' className='card-link'>LearnHub</Link>
         </div>
        </section>
        <section className="project-card">
        <img src={img2} alt="" />
         <p className='projectCard-para'>Travel App</p>
         <div className="link-container">
         <FontAwesomeIcon icon={faLink} />
         <Link to='https://way-wonder.vercel.app/' className='card-link'>WonderWay</Link>
         </div>
        </section>
        
    </main>
  )
}

export default ProjectCard