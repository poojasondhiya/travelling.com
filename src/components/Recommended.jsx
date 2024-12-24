import React from "react";
import profileImage30 from '../images/photo25.jpg';
import profileImage31 from '../images/photo26.jpg';
import profileImage32 from '../images/phto27.jpg';
import profileImage43 from '../images/photo39.jpg';

const Recommended = () => {
  const packages = [
   
    {
      title: "Bangalore Tour Package",
      rating: "5",
      reviews: "9068 Reviews",
      price: "€243.53",
      oldPrice: "€270.59",
      duration: "5 days",
      image: profileImage30, // Replace with actual image URL
    },
    {
      title: "Madurai Rameswaram Kanyakumari Tour",
      rating: "5",
      reviews: "9068 Reviews",
      price: "€243.53",
      oldPrice: "€270.59",
      duration: "5 days",
      image: profileImage31, // Replace with actual image URL
    },
    {
      title: "Ladakh Tour PackagesTour",
      rating: "5",
      reviews: "9068 Reviews",
      price: "€243.53",
      oldPrice: "€270.59",
      duration: "5 days",
      image: profileImage32, // Replace with actual image URL
    },
    {
      title: "Bangalore Mysore Coorg Tour Package",
      rating: "5",
      reviews: "9068 Reviews",
      price: "€243.53",
      oldPrice: "€270.59",
      duration: "5 days",
      image: profileImage43, // Replace with actual image URL
    },
  ];

  return (
    <>
    <div className="bg-white py-10">
      <div className="container mx-auto px-4  ">
        <h2 className="text-5xl font-bold text-center  text-yellow-400 mb-6 ">𝑅𝑒𝑐𝑜𝑚𝑚𝑒𝑛𝑑𝑒𝑑 </h2>
        <h3 className="text-3xl font-bold text-center text-slate-700  mb-6">𝘧𝘰𝘳 𝘠𝘰𝘶</h3>
       
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

export default Recommended;
