import React, { useState } from 'react';
import "./List.css"
const List = (props) => {
    const user = props.user;
    const [remove,setRemove]= useState(false);


    const handleDelete = (id) =>{
        setRemove(true);
console.log(id)
        const url = `https://quiet-bayou-40136.herokuapp.com/removeorder/${id}`;
        fetch(url,{
            method:"DELETE",
            headers:{"content-type": "application/json"}
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount){
                props.again()
                setRemove(false)

            }
        })
        
    }
    return (
        <div style={{width:"80%"}} className='row  align-items-center singlerow shadow-lg'>
            <div className='col-md-2 col-6 text-center text-md-start pb-5'> <img style={{borderRadius:"20px"}} width="100%" height="100%" src={user.image} alt="" /> </div>
            <div style={{color: "#6D0909",    }} className='col-md-3 col-6 text-center text-md-start'><h3 style={{fontWeight: "600",marginTop:"8px"}}>{user.name}</h3></div>
            <div style={{fontSize:"18px"}} className='col-md-2 col-12 pe-5 text-md-center text-end'> <strong>Quantity : {user.quantity}</strong> </div>
            <div style={{fontSize:"18px"}} className='col-md-2 col-12 pe-5 text-md-start text-end'> <strong>Price : {user.price}</strong> </div>
           
            
            <div style={{textAlign:"right"}} className='col-md-2 col-12 text-end pe-5 '><button 
            onClick={()=>handleDelete(user._id)}
            className='callbtn shadow-lg'>{!remove &&<span>Remove</span>} {remove &&<div className="spinner-border text-light" role="status">
            <span className="sr-only"></span>
          </div>}</button>  </div>
            
            
        </div>
    );
};

export default List;