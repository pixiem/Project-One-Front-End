import React, { useState } from 'react';
import cogoToast from 'cogo-toast';
import { FiMail, FiLock } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { Radio } from 'rsuite';
import { Link, Router } from 'react-router-dom';
import useFirebase from '../../Hook/useFirebase';
import "./LoginPAge.css"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import initializeAuthentication from '../../Firebase/firebase.init';
import Navbars from '../Navbar/Navbar';




initializeAuthentication()

const LoginPage = () => {
    
    const auth = getAuth()
    const [name, setName] = useState(false)
    const [loginEmail, setLoginEmail] = useState(false)
    const [loginPass, setLoginpPass] = useState(false)
    const [email, setEmail] = useState(false)
    const [passone, setPassone] = useState(false)
    const [passtwo, setPasstwo] = useState(false)
    const [match, setMatch] = useState(false)
  
  
    const nameField = (e) => {
      setName(e.target.value)
    }
    const emailField = (e) => {
  
  
      setEmail(e.target.value)
  
    }
    const passoneField = (e) => {
      setPassone(e.target.value)
    }
    const passtwoField = (e) => {
      setPasstwo(e.target.value)
    }
    const loginEmailField = (e) => {
      setLoginEmail(e.target.value)
    }
    const loginPassField = (e) => {
      setLoginpPass(e.target.value)
    }
  
    const submitRegister = (e) => {
  
      e.preventDefault();
      if (passone === passtwo) {
        setMatch(false)
        e.target.reset()
        console.log(email, passone)
        createUserWithEmailAndPassword(auth, email, passone)
          .then((userCredential) => {
            cogoToast.success('Registration Successfull !');
  
            setTimeout(function () { window.location.reload() }, 2000);
            const user = userCredential.user;
            console.log(user)
          })
          .catch((error) => {
            if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
              cogoToast.error('This Email Account Already Registered');
            }
            else {
              cogoToast.error(error.message);
            }
  
            const errorMessage = error.message;
            console.log(errorMessage)
  
          });
  
      }
      else {
        setMatch(true)
      }
    }
    const loginSubmitHandle = (e) => {
      e.preventDefault()
      signInWithEmailAndPassword(auth, loginEmail, loginPass)
        .then((userCredential) => {
          cogoToast.success('Login Success');
          const user = userCredential.user;
          console.log(user)
  
        })
        .catch((error) => {
  
          if (error.message === 'Firebase: Error (auth/user-not-found).') {
            cogoToast.warn('Please Register Before Login');
          }
          else {
            cogoToast.error(error.message);
          }
  
          console.log(error.message)
        });
    }
  
  
    const { signInUsingGoogle, signInUsingFacebook, user, logout } = useFirebase();
  

  
 if(user.email){
  window.location.replace("/");

 }
   
    const [register, setRegister] = React.useState(false);
    const setLogin = () => {
      setRegister(true)
    }
    const setRegisters = () => {
      setRegister(false)
    }
    return ( <> 
    <Navbars></Navbars>
       <div className='mt-5' style={{width:"95%",display:'flex',justifyContent:"center"}}>
       {!register && !user.email && <center>

<div className=''>
  <button onClick={signInUsingGoogle} className='googleBtn' > <img width="35px" style={{ marginRight: "8px" }} src="./google.png" alt="" /> Sign Up With Google</button>
  <button onClick={signInUsingFacebook} className='facebookBtn' > <img width="50px" style={{ marginRight: "12px" }} src="./facebook.png" alt="" />Facebook Sigh Up</button>

</div>
<div className='d-flex mt-3'>
  <div className='w-50'><hr /></div>
  <div className='pe-2 ps-2'><span>OR</span></div>
  <div className='w-50'><hr /></div>

</div>
<div className='text-start mt-4'>
  <form onSubmit={loginSubmitHandle} className="ms-3">

    <span style={{ fontFamily: "poppins", fontWeight: "600" }}>Email Address</span>
    <div className="mx-auto" style={{ border: "1px solid #ff725e", padding: "8px", borderRadius: '5px', marginTop: "5px" }} className='d-flex'>
      <div className='me-2'>
        <FiMail />
      </div>
      <input required
        onChange={loginEmailField}
        placeholder="Enter Your Email Address" style={{ border: "none" }} type="email" name="email" />
    </div>
    <span style={{ fontFamily: "poppins", fontWeight: "600" }}>Password</span>
    <div className="mx-auto" style={{ border: "1px solid #ff725e", padding: "8px", borderRadius: '5px', marginTop: "5px" }} className='d-flex'>
      <div className='me-2'>
        <FiLock />
      </div>
      <input required
        onChange={loginPassField}
        placeholder="Enter Your Password" style={{ border: "none" }} type="password" name="password" />
    </div>
    <center className="mt-4"><b> <Link style={{ textDecoration: "none" }} to="/forgetpassword"><span style={{ color: "#ff725e" }}> <span >Forget Password</span> </span></Link> </b></center>
    <button type="submit" className="loginBtn mt-3 ">Login</button>
  </form>
  <center className="mt-4"><b>New user? <span style={{ color: "#ff725e" }}> <span onClick={() => { setLogin() }}>Register Here</span> </span></b></center>

</div>
</center>}
{register && <center>

<div className=''>
  <button onClick={signInUsingGoogle} className='googleBtn' > <img width="30px" style={{ marginRight: "8px" }} src="./google.png" alt="" /> Sign Up With Google</button>
  <button onClick={signInUsingFacebook} className='facebookBtn' > <img width="40px" style={{ marginRight: "12px" }} src="./facebook.png" alt="" />Facebook Sigh Up</button>

</div>
<div className='d-flex mt-1'>
  <div className='w-50'><hr /></div>
  <div className='pe-2 ps-2'><span>OR</span></div>
  <div className='w-50'><hr /></div>

</div>
<div className='text-start mt-1'>
  <form onSubmit={submitRegister} className="ms-3">


    <div className="mx-auto" style={{ border: "1px solid #ff725e", padding: "8px", borderRadius: '5px', marginTop: "5px" }} className='d-flex'>
      <div className='me-2'>
        <CgProfile />
      </div>
      <input required
        onChange={nameField}
        placeholder="Your Name" style={{ border: "none" }} type="name" name="name" />
    </div>

    <div className="mx-auto" style={{ border: "1px solid #ff725e", padding: "8px", borderRadius: '5px', marginTop: "5px" }} className='d-flex'>
      <div className='me-2'>
        <FiMail />
      </div>
      <input required
        onChange={emailField}
        placeholder="Email Address" style={{ border: "none" }} type="email" name="email" />
    </div>



    <div className="mx-auto" style={{ border: "1px solid #ff725e", padding: "8px", borderRadius: '5px', marginTop: "5px" }} className='d-flex'>
      <div className='me-2'>
        <FiLock />
      </div>
      <input required
        onChange={passoneField}
        placeholder="Password" style={{ border: "none" }} type="password" name="password" />
    </div>
    <div className="mx-auto" style={{ border: "1px solid #ff725e", padding: "8px", borderRadius: '5px', marginTop: "5px" }} className='d-flex'>
      <div className='me-2'>
        <FiLock />
      </div>
      <input required
        onChange={passtwoField}
        placeholder="Re-type Your Password" style={{ border: "none" }} type="password" name="password" />
    </div>
    {match && <div>
      <center> <span style={{ color: 'red', fontFamily: "poppins" }}>! Password Not Match</span>
      </center>
    </div>}
    <Radio required className='mt-2'> I agree to platform's <b><span style={{ color: "#ff725e" }}>Terms of Service</span></b> and <b><span style={{ color: "#ff725e" }}>Privacy Policy</span></b> </Radio>
    <button type="submit" className="loginBtn mt-2 ">Register</button>
  </form>
  <center className="mt-4"><b>Already Registered? <span style={{ color: "#ff725e" }}> <span onClick={() => { setRegisters() }}>Login here</span> </span></b></center>

</div>
</center>}

       </div>



      </>);
};

export default LoginPage;