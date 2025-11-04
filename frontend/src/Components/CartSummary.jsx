import React, { useContext } from "react";
import { context } from "../context/ShopContext";
import { Link } from "react-router-dom";
const CartSummary = () => {
const {getCartAmount,delivery_fess}=useContext(context)
const subtotal=getCartAmount();
const d_f=delivery_fess;
const total=subtotal+d_f;



  return (
    <div className="w-full max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

      <div className="flex justify-between text-sm mb-2">
        <span>Subtotal</span>
        <span>₹{subtotal}</span>
  
      </div>

      <div className="flex justify-between text-sm mb-2">
        <span>Shipping Fee</span>
        <span>{d_f}</span>
      </div>

      <hr className="my-3" />

      <div className="flex justify-between text-base font-semibold">
        <span>Total</span>
        <span>{total}</span>
      </div>
<Link to={'/place-order'} >
      <button className="mt-6 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
        Proceed to Checkout
      </button>
      </Link>
    </div>
  );
};

export default CartSummary;

