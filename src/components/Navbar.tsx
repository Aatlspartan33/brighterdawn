import React, { useState, useEffect } from 'react';
import { Sunrise, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Sunrise className="h-10 w-10 text-accent-pink" />
            <span className="font-display text-2xl md:text-3xl font-bold">Brighter Dawn Consulting</span>
          </motion.div>

          <div className="hidden md:flex space-x-10">
            {['About', 'Services', 'Portfolio', 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-accent-pink transition-colors relative group font-bold text-xl"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-pink transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </motion.a>
            ))}
          </div>

          <button 
            className="md:hidden text-white z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed top-20 left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-gray-800"
          >
            <div className="px-4 py-6 space-y-4">
              {['About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => handleMobileNavClick(item.toLowerCase())}
                  className="block w-full text-left text-white hover:text-accent-pink transition-colors py-2 font-bold text-xl"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}