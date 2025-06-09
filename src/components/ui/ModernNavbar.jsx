import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const ModernNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuItemsVisible, setMenuItemsVisible] = useState(false);
  const navbarRef = useRef(null);

  // Toggle mobile menu with animation
  const toggleMenu = () => {
    if (!isOpen) {
      setIsOpen(true);
      // Small delay to allow the menu container to render before animating items
      setTimeout(() => setMenuItemsVisible(true), 50);
    } else {
      setMenuItemsVisible(false);
      // Wait for item animations to complete before closing menu
      setTimeout(() => setIsOpen(false), 300);
    }
  };

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > 100) { // Only start hiding after scrolling down a bit
        if (window.scrollY > lastScrollY && visible) {
          // Scrolling down
          setVisible(false);
        } else if (window.scrollY < lastScrollY && !visible) {
          // Scrolling up
          setVisible(true);
        }
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY, visible]);

  const navbarClasses = `fixed top-0 left-0 right-0 bg-white border-b-2 border-black z-50 shadow-sm transition-transform duration-300 ${
    visible ? 'translate-y-0' : '-translate-y-full'
  }`;

  // Navigation links
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
    { name: 'Socials', path: 'https://instagram.com', external: true }
  ];

  return (
    <div ref={navbarRef} className={navbarClasses}>
      {/* Desktop Navigation */}
      <div className="hidden md:block py-4 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left side navigation links */}
          <div className="flex items-center space-x-8">
            {navLinks.slice(0, 4).map(link => (
              <Link 
                key={link.path} 
                to={link.path} 
                className="text-gray-700 hover:text-[#6c2bc7] font-medium text-sm transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Center logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link to="/" className="text-3xl font-bold text-[#6c2bc7] hover:opacity-90 transition-opacity">Triply</Link>
          </div>

          {/* Right side links and button */}
          <div className="flex items-center space-x-8">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#6c2bc7] font-medium text-sm transition-colors duration-200">Social</a>
            <Link 
              to="/download" 
              className="bg-[#6c2bc7] hover:bg-[#5a22a8] text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-purple-200"
            >
              Download
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden py-3 px-4 bg-white z-50 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <span className="text-2xl font-bold text-[#6c2bc7]">Triply</span>
          </Link>
          
          {/* Menu button */}
          <button
            onClick={toggleMenu}
            className="relative w-8 h-8 flex flex-col justify-center items-center group focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className={`
              block w-6 h-0.5 bg-[#6c2bc7] rounded-full transform transition-all duration-300 ease-in-out
              ${isOpen ? 'rotate-45 translate-y-0.5' : 'mb-2'}
              group-hover:bg-[#5a22a8] origin-center
            `}></span>
            <span className={`
              block w-6 h-0.5 bg-[#6c2bc7] rounded-full transform transition-all duration-300 ease-in-out
              ${isOpen ? '-rotate-45 -translate-y-0.5' : ''}
              group-hover:bg-[#5a22a8] origin-center
            `}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-white z-40 transition-all duration-300 ease-in-out transform ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{
          paddingTop: '80px', // Space for the header
          height: '100vh',
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <div className="px-6 py-2 space-y-1">
          {/* Close button */}
          <button
            onClick={toggleMenu}
            className="absolute right-4 top-4 p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {navLinks.map((link, index) => (
            link.external ? (
              <a
                key={link.path}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                className={`block px-4 py-3 text-base font-medium text-gray-700 hover:bg-orange-50 hover:text-[#FA812F] border-b border-gray-100 transform transition-all duration-300 ${
                  menuItemsVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-4'
                }`}
                style={{
                  transitionDelay: menuItemsVisible ? `${index * 75}ms` : '0ms'
                }}
                onClick={() => {
                  setMenuItemsVisible(false);
                  setTimeout(() => setIsOpen(false), 300);
                }}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 text-base font-medium text-gray-700 hover:bg-orange-50 hover:text-[#FA812F] border-b border-gray-100 transform transition-all duration-300 ${
                  menuItemsVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-4'
                }`}
                style={{
                  transitionDelay: menuItemsVisible ? `${index * 75}ms` : '0ms'
                }}
                onClick={() => {
                  setMenuItemsVisible(false);
                  setTimeout(() => setIsOpen(false), 300);
                }}
              >
                {link.name}
              </Link>
            )
          ))}
          <Link
            to="/download"
            className={`block w-full text-center bg-[#6c2bc7] hover:bg-[#5a22a8] text-white px-4 py-3 text-base font-medium rounded-lg mx-2 my-2 transform transition-all duration-300 ${
              menuItemsVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-4'
            }`}
            style={{
              transitionDelay: menuItemsVisible ? `${navLinks.length * 75}ms` : '0ms'
            }}
            onClick={() => {
              setMenuItemsVisible(false);
              setTimeout(() => setIsOpen(false), 300);
            }}
          >
            Download
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModernNavbar;
