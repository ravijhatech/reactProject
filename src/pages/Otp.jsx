import React, { useState } from 'react';
import axios from 'axios';

function OTPForm() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [step, setStep] = useState(1); // Step 1: Enter email, Step 2: Enter OTP, Step 3: Set password

  const sendOtp = async () => {
    try {
      const response = await axios.post('http://localhost:5000/send-otp', { email });
      console.log(response);
      setStep(2); // Move to OTP input
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const verifyOtp = async () => {
    try {
      const response = await axios.post('http://localhost:5000/verify-otp', { email, otp });
      alert(response.data.message);
      setStep(3); // Move to password setting
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const setPassword1 = async () => {
    try {
      const response = await axios.post('http://localhost:5000/changed-password', { email, password });
      console.log(response);
      
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="App">
      {/* {step === 1 && ( */}
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <button onClick={sendOtp}>Send OTP</button>
        </div>
      {/* )} */}

      {/* {step === 2 && ( */}
      <br/>
      <br/>
        <div>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
          />
          <button onClick={verifyOtp}>Verify OTP</button>
        </div>
      {/* )} */}

      {/* {step === 3 && ( */}
      <br/>
      <br/>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Set your new password"
          />
          <button onClick={setPassword}>Set Password</button>
        </div>
      {/* )} */}
    </div>
  );
}

export default OTPForm;
