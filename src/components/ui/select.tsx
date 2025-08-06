"use client";

import React, { useState } from 'react';
import { SelectProps } from '@/types';

const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  placeholder,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || '');

  const handleSelect = (optionValue: string) => {
    setSelectedValue(optionValue);
    setIsOpen(false);
    if (onChange) {
      onChange(optionValue);
    }
  };

  const selectedLabel = options.find(option => option.value === selectedValue)?.label || placeholder;

  return (
    <div className={`relative ${className}`}>
      <div
        className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 transition-all duration-300 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center">
          <span className={selectedValue ? 'text-white' : 'text-gray-400'}>
            {selectedLabel}
          </span>
          <svg
            className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </div>

      {isOpen && (
        <div className="absolute z-10 w-full mt-2 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg overflow-hidden">
          {options.map((option) => (
            <div
              key={option.value}
              className="px-4 py-3 hover:bg-white/20 cursor-pointer transition-colors duration-200 text-white"
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;