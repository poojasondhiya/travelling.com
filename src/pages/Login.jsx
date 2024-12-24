import React, { useState } from "react";
import { Link } from "react-router-dom";
import profileImage71 from '../images/photo68.jpg';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          `url(${profileImage71})`
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Main Container */}
      <div className="flex items-center justify-center h-full px-4">
        <div className="relative z-10 bg-white bg-opacity-20 backdrop-blur-md rounded-lg px-6 py-8 w-full max-w-md md:px-8 md:py-10 text-center shadow-2xl">
          {/* Navbar Section */}
          <div className="flex justify-between items-center mb-6 md:mb-8 space-x-2 text-sm md:text-base">
          <Link to="/">
            <button className="text-white bg-green-500 px-3 py-2 rounded-md hover:bg-green-600">
              Home
            </button>
            </Link>
            
            <button
              onClick={() => setIsSignUp(false)}
              className="bg-green-500 text-white px-3 py-2 rounded-md hover:bg-green-600"
            >
              Log in
            </button>
            <Link to="/contact">
            <button className="bg-green-500 text-white px-3 py-2 rounded-md hover:bg-green-600">
              Contact us
            </button>
            </Link>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 font-serif">
            Dream Destination
          </h1>
          <p className="text-sm md:text-lg italic text-white mb-4 md:mb-6">
            Travel with the best
          </p>

          {/* Login or Sign-Up Form */}
          <div className="bg-white bg-opacity-30 backdrop-blur-lg rounded-md px-4 py-6 md:px-6">
            {isSignUp ? (
              <>
                <h2 className="text-white text-xl md:text-2xl font-semibold mb-4">
                  Sign up
                </h2>
                <form>
                  <div className="mb-4">
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-3 py-2 md:py-3 rounded-md bg-white bg-opacity-40 text-black placeholder-gray-400 focus:outline-none"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Username"
                      className="w-full px-3 py-2 md:py-3 rounded-md bg-white bg-opacity-40 text-black placeholder-gray-400 focus:outline-none"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full px-3 py-2 md:py-3 rounded-md bg-white bg-opacity-40 text-black placeholder-gray-400 focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-2 md:py-3 rounded-md hover:bg-green-600 hover:scale-105 transition-transform"
                  >
                    Sign up
                  </button>
                </form>
                <p className="mt-4 text-white text-sm md:text-base">
                  Already have an account?{" "}
                  <button
                    onClick={toggleForm}
                    className="text-green-300 hover:underline"
                  >
                    Log in
                  </button>
                </p>
              </>
            ) : (
              <>
                <h2 className="text-white text-xl md:text-2xl font-semibold mb-4">
                  Log in
                </h2>
                <form>
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Username"
                      className="w-full px-3 py-2 md:py-3 rounded-md bg-white bg-opacity-40 text-black placeholder-gray-400 focus:outline-none"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full px-3 py-2 md:py-3 rounded-md bg-white bg-opacity-40 text-black placeholder-gray-400 focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-2 md:py-3 rounded-md hover:bg-green-600 hover:scale-105 transition-transform"
                  >
                    Log in
                  </button>
                </form>
                <p className="mt-4 text-white text-sm md:text-base">
                  Don't have an account?{" "}
                  <button
                    onClick={toggleForm}
                    className="text-green-300 hover:underline"
                  >
                    Sign up
                  </button>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
