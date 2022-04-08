import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import "./Home.css"
import { AiOutlineCamera } from "react-icons/ai";
import { BsDisplay, BsJoystick } from "react-icons/bs";
import { FaFan } from "react-icons/fa";
import SerciceCard from '../ServiceCard/SerciceCard';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Footer from '../Footer/Footer';
import { Loader,Paragraph } from 'rsuite';
const Home = () => {
    const [services,setServices] = useState([])
    const [drone,setDrone] = useState(false)
    console.log(services)
    useEffect(() => {
        fetch("https://quiet-bayou-40136.herokuapp.com/getDrone")
          .then(res => res.json())
          .then(
            (data) => {
                setDrone(true)
                setServices(data);
               
            },
           
            (error) => {
            
            }
          )
      }, [])

    return (
        <div>
            <Navbar></Navbar>
            {/* BANNER */}
            <div style={{ marginTop: "30px" }}>
                <span style={{ fontWeight: "700", fontSize: "12px", letterSpacing: "2px" }}>AERIAL PHOTOGRAPHY</span>
                <h1 style={{ fontFamily: 'Nunito', fontSize: "42px", marginBottom: "20px" }}>There Are Many <b style={{ fontWeight: "900" }}>Great Ways</b> <br />To Use Drones</h1>
                <img width="100%" src="./banner.png" alt="" />
            </div>
            {/* SERVICES */}
            {drone && <div style={{ paddingBottom: "40px" }}>
            <div className='my-5'>
                <h1 style={{fontFamily:"nunito",fontSize:"45px",letterSpacing:"4px"}}>Our Services</h1>
                <span style={{fontSize:"15px"}}>We Provide World's Best Drone Services For You !</span>
                </div>
                <div className='row  w-100'  style={{}}>
                   {services.map(service=> <SerciceCard data={service}></SerciceCard>)}
                </div>
            </div>}
            {!drone && <div>
               <div className='my-5'>
                <h1 style={{fontFamily:"nunito",fontSize:"40px"}}>We Rent The Best Drones</h1>
                <span style={{fontSize:"15px"}}>We Rent The Best Drones
                    If you’re looking for a portable drone or a pro tool, <br /> we have a drone for you!</span>
                </div>
                <p class="placeholder-glow">
  <span class="placeholder col-8"></span>
  <span class="placeholder col-8"></span>
  <span class="placeholder col-8"></span>
  <span class="placeholder col-8"></span>
</p>

                </div>}
     {/* BEST DRONES */}

     <div style={{marginBottom:"100px"}} className='bestDrone mx-auto '>
                <div className='my-5'>
                <h1 style={{fontFamily:"nunito",fontSize:"40px"}}>We Rent The Best Drones</h1>
                <span style={{fontSize:"15px"}}>We Rent The Best Drones
                    If you’re looking for a portable drone or a pro tool, <br /> we have a drone for you!</span>
                </div>
                <OwlCarousel autoplay={true} autoplayTimeout={2000} className='owl-theme' loop margin={10} nav>
                    <div class='item'>
                        <img src="http://squadrone.bold-themes.com/main-demo/wp-content/uploads/sites/2/2017/12/inner_product_04.png" alt="" />
                    </div>
                    <div class='item'>
                        <img src="http://squadrone.bold-themes.com/main-demo/wp-content/uploads/sites/2/2017/12/inner_product_09.png" alt="" />
                    </div>
                    <div class='item'>
                        <img src="http://squadrone.bold-themes.com/main-demo/wp-content/uploads/sites/2/2017/12/inner_product_02.png" alt="" />
                    </div>
                    <div class='item'>
                        <img src="http://squadrone.bold-themes.com/main-demo/wp-content/uploads/sites/2/2017/12/inner_product_01.png" alt="" />
                    </div>
                    <div class='item'>
                        <img src="http://squadrone.bold-themes.com/main-demo/wp-content/uploads/sites/2/2017/12/inner_product_07.png" alt="" />
                    </div>
                    <div class='item'>
                        <img src="http://squadrone.bold-themes.com/main-demo/wp-content/uploads/sites/2/2017/12/inner_product_09.png" alt="" />
                    </div>



                </OwlCarousel>
            </div>


            {/* FEATURES */}


            <div className='my-5'> <h1>We Picture Objects And Spaces</h1>
                <span>Information highway will close the loop on focusing <br /> solely on the bottom line.</span></div>
            <div className='features w-100 row justify-content-center '>
                <div className='col-md-3 p-3 d-flex flex-column align-items-center'>
                    <div className='text-md-right' style={{ width: "250px", textAlign: "right" }}> <div className=''>
                        <span><b>AERIAL PHOTOGRAPHY</b></span> <AiOutlineCamera size="40" /></div>
                        <div>
                            <span>A drone is an unmanned aerial vehicle (UAV) that is fitted with various equipment including photography and videography leverage agile frameworks.</span>
                        </div>
                    </div>
                    <div style={{ width: "250px", textAlign: "right", marginTop: "40px" }}> <div className=''>
                        <span><b>RESOLUTION </b></span> <BsDisplay size="40" /></div>
                        <div>
                            <span>These devices can hover and maneuver above your event capturing images and video of not just individuals iterative approaches to corporate strategy.
                            </span>
                        </div>
                    </div>
                </div>
                <div className='mx-5 col-md-3 d-flex align-items-center'>
                    <img width="100%" src="/services.png" alt="" />
                </div>
                <div className='col-md-3 d-flex flex-column align-items-center p-3' >
                    <div style={{ width: "250px", textAlign: "left" }}> <div className=''>
                        <span><b>PROPELLERS</b></span> <FaFan size="40" /></div>
                        <div>
                            <span>Our drone event services provide you with a skilled UAV pilot that will provide drone event photography or good videography a robust synopsis for high level.</span>
                        </div>
                    </div>
                    <div style={{ width: "250px", textAlign: "left", marginTop: "40px" }}> <div className=''>
                        <span><b>POWERFUL & PORTABLE</b></span> <BsJoystick size="40" /></div>
                        <div>
                            <span>Drone event videographers can record all the activities (in the water too) throughout the event and record from inaccessible foster collaborative proposition.</span>
                        </div>
                    </div>
                </div>
            </div>

            <button className='moreserv my-5'>LEARN MORE</button>
       
<Footer></Footer>
        </div>
    );
};

export default Home;