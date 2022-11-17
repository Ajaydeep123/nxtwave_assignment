import React from 'react'
import companyLogo from "../assets/logo.png"
import avatar from "../assets/avatar.png"
import './Navbar.css'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
<nav class="navbar bg-light shadow-sm p-3 mb-5 bg-white rounded ">
  {/* <div class="container-fluid flex justify-between items-center w-full h-20 px-4 "> */}
    <div className='logoone'>
    {/* <Link to="/"> */}
    <img src={companyLogo} alt="Navbox"/>
    {/* </Link> */}
    </div>
    <div className='onleft'>
      <Link to="/AddItems">
    <button type="button" class='additems  btn btn-success border-0 ' style={{backgroundColor:"#2DCA73"}}>ADD ITEM</button>
    </Link>
    <img src={avatar}class="rounded-circle float-end"  alt="..."/>
  </div>
  
  

</nav>
  )
}

export default Navbar
