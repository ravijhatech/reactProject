import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  // Send OTP to the backend
  const sendOtp = async () => {
    try {
      const response = await axios.post("http://localhost:5000/send-otp", { email });
      setMessage(response.data.message); // Success message from backend
      setStep(2); // Move to OTP verification step
    } catch (error) {
      setMessage("Error sending OTP.");
    }
  };

  // Verify OTP entered by the user
  const verifyOtp = async () => {
    try {
      const response = await axios.post("http://localhost:5000/verify-otp", { email, otp });
      if (response.data.success) {
        setStep(3); // OTP verified, move to new password creation
      } else {
        setMessage("Invalid OTP. Please try again.");
      }
    } catch (error) {
      setMessage("Error verifying OTP.");
    }
  };

  // Reset the password after verifying OTP
  const resetPassword = async () => {
    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }
    try {
      const response = await axios.post("http://localhost:5000/changed-password", {
        email,
        newPassword,
      });
      setMessage(response.data.message); // Success message after resetting password
    } catch (error) {
      setMessage("Error resetting password.");
    }
  };

  return (
    <div>
      <h1>Reset Your Password</h1>
      {step === 1 && (
        <div>
          <h2>Step 1: Enter your email</h2>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={sendOtp}>Send OTP</button>
          {message && <p>{message}</p>}
        </div>
      )}

      {step === 2 && (
        <div>
          <h2>Step 2: Enter OTP</h2>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={verifyOtp}>Verify OTP</button>
          {message && <p>{message}</p>}
        </div>
      )}

      {step === 3 && (
        <div>
          <h2>Step 3: Create New Password</h2>
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button onClick={resetPassword}>Reset Password</button>
          {message && <p>{message}</p>}
        </div>
      )}
    </div>
  );
};

export default App;
