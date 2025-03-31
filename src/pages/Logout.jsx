
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const Navigate = useNavigate();
  
    const handleLout=()=>{
     localStorage.removeItem('token');
     Navigate("/")
    }
  
}

export default Logout