import React from 'react'
import {Link} from "react-router-dom"

const Card = ({item}) => {
  return (
<Link to={`/product/${item._id}`} >

     <div className="bg-gray-100 rounded-xl shadow-md p-4 w-64">
      {/* Product Image */}
      <img
        src={item.image[0]}
        alt={item.name}
        className="w-full h-40 object-contain rounded-lg mb-3"
      />

      {/* Product Info */}
      <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
      <p className="text-gray-600 font-medium">₹{item.price}</p>
    </div>
    </Link>
  )
}

export default Card
