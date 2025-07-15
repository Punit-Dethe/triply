import React from 'react';
import { Link } from 'react-router-dom';
import { Youtube, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">

          <div className="text-center md:text-left">
            <Link to="/" className="flex items-center justify-center md:justify-start space-x-2">
              <img src="/logo.ico" alt="Triply Logo" className="h-10 w-auto" />
              <span className="text-2xl font-bold text-white">Triply</span>
            </Link>
            <p className="mt-3 text-gray-400 max-w-xs">
            Smarter Rides, Better Mornings.            </p>
          </div>


          <div className="flex items-center space-x-6 md:space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white font-medium whitespace-nowrap">Home</Link>
            <Link to="/services" className="text-gray-300 hover:text-white font-medium whitespace-nowrap">Services</Link>
            <Link to="/about" className="text-gray-300 hover:text-white font-medium whitespace-nowrap">About</Link>
            <Link to="/contact" className="text-gray-300 hover:text-white font-medium whitespace-nowrap">Contact</Link>
          </div>


          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="flex space-x-4">
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>


        <div className="mt-12 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Triply. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
