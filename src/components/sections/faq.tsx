"use client";

import React from 'react';
import Accordion from '@/components/ui/accordion';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '@/lib/animations';
import { scrollToSection } from '@/lib/scroll';

const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question: 'How does the AI content generation work?',
      answer: 'Our AI content generation uses advanced natural language processing models trained on marketing best practices. Simply provide a topic, target audience, and tone of voice, and our AI will create high-quality, engaging content tailored to your brand.',
    },
    {
      id: 2,
      question: 'Can I integrate ADmyBRAND with my existing tools?',
      answer: 'Yes! ADmyBRAND offers seamless integration with popular marketing tools including CRM systems, email platforms, social media networks, and analytics tools. We provide both pre-built integrations and a flexible API for custom connections.',
    },
    {
      id: 3,
      question: 'How long does it take to see results?',
      answer: 'Most users see immediate improvements in content creation speed. For campaign optimization and analytics insights, we typically see significant results within 4-6 weeks as the AI models learn your audience preferences and optimize accordingly.',
    },
    {
      id: 4,
      question: 'Is my data secure with ADmyBRAND?',
      answer: 'Absolutely. We employ enterprise-grade security measures including end-to-end encryption, regular security audits, and strict access controls. Your data is never shared with third parties, and we comply with all major privacy regulations including GDPR and CCPA.',
    },
    {
      id: 5,
      question: 'What kind of support do you offer?',
      answer: 'All plans include email support with response times under 24 hours. Professional and Enterprise plans include priority support with dedicated account managers. We also offer comprehensive documentation, video tutorials, and regular webinars.',
    },
    {
      id: 6,
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time with no cancellation fees. Your access will continue until the end of your current billing period. We do ask for feedback when you cancel to help us improve our service.',
    },
  ];

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToSection('#contact');
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-gray-900/80 to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold text-white"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Everything you need to know about ADmyBRAND AI Suite.
          </motion.p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <Accordion 
              key={faq.id} 
              title={faq.question}
              defaultOpen={faq.id === 1}
            >
              {faq.answer}
            </Accordion>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mt-20 text-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Can&apos;t find the answer you&apos;re looking for? Our team is here to help you with any questions about our platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#contact" 
              onClick={handleContactClick}
              className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition-colors duration-300"
            >
              Contact Support
            </a>
            <a 
              href="#contact" 
              onClick={handleContactClick}
              className="px-6 py-3 bg-white/10 text-white font-medium rounded-full border border-white/20 hover:bg-white/20 transition-colors duration-300"
            >
              Schedule a Demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;