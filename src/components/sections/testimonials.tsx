"use client";

import React, { useState, useEffect } from 'react';
import Testimonial from '@/components/ui/testimonial';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '@/lib/animations';
import Image from 'next/image';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechGrowth Inc.',
      content: 'ADmyBRAND AI Suite has transformed our marketing approach. We\'ve seen a 300% increase in engagement and saved countless hours on content creation.',
      avatar: '/images/jordan.png',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CEO',
      company: 'StartupHub',
      content: 'The AI-powered analytics helped us identify our most profitable customer segments. Our conversion rate improved by 150% in just three months.',
      avatar: '/images/nike.png',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Content Manager',
      company: 'Global Retail Co.',
      content: 'Creating consistent brand content across all channels used to be a nightmare. Now it takes minutes with the brand voice assistant.',
      avatar: '/images/nivea.png',
      rating: 4,
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Growth Lead',
      company: 'FinTech Solutions',
      content: 'The campaign optimizer feature is incredible. It automatically A/B tests our emails and social posts, improving our ROI by 200%.',
      avatar: '/images/motoloro.png',
      rating: 5,
    },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-900 to-gray-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.h2 
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold text-white"
          >
            Loved by Marketing Teams Worldwide
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Don&apos;t just take our word for it. Here&apos;s what our customers have to say.
          </motion.p>
        </motion.div>

        <div className="mt-16 relative">
          {/* Testimonial cards for desktop */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial) => (
              <Testimonial
                key={testimonial.id}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                content={testimonial.content}
                avatar={testimonial.avatar}
                rating={testimonial.rating}
              />
            ))}
          </div>

          {/* Carousel for mobile */}
          <div className="md:hidden relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <Testimonial
                      name={testimonial.name}
                      role={testimonial.role}
                      company={testimonial.company}
                      content={testimonial.content}
                      avatar={testimonial.avatar}
                      rating={testimonial.rating}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation buttons */}
            <button
              onClick={goToPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full p-2 text-white hover:bg-white/20 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full p-2 text-white hover:bg-white/20 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Dots indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? 'bg-indigo-500' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* Logos */}
          <div className="mt-20">
            <p className="text-center text-gray-400 mb-8">Trusted by innovative teams at</p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
              {[
                '/images/nike.png',
                '/images/jordan.png',
                '/images/nivea.png',
                '/images/motoloro.png',
                '/images/unilever.png',
                '/images/bbbb.jpeg'
              ].map((logo, index) => (
                <div key={index} className="flex justify-center">
                  <Image 
                    src={logo} 
                    alt={`Company ${index + 1}`} 
                    width={120} 
                    height={40} 
                    className="h-10 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;