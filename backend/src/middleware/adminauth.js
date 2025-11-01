import express from "express";
import dotenv from "dotenv";
dotenv.config();

import jwt from 'jsonwebtoken'
const adminAuth=(req,res,next)=>{

  try{
const token=req.headers.token;
const response=jwt.verify(token,process.env.jwt_secret)
if(response.password==process.env.ADMIN_PASSWORD){

next();

}

else{
res.json({
message:"invalid credintial"

})

}
  }

  catch(error){

    res.json({
message:"server error from auth"

    })
  }


}

export default adminAuth