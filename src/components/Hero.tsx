import React from 'react';
import { motion } from 'framer-motion';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

export function Hero() {
  const { ref, controls, variants } = useAnimateOnScroll();

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        {/* Increased opacity layers for better text visibility */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-black/80"></div>
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80"
            alt="Professional team meeting"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
      </div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 min-h-screen flex items-center"
      >
        <div className="max-w-3xl">
          <motion.h1 
            className="font-display text-6xl md:text-7xl font-bold text-white mb-6 leading-tight uppercase tracking-tight text-shadow-lg"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform Your <br/>
            <span className="text-accent-pink">Brand Story</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white mb-8 text-shadow-lg font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Empowering organizations with innovative marketing strategies that drive growth and foster meaningful connections.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-4"
          >
            <a
              href="#contact"
              className="inline-block bg-accent-pink text-white px-8 py-4 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
            >
              Let's Create Your Success Story
            </a>
            <p className="text-white text-lg ml-4 text-shadow-lg font-medium">
              Trusted by leading brands across industries
            </p>
          </motion.div>
        </div>
      </motion.div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
}