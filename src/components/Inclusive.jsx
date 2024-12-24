import React from "react";
import profileImage39 from '../images/photo34.jpg';
import profileImage40 from '../images/photo35.jpg';
import profileImage41 from '../images/photo36.jpg';
import profileImage42 from '../images/photo37.jpg';
import profileImage43 from '../images/photo38.jpg';

const Inclusive = () => {
  return (
    <div className="bg-gray-50 py-12 px-4">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
          All-inclusive tours
        </h2>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Box 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex items-start gap-4">
            <img
              src= {profileImage39}
              className="w-12 h-12"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Accommodation
              </h3>
              <p className="text-sm text-gray-600">
                Comfortable & convenient hotels cherry-picked by our hotel
                management team.
              </p>
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex items-start gap-4">
            <img
              src= {profileImage40}
              alt="All Meals"
              className="w-12 h-12"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">All meals</h3>
              <p className="text-sm text-gray-600">
                Indulge in satisfying meals from dawn to dusk: Breakfast, Lunch,
                and Dinner.
              </p>
            </div>
          </div>

          {/* Box 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex items-start gap-4">
            <img
              src={profileImage41}
              alt="On-Tour Transport"
              className="w-12 h-12"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                On-Tour Transport
              </h3>
              <p className="text-sm text-gray-600">
                Comprehensive rail, sea, and road transport for a worry-free
                journey.
              </p>
            </div>
          </div>

          {/* Box 4 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex items-start gap-4">
            <img
              src={profileImage42}
              alt="Tour Assistance"
              className="w-12 h-12"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Tour Assistance
              </h3>
              <p className="text-sm text-gray-600">
                Support throughout your journey to enhance your travel
                experience.
              </p>
            </div>
          </div>

          {/* Box 5 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex items-start gap-4">
            <img
              src={profileImage42}
              alt="Best Tour Plan"
              className="w-12 h-12"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Best Tour Plan
              </h3>
              <p className="text-sm text-gray-600">
                Affordable itineraries ensuring you get the most out of your
                budget.
              </p>
            </div>
          </div>

          {/* Box 6 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex items-start gap-4">
            <img
              src={profileImage43}
              alt="Reach Us"
              className="w-12 h-12"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Reach us for 24/7
              </h3>
              <p className="text-sm text-gray-600">
                Support via email at{" "}
                <a
                  href="mailto:info@travelindiatourism.com"
                  className="text-blue-500 hover:underline"
                >
                  info@travelindiatourism.com
                </a>{" "}
                or call{" "}
                <a href="tel:+917552421243" className="text-blue-500 hover:underline">
                  +91 75524 21243
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inclusive;
