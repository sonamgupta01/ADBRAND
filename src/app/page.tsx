import React from 'react';
import Navbar from '@/components/ui/navbar';
import Hero from '@/components/sections/hero';
import Features from '@/components/sections/features';
import Pricing from '@/components/sections/pricing';
import Testimonials from '@/components/sections/testimonials';
import FAQ from '@/components/sections/faq';
import FooterSection from '@/components/sections/footer';
import ContactForm from '@/components/sections/contact-form';
import Blog from '@/components/sections/blog';
import PricingCalculator from '@/components/sections/pricing-calculator';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-900/90">
      {/* Glassmorphism background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <Navbar />
      
      <main className="relative pt-16">
        <Hero />
        <Features />
        <Pricing />
        <PricingCalculator />
        <Testimonials />
        <Blog />
        <FAQ />
        <ContactForm />
      </main>
      
      <FooterSection />
    </div>
  );
}
