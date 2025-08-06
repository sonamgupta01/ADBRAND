"use client";

import React, { useState } from 'react';
import Card from '@/components/ui/card';
import Button from '@/components/ui/button';
import Select from '@/components/ui/select';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';

const PricingCalculator = () => {
  const [contacts, setContacts] = useState('1000');
  const [users, setUsers] = useState('5');
  const [plan, setPlan] = useState('pro');

  const contactOptions = [
    { value: '1000', label: 'Up to 1,000 contacts' },
    { value: '5000', label: 'Up to 5,000 contacts' },
    { value: '10000', label: 'Up to 10,000 contacts' },
    { value: '25000', label: 'Up to 25,000 contacts' },
    { value: '50000', label: 'Up to 50,000 contacts' },
    { value: '100000', label: 'Up to 100,000 contacts' },
  ];

  const userOptions = [
    { value: '1', label: '1 user' },
    { value: '3', label: '3 users' },
    { value: '5', label: '5 users' },
    { value: '10', label: '10 users' },
    { value: '25', label: '25 users' },
    { value: '50', label: '50 users' },
  ];

  const planOptions = [
    { value: 'starter', label: 'Starter Plan' },
    { value: 'pro', label: 'Professional Plan' },
    { value: 'enterprise', label: 'Enterprise Plan' },
  ];

  // Calculate price based on selections
  const calculatePrice = () => {
    let basePrice = 0;
    
    switch (plan) {
      case 'starter':
        basePrice = 29;
        break;
      case 'pro':
        basePrice = 79;
        break;
      case 'enterprise':
        basePrice = 199;
        break;
      default:
        basePrice = 79;
    }
    
    // Additional cost for more contacts
    const contactValue = parseInt(contacts);
    let contactCost = 0;
    if (contactValue > 25000) {
      contactCost = Math.ceil((contactValue - 25000) / 10000) * 10;
    }
    
    // Additional cost for more users
    const userValue = parseInt(users);
    let userCost = 0;
    if (userValue > 10) {
      userCost = Math.ceil((userValue - 10) / 5) * 5;
    }
    
    return basePrice + contactCost + userCost;
  };

  const totalPrice = calculatePrice();

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-900/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Pricing Calculator
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            Estimate your monthly cost based on your team&apos;s needs.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Number of Contacts
              </label>
              <Select
                options={contactOptions}
                value={contacts}
                onChange={setContacts}
                placeholder="Select contacts"
              />
            </div>
            
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Number of Users
              </label>
              <Select
                options={userOptions}
                value={users}
                onChange={setUsers}
                placeholder="Select users"
              />
            </div>
            
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Plan Type
              </label>
              <Select
                options={planOptions}
                value={plan}
                onChange={setPlan}
                placeholder="Select plan"
              />
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/20 rounded-2xl p-8 text-center">
            <p className="text-gray-300 mb-2">Estimated Monthly Cost</p>
            <div className="text-5xl font-bold text-white mb-6">
              ${totalPrice}
              <span className="text-2xl text-gray-300">/month</span>
            </div>
            <Button variant="primary" size="lg">
              Get Started
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingCalculator;