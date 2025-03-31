import React, { useState } from "react";
import axios from "axios";
import './login.css'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");  
  const [visible , setVisible] = useState(false);

  const Navigate = useNavigate();
  const handleSubmit = async (e) => {

      
    
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", { email, password });
      console.log(response);
      if(response.data.token){
        localStorage.setItem("token", response.data.token); 
        toast.success('Login Sucessfully',{
          position:"top-right",
          autoClose:3000,
          hideProgressBar:false,
          closeOnClick:true,
          pauseOnHover:true,
          draggable:true,
          progress:undefined,
          theme:'dark',
      });
      Navigate("/drawer");
      } else{
        toast.error('Invalid Username & Password',{
          position:"top-right",
          autoClose:3000,
          hideProgressBar:false,
          closeOnClick:true,
          pauseOnHover:true,
          draggable:true,
          progress:undefined,
          theme:'dark',
      })
    }
      
      // Navigate('/protected');
      
      
      //setMessage("Login successful!");
    } catch (err) {
      
      console.log(err);
      
    }
  };

  return (
    
      <div className="form-container" style={{marginTop:'10%'}}>
      <h1 className="h1">Login Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label>Enter Email :</label>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />

            </div>  
          
       <div className="form-group">
        <label>Enter Password :</label>
       <input className="passordfield" type={visible?"text":"password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
       <button style={{display:'flex',position:"absolute",cursor:'pointer',border:"none",background:"none",paddingTop:'4px'}} onClick={()=>setVisible(!visible)}>
        
       </button>
       </div>
        
        <button className="submit-button" type="submit" >Login</button>
        <label className="createuser"> </label>
      
    <span className="span" onClick={()=>Navigate('/register')}>Create a New Account</span>
    
    <div>
    <span className="password" onClick={()=>Navigate('/otp-forgot-password')}>Forgot Password ?</span>
    </div>
      </form>
      <ToastContainer />
    </div>
 
  );
}

export default Login;
