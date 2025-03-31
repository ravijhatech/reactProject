import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom'

const RegisterUserHistory = () => {
        const [data, setData] = useState([]);  
    
        useEffect(() => {
            
            axios.get('http://localhost:5000/register/fetch') 
                 
                .then((response) => {
                    setData(response.data);    
                })
                .catch((error) => {
                    console.log(error);
                });
        }, []);
  return (
   <div>
    <h3 style={{textAlign:'center',marginTop:'30px'}}>Register History</h3>
    <div style={{textAlign:'center',marginTop:'40px'}}>
        <table border="0" width="100%">
            <thead>
                <tr>
                    <th>
                        UserName
                    </th>
                    <th>
                        Email-ID
                    </th>
                </tr>
            </thead>
            <tbody>
                {data.map((user)=>(
                    <tr key={user.id}>
                        <td>{user.username}</td>
                        <td>{user.email}</td>

                    </tr>
                ))}
            </tbody>

        </table>
    </div>
   </div>
  )
}

export default RegisterUserHistory