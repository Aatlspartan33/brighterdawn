import React from 'react';
import { motion } from 'framer-motion';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import { BarChart, Calendar, ChevronRight } from 'lucide-react';

export function Services() {
  const { ref, controls, variants } = useAnimateOnScroll();

  const serviceCards = [
    {
      icon: BarChart,
      title: "Strategic Marketing Consulting",
      description: "Comprehensive marketing consulting services including brand strategy, go-to-market planning, campaign management, and customer segmentation.",
      features: [
        "Brand Strategy Development",
        "Market Analysis",
        "Campaign Management",
        "Customer Segmentation"
      ],
      pricing: "Starting at $125/hour"
    },
    {
      icon: Calendar,
      title: "Event Marketing & Management",
      description: "Expert planning and execution of marketing events that engage communities and elevate brands.",
      features: [
        "Event Planning & Coordination",
        "Influencer Activations",
        "Grand Openings",
        "Community Engagement"
      ],
      pricing: "Starting at $500 per event"
    }
  ];

  return (
    <section id="services" className="py-20 bg-accent-gray relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent"></div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
      >
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-5xl font-extrabold text-white mb-4 tracking-tight">Our Services</h2>
          <p className="text-2xl text-gray-100 font-medium">Comprehensive marketing solutions tailored to your needs</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {serviceCards.map((service, index) => (
            <motion.div
              key={service.title}
              className="group bg-black p-8 rounded-lg border border-gray-800 hover:border-accent-pink transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <service.icon className="h-12 w-12 text-accent-pink mb-6" />
              <h3 className="font-display text-2xl font-bold text-white mb-4 group-hover:text-accent-pink transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-100 text-lg font-medium mb-4">{service.description}</p>
              <ul className="text-gray-100 space-y-3 mb-6 text-lg font-medium">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-2">
                    <ChevronRight className="h-5 w-5 text-accent-pink" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-accent-pink font-bold text-xl">{service.pricing}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent-pink rounded-full opacity-5 blur-3xl"></div>
    </section>
  );
}