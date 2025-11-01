import React from 'react'

const Navbar = ({ settoken }) => {


  return (
    <div>
      <nav className="flex justify-between items-center px-6 py-3 bg-gray-100 shadow">
        {/* Left side - Brand name */}
        <h1 className="text-xl font-bold text-gray-800">Forever</h1>

        {/* Right side - Logout button */}
        <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition" onClick={()=>{settoken('')}}  >
          Logout
        </button>
      </nav>

    </div>
  )
}

export default Navbar
