import express from 'express';
import { v2 as cloudinary } from 'cloudinary';

import Product from '../models/productModel.js';
import upload from '../middleware/multer.js';
import adminAuth from '../middleware/adminauth.js';

const routerproducts = express.Router();

routerproducts.post(
  '/add',adminAuth,
  upload.fields([
    { name: 'image1', maxCount: 1 },
    { name: 'image2', maxCount: 1 },
    { name: 'image3', maxCount: 1 },
    { name: 'image4', maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const {
        name,
        description,
        price,
        bestseller,
        category,
        subCategory,
        size,
      } = req.body;

     const image1 = req.files.image1 ? req.files.image1[0] : null;
const image2 = req.files.image2 ? req.files.image2[0] : null;
const image3 = req.files.image3 ? req.files.image3[0] : null;
const image4 = req.files.image4 ? req.files.image4[0] : null;

      const images = [image1, image2, image3, image4].filter(
        (item) => item !== null
      );
      const imagesurl = await Promise.all(
        images.map(async (item) => {
          let result = await cloudinary.uploader.upload(item.path, {
            resource_type: 'image',
          });
          return result.secure_url;
        })
      );
      console.log(imagesurl);

      console.log(images);

      console.log(
        name,
        description,
        price,
        bestseller,
        category,
        subCategory,
        size
      );


      const response = await Product.create({
        name,
        description,
        category,
        price: Number(price),
        subCategory,
        bestseller: bestseller === 'true' ? true : false,
        sizes: size,
        image: imagesurl,
        date: Date.now(),
      });
      res.status(200).json({
        message: response,
        success:true
      });
    } catch (error) {
      console.log(error);

      res.json({
        massage: 'error is present',
           success:false
      });
    }
  }
);




routerproducts.get('/listproducts',async(req,res)=>{

  try{
const allproducts=  await Product.find()
res.status(200).json({
message:allproducts

})
  }
  catch(error){
    console.log(error);
    

res.status(500).json({
message:"error is present"

})

  }

})

routerproducts.get('/getbyid/:id',async(req,res)=>{
try{
const id=req.params.id;

 const response= await Product.findById(id);
res.status(200).json({
response

})

}

catch(error){
console.log(error);
res.status(500).json({
"message":"server error"

})



}



})

routerproducts.delete('/deletebyid/:id' ,async(req,res)=>{
try{
const id=req.params.id;

 const response= await Product.findOneAndDelete(id);
res.status(200).json({
message:"product is deleted",
success:true
})

}

catch(error){
console.log(error);
res.status(500).json({
"message":"server error"

})



}



})



export default routerproducts;
