import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const Navigate =useNavigate();
  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate email
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formData;

    // Check empty fields
    if (!email || !password || !confirmPassword) {
       toast.error('All fields are requried',{
                position:"top-right",
                autoClose:3000,
                hideProgressBar:false,
                closeOnClick:true,
                pauseOnHover:true,
                draggable:true,
                progress:undefined,
                theme:'dark',
            })
      return;
    }

    // Validate email
    if (!validateEmail(email)) {
       toast.error('Invalid email format',{
                position:"top-right",
                autoClose:3000,
                hideProgressBar:false,
                closeOnClick:true,
                pauseOnHover:true,
                draggable:true,
                progress:undefined,
                theme:'dark',
            })
      return;
    }

    // Check password length
    if (password.length < 6) {
       toast.error('Password must be at least 6 characters long',{
                position:"top-right",
                autoClose:3000,
                hideProgressBar:false,
                closeOnClick:true,
                pauseOnHover:true,
                draggable:true,
                progress:undefined,
                theme:'dark',
            })
      return;
    }

    // Check password match
    if (password !== confirmPassword) {
       toast.error('Password do not match',{
                position:"top-right",
                autoClose:3000,
                hideProgressBar:false,
                closeOnClick:true,
                pauseOnHover:true,
                draggable:true,
                progress:undefined,
                theme:'dark',
            })
      return;
    }

    try {
      // API Call
      const response = await axios.post("http://localhost:5000/change-password",formData);
      
       toast.success('Password change Sucessfully!',{
                position:"top-right",
                autoClose:3000,
                hideProgressBar:false,
                closeOnClick:true,
                pauseOnHover:true,
                draggable:true,
                progress:undefined,
                theme:'dark',
            })
      setFormData({ email: "", password: "", confirmPassword: "" });
      Navigate("/");
    } catch (error) {
      toast.error('Something went wrong.Try again',{
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
  };

  return (
    <div className="form-container" style={{marginTop:'10%'}}>
      <h2 className="h1">Change Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label>New Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter new password"
          />
        </div>

        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm new password"
          />
        </div>

        <button type="submit" className="submit-button ">
          Change Password
        </button>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default ChangePassword;