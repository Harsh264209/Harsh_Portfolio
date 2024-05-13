
import React from 'react'
import './style.css'
import {useNavigate} from 'react-router-dom'


const Contact = () => {

  const navigate=useNavigate()
  return(
 
    <main className='project-contact-main-section'>
      <section className='project-contact-section'>
       <h1 className='project-contact-heading' style={{color:'white',fontWeight:'700',fontSize:'28px'}}>Start a project</h1>
       <p className='project-contact-para' style={{fontSize:'18px',textAlign:'center'}}>Interested in working together? We should queue up <br/> a time to chat. I’ll buy the coffee.</p>
       <button className="project-contact-btn" onClick={()=>{navigate('/project-details')}}>Let's do together</button>
      </section>
    </main>
    

  )
}
 


export default Contact