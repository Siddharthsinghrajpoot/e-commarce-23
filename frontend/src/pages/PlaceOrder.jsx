import React, { useState, useContext } from "react";
import { context } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const PlaceOrder = () => {

  const { getCartAmount, delivery_fess,cardItems, products,token,setCardItems,navigate } = useContext(context);

  
  const subtotal = getCartAmount();
  const deliveryFee = delivery_fess;
  const total = subtotal + deliveryFee;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: "",
  });

  const [selectedMethod, setSelectedMethod] = useState("");

  // Update form data
  const handleChange = (e) => {
   
const name=e.target.name;
const value=e.target.value;

    setFormData({ ...formData, [name]: value });
  };

  // Submit everything in one click
  const handleSubmit = async(e) => {
    e.preventDefault(); // Prevent page refresh

    if (!selectedMethod) {
      alert("Please select a payment method!");
      return;
    }

    try{
      let orderItems=[];

for( const items in cardItems){
for(const item in cardItems[items]){
if(cardItems[items][item]>0){
const itemInfo=structuredClone(products.find((products)=>products._id===items))
if(itemInfo){
itemInfo.size=item;
itemInfo.quantity=cardItems[items][item]
orderItems.push(itemInfo)

}
}

}


}

   const orderData = {
      address:  formData,
      paymentMethod: selectedMethod,
  amount:total,
   items:orderItems,
   payment: false,
      
  
    };
    console.log(orderData);
    

    const response= await axios.post(`${import.meta.env.VITE_API_URL}api/order/placeall`, orderData, {headers:{token}},)


        if (selectedMethod === "Stripe") {
      if (response.data.session_url) {
        window.location.href = response.data.session_url; 
        return;
      }
    }

    if(response.data.success){
toast.success(response.data.message)
setCardItems({ });
navigate('/orders');


    }

    else{

toast.error(response.data.message)

    }
  

console.log(response);


    }

    catch (error) {
      console.log(error);

      


    }

 


    // Here you can send orderData to backend using fetch/axios
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-around w-full mt-7 gap-4">
      {/* User Information */}
      <div className="max-w-lg bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">User Information</h2>
        <div className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-1/2 p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-1/2 p-2 border border-gray-300 rounded"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />

          <input
            type="text"
            name="street"
            placeholder="Street"
            value={formData.street}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />

          <div className="flex gap-4">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="w-1/2 p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
              className="w-1/2 p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="flex gap-4">
            <input
              type="text"
              name="zip"
              placeholder="Zip Code"
              value={formData.zip}
              onChange={handleChange}
              className="w-1/2 p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              className="w-1/2 p-2 border border-gray-300 rounded"
            />
          </div>

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </div>

      {/* Order Summary & Payment */}
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

        <div className="flex justify-between text-sm mb-2">
          <span>Subtotal</span>
          <span>{subtotal}</span>
        </div>

        <div className="flex justify-between text-sm mb-2">
          <span>Delivery Fee</span>
          <span>{deliveryFee}</span>
        </div>

        <hr className="my-3" />

        <div className="flex justify-between text-base font-semibold">
          <span>Total</span>
          <span>{total}</span>
        </div>

        <h1 className="text-xl font-bold mt-5 mb-3">Payment Method</h1>

        <div className="flex flex-col sm:flex-row gap-3">
          {["Cash on Delivery", "Stripe", "Razorpay"].map((method) => (
            <button
              key={method}
              type="button"
              onClick={() => setSelectedMethod(method)}
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

        <button
          type="submit"
          className="mt-6 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Make Payment
        </button>
      </div>
    </form>
  );
};

export default PlaceOrder;
