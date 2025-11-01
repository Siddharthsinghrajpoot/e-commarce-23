import React from 'react'
import axios from "axios"
import { toast } from "react-toastify";

const CardProductlist = ({item,onRemove}) => {
const handleDelete  =async(id)=>{

  console.log(id);
  
try{
  const response=  await axios.delete(`${import.meta.env.VITE_API_URL}api/products/deletebyid/${id}`)


if(response.data.success){

toast.success("deleted")
onRemove(id);

}

else{

toast.error("not deleted")

}


}

catch(error){

console.log(error);
console.log("server error");



}




}



  return (



   
<div className="flex flex-col sm:flex-row items-start sm:items-center w-full h-auto sm:h-[70px] p-2 border border-gray-200 rounded-md overflow-hidden">
  {/* First Image */}
  <img
    src={item.image[0]}
    alt={item.name}
    className="w-full h-40 sm:w-[70px] sm:h-[70px] object-contain sm:object-cover rounded-md mb-2 sm:mb-0 sm:mr-3"
  />

  {/* Product Info + Delete */}
  <div className="flex-1 flex flex-col sm:flex-row justify-between items-start sm:items-center overflow-hidden">
    {/* Product Info */}
    <div className="flex flex-col justify-center overflow-hidden mb-2 sm:mb-0">
      <h2 className="text-sm font-semibold truncate">{item.name}</h2>
      <p className="text-xs text-gray-500 truncate">{item.description}</p>
      <div className="flex flex-wrap items-center space-x-2 text-xs text-gray-600 mt-1">
        <span>Price: ${item.price}</span>
        <span>Category: {item.category}</span>
        <span>Sub: {item.subCategory}</span>
        <span>Sizes: {item.sizes.join(", ")}</span>
        {item.bestseller && (
          <span className="text-red-500 font-bold">Bestseller</span>
        )}
      </div>
    </div>

    {/* Delete Button */}
    <button onClick={() => handleDelete(item._id)}  className="px-2 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600">
      Delete
    </button>
  </div>
</div>



  )
}

export default CardProductlist
