import React from 'react'
import { useContext } from 'react';
import { useSearchParams } from 'react-router-dom'
import { context } from '../context/ShopContext';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';




const Verify = () => {
const {setCardItems,token, navigate}=useContext(context);
console.log({token}+"token");


const [searchParams,setSearchParams]=useSearchParams();
const success=searchParams.get("success");

const orderId=searchParams.get("orderId");
const verifyPament=async()=>{
try{

if(!token){
toast.error("token is not present here")

}

const response=  await axios.post(`${import.meta.env.VITE_API_URL}api/order/verify`,{success:success, orderId:orderId,},{headers:{token}})
if(response.data.success){
setCardItems({});
toast.success(response.data.message)
navigate('/orders');

}
else{
  toast.error(response.data.message)}
}

catch(error){
console.log(error);


}

}


useEffect(()=>{
      if (token) {
      verifyPament();
    }


},[token])


  return (
    <div>
      verify
    </div>
  )
}

export default Verify
