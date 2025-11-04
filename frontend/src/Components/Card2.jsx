import React, { useContext } from 'react'
import { useState } from 'react';
import { context } from '../context/ShopContext';
import Product from '../pages/product';


const Card2 = ({item}) => {
const {addToCart}=useContext(context)
  const [size, setSize] = useState("");

  return (
    <div className="max-w-sm bg-white shadow-lg rounded-2xl p-4 m-4 border hover:shadow-xl transition">
      {/* Product Name */}
      <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>

      {/* Price */}
      <p className="text-gray-600 mt-2">
        Price: <span className="font-bold text-green-600">₹{item.price}</span>
      </p>


        <p className="text-gray-600 mt-2">
        Description: <span className="font-bold text-green-600">{item.description
}</span>
      </p>

      {/* Size Select */}
      <div className="mt-3">
        <label className="text-sm font-medium text-gray-700">Select Size</label>
        <select
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-green-400"
        >
          <option value="">--Choose--</option>
          {item.sizes?.map((s, idx) => (
            <option key={idx} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={() =>
          addToCart(item._id,size)
        }
        className="mt-4 w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition"
      >
        Add to Cart
      </button>
      {/* {more extra data} */}

<div className="mt-2 text-slate-800 text-pretty"  >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, eveniet cum consectetur numquam obcaecati quod, incidunt laudantium ea debitis commodi minus ducimus rem quasi eligendi facere repellat  </div>

    </div>
  )
}

export default Card2
