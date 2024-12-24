import React from "react";
import profileImage20 from '../images/photo15.jpg';

const Holiday = () => {
  return (
    <div
      className="relative w-full h-auto sm:h-[450px] md:h-[600px] lg:h-[750px] bg-cover bg-center flex items-center justify-center object-cover mt-20"
      style={{
        backgroundImage: `url(${profileImage20})`, // Replace with your beach image URL
      }}
    >
      <div className="bg-white bg-opacity-80 w-full max-w-4xl p-6 sm:p-8 md:p-10 h-auto rounded-lg shadow-lg text-center mx-4 sm:mx-6 md:mx-auto overflow-hidden">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Holidays Designed For You
        </h2>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-5">
          Travel India Tourism offers you the expertise of our consultants who
          have personally visited all our destinations. They are eager to share
          their extensive knowledge and provide valuable advice. With their
          in-depth familiarity with our destinations, they can guide you on the
          must-see places, best routes, accommodation options, and exciting
          activities. Our dedicated team is here, arranging everything from hotels and tours to
          flights, ensuring your holiday is perfectly tailored to your
          preferences.
        </p>
        <p className="text-gray-700 text-sm sm:text-base mb-1">
          Our Travel Experts to understand your preferences, and they will
          seamlessly organize your accommodation, tours, and travel
          arrangements for you. For inquiries, please reach out to
        </p>
        <p className="text-gray-900 font-semibold text-sm sm:text-base">
          
          <a
            href="mailto:info@travelindiatourism.com"
            className="text-blue-500 hover:underline"
          >
            info@travelindiatourism.com
          </a>
        </p>
        <p className="text-gray-900 font-semibold text-sm sm:text-base">
          Phone:{" "}
          <a
            href="tel:+91755242143"
            className="text-blue-500 hover:underline"
          >
            +91755245143
          </a>
        </p>
      </div>
    </div>
  );
};

export default Holiday;

