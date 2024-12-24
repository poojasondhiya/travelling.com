import React from 'react';
import profileImage11 from '../images/photo6.jpg';
import profileImage12 from '../images/photo7.jpg';
import profileImage13 from '../images/photo8.jpg';
import profileImage14 from '../images/photo9.jpg';
import profileImage15 from '../images/photo10.jpg';
import profileImage16 from '../images/photo11.jpg';
import profileImage17 from '../images/photo12.jpg';
import profileImage18 from '../images/photo13.jpg'; 
import profileImage19 from '../images/photo14.jpg';

const ImageCard = ({ imageSrc, title, description }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg text-center transition-transform hover:scale-105 mt-16">
      <img src={imageSrc} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Location = () => {
  const cardsData = [
    {
      imageSrc: profileImage11,
      title: '𝐊𝐚𝐬𝐡𝐦𝐢𝐫',
      description: 'Book your dream Kashmir getaway now and save big on unforgettable adventures with 20% Off.',
    },
    {
      imageSrc: profileImage12,
      title: '𝐑𝐚𝐣𝐚𝐬𝐭𝐡𝐚𝐧',
      description: 'Book your dream Rajasthan getaway now and save big on unforgettable adventures with 20% Off.',
    },
    {
      imageSrc: profileImage13,
      title: '𝐃𝐚𝐫𝐣𝐞𝐞𝐥𝐢𝐧𝐠',
      description: 'Book your dream Darjeeling getaway now and save big on unforgettable adventures with 20% Off.',
    },
    {
      imageSrc: profileImage14,
      title: '𝐀𝐧𝐝𝐚𝐦𝐚𝐧',
      description: 'Book your dream Andaman getaway now and save big on unforgettable adventures with 20% Off.',
    },
    {
      imageSrc: profileImage15,
      title: '𝐊𝐞𝐫𝐚𝐥𝐚',
      description: 'Book your dream Kerala getaway now and save big on unforgettable adventures with 20% Off.',
    },
    {
      imageSrc: profileImage16,
      title: '𝐋𝐚𝐝𝐚𝐤𝐡',
      description: 'Book your dream Ladakh getaway now and save big on unforgettable adventures with 20% Off.',
    },
    {
      imageSrc: profileImage17,
      title: '𝐊𝐮𝐥𝐥𝐮 & 𝐌𝐚𝐧𝐚𝐥𝐢',
      description: 'Book your dream Kullu & Manali getaway now and save big on unforgettable adventures with 20% Off.',
    },
    {
      imageSrc: profileImage18,
      title: '𝐊𝐨𝐥𝐤𝐚𝐭𝐚',
      description: 'Book your dream Kolkata getaway now and save big on unforgettable adventures with 20% Off.',
    },
    {
      imageSrc: profileImage19,
      title: '𝐆𝐨𝐚',
      description: 'Book your dream Goa getaway now and save big on unforgettable adventures with 20% Off.',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 w-full h-auto object-cover">
      {cardsData.map((card, index) => (
        <ImageCard 
          key={index} 
          imageSrc={card.imageSrc} 
          title={card.title} 
          description={card.description} 
        />
      ))}
    </div>
  );
};

export default Location;
