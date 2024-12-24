import React from "react";
import profileImage44 from '../images/photo40.jpg';

const SubscribeSection = () => {
  return (
    <div className="bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div>
          <img
            src={profileImage44}// Replace this with your image URL
            alt="Beach View"
            className="rounded-lg shadow-md w-full"
          />
        </div>

        {/* Subscription Section */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Get special offers, and more from Travel India Tourism
          </h2>
          <p className="text-gray-600 mb-6">
            Subscribe to see secret deals prices drop the moment you sign up!
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-grow p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-900 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
