import React, { useState, useEffect } from "react";
import profileImage7 from '../images/photo1.jpg';
import profileImage8 from '../images/photo3.jpg';
import profileImage9 from '../images/photo4.jpg';
import profileImage10 from '../images/photo5.jpg';
import { Link } from "react-router-dom";

const Service = () => {
  // Array of image URLs
  const images = [
    profileImage7,
    profileImage8,
    profileImage9,
    profileImage10,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <section className="flex flex-col lg:flex-row items-center justify-center py-12 px-4 bg-gray-50">
      {/* Image Container */}
      <div className="flex-1 mb-6 lg:mb-0 lg:mr-6">
        <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg shadow-lg overflow-hidden">
          <img
            src={images[currentImageIndex]}
            alt="Travel Experience"
            className="w-full h-full  object-cover transition-transform duration-700 ease-in-out transform hover:scale-105"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="flex-1 text-center lg:text-left">
        <h1 className="text-6xl md:text-5xl font-extrabold text-gray-800 mb-6 transition-all duration-500 hover:text-gray-700">
          ABOUT US
        </h1>
        <p className="text-base md:text-lg text-gray-700 mb-6">
          India is a land of unparalleled diversity, where ancient traditions
          and modern innovation coexist in harmony. Known as the cradle of
          civilization, India captivates visitors with its vibrant festivals,
          timeless architecture, and warm hospitality.
        </p>
        <p className="text-base md:text-lg text-gray-700 mb-6">
          Whether it’s the awe-inspiring Taj Mahal, the bustling streets of
          Mumbai, or the tranquil backwaters of Kerala, every corner of India
          tells a story of resilience, beauty, and tradition. Step into India to
          experience a journey that touches the soul, excites the senses, and
          leaves you with memories to last a lifetime.
        </p>

        {/* Animated Button */}
        <Link to={"/about"}>
        <button
          className="px-8 py-2 mt-6 bg-indigo-600 text-white text-lg font-semibold rounded-sm border-2 border-transparent transition-all duration-500 ease-in-out transform hover:bg-white hover:text-indigo-600 hover:border-indigo-600 hover:scale-105 shadow-md shadow-pink-300"
        >
          Learn More 
        </button>
        </Link>
      </div>
    </section>
  );
};
 
export default Service;
