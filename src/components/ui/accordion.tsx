"use client";

import React, { useState } from 'react';
import { AccordionProps } from '@/types';

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4 border border-white/20 rounded-2xl overflow-hidden transition-all duration-300">
      <button
        className="flex justify-between items-center w-full p-6 text-left bg-white/10 backdrop-blur-lg hover:bg-white/20 transition-colors duration-300"
        onClick={toggleAccordion}
      >
        <span className="text-lg font-medium text-white">{title}</span>
        <svg
          className={`w-5 h-5 text-gray-300 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-6 bg-white/5 border-t border-white/10">
          <div className="text-gray-300">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;