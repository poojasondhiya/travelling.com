import React from 'react';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

function Header() {
  return (
    <div className="bg-gray-800 text-white p-1 hidden sm:block">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
        {/* Header Info */}
        <div className="flex flex-col sm:flex-row items-center text-center gap-2">
          <span className="text-sm sm:text-base">📞 07552421243</span>
          <span className="text-sm sm:text-base">📧 info@travelindiatourism.com</span>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center justify-center gap-4">
          <FaWhatsapp className="text-xl cursor-pointer hover:text-green-500 transition duration-300" />
          <FaFacebookF className="text-xl cursor-pointer hover:text-blue-500 transition duration-300" />
          <FaInstagram className="text-xl cursor-pointer hover:text-pink-500 transition duration-300" />
          <FaYoutube className="text-xl cursor-pointer hover:text-red-500 transition duration-300" />
        </div>
      </div>
    </div>
  );
}

export default Header;
