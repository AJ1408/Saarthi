import React from 'react'
import { useContext ,useEffect } from 'react';
import { UserDataContext } from '../context/UserContext';
import {useNavigate} from 'react-router-dom';
const  ProtectedWrapper = ({children}) => {

    const  token = localStorage.getItem("token");
    const navigate = useNavigate();
  useEffect(() =>{
    if(!token){
        navigate('/userLogin');
    }

  })
    
  return (
    <div>
      {children}
    </div>
  )
}

export default ProtectedWrapper
