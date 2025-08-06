"use client";

import React from 'react';
import Button from '@/components/ui/button';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/animations';
import Image from 'next/image';


const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20"></div>
      
      {/* Glassmorphism shapes */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeIn}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              <span className="block">AI-Powered</span>
              <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Marketing Suite
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-2xl">
              Supercharge your brand&apos;s growth with our cutting-edge AI tools. Create compelling content, optimize campaigns, and engage your audience like never before.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button variant="primary" size="lg">
                Get Started Free
              </Button>
              <Button variant="outline" size="lg">
                Schedule a Demo
              </Button>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {/* UPDATED LOGOS: Changed object-contain to object-cover to fill full round space */}
                <Image
                  src="/images/jordan.png"
                  alt="Jordan"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full bg-white/20 border-2 border-white/30 object-cover"
                />
                <Image
                  src="/images/bbbb.jpeg"
                  alt="Brand"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full bg-white/20 border-2 border-white/30 object-cover"
                />
                <Image
                  src="/images/unilever.png"
                  alt="Unilever"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full bg-white/20 border-2 border-white/30 object-cover"
                />
                <Image
                  src="/images/motorola.png"
                  alt="Motorola"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full bg-white/20 border-2 border-white/30 object-cover"
                />
              </div>
              <p className="ml-4 text-gray-300">
                <span className="text-white font-semibold">10,000+</span> brands trust our platform
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            variants={fadeIn}
            className="relative"
          >
            <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
              
              <div className="relative">
                <video 
                  controls
                  className="w-full rounded-2xl shadow-lg"
                  preload="metadata"

                >
                  <source src="/images/demo-video-placeholder.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;