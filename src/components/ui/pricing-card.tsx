"use client";

import React from 'react';
import { PricingCardProps } from '@/types';
import Button from './button';

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  features,
  ctaText,
  isPopular = false,
  onClick,
}) => {
  return (
    <div className={`relative rounded-2xl p-8 shadow-xl transition-all duration-300 hover:shadow-2xl ${
      isPopular 
        ? 'bg-gradient-to-br from-indigo-600 to-purple-600 border-2 border-indigo-400 scale-105' 
        : 'bg-white/10 backdrop-blur-lg border border-white/20'
    }`}>
      {isPopular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-500 text-white text-xs font-bold px-4 py-1 rounded-full">
          MOST POPULAR
        </div>
      )}
      
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      
      <div className="mb-6">
        <span className="text-4xl font-bold text-white">{price}</span>
      </div>
      
      <ul className="mb-8 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-gray-200">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        variant={isPopular ? 'secondary' : 'primary'} 
        size="lg" 
        className="w-full"
        onClick={onClick}
      >
        {ctaText}
      </Button>
    </div>
  );
};

export default PricingCard;