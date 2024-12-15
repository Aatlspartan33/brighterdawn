import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

export function Contact() {
  const { ref, controls, variants } = useAnimateOnScroll();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id="contact" className="py-20 bg-accent-gray">
      <motion.div 
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-5xl font-extrabold text-white mb-6 tracking-tight">Get in Touch</h2>
            <p className="text-gray-100 text-xl font-medium mb-8">
              Ready to transform your marketing strategy? Let's discuss how we can help your business grow.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-accent-pink" />
                <a href="mailto:kimberly@khmllc.co" className="text-gray-100 text-lg font-medium hover:text-accent-pink">
                  kimberly@khmllc.co
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-accent-pink" />
                <a href="tel:615-497-9748" className="text-gray-100 text-lg font-medium hover:text-accent-pink">
                  615-497-9748
                </a>
              </div>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-100 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg focus:ring-accent-pink focus:border-accent-pink text-white text-lg"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-100 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg focus:ring-accent-pink focus:border-accent-pink text-white text-lg"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-100 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg focus:ring-accent-pink focus:border-accent-pink text-white text-lg"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-accent-pink text-white px-6 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}