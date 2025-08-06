"use client";

import React from 'react';
import { TestimonialProps } from '@/types';
import Image from 'next/image';

const Testimonial: React.FC<TestimonialProps> = ({
  name,
  role,
  company,
  content,
  avatar,
  rating = 5,
}) => {
  // Generate star ratings
  const renderStars = () => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-600'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl transition-all duration-300 hover:shadow-2xl">
      <div className="flex items-center mb-4">
        {avatar ? (
          <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
            <Image 
              src={avatar} 
              alt={name} 
              fill
              className="rounded-full object-cover"
            />
          </div>
        ) : (
          <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center mr-4">
            <span className="text-white font-bold">{name.charAt(0)}</span>
          </div>
        )}
        <div>
          <h4 className="text-white font-bold">{name}</h4>
          <p className="text-gray-300 text-sm">{role}, {company}</p>
        </div>
      </div>
      
      <div className="flex mb-4">
        {renderStars()}
      </div>
      
      <p className="text-gray-200 italic">&quot;{content}&quot;</p>
    </div>
  );
};

export default Testimonial;