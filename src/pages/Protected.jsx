import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Protected = () => {
  const Navigate = useNavigate();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  // const Navigate = useNavigate();  // useNavigate hook for redirection

  useEffect(() => {
    const token = Cookies.get('token');  // Get token from cookies
    console.log(token);
    

    // If token is not found, redirect to the login page
    if (!token) {
      Navigate('/');
      return;
    }

    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/protected', {
            
          headers: { Authorization: `Bearer ${token}` },
          
          withCredentials: true,
          
          
        });
        console.log(response);
        setData(response.data);  // Store the protected data
      } catch (err) {
        setError('Error accessing protected data');
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {error && <div>{error}</div>}
      {data && <div>{data}</div>}
    </div>
  );
};

export default Protected;
