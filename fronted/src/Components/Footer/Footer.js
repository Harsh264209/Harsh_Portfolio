


import React from 'react'
import './style.css'
// import { faLinkedinIn} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
   <main className='footer-main-container'>
    <section className='footer-section1'>
     <img src="" alt="" />
     <h2 style={{textAlign:'center',fontSize:'24px'}}>Living, learning, & leveling up<br/>  one day at a time.</h2>
    </section>

    <section className='footer-section2' >
     <div className="logo-cirlce" >
    <a href="https://www.linkedin.com/in/harsh-satpute-43399023a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> <i className="pi pi-linkedin"  ></i></a>
    
     </div>
     <div className="logo-cirlce" >
    <a href="https://github.com/Harsh264209"><i className="pi pi-github" ></i></a>
     
     </div>
     <div className="logo-cirlce">
    <a href="hsatpute38@gmail.com"><i className="pi pi-envelope"></i></a>
     
     </div>

     {/* <div className="logo-cirlce">
    
     <i className="pi pi-instagram"></i>
     </div> */}
     <div className="logo-cirlce">
    <a href="https://wa.link/9fn5rk"><i className="pi pi-whatsapp"></i></a>
    
    </div>


    </section>
    
   

   </main>
  )
}

export default Footer