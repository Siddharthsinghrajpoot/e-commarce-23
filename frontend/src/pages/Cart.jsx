import React from 'react'
import { context } from '../context/ShopContext'
import { useEffect ,useState} from 'react'
import { useContext } from 'react'
import FullWidthCard from '../Components/Fullwidthcard'
import CartSummary from '../Components/CartSummary'

const Cart = () => {
const {products,cardItems,}=useContext(context)
const [CartData,setCartData]=useState([]);





useEffect(()=>{
const tempData=[];
for(const items in cardItems){
for(const item in cardItems[items]){
if(cardItems[items][item]>0){
tempData.push({
_id:items,
size:item,
quantity:cardItems[items][item]

})

}

}
}

setCartData(tempData);


},[cardItems])


  return (

    <div className='mt-10'  >
        <div className="flex flex-col sm:items-center sm:justify-center md:flex-col md:justify-evenly md:items-center text-center gap-6">
      {CartData.map((item, index) => {
        const productData = products.find(
          (product) => product._id === item._id
        );

      
        return (
          <FullWidthCard
            key={index}
            item={{
              ...productData,
              size: item.size,
              quantity: item.quantity,
            }}
          />
        );
      })}
    </div>

<div className='mt-5'  ><CartSummary/></div>

</div>


  )
}

export default Cart
