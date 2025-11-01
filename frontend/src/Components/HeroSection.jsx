import React from 'react'

const HeroSection = () => {
  return (
        <div className="flex flex-col md:flex-row items-center justify-between bg-white pl-12 py-5 border border-gray-300  ">
      {/* Left Side - Text */}
      <div className="flex-1 text-center md:text-left space-y-6 pl-10">
        <p className="text-gray-500 uppercase tracking-widest">Our Bestsellers</p>
        <h1 className="text-5xl font-light">Latest Arrivals</h1>
        <h1 className="     text-black  ">
          Shop Now
        </h1>
      </div>

      {/* Right Side - Image */}
      <div className="flex-1 flex   h-full pr-0 ">
        <img
          src="https://cdn.prod.website-files.com/605826c62e8de87de744596e/676384c5f1eae7a1e79ae8d3_67637f0be47077919bae0b79_screenshot-2024-12-18-at-72302-pm-6762d481479f6.webp"
          alt="Latest Arrivals"
          className="  h-full "
        />
      </div>
    </div>
  )
}

export default HeroSection
