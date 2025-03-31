import React, { useState } from "react";
import "./Drawer.css";  
import { FaDashcube, FaHome, FaMendeley, FaSignOutAlt, FaUser,FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { FaBook, FaBookOpenReader, FaIndianRupeeSign } from "react-icons/fa6";
import { toast, ToastContainer } from "react-toastify";





const Drawer = () => {

  const Navigate = useNavigate();

  const [open ,setOpen] = useState(false);

  
  const handleLout=()=>{
    localStorage.removeItem('token');
       toast.success('Password must be at least 6 characters long',{
                    position:"top-right",
                    autoClose:3000,
                    hideProgressBar:false,
                    closeOnClick:true,
                    pauseOnHover:true,
                    draggable:true,
                    progress:undefined,
                    theme:'dark',
                })
    Navigate("/")
   }
 

  return (
    <div>
      <Footer/>
      <button className='menu-btn' onClick={()=> setOpen(true)}><FaBars style={{color:'white',margin:'10px'}}/></button>
  <div className={`drawer ${open?"open":""}`}>
    <span className='close-btn' onClick={()=> setOpen(false)}><FaTimes style={{color:'white',margin:'10px'}}/></span>
        <div className="drawer-content">
          <p className="drawerlabel">School Management System</p>
          <div style={{padding:'35px'}}>
          <div className="space">
          <FaUser  className="icon" style={{fontSize:"15px",color:"white"}}/> 
          <span style={{cursor:'pointer',transition:'0.3s',}} onClick={()=>Navigate('/New-addmission')}>
          New Addmission
          </span>
          </div>
          <div className="space">
          <FaHome  className="icon"  style={{fontSize:"15px"}}/> 
          <span style={{cursor:'pointer',transition:'0.3s',}} onClick={()=>Navigate('/hostal')}>
            Hostel 
          </span>
          </div>
          <div className="space">
          <FaBook className="icon" style={{fontSize:'15px'}}/> 
          <span style={{cursor:'pointer',transition:'0.3s',}} onClick={()=>Navigate('/library')}>
            Library
          </span>
          </div>
          <div className="space">
          <FaIndianRupeeSign className="icon"  style={{fontSize:"15px"}}/> 
          <span style={{cursor:'pointer'}} onClick={()=>Navigate('/payment')}>
            Fees & Payments
          </span>
          </div>
          <div className="space">   
          <FaBookOpenReader  className="icon" style={{fontSize:"26px"}}/> 
          <span style={{cursor:'pointer'}} onClick={()=>Navigate('/result')}>
            Examination & Results
          </span>
          </div>
          <div className="space">
          <FaMendeley  className="icon" style={{fontSize:"15px"}}/> 
          <span style={{cursor:'pointer'}} onClick={()=>Navigate('/attendence')} >
            Attendence
          </span>
          </div>   
          <div className="space">
          < FaDashcube className="icon" style={{fontSize:"15px"}} /> 
          <span style={{cursor:'pointer'}} onClick={()=>Navigate('/allhistrory')}>
            All History
          </span>
          </div>
          <div className="space">
          <FaSignOutAlt  className="logout" style={{fontSize:"15px",color:'white'}}/> 
          <span style={{cursor:'pointer',transition:'0.3s',}} onClick={handleLout}>
            Logout
          </span>
          </div>
          </div>
         
        </div>
      </div>
      <ToastContainer/>
       
    </div>
  );
};

export default Drawer;
