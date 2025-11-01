import React from 'react'
import Card from './Card'
import { context } from '../context/ShopContext'
import { useContext } from 'react'


const LatestCollection = () => {
const {products}=useContext(context);
const currency=useContext(context);

const newproducts=products.slice(0,10);



  return (
    <div className="grid   grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mt-7 mx-7 "  >

{ newproducts.map((item,index)=> <div> <Card key={index} item={item} />  </div> )  }

      


    </div>
  )
}

export default LatestCollection
