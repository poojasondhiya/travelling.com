import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import { Link } from "react-router-dom";

function Navbar() {
  // State to control the opening and closing of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section>
      <nav className="bg-white text-black py-4 px-6 shadow-md sticky top-0">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="logo">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmaOhqYFNe3uiK9s4FInqx5k3WhN-ySfI2lg&s"
              className="h-10"
              alt="Travel India Tourism Logo"
            />
          </div>

          {/* Desktop Nav Links (Centered) */}
          <ul className="hidden md:flex space-x-8 text-md font-bold mx-auto">
            <li>
              <Link to="/" className="hover:text-blue-900">
                Home
              </Link>
            </li>
            <li>
              <Link  to="/about" className="hover:text-blue-900">
                About
              </Link>
            </li>
            <li>
              <Link to="/india" className="hover:text-blue-900">
                India
              </Link>
            </li>
            <li>
              <Link to="/world" className="hover:text-blue-900">
                World
              </Link>
            </li>
            <li>
              <Link to="/Pag" className="hover:text-blue-900">
                Pages
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-900">
                Contact
              </Link>
            </li>
          </ul>

          {/* Login Button */}
          <div className="hidden md:flex">
            <Link to="/login">
              <button className="login-button">
                <i className="fas fa-sign-in-alt mr-2"></i> Login
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="block md:hidden text-black focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="fas fa-bars text-2xl"></i> {/* Hamburger Icon */}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            <ul className="space-y-4 text-center text-md font-bold">
              <li>
                <Link to="#home" className="block hover:text-blue-950">
                  Home
                </Link>
              </li>
              <li>
                <Link to="#about" className="block hover:text-blue-900">
                  About
                </Link>
              </li>
              <li>
                <Link to="#india" className="block hover:text-blue-900">
                  India
                </Link>
              </li>
              <li>
                <Link to="#world" className="block hover:text-blue-900">
                  World
                </Link>
              </li>
              <li>
                <Link to="#pages" className="block hover:text-blue-900">
                  Pages
                </Link>
              </li>
              <li>
                <Link to="#contact" className="block hover:text-blue-900">
                  Contact
                </Link>
              </li>
            </ul>

            {/* Mobile Login Button */}
            <div className="mt-4 flex justify-center">
              <Link to="/login">
                <button className="login-button">
                  <i className="fas fa-sign-in-alt mr-2"></i> Login
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* CSS Styles */}
      <style>
        {`
          .login-button {
            background: linear-gradient(to right, #4CAF50, #00C6FF);
            color: white;
            font-bold: 500;
            padding: 0.7rem 1.5rem;
            border: none;
            border-radius: 8px;
            display: flex;
            align-items: center;
            transition: all 0.3s ease-in-out;
          }
          
          .login-button:hover {
            background: linear-gradient(to right, #00C6FF, #4CAF50);
            transform: scale(1.1) rotate(2deg);
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
          }
        `}
      </style>
    </section>
  );
}

export default Navbar;
