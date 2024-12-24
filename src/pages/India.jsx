import React from "react";
import Layout from "../components/Layout";
import Recommended from "../components/Recommended";
import SubscribeSection from "../components/SubscribeSection";
import Testimonials from "../components/Testimonials";
import profileImage51 from '../images/photo48.jpg';
import profileImage52 from '../images/photo49.jpg';
import profileImage53 from '../images/photo50.jpg';
import profileImage54 from '../images/photo51.jpg';
import profileImage55 from '../images/photo52.jpg';
import profileImage56 from '../images/photo53.jpg';
import profileImage57 from '../images/photo54.jpg';
import profileImage58 from '../images/photo55.jpg';
import profileImage59 from '../images/photo56.jpg';
import profileImage60 from '../images/photo57.jpg';
import profileImage61 from '../images/photo58.jpg';
import profileImage62 from '../images/photo59.jpg';
import profileImage63 from '../images/photo60.jpg';

function India () {
  return (
    <Layout>
    <div className="bg-gray-100">
      {/* Header Section */}
      <header className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
          
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${profileImage51})`,// Replace with actual image URL
        }}
      >
        <h1 className="text-8xl font-bold text-white uppercase bg-black bg-opacity-40 px-6 py-3 rounded-lg">
          India
        </h1>
      </section>
     

      {/* Packages Section */}
      <section id="packages" className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {/* Package Card */}
          {[
            { title: "Golden Triangle Tour of India", img: profileImage52 },
            { title: "Golden Triangle with Amritsar", img: profileImage53 },
            { title: "Exotic Andamans with Havelock Island", img: profileImage54 },
            { title: "Assam and Sunderbans Cruise", img: profileImage55 },
            { title: "Rajasthan Desert Safari", img: profileImage56 },
            { title: "Golden Temple Tour", img: profileImage57 },
            { title: "Kerala Tour", img: profileImage58 },
            { title: "Golden Arunachal Tour", img: profileImage59 },
            { title: "Golden Gujarat Tour", img: profileImage60 },
            { title: "Madhya Pradesh Tour", img: profileImage61 },
            { title: "West Bangal Tour", img: profileImage62 },
            { title: "Assam Tour", img: profileImage63},
  
          ].map((packageItem, index) => (
            <div
              key={index}
              className="relative bg-gray-200 rounded-lg overflow-hidden shadow-lg group hover:scale-105 transition-transform duration-300"
            >
              <img
                src={packageItem.img}
                alt={packageItem.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-lg font-semibold text-center">
                  {packageItem.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
    <Recommended/>
    <SubscribeSection/>
    <Testimonials/>
    </Layout>
  );
}

export default India;
