import React from 'react';
import { motion } from 'framer-motion';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

export function Portfolio() {
  const { ref, controls, variants } = useAnimateOnScroll();

  return (
    <section id="portfolio" className="py-20 bg-black">
      <motion.div 
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl font-extrabold text-white mb-4 tracking-tight">Success Stories</h2>
          <p className="text-2xl text-gray-100 font-medium">Real results for real businesses</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            className="bg-accent-gray p-8 rounded-lg border border-gray-800 hover:border-accent-pink transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <h3 className="font-display text-2xl font-bold text-white mb-4">Lifeway Christian Resources</h3>
            <p className="text-gray-100 text-lg font-medium mb-4">
              Revamped go-to-market strategy, exceeding KPIs by over 20%. Implemented comprehensive digital transformation
              initiatives that modernized their market approach.
            </p>
            <div className="bg-black p-4 rounded border border-gray-800">
              <p className="text-accent-pink font-bold text-xl">20%+ Increase in KPIs</p>
            </div>
          </motion.div>
          <motion.div 
            className="bg-accent-gray p-8 rounded-lg border border-gray-800 hover:border-accent-pink transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <h3 className="font-display text-2xl font-bold text-white mb-4">JETSET Pilates</h3>
            <p className="text-gray-100 text-lg font-medium mb-4">
              Developed a comprehensive marketing strategy and event calendar that significantly boosted local interest
              and community engagement.
            </p>
            <div className="bg-black p-4 rounded border border-gray-800">
              <p className="text-accent-pink font-bold text-xl">30% Growth in Community Engagement</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}