import React from 'react';
import "./Footer.css"
import { BsFacebook,BsTwitter,BsYoutube,BsLinkedin,BsStackOverflow } from "react-icons/bs";
const Footer = () => {
    return (
       <div className='footerMain w-100 p-3'>
            <div className='row w-100'>
            <div className='col-md-4 col-12'>
             <div className='my-3'> 
                 <img width='70px' src="drone2.png" alt="" />
            </div>
            <span style={{color:"white",fontSize:"14px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsum, magni culpa nulla itaque incidunt. Impedit, incidunt? Eligendi, tenetur soluta!</span>
            <div className='d-flex justify-content-center'>
                <div className='singlelogo'> <BsFacebook size={40}/></div>
                <div className='singlelogo'> <BsTwitter size={40}/></div>
                <div className='singlelogo'> <BsYoutube size={40}/></div>
                <div className='singlelogo'> <BsLinkedin size={40}/></div>
                <div className='singlelogo'> <BsStackOverflow size={40}/></div>
            </div>
            </div>
            <div className='col-md-2 col-12 text-start ps-5 pt-3'>
                <span style={{color:"white",fontSize:"20px"}}>Product</span>
                <br /> <br />
                <span  style={{color:"#f5f2ed"}}>Theme Design</span> <br />
                <span style={{color:"#f5f2ed"}}>Plugin Design</span> <br />
                <span style={{color:"#f5f2ed"}}>Wordpress</span> <br />
                <span style={{color:"#f5f2ed"}}>Joomla Template</span> <br />
                <span style={{color:"#f5f2ed"}}>HTML Template</span>
            </div>
            <div className='col-md-2 col-12 text-start ps-5 pt-3'>
                <span style={{color:"white",fontSize:"20px"}}>Useful Link</span>
                <br /> <br />
                <span  style={{color:"#f5f2ed"}}>Top Speed Drone</span> <br />
                <span style={{color:"#f5f2ed"}}>Budget Friendly</span> <br />
                <span style={{color:"#f5f2ed"}}>Video Shooting</span> <br />
                <span style={{color:"#f5f2ed"}}>Night Vision</span> <br />
                <span style={{color:"#f5f2ed"}}>Turbo Speed</span>
            </div>
            <div className='col-md-4 pt-3 ps-3 col-12 text-start'>
               <div style={{marginBottom:"20px"}}>
               <span style={{fontSize:"22px",color:'white',fontWeight:'700'}}>Contact US</span>
               </div>
                <div className='d-flex align-items-center'>
                    <img width="20px" height="20" src="./mail-64.png" alt="" />
                    <input style={{backgroundColor:"black",borderTop:"none",
                    borderLeft:"none",
                    borderRight:"none",
                    borderBottop:"1px solid white",
                    marginLeft:"8px"}} placeholder="Enter Your Email" type="text" />
                    <img width='25px' height="25px" src="./rightArrow.png" alt="" />

                </div>
            </div>
            
        </div>
       </div>
    );
};

export default Footer;