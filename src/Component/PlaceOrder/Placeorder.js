import React, { useEffect, useState } from 'react';
import "./Placeorder.css"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import { useParams } from 'react-router-dom';
import axios from 'axios';
import useFirebase from '../../Hook/useFirebase';
import cogoToast from 'cogo-toast';
const Placeorder = () => {
    const {serviceId} =  useParams();
    const [product, setProduct]= useState();
    const [loading,setLoading] = useState(true);
    const [loadings,setLoadings] = useState(false);
    const [droneQuantity,setDronequantity] = useState('');
   
   

    useEffect(()=>{
        fetch(`https://quiet-bayou-40136.herokuapp.com/placeorder/${serviceId}`, {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
      
          })
        .then(res => res.json())
        .then(data => {
           
            setProduct(data)
            setLoading(false)})
            
    })
    const {user} = useFirebase();
    const placeORder = () =>{
        
        setLoadings(true);
        const placeOrderDrone = { 
            name:product.droneName,
            price:product.dronePrice,
            image:product.droneImg,quantity:droneQuantity,
            email:user.email
         }
        console.log(placeOrderDrone)
        axios.post('https://quiet-bayou-40136.herokuapp.com/placeorder', placeOrderDrone)
        .then(res =>{ 
            setLoadings(false)
        cogoToast.success(`${droneQuantity} Product Added`);
         } )
        

    }
  

  
    return (<>
     <Navbar></Navbar>
     {loading && <p>Loading</p>}
            {!loading &&<div style={{height:"650px"}} className='w-100 row justify-content-center'>
            <div className='col-md-5 mt-5  col-12'>
                <div>
                    <img style={{borderRadius:"15px",marginTop:"50px"}} width="75%" src={product.droneImg} alt="" />
                </div>
            </div>
            <div className='col-md-5 mt-5 col-12 justify-content-center align-items-center d-flex'>
                <div className='text-start'>
                    <h2 style={{fontFamily:"nunito",fontWeight:"700",borderBottom:"4px solid black"}}>{product.droneName}</h2>
                  <div className='ms-5'>
                  <h5> <b>Price :</b> {product.dronePrice}</h5>
                    <div className='d-flex'>
                    <h5> <b>Quantity : </b> </h5>
                    <input required className='ms-3 w-25' onChange={e=>{setDronequantity(e.target.value)}} type="number" />
                    </div>
                    <div className=''>
                    <h5 style={{marginTop:"10px"}}> <b>Description   </b> </h5>
                    <div>
                    {product.droneDes} 
                    </div>
                    
                    </div>
                    <button style={{backgroundColor:"black",borderRadius:"10px",padding:"8px",color:"white",border:"none",marginTop:"10px"}} onClick={placeORder}>{!loadings&& <span>Place Order</span> }
                    {loadings&& <div className="spinner-border text-light" role="status">
  <span className="sr-only"></span>
</div> }
                    </button>
                  </div>

                </div>
            </div>
        </div>}
       <Footer></Footer> </>
 );
};

export default Placeorder;