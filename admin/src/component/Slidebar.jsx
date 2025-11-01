import React from "react";
import { FaShoppingBag, FaPlusCircle, FaList } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <span className="h-screen bg-gray-900 text-white flex flex-col items-center sm:items-start px-4 py-6 space-y-8 w-20 sm:w-56 transition-all duration-300">
      
      {/* Order */}
      <div className="flex items-center space-x-3 cursor-pointer hover:text-gray-300">
        <Link to={'/Order'}  >
        <FaShoppingBag className="text-2xl" />
        <span className="hidden sm:inline text-lg font-semibold">Order</span>
        </Link>
      </div>

      {/* Add */}
      <div className="flex items-center space-x-3 cursor-pointer hover:text-gray-300">
        <Link to={'/add'} >
        <FaPlusCircle className="text-2xl" />
        <span className="hidden sm:inline text-lg font-semibold">Add</span>
        </Link>
      </div>

      {/* List */}
      <div className="flex items-center space-x-3 cursor-pointer hover:text-gray-300">
        <Link to={'/list'} >
        <FaList className="text-2xl" />
        <span className="hidden sm:inline text-lg font-semibold">List</span>
        </Link>
      </div>
    </span>
  );
};

export default Sidebar;
