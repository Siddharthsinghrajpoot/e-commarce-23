import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { context } from '../context/ShopContext';
import { useEffect } from 'react';
import Card from '../Components/Card';
import Card2 from '../Components/Card2';
const Product = () => {
const {products}=useContext(context);
const [product,setProducts]=useState([]);
console.log(product);

const {id}=useParams();
console.log(id);
useEffect(()=>{

setProducts(  products.filter((item=>item._id==id  ))
);


},[id])



  return (

    <div>
    <div className=" flex flex-col sm:items-center sm:justify-center md:flex-row md:justify-evenly md:items-center text-center gap-6" >

      {product.map((item,index)=><div> <Card item={item} index={index} />   </div>)}
     
     {product.map((item,index)=><div> <Card2 item={item} index={index} />   </div>)}

    </div>
    <button className='border border-black px-4 py-2 rounded ml-3' > Description</button>
  <button className='border border-black px-4 py-2 rounded'   >Reviews(122)</button>
    <div className="border border-black ml-3 p-3 "  >
<div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo quasi unde ex repellat quaerat accusamus at molestiae facere perspiciatis. Mollitia aliquid magnam facilis! Earum, consectetur porro! Nihil repudiandae illum magni iusto quisquam cupiditate amet reiciendis .</div>
<br />
<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos a fugiat distinctio impedit corrupti, consectetur minus doloribus cupiditate dolores temporibus laboriosam in hic quas deleniti, possimus molestias voluptatem quasi atque voluptatibus minima? Facere earum alias deleniti ipsam cum, natus id dicta sapiente </div>
    </div>


    <div>


    </div>

    </div>
  )
}

export default Product
