import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Drawer from './pages/Drawer';
import { toast, ToastContainer } from "react-toastify";
import Login from './pages/login';
import Dashboard from './pages/New_addmission';
import Hostel from './pages/Hostel';
import Library from './pages/Library';
import Register from './pages/Register';
import FeesPaymentInvoice from './pages/pdf';
import Protected from './pages/Protected';
import { useEffect } from 'react';
import StudentAdmissionForm from './pages/New_addmission';
import OTPFormWithForgotPassword from './pages/Forgot_password';
import RegisterUserHistory from './pages/RegisterUserHistory';
import Attendence from './pages/Attendence';
import AllHistrory from './pages/AllHistrory';
import ExamResult from './pages/ExamResult';
import ChangePassword from './pages/Forgot_password';


function App() {
  const Navigate = useNavigate();
  // check token app load
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      Navigate('/drawer');
    } else {
      Navigate('/');
    }
  }, []);


  return (
    <Routes>
       <Route path='/forgotpassword' element={<ChangePassword />} />
      <Route path='/result' element={<ExamResult />} />
      <Route path='/allhistrory' element={<AllHistrory />} />
      <Route path='/attendence' element={<Attendence />} />
      <Route path='/registerhistory' element={<RegisterUserHistory />} />
      <Route path='/Protected' element={<Protected />} />
      <Route path='/' element={<Login />} />
      <Route path='/payment' element={<FeesPaymentInvoice />} />
      <Route path='/register' element={<Register />} />
      <Route path='/drawer' element={<Drawer />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/hostal' element={<Hostel />} />
      <Route path='/library' element={<Library />} />
      <Route path='/New-addmission' element={<StudentAdmissionForm />}/>
      

    </Routes>



  );
}

function Appwarapper() {
  return (
    <Router>
      <App />
    </Router>

  )
}

export default Appwarapper;
