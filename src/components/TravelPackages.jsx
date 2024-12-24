import React from "react";

const TravelPackages = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl lg:text-4xl font-extrabold text-center text-blue-900 mb-8">
          Find The Best Travel Packages At Travel India Tourism Pvt Limited
        </h1>
        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-10">
          Travel India Tourism Pvt Limited is your gateway to unforgettable
          journeys across India, Dubai, Singapore, Malaysia, Thailand, and Sri
          Lanka. With a focus on quality, affordability, and customization,
          Travel India Tourism offers an array of meticulously crafted travel
          packages to suit your desires.
        </p>

        <div className="space-y-8">
          {/* Section 1 */}
          <div>
            <h2 className="text-xl font-bold text-blue-800 mb-4">
              Discover the Wonders of India:
            </h2>
            <p className="text-gray-700">
              Travel India Tourism invites you to explore the myriad facets of
              India, a land steeped in history, culture, and natural beauty.
              Their expertly crafted itineraries ensure that you don’t miss out
              on India’s iconic landmarks, be it the timeless Taj Mahal, the
              spiritual Varanasi, or the vibrant streets of Delhi. Choose from
              fixed tour packages for hassle-free travel or customize your
              journey to meet your unique desires.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl font-bold text-blue-800 mb-4">
              Unveil the Charms of Dubai:
            </h2>
            <p className="text-gray-700">
              Experience the glitz and glamour of Dubai with Travel India
              Tourism. From towering skyscrapers to desert adventures, they
              curate Dubai packages that encompass it all. Explore the world’s
              tallest building, the Burj Khalifa, enjoy thrilling desert
              safaris, and indulge in luxury shopping. Travel India Tourism
              ensures that your Dubai trip is as extravagant as the city
              itself.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl font-bold text-blue-800 mb-4">
              Sensational Southeast Asia:
            </h2>
            <p className="text-gray-700">
              Whether it’s the multicultural tapestry of Singapore, the natural
              beauty of Malaysia, the exotic allure of Thailand, or the serene
              landscapes of Sri Lanka, Travel India Tourism has you covered.
              Their fixed tour packages offer hassle-free exploration of these
              captivating destinations. Alternatively, customize your itinerary
              to delve deeper into your preferred Southeast Asian paradise.
            </p>
          </div>

          {/* Services Section */}
          <div>
            <h2 className="text-xl font-bold text-blue-800 mb-4">
              Travel India Tourism Services
            </h2>
            <p className="text-gray-700">
              Travel India Tourism Pvt Limited doesn’t just offer travel
              packages; they provide an experience. With a dedicated team, 24/7
              support, and a commitment to quality, they ensure your journey is
              seamless and memorable. Contact them at{" "}
              <a
                href="mailto:info@travelindiatourism.com"
                className="text-blue-600 underline"
              >
                info@travelindiatourism.com
              </a>{" "}
              or{" "}
              <a
                href="tel:+917552421243"
                className="text-blue-600 underline"
              >
                +91 7552421243
              </a>{" "}
              for personalized assistance and expert guidance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelPackages;
