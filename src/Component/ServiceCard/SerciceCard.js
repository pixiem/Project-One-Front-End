import React from 'react';
import { Link } from 'react-router-dom';
import { Panel } from 'rsuite';
import "./ServiceCard.css"
const SerciceCard = (props) => {
    const data = props.data;
    const _id = props.data._id;
    console.log(_id)
    return (
        <div className='col-md-4 col-12 mt-5 d-flex justify-content-center '>
            <div className='text-start serviceCard '>
                <div><img style={{borderTopRightRadius:"30px",borderTopLeftRadius:"30px"}} width="250px" height="165px" src={data.droneImg} alt="" /></div>
                <div style={{height:"328px",justifyContent: "space-between"}} className=' d-flex  flex-column'>
                <div style={{overflow:"hidden"}} className='p-3 '>
                <span style={{color:"#01abe9"}}>VIDEOGRAPHY</span>
                <h1 style={{fontSize:"26px",fontWeight:"600"}}>{data.droneName}</h1>
                <div >
                <span>
                    {data.droneDes}
                </span>
                </div>
                </div>
                <div style={{backgroundColor:"#4bc7f4",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                borderBottomLeftRadius:"30px",
                borderBottomRightRadius:"30px",
                color:"white",height:"40px"}} className="text-center" >
<Link  style={{fontSize:"20px",textDecoration:"none",color:"White"}} to={`/placeorder/${_id}`} >Buy Now</Link>
                </div>
                </div>
                

            </div>
        </div>
    );
};

export default SerciceCard;