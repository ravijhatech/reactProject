import './Register.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';



const Register = () => {
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value});
    
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/register', formData);
       toast.success('User Registration Sucessfully',{
                  position:"top-right",
                  autoClose:3000,
                  hideProgressBar:false,
                  closeOnClick:true,
                  pauseOnHover:true,
                  draggable:true,
                  progress:undefined,
                  theme:'dark',
              });
    
      setFormData({username:"",email:"",password:""});
    } catch (error) {
      alert('Error registering user');
    }
  };

  return (
    <div className='form-container'>
    <form onSubmit={handleSubmit} style={{margin:'40px'}}>
      <div className="form-group">
      <span>Enter Username</span>
      <input type="text" name="username" onChange={handleChange} value={formData.username} placeholder="Username" />
      </div>
      <div className="form-group">
      <span>Enter Email</span>
      <input type="email" name="email" onChange={handleChange} value={formData.email} placeholder="Email" />
      </div>
      <div className="form-group">
      <span>Enter Password</span>
      <input type="password" name="password" onChange={handleChange} value={formData.password} placeholder="Password" />
      </div>
      <div>
      <button className="submit-button" type="submit">Register</button>
      </div>
      <div className='text'>
      <span >Already User Created  </span>
      <span style={{cursor:'pointer',color:'green',fontWeight:'bold'}} onClick={()=>Navigate('/')}> Login</span>
      </div>
    </form>
    <ToastContainer/>
    </div>
    
  );
};

export default Register;
