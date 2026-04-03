import React from 'react';
import { useEffect, useState } from 'react';

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to find rides based on pickup and destination
    
  };

  return (
    <div className='h-screen w-full relative overflow-hidden'>

      {/* Map Background */}
      <img
        className='w-full h-full object-cover'
        src='/image.png'
        alt="map"
      />

      {/* Dark overlay */}
      <div className='absolute inset-0 bg-black/20'></div>

      {/* Logo */}
      <img
        className='h-16 absolute top-5 left-6 z-10'
        src="https://saarathi.co.in/wp-content/uploads/2020/08/saarthi-logo2.png"
        alt="logo"
      />

      {/* Bottom Panel */}
      <div className='absolute bottom-0 w-full bg-white rounded-t-3xl p-5 shadow-xl z-10'>

        <h4 className='text-2xl font-semibold mb-4'>
          Find a Trip
        </h4>

        {/* ✅ FORM ADDED HERE */}
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

          {/* Pickup */}
          <div className='flex items-center bg-gray-100 px-3 py-3 rounded-lg'>
            <span className='text-gray-500 mr-2'>📍</span>
            <input
              className='bg-transparent w-full outline-none text-base'
              type="text"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              placeholder='Add Pick-up Point'
            />
          </div>

          {/* Destination */}
          <div className='flex items-center bg-gray-100 px-3 py-3 rounded-lg'>
            <span className='text-gray-500 mr-2'>🏁</span>
            <input
              className='bg-transparent w-full outline-none text-base'
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder='Add Destination'
            />
          </div>

        </form>

        {/* Divider */}
        <div className='my-4 border-t'></div>

        <div className='text-gray-500 text-sm text-center'>
          Enter locations to see rides 🚗
        </div>

      </div>
    </div>
  );
};

export default Home;