
import React from 'react'
import './style.css'
import heroImg from '../../Images/hero-man.png'
import heroImg2 from '../../Images/hero2-img.avif'



const HomePage = () => {
  return (
  
     <>
      
      <main className='home-main-container'>
        <section >
          <div className='home-text-container' >
          <h1 className='hero-heading'>Designer, Web Developer & Student</h1>
          <p className='home-para'>I design and code beautifully simple things, and I love what I do.</p>
          </div>
        </section>
        <section className='home-img-section'>
        <img src={heroImg}  className='hero-img' alt="" />
          <img className='hero2-img' src={heroImg2} alt="" />
        </section>
      </main>
    
   </>
   
  )
}

export default HomePage