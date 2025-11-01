import express from "express";
import dotenv from "dotenv";
dotenv.config();
import userAuth from "../middleware/userauth.js"
import OrderModel from "../models/orderModel.js"
import User from "../models/userModel.js"
import adminAuth from "../middleware/adminauth.js"
import Stripe from "stripe";

const orderRoutes=express.Router()
console.log(process.env.STRIPE_SECRET_KEY);

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
    const currency = "inr";
    const deliveryCharge = 40;
console.log("Stripe Key:", process.env.STRIPE_SECRET_KEY);

orderRoutes.get('/get',(req,res)=>{
res.send({
 message: "hellow world"
})





})

orderRoutes.post('/placeall',userAuth,async(req,res)=>{

  try{

const{userId,address,paymentMethod,amount,items,payment,}=req.body;
    const { origin } = req.headers; // frontend url



if(paymentMethod=="Cash on Delivery"){
await OrderModel.create({
userId,
address,
paymentMethod,
amount,
items,
payment,
date:Date.now(),
status:"Order is placed"

})


await User.findByIdAndUpdate(userId,{createData:{}})



res.status(200).json({
  message:"orderplaced",
  success:true,
})


  }

if(paymentMethod=="Stripe"){
const newOrder=  await OrderModel.create({
userId,
address,
paymentMethod,
amount,
items,
payment,
date:Date.now(),
status:"Order is placed"

})



const line_items=items.map((item)=>({
price_data:{
currency,
product_data:{name:item.name,},
unit_amount:item.price*100,},
quantity:item.quantity,

}))

      line_items.push({
        price_data: {
          currency,
          product_data: { name: "Delivery Charges" },
          unit_amount: deliveryCharge * 100,
        },
        quantity: 1,
      });

            const session = await stripe.checkout.sessions.create({
        success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
        cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
        line_items,
        mode: "payment",
      });

          return res.json({
        success: true,
        session_url: session.url,
      });

  
}

return res.json({ success: false, message: "Invalid Payment Method" });
  
}






  catch(error){
console.log(error);
res.status(500).json({
  message:"not",
  success:false
})


  }



})

orderRoutes.post('/verify',userAuth,async(req,res)=>{
try{
const {userId,success,orderId}=req.body

if(success==="true"){
  
  const response=  await OrderModel.findByIdAndUpdate(orderId,{payment:true},{new:true})
  await User.findByIdAndUpdate(userId,{createData:{}})

  if(response){
res.json({
  success:true,
  message:"payment successfull",})




}





}

else{
  await OrderModel.findByIdAndDelete(orderId)
  res.json({
    success:false,
    message:"payment failed",})
  }





}

catch(error){
console.log(error);
res.json({message:"server error"


})
}


})



orderRoutes.get('/userorders', userAuth,async(req,res)=>{

  try{
const{userId} = req.body;
console.log(userId);
   const users= await OrderModel.find({userId});
   console.log(users);
   
   if(users){
    res.json({
 success:true,
 message:users,

    })


   }

   else{
res.json({
success:false,
message:"not found",


})


   }

  }

  catch(error) {
    console.log(error);
    
res.json({

message:":server error"

})

  }



})


orderRoutes.get('/allorder' ,adminAuth ,async(req,res)=>{

  try{
 const response=  await OrderModel.find({})

 if(response){
res.json({
success:true,
message:response,

})
 }

 else{
res.json({
success:false,
message:"not found",

})


 }

  }


  catch (error){
console.log(error);
res.send({
message:"server error"

})


  }


})

orderRoutes.post('/status',adminAuth,async(req,res)=>{
  try{
const {status,orderId}=req.body;
console.log(status); console.log(orderId);


const updatedOrder=  await OrderModel.findByIdAndUpdate(orderId,{status},{new:true})
if(updatedOrder){

res.json({
success:true,
message:updatedOrder,

})

}

else{
res.json({
success:false,
message:"not updated",

})


}

  }

  catch(error){
console.log();
res.json({
message:"server eror"

})


  }

})


export default orderRoutes