import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { context } from "../context/ShopContext";
const CardSummary2 = () => {
  const{getCartAmount,delivery_fess}=useContext(context);
  const subtotal=getCartAmount();
const d_f=delivery_fess;
const total=subtotal+d_f;
  const [selectedMethod, setSelectedMethod] = useState("");

  const handleSelect = (method) => {
    setSelectedMethod(method);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

      <div className="flex justify-between text-sm mb-2">
        <span>Subtotal</span>
        <span>{subtotal}</span>
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

      <h1 className="text-xl font-bold mt-5 mb-3">PAYMENT METHOD</h1>

      {/* Payment Options */}
      <div className="flex flex-col sm:flex-row gap-3">
        {["Cash on Delivery", "Stripe", "Razorpay"].map((method) => (
          <button
            key={method}
            onClick={() => handleSelect(method)}
            className={`w-full sm:w-1/3 py-3 rounded-lg border transition
              ${
                selectedMethod === method
                  ? "bg-blue-600 text-white border-blue-700"
                  : "bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200"
              }`}
          >
            {method}
          </button>
        ))}
      </div>

      {/* Make Payment Button */}
      {selectedMethod && (

<Link to={'/orders'} >

        <button className="mt-6 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
          Make Payment ({selectedMethod})
        </button>
        </Link>
      )}
    </div>
  );
};

export default CardSummary2;
