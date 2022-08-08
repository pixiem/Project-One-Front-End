import React, { useEffect, useState } from 'react';
import "./Dashboard.css"
import cogoToast from 'cogo-toast';
import Navbar from "../Navbar/Navbar"
import { BsQuestionOctagonFill,BsFillArrowUpCircleFill } from "react-icons/bs";
import Footer from '../Footer/Footer';
import List from '../List/List';
const Darshboard = () => {
    const [name, setName] = useState('')
    const [des, setDes] = useState('')
    const [price, setPrice] = useState('')
    const [orderList, setOrderList] = useState([])
  console.log(orderList)
    const [manageAllorder, setManageoddOrder] = useState(false)
    const [addProduct, setAddproduct] = useState(true)
    const [img, setImg] = useState('')
    const [loading, setLoading] = useState(true)

    const productSubmit =(e)=>{
        e.preventDefault()
        const formData = new FormData();
        formData.append('droneName',name); 
        formData.append('droneDes',des); 
        formData.append('dronePrice',price); 
        formData.append('droneImg',img); 
        console.log(name,img,des,price)
        // axios.post('http://localhost:5000/addfood', formData)
        fetch('https://quiet-bayou-40136.herokuapp.com/addDrone',{
            method:'POST',
            body: formData
        })
        
        .then(res => {
            cogoToast.success('Product Added Successfully');

            console.log(res)});
       
    // e.target.reset();

    }
    const proNameHan = e =>{
        setName(e.target.value)
    }
    const proDesHan = e =>{
        setDes(e.target.value)
    }
    const proPriHan = e =>{
        setPrice(e.target.value)
    }
    const proImgHan = e =>{
        setImg(e.target.value)
    }
   if(manageAllorder === true){
    
    fetch(`https://quiet-bayou-40136.herokuapp.com/allorder`)
    .then(res => res.json())
    .then(data => {
        setOrderList(data);
        setLoading(false)
        console.log(data)
        return
    })
    
   }
    return (<>
    <Navbar></Navbar>
    <div className='container text-start'>
        <div className='d-flex align-items-center  '>
        <div className='d-flex justify-content-between align-items-center' style={{borderBottom:"3px solid black",width:"125px",marginRight:"5px"}}>
        <span style={{fontSize:"22px",fontWeight:700}}>Dashboard</span> </div> <span className="d-inline-block" tabindex="0" data-bs-toggle="tooltip" title="This is dashboard. You can control your system from here">
  <span  type="button" disabled><BsQuestionOctagonFill size={20}/></span>
</span></div> <br />
        <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Minima maxime incidunt dolor quasi voluptates deleniti. Repellat <br /> dignissimos possimus molestias rerum?</span>
    </div>
        <div className='container d-flex justify-content-center mt-5 '>
            <div className='d-flex  justify-content-center management'>
                <button onClick={()=>{
                    setAddproduct(true);setManageoddOrder(false)
                }} className='managementBtn'> + Add Product</button>
                <button onClick={()=>{
                    setAddproduct(false);setManageoddOrder(true)
                }} className='managementBtn'> + Manage All Order</button>
               
              
                
                
            </div>
        </div>

        {/* ADD PRODUCT */}
        {addProduct && <center>
        <form onSubmit={productSubmit} action="">
        <div className='row mt-5 justify-content-center w-100'>
            <div className='col-md-3 col-12 text-start '>
                <span style={{fontSize:"16px"}}><b>Product Name *</b></span> <br />
                <input onChange={proNameHan} style={{border:"1px solid black", padding:"8px",borderRadius:"5px", width:"100%", marginTop:"8px"}} placeholder='Example:(Milvik Pro 220)' type="text" />
                <br />
                <span style={{fontSize:"12px",color:"#63646a"}}> <b>Do not exceed 2o charecter when entering then product name</b> </span> <br />
                
                <span style={{fontSize:"16px"}}><b>Product Image *</b></span> <br />
                <input onChange={proImgHan} style={{border:"1px solid black", padding:"8px",borderRadius:"5px", width:"100%", marginTop:"8px"}} placeholder='Example:(Milvik Pro 220)' type="text" />
                <div className=''>
                <span style={{fontSize:"16px"}}><b>Price *</b></span> <br />
                <input onChange={proPriHan} style={{border:"1px solid black", padding:"8px",borderRadius:"5px", width:"100%", marginTop:"8px"}} placeholder='Number Only' type="text" /></div> <br />
                 <br />
            </div>
            <div className='col-md-3 col-12 text-start image '>
            <div className='mt-3'>
                <span style={{fontSize:"16px"}}><b>Product Description *</b></span> <br />
                <input onChange={proDesHan} style={{border:"1px solid black", padding:"8px",borderRadius:"5px", width:"100%", marginTop:"8px",height:'80px'}} placeholder='' type="text" /></div> <br />
          
<button type="submit" className='addproductBtn'>ADD PRODUCT</button>

            </div>
        </div>
        </form>
        </center>}
        {manageAllorder && <div>
            {loading && <div className="mt-5 spinner-border text-dark" role="status">
  <span className="sr-only"></span>
</div>}
            {!loading && <div >
                <div className='container mt-5 d-flex flex-column align-items-center'>
                {orderList.map(order=> <div  className='d-flex justify-content-center'>


<List user={order}></List>

                </div> )}
          </div>
                
                
                </div>}
            </div>}
        
       
       <Footer></Footer> </>);
};

export default Darshboard;