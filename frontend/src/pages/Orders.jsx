import React, { useContext } from 'react'
import axios from "axios"
import { context } from '../context/ShopContext'
import { useEffect,useState } from 'react';
import MyorderFullWidthOrderPage from '../Components/MyorderFullWidthOrderPage';
const Order = () => {
const {products,token}=useContext(context);
const [orderData,setOrderData]=useState([])


const fetch=async()=>{
try{

  if(token){

 const response = await axios.get(`${import.meta.env.VITE_API_URL}api/order/userorders`, {headers:{token}}) 
console.log(response);

if(response.data.success){
let temp=[];

response.data.message.map((order)=>{
order.items.map((item)=>{
item['status']=order.status
item['payment']=order.payment
item['paymentMethod']=order.paymentMethod
item['date']=order.date
temp.push(item);
})

})
console.log(temp);

setOrderData(temp.reverse());



}

else{



}



  }

  else{

console.log("error");


  }

}

catch(error){


}

}

useEffect(()=>{
fetch();

},[token])


  
  return (
    <div className="mt-4" >
  <p class="font-bold text-xl mb-0 ml-5">MY ORDERS------</p>

 <div className="mt-0" >   
{ orderData.map((item,index)=><MyorderFullWidthOrderPage  item={item} orderData={orderData}  key={index} />   )  }
</div>  
    </div>
  )
}

export default Order