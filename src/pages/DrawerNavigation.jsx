
import React, { useState } from 'react'
import "./DrawerNavigation.css"
import { FaBars, FaDoorClosed, FaEquals, FaTimes } from 'react-icons/fa';

const DrawerNavigation = () => {
    const [open ,setOpen] = useState(false);
  return (
   <div>
  <button className='menu-btn' onClick={()=> setOpen(true)}><FaBars/></button>
  <div className={`drawer ${open?"open":""}`}>
    <span className='close-btn' onClick={()=> setOpen(false)}><FaTimes/></span>
    <a href='#' onClick={()=>setOpen(false)}>home</a>
    

  </div>
   </div>
  )
}

export default DrawerNavigation