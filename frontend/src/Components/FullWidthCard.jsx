import React from "react";
import { assets } from "../frontend_assets/assets";
import { useContext } from "react";
import { context } from "../context/ShopContext";



const FullWidthCard = ({ item }) => {
const {updateQuantity}=useContext(context);


  return (
    <div className="w-full h-auto flex flex-col sm:flex-row items-center px-5 gap-4 bg-white shadow-md rounded-md py-3">
      {/* Image */}
      <img
        src={item.image}
        alt={item.name}
        className="h-20 w-20 object-cover rounded"
      />

      {/* Details */}
      <div className="flex-1 text-center sm:text-left">
        <h4 className="text-base font-medium">{item.name}</h4>
        <p className="text-sm text-gray-600">
          Size: {item.size} | Qty: {item.quantity}
        </p>
      </div>

      {/* Price & Bin */}
      <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4">
        <span className="text-xl font-semibold text-gray-800">
          ₹{item.price * item.quantity}
        </span>
        <img
        onClick={() => updateQuantity(item._id, item.size, 0)}
          src={assets.bin_icon}
          className="cursor-pointer h-5 w-5"
          alt="delete"
        />
      </div>
    </div>
  );
};

export default FullWidthCard;
