import {useState}from 'react'
import { useContext ,useEffect } from 'react';
import { CaptainDataContext } from '../context/CaptainContext';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const  CaptainProtectedRoute = ({children}) => {

    const  token = localStorage.getItem("token");
    const navigate = useNavigate();
    const [isloading , setIsLoading] = useState(true);
    const {captain, setCaptain} = useContext(CaptainDataContext);
    useEffect(() =>{
    if(!token){
        navigate('/userLogin');
    }
  },[token])

  axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profileCaptain`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
  .then((response) => {
    // Handle successful response
    if(response.status === 200){
        setCaptain(response.data.captain);
        setIsLoading(false);
    }

  })
  .catch((error) => {
    // Handle error
    console.log("Error fetching captain profile:", error);
    localStorage.removeItem("token");
    navigate('/CaptainLogin');
  });

  return (
    <div>
      {children}
    </div>
  )
}

export default CaptainProtectedRoute ;
