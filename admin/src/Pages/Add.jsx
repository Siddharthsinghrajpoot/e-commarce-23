import React from 'react'
import { useState } from 'react'
import { toast } from "react-toastify";
import axios from "axios"
const Add = ({token}) => {
const[Name,setName]=useState('');
const[discreption,setDescription]=useState('');
const[Category,setCategory]=useState('');
const[subCategory,setSubCategory]=useState('');
const[price,setPrice]=useState('');
const[size,setSize]=useState('');
const [Bestseller,setBesteller]=useState(false)
const [images,setImages]=useState([])



// console.log(images);

 const handleImageChange=(e)=>{
 const files = Array.from(e.target.files);
//  console.log(files);
 

  if ( images.length >= 4) {
    toast.error("You can upload only 4 images");
    return;
  }

  // Append new files to existing images
  setImages((prev) => [...prev, ...files]);

  console.log([...images, ...files]); // for 










 }

const handleSubmit=async(e)=>{

  try{
e.preventDefault();
  const formData = new FormData();

  // Append text fields
  formData.append("name", Name);
    formData.append("description", discreption);
    formData.append("category", Category);
    formData.append("subCategory", subCategory);
    formData.append("price", price);
    formData.append("size", size); // send array
    formData.append("bestseller", Bestseller);

  console.log([...formData.entries()]);

  // Append images individually (as image1, image2, image3...)
images.forEach((file, index) => {
  console.log(`image${index + 1}:`, file.name);
  formData.append(`image${index + 1}`, file);
});
console.log(`${import.meta.env.VITE_API_URL}api/products/add`)

const response=  await axios.post(`${import.meta.env.VITE_API_URL}api/products/add`,formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      token: token, // or Authorization: `Bearer ${token}`
    },
  })

if(response.data.success){

toast.success("product is created at database");

}

else{
toast.error("product is not created at database");

}



  }


  catch(error){
    console.log(error);
    
toast.error("error")


  }







}


  return (
 <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-2xl p-8 mt-1">
  <h2 className="text-2xl font-semibold mb-6 text-center">Add New Product</h2>

  <form onSubmit={handleSubmit}  className="space-y-5">
    
    {/* Product Name */}
    <div>
      <label className="block font-medium mb-1">Product Name</label>
      <input
  onChange={(e) => setName(e.target.value)}
value={Name}
        type="text"
        className="w-full border p-2 rounded-lg"
        placeholder="Enter product name"

      />
    </div>

    {/* Product Description */}
    <div>
      <label className="block font-medium mb-1">Description</label>
      <textarea
        className="w-full border p-2 rounded-lg"
        placeholder="Enter product description"
        onChange={(e)=>{setDescription(e.target.value)}}
        value={discreption}
      ></textarea>
    </div>

    {/* Category & Subcategory */}
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="block font-medium mb-1">Category</label>
        <input
          type="text"
          className="w-full border p-2 rounded-lg"
          placeholder="Category"
                  onChange={(e)=>{setCategory(e.target.value)}}
        value={Category}
        />
      </div>
      <div>
        <label className="block font-medium mb-1">Subcategory</label>
        <input
          type="text"
          className="w-full border p-2 rounded-lg"
          placeholder="Subcategory"
         onChange={(e)=>{setSubCategory(e.target.value)}}
        value={subCategory}
        />
      </div>
    </div>

    {/* Price & Sizes */}
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="block font-medium mb-1">Price (₹)</label>
        <input
          type="number"
          className="w-full border p-2 rounded-lg"
          placeholder="Enter price"
        onChange={(e)=>{setPrice(e.target.value)}}
        value={price}
        />
      </div>
      <div>
        <label className="block font-medium mb-1">Sizes</label>
        <input
          type="text"
          className="w-full border p-2 rounded-lg"
          placeholder="e.g. S, M, L, XL"
         onChange={(e)=>{setSize(e.target.value)}}
        value={size}
        />
      </div>
    </div>

    {/* Bestseller Checkbox */}
    <div className="flex items-center gap-3">
      <input type="checkbox" className="w-5 h-5"        onChange={(e)=>{setBesteller(e.target.checked)}}
        value={Bestseller}  />
      <label className="font-medium">Bestseller</label>
   
    </div>

    {/* Image Upload */}
    <div>
      <label className="block font-medium mb-1">Upload Images (max 4)</label>
      <input
        type="file"
        multiple
        accept="image/*"
        className="w-full border p-2 rounded-lg"
         onChange={handleImageChange}
      />
      <div className="mt-3 flex flex-wrap gap-3">
        {/* Image previews here */}
        <div className="w-20 h-20 bg-gray-100 border rounded-lg flex items-center justify-center text-sm text-gray-400">
          Preview
        </div>
      </div>
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
    >
      Add Product
    </button>
  </form>
</div>

  )
}

export default Add
