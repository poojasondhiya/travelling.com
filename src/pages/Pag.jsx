import React from 'react';
import Layout from '../components/Layout';
import SubscribeSection from '../components/SubscribeSection';
import Testimonials from '../components/Testimonials';
import profileImage67 from '../images/photo64.jpg';
import profileImage68 from '../images/photo65.jpg';
import profileImage69 from '../images/photo66.jpg';
import profileImage70 from '../images/photo67.jpg';
import { Link } from "react-router-dom";

const Pag = () => {
  return (
    <Layout>
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div
        className="bg-cover bg-center h-72 flex items-center justify-center text-white"
        style={{
          backgroundImage:  `url(${profileImage67})`,// Replace with actual background image URL
        }}
      >
        <h1 className="text-5xl  font-bold">Visa Services In Bhopal</h1>
      </div>

      {/* Breadcrumb */}
      <div className="py-4 px-5 text-sm text-gray-600">
        <p>
          <Link to={"/"}>
          <span className='text-blue-900 font-bold'>Home</span></Link> &gt; <span className="text-gray-800">Visa Services In Bhopal</span>
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-5 md:flex gap-10">
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">Visa Biometric Services In Bhopal</h2>
          <p className="text-gray-700">
            Welcome to Travel India Tourism Pvt. Ltd., your premier destination for UK visa services in Bhopal, Madhya
            Pradesh. We specialize in assisting individuals to secure permanent residency through top-notch immigration
            consultation services.
          </p>
          <p className="mt-2 text-gray-700">
            Renowned as a leading tourist and business visa consultant, we cater to diverse travel needs. Our
            comprehensive services include facilitating UK tourist visas, along with visa assistance for France and
            Switzerland. With a commitment to excellence, we ensure travelers receive invaluable support throughout
            their visa application journey. Trust our expertise as the best visa agents in Bhopal for a seamless
            experience.
            </p>
         
        </div>

        {/* Right Contact Section */}
        <div className="bg-blue-100 p-5 rounded-md shadow-md w-full md:w-1/3">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">Contact us</h3>
          <div className="space-y-4">
            {/* Call Section */}
            <div>
              <p className="font-medium text-blue-800">Call Us</p>
              <p className="text-gray-700">+91 9893121733</p>
              <p className="text-gray-700">+91 98935 74731</p>
            </div>
            {/* Email Section */}
            <div>
              <p className="font-medium text-blue-800">E-mail</p>
              <p className="text-gray-700">visa@travelindiatourism.com</p>
            </div>
            {/* Address Section */}
            <div>
              <p className="font-medium text-blue-800">Address</p>
              <p className="text-gray-700">
                Vande Matram Square, C-27 Parijat Complex Bitan Market, E-5, Arera Colony, Bhopal, Madhya Pradesh
                462016
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="text-center py-10 bg-white shadow">
        <h1 className="text-3xl font-bold text-blue-900">Upcoming Visa Appointment Date</h1>
        <p className="mt-2 text-gray-600">
          We are delighted to inform you of the upcoming visa appointment dates for this month, specifically for the
          United Kingdom, France, and Switzerland.
        </p>
      </div>

      {/* Visa Appointment Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 p-5">
        {/* United Kingdom Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={profileImage68} // Replace with the actual image URL
            alt="United Kingdom"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-lg font-bold text-blue-900">United Kingdom</h3>
            <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
              Date: Call Us
            </button>
          </div>
        </div>

        {/* France Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={profileImage69} // Replace with the actual image URL
            alt="France"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-lg font-bold text-blue-900">France</h3>
            <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
              Date: Call Us
            </button>
          </div>
        </div>

        {/* Switzerland Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={profileImage70} // Replace with the actual image URL
            alt="Switzerland"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-lg font-bold text-blue-900">Switzerland</h3>
            <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
              Date: Call Us
            </button>
          </div>
        </div>
      </div>

      {/* Why Section and Booking Form */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 p-5">
        {/* Why Section */}
        <div className="col-span-2">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Why We Are Best Visa Agents In Bhopal?</h2>
          <p className="text-gray-700">
            Since its establishment in 2005, our company has facilitated the overseas aspirations of over 1 million
            individuals. Travel India Tourism, situated in Bhopal, is at the forefront of assisting Bhopal residents in
            acquiring visas for foreign travel. Our offices witness a steady influx of individuals from diverse
            backgrounds seeking our Free Consulting services daily. At Travel India Tourism Bhopal, we pride ourselves
            on offering professional, reliable, and effective visa assistance services.
          </p>
          <p className="text-gray-700">Commonly sought visas for foreign nationals include permanent residence immigrant visas or temporary stay nonimmigrant visas. For short-term stays such as short courses, temporary work assignments, family visits, vacations, or holidays, a tourist visa is indispensable. At Travel India Tourism Bhopal, we facilitate your visa needs with professionalism and efficacy, ensuring your journey abroad is smooth and hassle-free.</p>
        </div>

        {/* Booking Form */}
        <div className="bg-blue-100 p-5 rounded-md shadow-md">
          <h3 className="text-lg font-bold text-blue-900 mb-4">Book An Appointment</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Your name</label>
              <input
                type="text"
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  <SubscribeSection/>
  <Testimonials/>
    </Layout>
  );
};

export default Pag;

    
