import React from "react";
import profileImage33 from '../images/photo28.jpg';
import profileImage34 from '../images/photo29.jpg';
import profileImage35 from '../images/photo30.jpg';
import profileImage36 from '../images/photo31.jpg';
import profileImage37 from '../images/photo32.jpg';
import profileImage38 from '../images/photo33.jpg';

const International = () => {
  const packages = [
    {
      imageSrc: profileImage33,
      title: '𝑫𝒖𝒃𝒂𝒊',
    },
    {
        imageSrc: profileImage34,
        title: '𝑀𝑎𝑙𝑎𝑦𝑠𝑖𝑎',
      },
      {
        imageSrc: profileImage35,
        title: '𝑆𝑖𝑛𝑔𝑎𝑝𝑜𝑟𝑒',
      },
      {
        imageSrc: profileImage36,
        title: '𝑆𝑟𝑖 𝐿𝑎𝑛𝑘𝑎',
      },
      {
        imageSrc: profileImage37,
        title: '𝑇ℎ𝑎𝑖𝑙𝑎𝑛𝑑',
      },
      {
        imageSrc: profileImage38,
        title: '𝑰𝒏𝒅𝒐𝒏𝒆𝒔𝒊𝒂',
      },
  ];

  return (
    <>
      <div className="bg-white py-10">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center text-yellow-400 mb-6">_____OVERSEAS JOURNEY</h3>
          <h2 className="text-4xl font-bold text-center text-slate-700 mb-6">INTERNATIONAL TOUR</h2>
          <p className="text-xl text-center text-slate-700 mb-6">
            Travel India Tourism Services offer the finest tour packages, custom-tailored to your unique international travel plans and preferences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <div key={index} className="relative bg-gray-100 shadow-lg rounded-lg overflow-hidden group">
                {/* Image */}
                <img
                  src={pkg.imageSrc}
                  alt={pkg.title}
                  className="w-full h-56 object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
                {/* Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <h4 className="text-4xl font-bold text-white  bg-opacity-50 px-4 py-2 rounded-md">
                    {pkg.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default International;
