"use client";

import React, { useState } from 'react';
import PricingCard from '@/components/ui/pricing-card';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, pricingCard } from '@/lib/animations';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const pricingPlans = [
    {
      id: 1,
      title: 'Starter',
      price: isAnnual ? '$29' : '$39',
      period: isAnnual ? '/month (billed annually)' : '/month',
      features: [
        'Up to 5,000 contacts',
        '3 users',
        'Basic analytics',
        'Email support',
        '100 AI-generated content pieces',
      ],
      ctaText: 'Get Started',
      isPopular: false,
    },
    {
      id: 2,
      title: 'Professional',
      price: isAnnual ? '$79' : '$99',
      period: isAnnual ? '/month (billed annually)' : '/month',
      features: [
        'Up to 25,000 contacts',
        '10 users',
        'Advanced analytics',
        'Priority support',
        '500 AI-generated content pieces',
        'Social media scheduling',
        'Campaign optimizer',
      ],
      ctaText: 'Get Started',
      isPopular: true,
    },
    {
      id: 3,
      title: 'Enterprise',
      price: isAnnual ? '$199' : '$249',
      period: isAnnual ? '/month (billed annually)' : '/month',
      features: [
        'Unlimited contacts',
        'Unlimited users',
        'Advanced analytics & reporting',
        '24/7 dedicated support',
        'Unlimited AI-generated content',
        'All features included',
        'Custom integrations',
        'Dedicated account manager',
      ],
      ctaText: 'Contact Sales',
      isPopular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-900/80 to-gray-900">
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
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Choose the plan that works best for your team. All plans include our core AI features.
          </motion.p>
          
          <motion.div 
            variants={fadeIn}
            className="mt-10 flex items-center justify-center"
          >
            <span className={`text-lg font-medium ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="mx-4 relative inline-flex h-6 w-11 items-center rounded-full bg-indigo-600 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span
                className={`${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
              />
            </button>
            <span className={`text-lg font-medium ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Annual
            </span>
            <span className="ml-4 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-500/20 text-indigo-300">
              Save 25%
            </span>
          </motion.div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={pricingCard}
              whileHover="hover"
              className="h-full"
            >
              <PricingCard
                title={plan.title}
                price={plan.price}
                features={plan.features}
                ctaText={plan.ctaText}
                isPopular={plan.isPopular}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            Everything you need for successful marketing
          </h3>
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'AI Content Generation',
              'Campaign Analytics',
              'Social Media Management',
              'Email Marketing',
              'Brand Voice Consistency',
              'SEO Optimization',
              'A/B Testing',
              'Performance Reports',
            ].map((feature, index) => (
              <div key={index} className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;