import React from "react";
import Layout from "../components/Layout";
import SubscribeSection from "../components/SubscribeSection";
import Testimonials from "../components/Testimonials";

const Contact = () => {

  
  return (
    <Layout>
      {/* Full-Screen Map */}
      <div className="h-screen w-screen">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14495333.701448122!2d82.75252935!3d21.0680074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e1!3m2!1sen!2sin!4v1732788307663!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        ></iframe>
      </div>

      {/* Contact Information & Form Section */}
      <div className="bg-gray-50 py-14 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Contact Information</h2>
            <p className="text-gray-600">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <span className="text-blue-500 text-lg">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <p className="text-gray-700">
                  Vande Matram Square, C-27 Parijat Complex Bittan Market, E-5, Arera Colony,
                  <br />
                  Bhopal, Madhya Pradesh 462016
                </p>
              </div>
              {/* Phone */}
              <div className="flex items-center space-x-4">
                <span className="text-blue-500 text-lg">
                  <i className="fas fa-phone"></i>
                </span>
                <p className="text-gray-700">07552421243</p>
              </div>
              {/* Email */}
              <div className="flex items-center space-x-4">
                <span className="text-blue-500 text-lg">
                  <i className="fas fa-envelope"></i>
                </span>
                <p className="text-gray-700">info@travelindiatourism.com</p>
              </div>
            </div>
          </div>

          {/* Send a Message Form */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Send a Message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-1 font-medium">
                    Your Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Your Name"
                    required
                  />
                </div>
                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-1 font-medium">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Your Phone"
                  />
                </div>
              </div>
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1 font-medium">
                  Your Email*
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Your Email"
                  required
                />
              </div>
              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <SubscribeSection />
      <Testimonials />
    </Layout>
  );
};

export default Contact;
