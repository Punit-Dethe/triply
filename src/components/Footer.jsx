import React from 'react';
import { Link } from 'react-router-dom';
import { Youtube, Instagram, Twitter, Facebook } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="Triply Logo" className="h-8" />
              <span className="text-xl font-bold">Triply</span>
            </Link>
            <p className="mt-4 text-gray-400">
              Smarter Commutes, Happier Offices.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white"><Youtube size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Links Sections */}
          <div className="col-span-1 md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold tracking-wider uppercase text-gray-200">Product</h3>
              <ul className="mt-4 space-y-2">
                <li><Link to="/features" className="text-gray-400 hover:text-white">Features</Link></li>
                <li><Link to="/pricing" className="text-gray-400 hover:text-white">Pricing</Link></li>
                <li><Link to="/security" className="text-gray-400 hover:text-white">Security</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold tracking-wider uppercase text-gray-200">Company</h3>
              <ul className="mt-4 space-y-2">
                <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
                <li><Link to="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold tracking-wider uppercase text-gray-200">Support</h3>
              <ul className="mt-4 space-y-2">
                <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                <li><Link to="/docs" className="text-gray-400 hover:text-white">Documentation</Link></li>
                <li><Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
              </ul>
            </div>
          </div>
          
          {/* Newsletter section is now removed */}

        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Triply, Inc. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-500 hover:text-white text-sm">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-500 hover:text-white text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
