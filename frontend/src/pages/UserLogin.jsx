import {useState} from "react";
import { Link , useNavigate } from "react-router-dom"; // Assuming you're using React Router for navigation
import axios from "axios";
import {UserDataContext} from "../context/UserContext";
import { useContext } from "react";
const UserLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userData, setUserData] = useState({});
    const navigate = useNavigate(); // Hook for navigation
    const [user, setUser] = useContext(UserDataContext); // Accessing user context

    
    const handleSubmit = async (e) => {
        e.preventDefault();
       const user = {
        email: email,
        password: password,
       }
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/login`, user); 

      if(response.status === 200){
        alert("User logged in successfully!");
        const data  = response.data ;
        setUser(data.user);
        localStorage.setItem("token", data.token);
        navigate('/home'); // Navigate to home page after successful login
      }
        console.log(userData);
        setEmail("");
        setPassword("");


    }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md flex flex-col">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          User Login
        </h2>
        <form 
         onSubmit={handleSubmit}
        className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="abc@gmail.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"
              required
              value= {password}
              onChange={(e)=> setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition duration-200 font-medium"
          >
            User Login
          </button>
        </form>
        <div className="mt-auto space-y-3">
          <Link
            to="/userSignup" // Replace with your signup route
            className="block w-full bg-blue-600 text-white py-2 px-4 rounded-md text-center hover:bg-blue-700 transition duration-200 font-medium"
          >
            New User Signup
          </Link>
          <Link
            to="/captainLogin" // Replace with your captain login route
            className="block w-full bg-green-600 text-white py-2 px-4 rounded-md text-center hover:bg-green-700 transition duration-200 font-medium"
          >
            Login as Captain
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserLogin; 