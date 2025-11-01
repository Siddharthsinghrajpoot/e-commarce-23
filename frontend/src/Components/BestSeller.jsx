import React, { useContext } from 'react'
import { context } from '../context/ShopContext';
import { useEffect } from 'react';
import Card from './Card';
const BestSeller = () => {
const {products}=useContext(context);
console.log(products+"hello");


const bseller=products.filter((item)=>item.bestseller)
console.log(bseller);




  return (
    <div className= "grid   grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mt-7 mx-7 " >

{ bseller.map((item,index)=><div> <Card item={item} index={index}  /></div>) }

      
    </div>
  )
}

export default BestSeller
