"use client";

import React from 'react';
import Card from '@/components/ui/card';
import { motion } from 'framer-motion';
import { staggerContainer, featureStagger, featureItem, fadeIn } from '@/lib/animations';
import Image from 'next/image';

const Features = () => {
  const features = [
    {
      id: 1,
      title: 'AI Content Generator',
      description: 'Create compelling marketing copy, blog posts, and social media content in seconds.',
      icon: (
        <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Smart Analytics',
      description: 'Get actionable insights with our advanced analytics and performance tracking.',
      icon: (
        <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Campaign Optimizer',
      description: 'Maximize ROI with AI-driven campaign optimization and A/B testing.',
      icon: (
        <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Social Media Manager',
      description: 'Schedule, publish, and analyze your social media content across platforms.',
      icon: (
        <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      id: 5,
      title: 'Email Marketing',
      description: 'Design and send personalized email campaigns with advanced segmentation.',
      icon: (
        <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: 6,
      title: 'Brand Voice Assistant',
      description: 'Maintain consistent brand voice across all your marketing channels.',
      icon: (
        <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-gray-900 to-gray-900/80">
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
            Powerful Features for Modern Marketing
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Everything you need to create, manage, and optimize your marketing campaigns with AI.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={featureStagger}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={featureItem}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="h-full">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-500/10 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mt-20 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Seamless Integration with Your Workflow
              </h3>
              <p className="text-gray-300 mb-6">
                Connect with your favorite tools and platforms. Our API-first approach ensures you can integrate ADmyBRAND AI Suite with your existing stack effortlessly.
              </p>
              <ul className="space-y-3">
                {['CRM Systems', 'Social Media Platforms', 'Analytics Tools', 'Email Providers'].map((item, index) => (
                  <motion.li 
                    key={index}
                    variants={featureItem}
                    className="flex items-center"
                  >
                    <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-200">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <Image 
                src="/images/sec_dashboard.webp" 
                alt="Dashboard Section" 
                width={800} 
                height={600} 
                className="w-full h-auto rounded-2xl"
              />
          </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;