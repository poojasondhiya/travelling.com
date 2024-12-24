import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import videourl from '../images/Hero video.mp4';


function HeroSection() {
  const [currentWord, setCurrentWord] = useState("Discover");

  // Words to animate
  const words = ["Discover", "Adventure", "Travel"];

  useEffect(() => {
    // Set an interval to change the word every 5 seconds
    const interval = setInterval(() => {
      setCurrentWord((prevWord) => {
        const currentIndex = words.indexOf(prevWord);
        const nextIndex = (currentIndex + 1) % words.length;
        return words[nextIndex];
      });
    }, 3000); // 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="relative text-white py-32 px-4 md:py-40 lg:py-48">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src={videourl} // Example travel-the-world video URL
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to darken the video */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Hero Content */}
      <div className="relative z-20 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          It's Time To{" "}
          <span className="text-yellow-400 animate-pulse">{currentWord}</span>{" "}
          The World
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8">
          Start Your Next Adventure Today; Explore Amazing Destinations Worldwide
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative z-20 search-bar flex flex-col sm:flex-row justify-center gap-4 bg-white p-4 rounded-xl max-w-4xl mx-auto">
        {/* Location Input */}
        <div className="search-field flex items-center bg-gray-100 p-2 rounded-md w-full sm:w-1/3">
          <i className="fas fa-map-marker-alt mr-2 text-gray-500"></i>
          <input
            type="text"
            placeholder="Location - Where are you going?"
            className="border-none outline-none bg-transparent text-gray-700 w-full"
          />
        </div>

        {/* Date Input (Start Date) */}
        <div className="search-field flex items-center bg-gray-100 p-2 rounded-md w-full sm:w-1/3">
          <i className="fas fa-calendar-alt mr-2 text-gray-500"></i>
          <input
            type="date"
            className="border-none outline-none bg-transparent text-gray-700 w-full"
          />
        </div>

        {/* Date Input (End Date) */}
        <div className="search-field flex items-center bg-gray-100 p-2 rounded-md w-full sm:w-1/3">
          <i className="fas fa-calendar-alt mr-2 text-gray-500"></i>
          <input
            type="date"
            className="border-none outline-none bg-transparent text-gray-700 w-full"
          />
        </div>

        {/* Search Button */}
        <Link to={"/contact"}>
        <button className="search-button bg-blue-600 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-blue-700 focus:outline-none mt-4 sm:mt-0 sm:ml-4 w-full sm:w-auto hover:scale-105">
          Search
        </button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
