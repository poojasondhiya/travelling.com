import React from "react";
import {
  FaPhone,
  FaEnvelope, 
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-red-950 to-red-800 text-white py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Quick Contact */}
        <div>
          <h3 className="font-bold text-xl mb-4">Quick Contact</h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center">
              <FaMapMarkerAlt className="text-yellow-400 mr-2" />
              Best Travel agency In Bhopal, Madhya Pradesh, 462016
            </li>
            <li className="flex items-center">
              <FaPhone className="text-yellow-400 mr-2" /> +91 7552421243
            </li>
            <li className="flex items-center">
              <FaEnvelope className="text-yellow-400 mr-2" /> info@travelindiatourism.com
            </li>
          </ul>
          
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold text-xl mb-4">Company</h3>
          <ul className="space-y-2 text-gray-300">
            <li>About us</li>
            <li>Community Blog</li>
            <li>Careers</li>
            <li>Privacy policy</li>
            <li>Terms of service</li>
          </ul>
        </div>

        {/* Social and Partner */}
        <div>
          <h3 className="font-bold text-xl mb-4">Follow Us</h3>
          <div className="flex space-x-6 text-white text-3xl">
            <a
              href="#"
              className="hover:text-blue-500 transition-transform transform hover:scale-125"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="hover:text-blue-300 transition-transform transform hover:scale-125"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="hover:text-pink-500 transition-transform transform hover:scale-125"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="hover:text-red-500 transition-transform transform hover:scale-125"
            >
              <FaYoutube />
            </a>
          </div>
          <h3 className="font-bold text-xl mt-8 mb-4">Our Partner</h3>
          <div className="flex items-center space-x-4">
            <img
              src="data:image/png;base64,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" // Replace with your image URL
              alt="Partner Logo"
              className="w-48 h-44 object-contain rounded-lg shadow-md -mt-6"
            />
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
