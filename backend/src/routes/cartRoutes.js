import express from "express"; // ← import express
import User from "../models/userModel.js";
import userAuth from "../middleware/userauth.js";
const router=express.Router();

router.get('/hello',(req,res)=>{

res.send("hello world")

});


router.post('/create',userAuth,async(req,res)=>{

  try{
const userId=req.body.userId;
const itemId=req.body.itemId;
const size=req.body.size;

console.log(userId);
console.log(itemId);
console.log(size);



const userData= await User.findById(userId);
const createData=await userData.createData; 

if(createData[itemId]){
if(createData[itemId][size]){
createData[itemId][size]+=1;

}

else{
createData[itemId][size]=1;

}

}

else{
createData[itemId]={}
createData[itemId][size]=1;

}

await User.findByIdAndUpdate(userId,{createData})
res.json({
success:true,
message:"Add to cart",

})


  }


  catch(error){

console.log(error);
res.json({
  success:false,
  message:"error is present"
})


  }



})

router.get('/getcartdata', userAuth,async(req,res)=>{
  try{
const userId=req.body.userId;
const userData=await User.findById(userId);
const createData=await userData.createData; 
res.json({
success:true,
message:createData,

})

  }
  catch(error){
console.log(error);

res.json({
success:false,
message:"error",

})

  }



})









export default router;

