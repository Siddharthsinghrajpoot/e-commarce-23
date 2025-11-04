import React from 'react'
import { useEffect,useState } from 'react'
import axios from "axios"
import FullWidthCard from '../component/FullwidthCard'

const Orders = ({token}) => {
  const [orders,setOrders]=useState([]);
  console.log(orders);
  

  const loading=async()=>{

    try{

      const response= await axios.get(`${import.meta.env.VITE_API_URL}api/order/allorder`,{headers:{token}})
if(response.data.success){

setOrders(response.data.message)


}

else{


console.log(response.data.message);

}

    }
    catch(error){
console.log(error);



    }



  }

useEffect(()=>{
  loading();

},[token])



  return (
    <div className="text-cyan-300" >
{orders.map((order)=><FullWidthCard order={order} token={token} loading={loading} />)}
    </div>
  )
}

export default Orders
