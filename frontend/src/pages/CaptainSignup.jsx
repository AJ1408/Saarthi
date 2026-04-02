import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {CaptainDataContext} from "../context/CaptainContext";
import { useContext } from "react";
import axios from "axios";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  
  // New state for vehicle and location
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  // const [locationLat, setLocationLat] = useState("");
  // const [locationLng, setLocationLng] = useState("");
   const navigate = useNavigate(); // Hook for navigation
    const {captain, setCaptain} = useContext(CaptainDataContext); 
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const captainData = {
     fullname:{
      firstname: firstName,
      lastname: lastName,
     },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: parseInt(vehicleCapacity),
        vehicleType: vehicleType,
      }
    };
    console.log(captainData);
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/registerCaptain`, captainData)
    console.log(response.data);
    if(response.status === 201){
      alert("Captain registered successfully!");
      const data = response.data;
      setCaptain(data);
      localStorage.setItem("token", data.token);
      navigate('/captainLogin'); // Navigate to home page after successful signup}=
    }
    // Clear all fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");
    // setLocationLat("");
    // setLocationLng("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md flex flex-col">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Captain Signup
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 mb-6">
          {/* Name Fields */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Enter Your Name
            </label>
            <div className="grid grid-cols-2 gap-4">
              <input
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                placeholder="First Name"
              />
              <input
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>
          
          {/* Email */}
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
          
          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
            />
          </div>
          
          {/* Vehicle Fields - Color, Plate, Capacity in one line */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Vehicle Color
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"
                required
                value={vehicleColor}
                onChange={(e) => setVehicleColor(e.target.value)}
                type="text"
                placeholder="e.g., Red"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Vehicle Plate
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"
                required
                value={vehiclePlate}
                onChange={(e) => setVehiclePlate(e.target.value)}
                type="text"
                placeholder="e.g., ABC123"
                minLength="3"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Vehicle Capacity
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"
                required
                value={vehicleCapacity}
                onChange={(e) => setVehicleCapacity(e.target.value)}
                type="number"
                placeholder="e.g., 4"
                min="1"
              />
            </div>
          </div>
          
          {/* Vehicle Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Vehicle Type
            </label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option value="">Select Type</option>
              <option value="car">Car</option>
              <option value="bike">Bike</option>
              <option value="auto">Auto</option>
            </select>
          </div>
          
          {/* Location Fields - Latitude and Longitude side by side */}
          {/* <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location (Latitude)
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"
                value={locationLat}
                onChange={(e) => setLocationLat(e.target.value)}
                type="number"
                step="any"
                placeholder="e.g., 37.7749"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location (Longitude)
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"
                value={locationLng}
                onChange={(e) => setLocationLng(e.target.value)}
                type="number"
                step="any"
                placeholder="e.g., -122.4194"
              />
            </div>
          </div> */}
          
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition duration-200 font-medium"
          >
            Captain Signup
          </button>
        </form>
        <div className="mt-auto space-y-3">
          <Link
            to="/captainLogin"
            className="block w-full bg-blue-600 text-white py-2 px-4 rounded-md text-center hover:bg-blue-700 transition duration-200 font-medium"
          >
            Captain Login
          </Link>
          <Link
            to="/userLogin"
            className="block w-full bg-green-600 text-white py-2 px-4 rounded-md text-center hover:bg-green-700 transition duration-200 font-medium"
          >
            User Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaptainSignup;