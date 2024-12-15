import React from 'react';
import { Sunrise, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Sunrise className="h-6 w-6 text-accent-pink" />
              <span className="font-display text-lg">Brighter Dawn Consulting</span>
            </div>
            <p className="text-gray-300">
              Empowering organizations with innovative marketing strategies that drive growth and foster meaningful connections.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-accent-pink transition">About</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-accent-pink transition">Services</a></li>
              <li><a href="#portfolio" className="text-gray-300 hover:text-accent-pink transition">Portfolio</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-accent-pink transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-lg font-medium mb-4">Connect</h3>
            <a
              href="https://www.linkedin.com/in/kimberly-hogg-massey"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-accent-pink transition"
            >
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Brighter Dawn Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}