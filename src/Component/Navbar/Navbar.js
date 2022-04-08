import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hook/useFirebase';
import "./Navbar.css"
const Navbar = () => {
  const { user,logout} = useFirebase();

    return (
        <div className='px-md-5'>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid mt-5">
    <img width="180px" src="./logo-black.png" alt="" />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse  d-md-flex justify-content-between" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item me-md-5">
          <Link to="/" style={{color:"black",fontWeight:"600",textDecoration:"none"}}  class="nav-link " aria-current="page" href="#">Home</Link>
        </li>
        <li class="nav-item me-md-5">
          <a style={{color:"black",fontWeight:"600"}}  class="nav-link" href="#">Latest Drones</a>
        </li>
        <li class="nav-item">
          <a style={{color:"black",fontWeight:"600"}} class="nav-link" href="#">About Us</a>
        </li>
       
      </ul>
      
      {!user.email && <div>
          <Link style={{textDecoration:"none"}} to="/login" className='logreg me-md-5'>Log In</Link>
      </div>}
      {user.email && <div>
        <div class="dropdown">
  <button class="btn profile dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    {user.photoURL ? <img width='40px' style={{borderRadius:"50%"}} src={`${user.photoURL}`} alt="" /> :<img width='30px' style={{borderRadius:"50%"}} src='./pngegg (1).png' alt="" /> } <span style={{fontSize:"18px"}}>My Profile</span>
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <Link style={{color:"white"}} class="dropdown-item" to="/Myorder">My Orders</Link>
    <Link style={{color:"white"}} class="dropdown-item" to="/dashboard">Dashboard</Link>
    <span onClick={logout}  style={{color:"white"}} class="dropdown-item">Log Out</span>
    
  </div>
</div></div>}
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;