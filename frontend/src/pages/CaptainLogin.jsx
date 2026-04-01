import {useState} from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation

const CaptainLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [captainData, setCaptainData] = useState({});
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setCaptainData({
            email: email,
            password: password
        })
        console.log(captainData);
        setEmail("");
        setPassword("");
    }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md flex flex-col">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Captain Login
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
            Captain Login
          </button>
        </form>
        <div className="mt-auto space-y-3">
          <Link
            to="/captainSignup" // Replace with your signup route
            className="block w-full bg-blue-600 text-white py-2 px-4 rounded-md text-center hover:bg-blue-700 transition duration-200 font-medium"
          >
            New Captain Signup
          </Link>
          <Link
            to="/userLogin" // Replace with your user login route
            className="block w-full bg-green-600 text-white py-2 px-4 rounded-md text-center hover:bg-green-700 transition duration-200 font-medium"
          >
            Login as User
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaptainLogin; 