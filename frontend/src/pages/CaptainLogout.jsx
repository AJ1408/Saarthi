import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const CaptainLogout = () => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    axios.get(`${import.meta.env.VITE_BASE_URL}/captain/logoutCaptain`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response) => {
        if(response.status === 200){
            alert("User logged out successfully!");
            localStorage.removeItem("token");
            navigate('/CaptainLogin');
        }    }).catch((error) => {
            console.error("Logout failed:", error);
    })
  return (
    <div>
      
    </div>
  )
}

export default CaptainLogout
