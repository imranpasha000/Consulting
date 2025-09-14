"use client";

import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah K.",
    role: "UX Designer",
    company: "Brello",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
    rating: 5,
    testimonial: "I was looking for a way to streamline my design process and the Anima's Landing Page UI Kit was a lifesaver! The intuitive design and ease of customisation have saved me hours of time and effort. Highly recommend!"
  },
  {
    name: "Michael L.",
    role: "Creative Director",
    company: "Yo",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
    rating: 4,
    testimonial: "The Landing Page UI Kit has been a game changer for my agency. The pre-designed components and templates have helped us deliver projects faster and with more consistency. Great job!"
  },
  {
    name: "Lauren M.",
    role: "UI Designer",
    company: "Boo",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200",
    rating: 5,
    testimonial: "Anima's Landing Page UI Kit has become a staple in my design toolkit. Whether I'm working on a new project or need to make updates to an existing one, this kit has everything I need to get the job done quickly and efficiently."
  },
  {
    name: "David R.",
    role: "Product Manager",
    company: "TechCorp",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
    rating: 5,
    testimonial: "Exceptional service and attention to detail. The team went above and beyond to deliver exactly what we needed. Professional, reliable, and results-driven approach."
  },
  {
    name: "Emily T.",
    role: "Marketing Director",
    company: "GrowthCo",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200",
    rating: 4,
    testimonial: "Working with this team has been a game-changer for our business. Their expertise and dedication to quality is unmatched. Highly recommend their services."
  },
  {
    name: "James W.",
    role: "CEO",
    company: "StartupXYZ",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200",
    rating: 5,
    testimonial: "Outstanding results and excellent communication throughout the project. They understood our vision and delivered beyond our expectations."
  }
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-6 h-6 ${
            index < rating 
              ? 'text-yellow-400 fill-yellow-400' 
              : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center text-center max-w-sm mx-auto">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-20 h-20 rounded-full object-cover mb-4"
      />
      <h3 className="text-xl font-bold text-gray-800 mb-1">
        {testimonial.name}
      </h3>
      <p className="text-sm text-gray-600 mb-6">
        {testimonial.role} @{testimonial.company}
      </p>
      <p className="text-gray-700 mb-6 leading-relaxed">
        "{testimonial.testimonial}"
      </p>
      <StarRating rating={testimonial.rating} />
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-16 px-8">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
