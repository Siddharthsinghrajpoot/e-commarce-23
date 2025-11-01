import React from 'react'
import axios from "axios"
import { useState } from 'react';
import {  toast } from "react-toastify"
const Login = ({settoken} ) => {
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");


  const  handleForm=async(e)=>{
e.preventDefault();
 try{
  const response=await axios.post('http://localhost:5000/api/admin/get',{
email,
password


  })
  console.log(response);
  
  
 if(response.data.token) {
   settoken(response.data.token);
   toast.success("succes")
  
 }




  


 }

 catch(error){

    console.log(error);

    // Axios error contains the server response
    if (error.response && error.response.data && error.response.data.message) {
      toast.error(error.response.data.message); // shows "Invalid credentials"
    } else {
      toast.error("Server error, please try again!");
    }



 }



  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleForm}  className="bg-white p-6 rounded-2xl shadow-lg w-80 sm:w-96">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Login
        </h2>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Email
          </label>
          <input
          value={email}
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e)=>{setEmail(e.target.value)}}
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-1">
            Password
          </label>
          <input
          value={password}
            type="password"
            placeholder="Enter your password"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      onChange={(e)=>{setPassword(e.target.value)}}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Login
