
import React from 'react'
import './style.css'
import axios from 'axios'
import heroImg from '../../Images/hero-man.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';


const ProjectContact = () => {

  const navigate=useNavigate()
  const [credentials,setCredentials]=useState({email:"",name:"",budget:"",projectType:"",message:""})


  const onSubmithandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://backend-portfolio-1-n8u4.onrender.com/newproject', credentials);
      console.log("Data submitted successfully");
      toast("Message sent sucessfully")
      setCredentials({email:"",name:"",budget:"",projectType:"",message:""})
    } catch (error) {
      console.error("Error submitting data:", error);
      toast.error("failed to send message")
    }
  };

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
    <h1 style={{fontSize:'38px',fontWeight:'400',textAlign:'center',marginTop:'80px',marginBottom:'60px'}}>I’m excited to learn about your project.<br/> Ready to get started?</h1>
    <section className='ProjectContact-section'>
        <form action="" onSubmit={onSubmithandler}>
            <div className="input-container1">
              <div className='input-container'>
              <label htmlFor="" >Name</label>
                <input className='input-box' onChange={onChangehandler} value={credentials.name} name='name' type='text'/>
              </div>
            <div className='input-container'>
            <label htmlFor="">Email</label>
                <input className='input-box' onChange={onChangehandler} value={credentials.email} type='email' name='email' unique='true'/>
            </div>
            </div>

            <div className="input-container2">
            <div className='input-container'>
            <label htmlFor="">Type of project</label>
           <select className="form-selec input-box" onChange={onChangehandler} name='projectType'  value={credentials.projectType } aria-label="Default select example">
           <option selected>Select project</option>
            <option value="1">Responsive Design</option>
            <option value="1">Web Application</option>
          </select>
            </div>

            <div className='input-container'>
            <label htmlFor="">Budget</label>
           <select className="form-selec input-box" name='budget' onChange={onChangehandler} value={credentials.budget} aria-label="Default select example">
           <option selected>Select </option>
            <option value="1">$149-$250</option>
            <option value="1">$250-$750</option>
            <option value="1">$750-$2000</option>
          </select>
            </div>

            </div>
            <div className="div" style={{display:'flex',flexDirection:'column'}}>
              <label style={{marginLeft:'40px'}} htmlFor="">Additional Detalis</label>
            <textarea name='message' className='project-textarea' onChange={onChangehandler}  value={credentials.message}  id="" cols="30" rows="10" ></textarea>
           </div>
<div className="project-submit-btn-container" >
  <button className="project-submit-btn">Submit</button>
</div>
        </form>
    </section>
  </main>
  )
}

export default ProjectContact