import React from "react";
import profileImage21 from '../images/photo16.jpg';
import profileImage22 from '../images/photo17.jpg';
import profileImage23 from '../images/photo18.jpg';
import profileImage24 from '../images/photo19.jpg';
import profileImage25 from '../images/photo20.jpg';
import profileImage26 from '../images/photo21.jpg';
import profileImage27 from '../images/photo22.jpg';
import profileImage28 from '../images/photo23.jpg';
import profileImage29 from '../images/photo24.jpg';
import profileImage30 from '../images/photo25.jpg';
import profileImage31 from '../images/photo26.jpg';
import profileImage32 from '../images/phto27.jpg';

const IndiaTrip = () => {
  const packages = [
    {
      title: "Port Blair Tour, Andaman",
      rating: "5",
      reviews: "4934 Reviews",
      price: "€152.89",
      duration: "5 days 4 nights",
      image: profileImage21, // Replace with actual image URL
    },
    {
      title: "Gujarat Golden Triangle Tour",
      rating: "4.7",
      reviews: "97 Reviews",
      price: "€160.63",
      oldPrice: "€178.48",
      discount: "-10%",
      duration: "6 days 5 nights",
      image: profileImage22,
    },
    {
      title: "Kolkata Tour",
      rating: "4.4",
      reviews: "8 Reviews",
      price: "€137.50",
      duration: "3 days 2 nights",
      image: profileImage23, // Replace with actual image URL
    },
    {
      title: "Darjeeling Gangtok Tour Packages",
      rating: "5",
      reviews: "9068 Reviews",
      price: "€243.53",
      oldPrice: "€270.59",
      duration: "5 days",
      image: profileImage24, // Replace with actual image URL
    },
    {
      title: "Srinagar Tour Packages",
      rating: "5",
      reviews: "9068 Reviews",
      price: "€243.53",
      oldPrice: "€270.59",
      duration: "5 days",
      image: profileImage25, // Replace with actual image URL
    },
    {
      title: "Jaipur Tour Packages",
      rating: "5",
      reviews: "9068 Reviews",
      price: "€243.53",
      oldPrice: "€270.59",
      duration: "5 days",
      image: profileImage26, // Replace with actual image URL
    },
    {
      title: "Nashik Shirdi Tour Packages",
      rating: "5",
      reviews: "9068 Reviews",
      price: "€243.53",
      oldPrice: "€270.59",
      duration: "5 days",
      image: profileImage27, // Replace with actual image URL
    },
    {
      title: "Munnar Alleppey Kerala Tour Packages",
      rating: "5",
      reviews: "9068 Reviews",
      price: "€243.53",
      oldPrice: "€270.59",
      duration: "5 days",
      image: profileImage28, // Replace with actual image URL
    },
    {
      title: "Bangalore Tour Package",
      rating: "5",
      reviews: "9068 Reviews",
      price: "€243.53",
      oldPrice: "€270.59",
      duration: "5 days",
      image: profileImage29, // Replace with actual image URL
    },
    {
      title: "Madurai Rameswaram Kanyakumari Tour",
      rating: "5",
      reviews: "9068 Reviews",
      price: "€243.53",
      oldPrice: "€270.59",
      duration: "5 days",
      image: profileImage30, // Replace with actual image URL
    },
    {
      title: "Ladakh Tour PackagesTour",
      rating: "5",
      reviews: "9068 Reviews",
      price: "€243.53",
      oldPrice: "€270.59",
      duration: "5 days",
      image: profileImage31, // Replace with actual image URL
    },
    {
      title: "Bangalore Mysore Coorg Tour Package",
      rating: "5",
      reviews: "9068 Reviews",
      price: "€243.53",
      oldPrice: "€270.59",
      duration: "5 days",
      image: profileImage32, // Replace with actual image URL
    },
  ];

  return (
    <>
    <div className="bg-white py-10">
      <div className="container mx-auto px-4  ">
        <h2 className="text-3xl font-bold text-center  text-yellow-400 mb-6">_____INDIA TRIP </h2>
        <h3 className="text-2xl font-bold text-center text-slate-700  mb-6">Best Tour Packages</h3>
        <p className="text-center text-gray-600 mb-10">
          Travel India Tourism Services Provide Best Tours Packages For You,
          Catering to Your Unique Preferences and Interests
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden  transition-transform object-cover hover:scale-105"
            >
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {pkg.title}
                </h3>
                <div className="flex items-center text-yellow-500 mt-2">
                  <span className="text-sm font-bold">{pkg.rating}</span>
                  <span className="ml-2 text-gray-500">({pkg.reviews})</span>
                </div>
                <div className="mt-2 text-sm text-gray-500">{pkg.duration}</div>
                <div className="mt-4">
                  {pkg.oldPrice && (
                    <span className="text-red-500 line-through text-sm mr-2">
                      {pkg.oldPrice}
                    </span>
                  )}
                  <span className="text-xl font-bold text-gray-800">
                    {pkg.price}
                  </span>
                  {pkg.discount && (
                    <span className="ml-2 text-green-600 font-bold text-sm">
                      {pkg.discount}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default IndiaTrip;
