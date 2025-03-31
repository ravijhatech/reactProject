import React, { useState } from 'react';
import { QRCodeCanvas} from 'qrcode.react';

function Qrcode() {
  const [text, setText] = useState('Hello, QR Code!');
  
  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h1>Generate QR Code</h1>
      <input 
        type="text" 
        value={text} 
        onChange={handleInputChange}
        placeholder="Enter text for QR Code"
      />
      
      <div style={{ marginTop: 20 ,marginLeft:'40px'}}>
        <QRCodeCanvas value={text} />
      </div>
    </div>
  );
}

export default Qrcode;
