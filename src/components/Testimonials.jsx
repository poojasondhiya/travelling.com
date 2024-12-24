import React, { useRef, useEffect } from 'react';
import profileImage1 from '../images/radhika.jpg';
import profileImage2 from '../images/vishakha pare.jpg';
import profileImage3 from '../images/puja.jpg';
import profileImage4 from '../images/Rudra.jpg';
import profileImage5 from '../images/chandra.jpg';
import profileImage6 from '../images/anki.jpg';

const Testimonials = () => {
  // Define the travel-related reviews data with images
  const reviews = [
    {
      name: 'Radhika Sahu',
      role: 'Web Developer',
      review: 'Our trip to the Maldives was unforgettable! The booking process was seamless, and the resort was just as stunning as advertised. Highly recommend this service for any travel enthusiast!',
      rating: 5,
      photo: profileImage1 // Replace with the actual image URL
    },
    {
      name: 'Vishakha Pare',
      role: 'Business strategist',
      review: 'I took a week-long guided tour through Europe. The experience was amazing! The itinerary was perfectly organized, and the local guides were knowledgeable and friendly.',
      rating: 4,
      photo: profileImage2 // Replace with the actual image URL
    },
    {
      name: 'Pooja Sondhiya',
      role: 'Adventurer',
      review: 'Just returned from a 10-day hiking trip in the Swiss Alps, and I can’t stop talking about it! The trip was well planned, the guides were top-notch, and the views were out of this world.',
      rating: 3,
      photo: profileImage3 // Replace with the actual image URL
    },
    {
      name: 'Rudra Singh',
      role: 'Frequent Traveler',
      review: 'I’ve used many travel booking platforms, but this one is by far the best. Easy to use, great customer support, and always offers the best deals on hotels and flights!',
      rating: 5,
      photo: profileImage4 // Replace with the actual image URL
    },
    {
      name: 'Chandrshekhar sharma',
      role: 'Travel Consultant',
      review: 'I recently took a group on a safari in Kenya. It was an amazing experience. The wildlife encounters were magical, and the accommodations were luxurious. Will definitely book again.',
      rating: 3,
      photo: profileImage5 // Replace with the actual image URL
    },
    {
      name: 'Ankit Rathore',
      role: 'Photographer & Explorer',
      review: 'Our week-long adventure in New Zealand was fantastic. The local travel agency provided everything we needed: private tours, hotel reservations, and transportation. An unforgettable experience!',
      rating: 2,
      photo: profileImage6 // Replace with the actual image URL
    }
  ];

  // Create a reference to the reviews container
  const reviewsContainerRef = useRef(null);

  // Auto-scroll the reviews every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (reviewsContainerRef.current) {
        reviewsContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      }
    }, 3000); // Scroll every 3 seconds

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full px-6 py-12 bg-white">
      <h2 className="text-center text-4xl font-semibold mb-6">What Our Travelers Say</h2>
      
      <div className="relative">
        <div className="flex overflow-x-auto space-x-6" ref={reviewsContainerRef}>
          {reviews.map((review, index) => (
            <div key={index} className="flex-shrink-0 w-80 bg-gray-100 p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-4 mb-4">
                {/* Displaying profile image */}
                <img 
                  src={review.photo} 
                  alt={review.name} 
                  className="h-12 w-12 bg-gray-300 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
              <p className="text-lg mb-4">{review.review}</p>
              <div className="flex space-x-1 text-yellow-500">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
