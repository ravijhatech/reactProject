import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Card from '../componets/Card';
import { useNavigate } from 'react-router-dom';
import FetchTotalStudentAddmission from './FetchTotalStudentregister';
import './FetchData.css';

const FetchDataAndCount = () => {
    const Navigate =useNavigate();
    const [data, setData] = useState([]);  

    useEffect(() => {
        
        axios.get('https://reactprojectbackend-4f8r.onrender.com/register/fetch') 
             
            .then((response) => {
                setData(response.data);    
            })
            .catch((error) => {
                console.log(error);
                
                 
            });
    }, []); 

    

    return (
       <div className='rowcard' style={{marginTop:'100px'}}>        
            <Card cardtext={`Register User : ${data.length}`} onClick={()=>Navigate('/registerhistory')}/>
            <FetchTotalStudentAddmission/>
            <FetchTotalStudentAddmission/>
            <FetchTotalStudentAddmission/>
            <FetchTotalStudentAddmission/>
            <FetchTotalStudentAddmission/>
         
       </div>
    

    );
};

export default FetchDataAndCount;
