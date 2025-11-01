import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-6 mt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Brand Section */}
        <div className="mb-6 md:mb-0 max-w-xs">
          <h3 className="text-lg font-semibold mb-2">FOREVER.</h3>
          <p className="text-sm leading-relaxed">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>

        {/* Company Links */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">COMPANY</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About us</a></li>
            <li><a href="#" className="hover:underline">Delivery</a></li>
            <li><a href="#" className="hover:underline">Privacy policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">GET IN TOUCH</h3>
          <p className="text-sm">+1-212-456-7890</p>
          <p className="text-sm">contact@foreveryou.com</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-6 border-t border-gray-300 pt-4 text-center text-xs">
        <p>Copyright 2024 @ forever.com - All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
