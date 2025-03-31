import React from 'react'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Toast = () => {
    //sucess
    const notificationSucess =()=>{
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

    }


  return (
   <div>

   </div>
  )
}

export default Toast