import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (

    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-16 bg-gray-200">
        {/* quick links */}
        <div className="flex flex-col p-7 ml-16">
          <span className="p-1">🔗 Navigate</span>
          <span className="p-1 "><Link to="/" className="hover:underline hover:text-gray-500">Home</Link></span>

          <span className="p-1"><Link to="/shop" className="hover:underline hover:text-gray-500">Shop</Link></span>

          <span className="p-1"><Link to="/about" className="hover:underline hover:text-gray-500">About Us</Link></span>

          <span className="p-1"><Link to="/contact" className="hover:underline hover:text-gray-500">Contact</Link></span>

          <span className="p-1" ><Link to="/faq" className="hover:underline hover:text-gray-500">FAQ</Link></span>

          <span className="p-1"><Link to="/terms" className="hover:underline hover:text-gray-500">Terms & Conditions</Link></span>

          <span className="p-1"><Link to="/pp" className="hover:underline hover:text-gray-500">Privacy Policy</Link></span>
        </div>

        {/* customer support */}
        <div className="flex flex-col p-7 ml-16">
          <span className="">
            📞 Customer Support Need help?
            <br /> We’re here for you.
            <br />
            📧 Email:  uchandrasaimahesh@gmail.com.
            <br />
            📞 Phone: +91-9876543210
            <br />
            🕒 Mon–Sat: 9 AM – 7 PM
            <br />
          </span>
        </div>

        {/*  */}

        <div className="flex flex-col p-7 ml-16">
          <span>
            📬 Subscribe to Our Newsletter Get exclusive offers, new arrivals,
            and more.<br />  uchandrasaimahesh@gmail.com.<br /> 🔘 Subscribe <br />🌐 Follow Us Stay connected
            with us:<br />  [Facebook]<br /> [Instagram]<br /> [Twitter] <br />
          </span>
        </div>
      </div>
      <div className="flex p-7 ml-16">
          <span>
            © 2025 UCSM All rights reserved.
          </span>
        </div>
    </>
  );
};

export default Footer;
