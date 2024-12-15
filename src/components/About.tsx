import React from 'react';
import { motion } from 'framer-motion';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import { Award, Briefcase } from 'lucide-react';
import { PROFILE_IMAGE } from '../constants/images';

export function About() {
  const { ref, controls, variants } = useAnimateOnScroll();

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-accent-gray to-transparent"></div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main image container */}
            <div className="relative rounded-2xl bg-black p-1">
              <div className="relative overflow-hidden rounded-xl aspect-[4/5]">
                <img
                  src={PROFILE_IMAGE}
                  alt="Kimberly Hogg Massey"
                  className="w-full h-full object-cover rounded-xl"
                />
                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-transparent"></div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-display text-5xl font-extrabold text-white mb-6 tracking-tight">
              Meet <span className="text-accent-pink">Kimberly</span>
            </h2>
            <p className="text-gray-100 mb-6 text-xl font-medium leading-relaxed">
              Kimberly Massey is a versatile marketing leader with over 15 years of experience delivering results across B2B and B2C landscapes. Her expertise includes brand management, marketing strategy, and customer engagement, making her a sought-after advisor for organizations aiming to create meaningful, lasting impact.
            </p>
            <p className="text-gray-100 mb-8 text-xl font-medium leading-relaxed">
              A graduate of Spelman College with a degree in Economics, Kimberly began her career as an investment banker on Wall Street. While excelling in the fast-paced world of finance, she realized her passion lay in working closer to the needs of consumers, driving her to pivot into marketing.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <motion.div 
                className="bg-accent-gray p-6 rounded-xl border border-gray-800 hover:border-accent-pink transition-colors duration-300 group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Briefcase className="h-8 w-8 text-accent-pink mb-2" />
                <h3 className="font-display text-accent-pink text-2xl font-bold mb-2">Experience</h3>
                <p className="text-white text-3xl font-extrabold group-hover:text-accent-pink transition-colors">15+ Years</p>
                <p className="text-gray-300 font-medium">in Marketing</p>
              </motion.div>
              <motion.div 
                className="bg-accent-gray p-6 rounded-xl border border-gray-800 hover:border-accent-pink transition-colors duration-300 group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Award className="h-8 w-8 text-accent-pink mb-2" />
                <h3 className="font-display text-accent-pink text-2xl font-bold mb-2">Industries</h3>
                <p className="text-white text-3xl font-extrabold group-hover:text-accent-pink transition-colors">B2B & B2C</p>
                <p className="text-gray-300 font-medium">Expert</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}