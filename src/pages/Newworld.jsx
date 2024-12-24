import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import International from "../components/International";
import SubscribeSection from "../components/SubscribeSection";
import Testimonials from "../components/Testimonials";
import profileImage64 from '../images/photo61.jpg';
import profileImage65 from '../images/photo62.jpg';
import profileImage66 from '../images/photo63.jpg';

function Newworld() {
  const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);

  const backgroundImages = [
    profileImage64, // Image 1
    profileImage65, // Image 2
    profileImage66, // Image 3
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 2000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [backgroundImages.length]);

  return (
    <Layout>
      <div className="App">
        {/* Header Section */}
        <section
          className="relative h-[400px] bg-cover bg-center flex items-center justify-center transition-all duration-1000"
          style={{
            backgroundImage: `url(${backgroundImages[backgroundImageIndex]})`,
          }}
        >
          <h1 className="text-8xl font-bold text-white uppercase bg-black bg-opacity-30 px-6 py-3 rounded-lg">
            World
          </h1>
        </section>

        {/* Content Section */}
        <section className="px-5 py-10 max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Travel World</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Exploring India's tourist destinations and culture festivals promises
            an enriching journey filled with diversity and warmth. India's vast
            landscape is a canvas of experiences waiting to be discovered. Begin
            your adventure by visiting the Taj Mahal in Agra, a stunning symbol of
            love, and immerse yourself in the cultural tapestry of Delhi's historic
            sites. Dive into Rajasthan's royal heritage in Jaipur and Udaipur,
            where you'll encounter majestic palaces and vibrant bazaars. Travel to
            Kerala to unwind in tranquil backwaters or bask in the sun on Goa's
            beautiful beaches. Experience the spiritual essence of Varanasi along
            the sacred Ganges River.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            But it's not just about the destinations; India's culture festivals are
            a vibrant tapestry. Witness Diwali's dazzling lights, Holi's colorful
            celebration, and many more unforgettable cultural experiences.
          </p>
        </section>

        
      </div>
      <International />
      <SubscribeSection />
      <Testimonials />
    </Layout>
  );
}

export default Newworld;
