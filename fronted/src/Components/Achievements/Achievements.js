
import React from 'react'
import {useNavigate} from 'react-router-dom'
import './style.css'

const Achievements = () => {

  const navigate=useNavigate()
  return (
   <main className='achievment-main-container'>
    <h1 className='achievment-heading' >My CertiFications</h1>
    <p className='achievment-para'>Here are a few past certificates I've earned 🎊.</p>
    <section className='achievment-main-section'>
        <div className="achievment-card">
       <a href="https://drive.google.com/file/d/1C_eAgzaZlIQ95-OFeDSWpnHHupfArdUq/view?usp=drivesdk"><img src="https://images.pexels.com/photos/7821579/pexels-photo-7821579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></a>  
        </div>
        <div className="achievment-card">
       <a href="https://drive.google.com/file/d/1CafKKF_zB1V23vQ_r2dZ7HD3fvoHf2Pm/view?usp=drivesdk"><img src="https://images.pexels.com/photos/8524957/pexels-photo-8524957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></a> 
        </div>
        <div className="achievment-card">
       <a href="https://drive.google.com/file/d/1CaYqkSx_8h3v_L_oAXliikjxFQhWG35l/view?usp=drivesdk"><img src="https://images.pexels.com/photos/8112185/pexels-photo-8112185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></a> 
         
        </div>
    </section>
    <section className='contact-section1'>
     <h1 className='contact-section-heading' >Connect with me 🙋🏿</h1>
     <p className='contact-section-para'>I’m always open to discussing web development work or partnership opportunities.</p>
      <button className="contact-btn" onClick={()=>{navigate('/contact')}}>Start a Conversation 🤙 </button>
    </section>
   </main>
  )
}

export default Achievements