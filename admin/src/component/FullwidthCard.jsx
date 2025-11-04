import React from "react";
import axios from "axios"
import { toast } from "react-toastify";



const FullWidthCard = ({ order,token,loading }) => {
const { items, address, amount, paymentMethod, status, date, _id } = order;

  
  const formattedDate = new Date(date).toLocaleString();

const handleOnchange=async(e,orderid)=>{

  try{
 const response=  await axios.post(`${import.meta.env.VITE_API_URL}api/order/status`, { status:e.target.value, orderId:orderid} ,{headers:{token}} )
if(response.data.success){
  await loading();
toast.success("updated")

}

else{
toast.error("notupdated")

}

  }

  catch(error){



  }


}

 
return(
<div className="bg-white shadow-md rounded-md p-5 mb-4">
      <h3 className="text-lg font-semibold">Order ID: {_id}</h3>
      <p className="text-sm text-gray-600">Date: {formattedDate}</p>
      <p className="text-sm text-gray-600">Payment: {paymentMethod}</p>

      <div className="mt-2">
        <label className="text-sm font-medium">Status:</label>
        <select
          className="border p-2 rounded ml-2"
          value={status}
   onChange={(e)=> handleOnchange(e,_id)  }
        >
          <option value="Order Placed">Order Placed</option>
          <option value="Packing">Packing</option>
          <option value="Shipped">Shipped</option>
          <option value="Out for Delivery">Out for Delivery</option>
          <option value="Delivered">Delivered</option>
        </select>
      </div>

      <div className="mt-3 border rounded p-3">
        <h4 className="font-medium mb-1">Delivery Address</h4>
        <p className="text-sm text-gray-700">
          {address.firstName} {address.lastName}
        </p>
        <p className="text-sm text-gray-700">
          {address.street}, {address.city}, {address.state} - {address.zip}
        </p>
        <p className="text-sm text-gray-700">Phone: {address.phone}</p>
      </div>

      <div className="mt-4">
        {items.map((item) => (
          <div key={item._id} className="flex items-center gap-4 border-b py-3">
            <img src={item.image} className="h-16 w-16 rounded object-cover" />
            <div className="flex-1">
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-gray-600">
                Size: {item.size} | Qty: {item.quantity}
              </p>
            </div>
            <p className="font-semibold">₹{item.price * item.quantity}</p>
          </div>
        ))}
      </div>

      <p className="text-right font-bold mt-3 text-lg">
        Total: ₹{amount}
      </p>
    </div>


)
  
};

export default FullWidthCard;
