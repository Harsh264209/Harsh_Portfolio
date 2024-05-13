import React, { useState, useEffect } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../../Images/Harsh__7_-removebg-preview.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="">
      <nav
        style={{
          width: "100vw",
          padding: "0px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <img src={logo} alt="" className="logo" />
        </div>
        <div>
       
   {/* <MenuIcon className="menu-icon" sx={{display:'none',marginRight:'30px'}}/>    */}

          <button
            className="nav-btn"
            onClick={() => {
              navigate("/contact");
            }}
          >
            Say Hello 👋
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

// <nav className='fixed md:fixed text-white  w-screen md:z-1000 navbar  md:shadow-md sm:shadow-none  ' >
// <ion-icon className={`${isMenuOpen ? "close-circle-sharp" :"menu-outline"}`}></ion-icon>


// {`${isMenuOpen ? "close-circle-sharp" :"menu-outline"}`}



  






