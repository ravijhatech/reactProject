import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Carddesigin from '../componets/Card';

const TotalStudentRegistration = () => {
    const Navigate =useNavigate();
    const [data, setData] = useState([]);  

    useEffect(() => {
        
        axios.get('http://localhost:5000/student-addmission/fetch') 
             
            .then((response) => {
                setData(response.data);    
            })
            .catch((error) => {
                console.log(error);
                
                 
            });
    }, []); 
    

    return (
       <div style={{}}>
         <Carddesigin cardtext={`Total Student : ${data.length}`} onClick={()=>Navigate('/registerhistory')}/>
         
       </div>
    );
};

export default TotalStudentRegistration;
