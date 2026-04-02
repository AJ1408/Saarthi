import {useState} from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation

const UserSignup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userData, setUserData] = useState({});
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setUserData({
             username:{
              firstName: firstName,
              lastName: lastName,
             },
            email: email,
            password: password,
        })
        console.log(userData);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");



    }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md flex flex-col">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          User Signup
        </h2>
        <form 
         onSubmit={handleSubmit}
        className="space-y-4 mb-6">
          <div>
  <label className="block text-sm font-medium text-gray-700 mb-1">
    Enter Your Name
  </label>
  <div className="grid grid-cols-2 gap-4">
    <input
      className=" px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"
      required
      value={firstName}
      onChange={(e) => setFirstName(e.target.value)}
      type="text"
      placeholder="First Name"
    />
    <input
      className=" px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"
      required
      value={lastName}
      onChange={(e) => setLastName(e.target.value)}
      type="text"
      placeholder="Last Name"
    />
  </div>
</div>
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
            User Signup
          </button>
        </form>
        <div className="mt-auto space-y-3">
          <Link
            to="/userLogin" 
            className="block w-full bg-blue-600 text-white py-2 px-4 rounded-md text-center hover:bg-blue-700 transition duration-200 font-medium"
          >
            User Login
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

export default UserSignup; 