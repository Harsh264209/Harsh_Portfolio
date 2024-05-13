import React from 'react'
import heroImg from '../../Images/hero-man.png'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import './style.css'
import { toast } from 'react-toastify';


const Contact = () => {

  const navigate=useNavigate()
  const [credentials,setCredentials]=useState({email:"",name:"",message:""})

  const onSubmithandler=async(e)=>{
    try {
      e.preventDefault();
       await axios.post('https://backend-portfolio-1-n8u4.onrender.com/new',credentials)
       console.log("Data submitted successfully");
       toast("Message sent sucessfully")
       setCredentials({ email: "", name: "", message: "" });
    } catch (error) {
      console.error("Error submitting data:", error);
      toast.error("failed to send message")
    }
  }

  const onChangehandler = (e) => {
    const { name, value } = e.target;
    setCredentials(prevState => ({
      ...prevState,
      [name]: value
    }));
  };



  return (
    <main className='ProjectContact-main'>

      <div>
      <button style={{color:"blueviolet",right:'0',position:'absolute',marginRight:'40px'}} onClick={()=>{navigate('/')}}>close</button>
      </div>
   
    <div className="div" style={{margin:'0px auto',width:'140px',marginBottom:'-50px',marginTop:'60px'}}>
      <img src={heroImg} alt="" />
    </div>
    <hr/>
    <h1 style={{fontSize:'38px',fontWeight:'400',textAlign:'center',marginTop:'80px',marginBottom:'60px'}}>Thanks for taking the time to reach out.<br/> How can I help you today?
</h1>
    <section className='contact-section'>
        <form  onSubmit={onSubmithandler}>
          <div className='input-flex-container'>
          <div className='input-container'>
            <label htmlFor="">Name</label>
            <input name='name' value={credentials.name} type="text" onChange={onChangehandler} className='input-box' />
          </div>
          <div className='input-container'>
            <label htmlFor="">Email</label>
            <input name='email' placeholder='' value={credentials.email} onChange={onChangehandler} type="email" className='input-box' />
          </div>
          </div>

          <div className='input-container-textArea'>
            <label htmlFor="">Message</label>
            <textarea name='message' value={credentials.message} onChange={onChangehandler} className='textarea'  id=""></textarea>
          </div>
          
<div  className='btn-div'>
  <button className="submit-btn">Submit</button>
</div>
 </form>
 </section>
    
  </main>
  )
}

export default Contact
