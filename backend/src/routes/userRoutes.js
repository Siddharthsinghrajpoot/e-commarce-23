import express from "express"; // ← import express
import User from "../models/userModel.js";
import jwt from "jsonwebtoken"

const router=express.Router();

router.get('/hello',(req,res)=>{

res.send("hello world")

});

router.post('/signup',async(req,res)=>{

  try {
const username=req.body.username;
const email=req.body.email;
const password=req.body.password
    const existingUser = await User.findOne({
   username,
   email,
   password,
    });

    if (existingUser) {
      return res.status(409).json({
        message: "Username, email, or password already exists",
        success:false
      });
    }




const response=  await User.create({
  
  username,
  email,
  password


})



   res.status(200).json({
       response,
       message:"use register",
       success:true
    })

}
catch(error){

    console.error('Error in createNode controller', error);
    res.status(500).json({ message: 'internal server error' });
  


}


})

router.post('/login',async(req,res)=>{

  try{


const email=req.body.email;
const password=req.body.password;
const user=await User.findOne({
email,
password

})
if(user){
const token=jwt.sign({
 id:user._id 
},process.env.jwt_secret)
res.status(200).json({
token:token,
success:true,
message:"token is generated",
}
)

}

else{
res.json({ // 👈 401 means Unauthorized
message:"token is not found",
success:false,
})

}


}

catch(e){



    console.error('Error in createNode controller', error);
    res.status(500).json({ message: 'Server error, please try again later' });
  





}


})


export default router;