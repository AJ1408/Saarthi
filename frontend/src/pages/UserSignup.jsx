import React from "react";

const UserSignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div>
         <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          User Signup
        </h2>
        <form action="">
          {/* Add your signup form fields here */}
          <div>
            <label htmlFor="name">Firstname : </label>
            <input required type="text" id="name" placeholder="Enter your first name"/>
          </div>
          <div>
            <label htmlFor="lastname">Lastname :</label>
            <input required type="text" id="lastname" placeholder="Enter your last name"/>
          </div>
          <div>
            <label htmlFor="email">Email :</label>
            <input required type="email" id="email" placeholder="Enter your email"/>
          </div>
          <div>
            <label htmlFor="password">Password :</label>
            <input required type="password" id="password" placeholder="Enter your password"/>
          </div>
           <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition duration-200 font-medium"
          >
            User Signup
          </button>
        </form>
        <div>
        </div>
      </div>
    </div>
  );
};

export default UserSignUp;
