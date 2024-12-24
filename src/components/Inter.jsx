import React from "react";
import { Link } from "react-router-dom";

const Inter = () => {
  return (
    <div className="bg-[#12205b] min-h-[70vh] flex items-center justify-center px-4">
      {/* Rectangular Box */}
      <div className="relative bg-white w-96 sm:w-[600px] h-auto rounded-lg shadow-2xl overflow-hidden p-6 sm:p-10">
        {/* Decorative Background Circles */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 opacity-20 rounded-full -z-10"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-teal-400 opacity-20 rounded-full -z-10"></div>

        {/* Content */}
        <div className="text-center">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-3">
            Explore India & International Destinations
          </h2>
          <h3 className="text-base sm:text-lg font-semibold text-blue-600 mb-4">
            Travel India Tourism Pvt. Ltd
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
            Tailored holiday packages with accommodations, flights, visas, and
            tours—all customized to your preferences.
          </p>
          <p className="text-gray-700 text-sm sm:text-base mb-4">
            Share your preferences, and we’ll create the perfect holiday for you.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Enquire Now Button */}
            <Link to={"/contact"}>
            <button className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-lg text-sm sm:text-base font-medium shadow-md transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-blue-700">
              Enquire Now
            </button>
            </Link>

            {/* Contact Info */}
            <div className="flex items-center text-gray-900 font-semibold gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-blue-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 8.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5M21 4.5H3a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 003 19.5h18a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0021 4.5z"
                />
              </svg>
              <span>+91 75524 21243</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inter;
