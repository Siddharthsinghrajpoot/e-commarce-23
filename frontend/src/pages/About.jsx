import React from 'react';
import { assets } from '../frontend_assets/assets';

const About = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">ABOUT US</h1>
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <img 
            src={assets.about_img} 
            alt="About Us Products" 
            className="w-80 md:w-96 object-cover rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 space-y-4">
          <p>
            Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.
          </p>
          <p>
            Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.
          </p>
          <h3 className="text-xl font-semibold">Our Mission</h3>
          <p>
            Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
