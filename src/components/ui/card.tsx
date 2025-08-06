"use client";

import React from 'react';
import { CardProps } from '@/types';

const Card: React.FC<CardProps> = ({
  title,
  description,
  children,
  className = '',
  variant = 'default',
}) => {
  // Base classes
  const baseClasses = 'rounded-2xl overflow-hidden transition-all duration-300';
  
  // Variant classes
  const variantClasses = {
    default: 'bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl',
    outlined: 'bg-transparent border-2 border-indigo-500/30 shadow-lg',
    elevated: 'bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl',
  };
  
  // Combine all classes
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;
  
  return (
    <div className={classes}>
      {title && (
        <h3 className="text-xl font-bold text-white mb-2 px-6 pt-6">{title}</h3>
      )}
      {description && (
        <p className="text-gray-300 mb-4 px-6">{description}</p>
      )}
      <div className="px-6 pb-6">
        {children}
      </div>
    </div>
  );
};

export default Card;