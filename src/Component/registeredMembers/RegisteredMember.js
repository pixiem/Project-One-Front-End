import React, { useEffect, useState } from 'react';
import useFirebase from '../../Hook/useFirebase';
import List from '../List/List';
import Navbar from '../Navbar/Navbar';
import "./Registeredmember.css"
const RegisteredMember = () => {
const [loading, setLoading] = useState(true);
const [page, setPAge] = useState(false);
      
   const {user} = useFirebase();
    const [alluser, setAlluser]= useState([]);
    console.log(alluser.length)
 const again =()=>{
    fetch(`https://quiet-bayou-40136.herokuapp.com/myorders/${user.email}`)
    .then(res => res.json())
    .then(data => {
        setAlluser(data);
        if(alluser.length === 0){
            setPAge(true)
        }
    })
 }
    
   if(user.email){
    
        fetch(`https://quiet-bayou-40136.herokuapp.com/myorders/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAlluser(data);
                setLoading(false);
                if(data.length===0){
                    setPAge(true)
                    
                }
            })
   
         
   
    
   }

    return (
        <div  className=''> <br />
        <Navbar></Navbar>
         <br />
         
            <div>
            <div  className=" my-5 text-center justify-content-center">
             <div className='my-5'>
                <h1 style={{fontFamily:"nunito",fontSize:"40px"}}>My Order List</h1>
                <span style={{fontSize:"15px"}}>You Can Delete Any Of These Product, <br /> If You Don't Want To Buy!</span>
                </div>

                </div>
                {page &&<p>Nothing</p>}
                {loading &&   <p class="placeholder-glow">
  <span class="placeholder col-8"></span>
  <span class="placeholder col-8"></span>
  <span class="placeholder col-8"></span>
  <span class="placeholder col-8"></span>
</p>}
         {!loading && <div className='container d-flex flex-column align-items-center'>
          {alluser.map(user => <List again={again}  user={user}></List>)}
          </div>}
            </div>
        </div>
    );
};

export default RegisteredMember;