"use client";

import React from 'react';
import Input from './input';
import Button from './button';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#' },
        { name: 'Pricing', href: '#' },
        { name: 'Templates', href: '#' },
        { name: 'Roadmap', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '#' },
        { name: 'Documentation', href: '#' },
        { name: 'Guides', href: '#' },
        { name: 'Support', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Partners', href: '#' },
        { name: 'Contact', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' },
        { name: 'Security', href: '#' },
        { name: 'Compliance', href: '#' },
      ],
    },
  ];

  return (
    <motion.footer 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeIn}
      className="bg-white/10 backdrop-blur-lg border-t border-white/20"
    >
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white">ADmyBRAND</span>
              <span className="text-2xl font-bold text-indigo-400">AI</span>
            </div>
            <p className="mt-4 text-gray-300 max-w-md">
              AI-powered marketing tools to supercharge your brands growth and engagement.
            </p>
            <div className="flex space-x-6 mt-6">
              {['twitter', 'facebook', 'instagram', 'linkedin', 'github'].map((social) => (
                <a key={social} href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">{social}</span>
                  <div className="h-6 w-6 bg-white/20 rounded-full"></div>
                </a>
              ))}
            </div>
          </div>
          
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-4">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-base text-gray-300 hover:text-white">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Subscribe
            </h3>
            <p className="mt-4 text-gray-300 text-base">
              Get the latest news and updates.
            </p>
            <form className="mt-4">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="mb-3"
              />
              <Button variant="primary" size="md" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-gray-400">
            &copy; 2025 ADmyBRAND AI Suite. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;