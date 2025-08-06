"use client";

import React from 'react';
import Card from '@/components/ui/card';
import Button from '@/components/ui/button';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '@/lib/animations';
import Image from 'next/image';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Marketing',
      excerpt: 'Explore how artificial intelligence is revolutionizing the marketing landscape and what it means for your business.',
      date: 'May 15, 2025',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'Maximizing ROI with AI Content Generation',
      excerpt: 'Learn proven strategies to get the most out of your AI content generation tools and boost your marketing ROI.',
      date: 'April 28, 2025',
      readTime: '7 min read',
    },
    {
      id: 3,
      title: 'Personalization at Scale: The ADmyBRAND Approach',
      excerpt: 'Discover how our platform enables hyper-personalized marketing campaigns without sacrificing efficiency.',
      date: 'April 12, 2025',
      readTime: '6 min read',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900/80 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Latest from our Blog
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Insights, tips, and industry trends to help you supercharge your marketing efforts.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={fadeIn}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="h-full">
                <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                  <Image 
                    src="/images/sec_dashboard.webp" 
                    alt={post.title} 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center text-sm text-gray-400 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                <p className="text-gray-300 mb-6">{post.excerpt}</p>
                <Button variant="ghost" size="sm" className="px-0">
                  Read more
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mt-12 text-center"
        >
          <Button variant="outline" size="lg">
            View All Articles
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;