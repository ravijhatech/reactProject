import React, { useEffect, useState } from 'react';
import './pdf.css'




const FeesPaymentInvoice = () => {
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [tuitionFee, setTuitionFee] = useState();
  const [discount, setDiscount] = useState();
  const [serviceFee, setServiceFee] = useState();
  const [taxRate, setTaxRate] = useState();
  const [taxAmount, setTaxAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [ receptnumber ,setReceptNumber] = useState(0);
  const [ studentID ,setStudentID] = useState(0);

  useEffect(()=>{
    const interval = setInterval(()=>{
      setReceptNumber(Math.floor(Math.random()*10000+6789))
    })

  },[])
  useEffect(()=>{
    const studentID = setInterval(()=>{
      setStudentID(Math.floor(Math.random()*1000000+6789989))
    })

  },[])

  const handleTuitionFeeChange = (e) => {
    const fee = parseFloat(e.target.value);
    setTuitionFee(fee);
    calculateTotal(fee, discount, serviceFee, taxRate);
  };

  const handleDiscountChange = (e) => {
    const disc = parseFloat(e.target.value);
    setDiscount(disc);
    calculateTotal(tuitionFee, disc, serviceFee, taxRate);
  };

  const handleServiceFeeChange = (e) => {
    const fee = parseFloat(e.target.value);
    setServiceFee(fee);
    calculateTotal(tuitionFee, discount, fee, taxRate);
  };

  const handleTaxRateChange = (e) => {
    const rate = parseFloat(e.target.value);
    setTaxRate(rate);
    calculateTotal(tuitionFee, discount, serviceFee, rate);
  };

  // Calculate total invoice amount
  const calculateTotal = (tuition, discount, service, taxRate) => {
    const discountAmount = (tuition * discount) / 100;
    const subtotal = tuition - discountAmount + service;
    const tax = (subtotal * taxRate) / 100;
    setTaxAmount(tax);
    const total = subtotal + tax;
    setTotalAmount(total);
  };

  // Print the invoice
  const printInvoice = () => {
    const printContent = document.getElementById("invoice-content");
    const newWindow = window.open("height=500,width=800");
    newWindow.document.write(printContent.innerHTML);
    newWindow.document.close();
    newWindow.print();
    
  };

  return (
    <div className='form-container'>
    <div className='container'>
        
    <div className="invoice-container">
      <h1 >Fees Payment Details</h1>

      {/* Personal Details */}
      <div className="form-group">
        <label>Student Name:</label>
        <input 
          type="text"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />
        <div className="form-group">
      
        <label>Student Email:</label>
        <input
          type="email"
          value={studentEmail}
          onChange={(e) => setStudentEmail(e.target.value)}
        />
        </div>
      <div className="form-group">
        <label>Tuition Fee :</label>
        <input
          type="number"
          value={tuitionFee}
          onChange={handleTuitionFeeChange}
        />
        </div>
      </div>
    
      <div className="form-group">
        <label>Discount (%)</label>
        <input 
          type="number"
          value={discount}
          onChange={handleDiscountChange}
        />
        
        </div>
      </div>
      <div>
      <div className="form-group">
        <label>Service Fee :</label>
        <input style={{marginRight:'5px'}}
          type="number"
          value={serviceFee}
          onChange={handleServiceFeeChange}
        />
        </div>
      </div>
      <div>
      <div className="form-group">
        <label>Tax Rate (%)</label>
        <input style={{marginLeft:'5px'}}
          type="number"
          value={taxRate}
          onChange={handleTaxRateChange}
        />
      </div>
      </div>

      {/* Print Button */}
      <div>
      
        <button className="submit-button" onClick={printInvoice}>Print Invoice</button>
      </div>

      {/* Invoice Content for Printing */}
      <div id="invoice-content" style={{ display: "none" ,}}>
        <div style={{ textAlign: 'center' }}>
          {/* Logo Image */}
          {/* <img src={image3} alt="Logo" style={{ width: '150px', height: 'auto' }} /> */}
        </div>
        <h2  style={{textAlign:'center'}}>School Management System</h2>
        <p><strong>Student Name:</strong> {studentName}</p>
        <p><strong>Student ID:</strong> {studentID}</p>

        <h3>Fees Details</h3>
        <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount(Rupees)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td>Recept Number</td>
            <td>{receptnumber}</td>
            </tr>
            <tr>
              <td>Tuition Fee</td>
              <td>{tuitionFee}</td>
            </tr>
            <tr>
              <td>Discount Applied ({discount}%)</td>
              <td>{((tuitionFee * discount) / 100).toFixed(2)}</td>
            </tr>
            <tr>
              <td>Service Fee</td>
              <td>{serviceFee}</td>
            </tr>
            <tr>
              <td>Subtotal</td>
              <td>{(tuitionFee - (tuitionFee * discount) / 100 + serviceFee).toFixed(2)}</td>
            </tr>
            <tr>
              <td>Tax ({taxRate}%)</td>
              <td>{taxAmount.toFixed(2)}</td>
            </tr>
            <tr>
              <th>Total Amount Due</th>
              <th>{totalAmount.toFixed(2)}</th>
            </tr>
          </tbody>
        </table>
        <div><p style={{textAlign:"end",marginRight:'30px',marginTop:'20px'}}>Signature & Stamp</p></div>
        
      </div>
      
    </div>
    </div>
  
  );
};

export default FeesPaymentInvoice;
