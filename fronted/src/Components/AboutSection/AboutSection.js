
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css'
import CodeIcon from '@mui/icons-material/Code';

const AboutSection = () => {
  return (
    <div className="about-section-main">
<main className='about-section'>
<section className="section section-padding">
  <div className="highlight-circle">
  {/* <FontAwesomeIcon icon="fa-solid fa-code" /> */}
  <CodeIcon sx={{fontSize:'28px',margin:'20px'}}/>
   
  </div>
  <div style={{margin:'0px auto',marginTop:'20px',textAlign:'center'}}>
  <h2 style={{fontSize:'22px',fontWeight:'bold'}}>Web Developer</h2>
  <p style={{marginTop:'12px',fontSize:'18px'}}>I like to code things from scratch, and enjoy <br/> bringing ideas to life in the browser.</p>
  </div>

  <div  style={{margin:'0px auto',marginTop:'20px',textAlign:'center'}}>
    <p style={{color:'blueviolet',fontSize:'18px',fontWeight:'400'}}>Language I can speak :</p>
   <p style={{marginTop:'6px',fontSize:'18px'}} >HTML, CSS, Javascript, React, Node,</p>
  </div>
  <div  style={{margin:'0px auto',marginTop:'26px',textAlign:'center'}}>
    <p style={{color:'blueviolet',fontSize:'18px',fontWeight:'400'}}>Dev Tools:</p>
    <ul style={{marginTop:'8px',fontSize:'18px',lineHeight:'1.6'}}>
      <li>Github</li>
      <li>Material UI</li>
      <li>Talwind CSS</li>
      <li>Bootstrap</li>
      <li>Netlify</li>
      <li>VS Code</li>
      <li>Thunder Client</li>
    </ul>
  </div>
 
</section> 
</main>
    </div>

  )
}

export default AboutSection