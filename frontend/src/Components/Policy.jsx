import React from 'react'
import { assets } from '../frontend_assets/assets'
const Policy = () => {
  return (
     <div className="flex flex-col md:flex-row justify-around items-center py-6 bg-gray-white text-center text-black mt-20">
      <div className="flex flex-col items-center mb-4 md:mb-0">
        <span className="text-2xl mb-2"><img src={assets.exchange_icon} alt="" /></span>
        <p className="text-xl font-bold  ">Easy Exchange Policy  </p>
        <p className="text-sm mt-3">We offer hassle free exchange policy</p>
      </div>
      <div className="flex flex-col items-center mb-4 md:mb-0">
        <span className="text-2xl mb-2"><img src={assets.quality_icon} alt="" /></span>
        <p className="text-xl font-bold ">7 Days Return Policy</p>
        <p className="text-sm mt-3">We provide 7 days free return policy</p>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-2xl mb-2"><img src={assets.support_img} alt="" /></span>
        <p className="text-xl font-bold ">Best customer support</p>
        <p className="text-sm mt-3">we provide 24/7 customer support</p>
      </div>
    </div>
  )
}

export default Policy
