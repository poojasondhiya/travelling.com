import React from 'react';
import Layout from '../components/Layout';
import Inter from '../components/Inter';
import SubscribeSection from '../components/SubscribeSection';
import Testimonials from '../components/Testimonials';
import profileImage45 from '../images/photo41.jpg';
import profileImage46 from '../images/photo42.jpg';
import profileImage47 from '../images/photo43.jpg';
import profileImage48 from '../images/photo44.jpg';
import profileImage49 from '../images/photo46.jpg';
import profileImage50 from '../images/photo47.jpg';

function About() {
  return (
    <Layout>
       <div className="bg-gray-50">
        {/* Header Section */}
        <div
          className="relative bg-cover bg-center h-64 sm:h-80 md:h-96 flex items-center justify-center "
          style={{
            backgroundImage:`url(${profileImage45})`,
          }}
        >
          <div className="bg-black bg-opacity-40 w-full h-full absolute top-0 left-0"></div>
          <h1 className="relative text-white text-5xl sm:text-6xl md:text-7xl font-bold z-10">
            About Us
          </h1>
        </div>

        {/* Content Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-16 text-gray-800">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">
            Travel India Tourism Pvt. Ltd. : Best Travel Agency In India
          </h2>
          <p className="text-base sm:text-lg leading-7 sm:leading-8 mb-4 text-justify">
            Travel India Tourism Pvt. Ltd. offers premier travel services as the top travel agents in Indiacd, ensuring unforgettable experiences tailored to your preferences and needs.
          </p>
          <p className="text-base sm:text-lg leading-7 sm:leading-8 mb-4 text-justify">
            Planning your next getaway? Well, don't sweat it! Finding the right travel agency can be a game-changer, especially in the bustling city of Bhopal. Lucky for you, there's a gem in town – Travel India Tourism Pvt. Ltd. Since 2005, we've been rocking the tourism scene, thanks to our founder, Mr. Mahendra Pratap Singh, who's known for his wizardry in travel.
          </p>
          <p className="text-base sm:text-lg leading-7 sm:leading-8 mb-4 text-justify">
            Now, what makes us stand out? It's our knack for personalized service and attention to detail. Whether you're planning a family vacation, a romantic getaway, or a business trip, our team of experienced travel experts, specialized in Travel Agents In Bhopal, is dedicated to creating unforgettable experiences tailored to your needs and preferences.
          </p>
        </div>
      </div>
    
  
    <div className="bg-white p-6 md:p-12">
      <h1 className="text-5xl font-bold text-center mb-8">Our Services</h1>

      {/* Service Cards */}
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12  ">
        <div className="bg-green-200 p-4 text-center rounded-lg shadow-lg group hover:scale-105 transition-transform duration-300 ">
          <img
            src= {profileImage46} // Replace with your icon path
            alt="India Tour"
            className="w-52 h-48 mx-auto mb-4"
          />
          <h2 className="text-lg font-semibold">India Tour</h2>
        </div>
        <div className="bg-blue-200 p-4 text-center rounded-lg shadow-lg group hover:scale-105 transition-transform duration-300">
          <img
            src= {profileImage47} // Replace with your icon path
            alt="International Tour"
            className="w-52 h-48 mx-auto mb-4"
          />
          <h2 className="text-lg font-semibold">International Tour</h2>
        </div>
        <div className="bg-blue-300 p-4 text-center rounded-lg shadow-lg group hover:scale-105 transition-transform duration-300">
          <img
            src= {profileImage48} // Replace with your icon path
            alt="Air Ticket"
            className="w-52 h-48 mx-auto mb-4"
          />
          <h2 className="text-lg font-semibold">Air Ticket</h2>
        </div>
        <div className="bg-purple-200 p-4 text-center rounded-lg shadow-lg group hover:scale-105 transition-transform duration-300">
          <img
            src= {profileImage49} // Replace with your icon path
            alt="Visa Services"
            className="w-52 h-48 mx-auto mb-4"
          />
          <h2 className="text-lg font-semibold">Visa Services</h2>
        </div>
        <div className="bg-pink-200 p-4 text-center rounded-lg shadow-lg group hover:scale-105 transition-transform duration-300">
          <img
            src= {profileImage50} // Replace with your icon path
            alt="Honeymoon Package"
            className="w-52 h-48 mx-auto mb-4"
          />
          <h2 className="text-lg font-semibold">Honeymoon Package</h2>
        </div>
      </div>

      {/* Service Descriptions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Tour Packages:</h3>
          <p className="text-gray-600">
            Our meticulously designed tour packages cater to a wide spectrum of
            preferences and interests. From the bustling streets of Delhi to
            the tranquil backwaters of Kerala, we, the Best Travel Agents In
            Bhopal, offer a diverse array of experiences that capture the
            essence of India's myriad landscapes, cultures, and traditions.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Hotel Booking:</h3>
          <p className="text-gray-600">
            We, the Best Travel Agents In Bhopal, understand the importance of
            comfortable accommodation while traveling. Through our extensive
            network of partner hotels, we ensure that our clients have access
            to a range of options, from budget-friendly stays to luxurious
            resorts.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Transport Services:</h3>
          <p className="text-gray-600">
            Seamless transportation is the backbone of any successful travel
            experience. We provide a range of transport options, including
            private cars, buses, and trains, ensuring that our clients can
            explore India at their own pace and convenience.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Flight Booking:</h3>
          <p className="text-gray-600">
            With access to a vast database of airlines and flight routes, we
            facilitate hassle-free flight bookings, ensuring that our clients
            can reach their desired destinations with ease.
          </p>
        </div>
      </div>
    </div>
  <Inter/>
  <SubscribeSection/>
  <Testimonials/>
    </Layout>
    
  );
}

export default About;
