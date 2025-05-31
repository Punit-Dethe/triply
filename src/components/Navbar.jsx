import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [menuItemsVisible, setMenuItemsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const navbarRef = useRef(null);

  // Function to update window height for mobile menu
  const updateWindowHeight = () => {
    const vh = window.innerHeight;
    setWindowHeight(vh);
  };

  // Handle menu open/close with animation timing
  const toggleMenu = () => {
    if (!isOpen) {
      // Update height and open menu
      updateWindowHeight();
      setIsOpen(true);
      setTimeout(() => setMenuItemsVisible(true), 50);
      setIsExiting(false);
    } else {
      // Start exit animation
      setIsExiting(true);
      setMenuItemsVisible(false);
      // Wait for staggered exit (navLinks.length * 60ms for menu items + 60ms for download button)
      setTimeout(() => {
        setIsOpen(false);
        setIsExiting(false);
      }, (navLinks.length + 1) * 60);
    }
  };
  
  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > 100) {
        if (window.scrollY > lastScrollY && visible) {
          setVisible(false);
        } else if (window.scrollY < lastScrollY && !visible) {
          setVisible(true);
        }
      }
      setLastScrollY(window.scrollY);
    };

    // Handle window resize and orientation change
    const handleResize = () => {
      updateWindowHeight();
    };

    window.addEventListener('scroll', controlNavbar);
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    
    // Initial setup
    updateWindowHeight();
    
    return () => {
      window.removeEventListener('scroll', controlNavbar);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, [lastScrollY, visible]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <div 
      ref={navbarRef}
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } bg-transparent`}
    >
      {/* Mobile Header - Only shows on mobile */}
      <div className="md:hidden bg-white shadow-sm py-3 px-4 border-b-2 border-black font-['Work_Sans']">
        <div className="flex items-center justify-between">
          {/* Logo on the left */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src={logo}
              alt="Triply Logo" 
              className="h-8 w-auto"
            />
          </Link>
          
          {/* Centered name */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <span className="text-xl font-bold text-gray-800">Triply</span>
          </div>
          
          {/* Menu button on the right */}
          <button
            onClick={toggleMenu}
            className="relative w-8 h-8 flex flex-col justify-center items-center group focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className={`
              block w-6 h-1 bg-[#6c2bc7] rounded-full transform transition-all duration-300 ease-in-out
              ${isOpen ? 'rotate-45 translate-y-1' : 'mb-2'}
              group-hover:bg-[#5a22a8] origin-center
            `}></span>
            <span className={`
              block w-6 h-1 bg-[#6c2bc7] rounded-full transform transition-all duration-300 ease-in-out
              ${isOpen ? '-rotate-45 -translate-y-0.5' : ''}
              group-hover:bg-[#5a22a8] origin-center
            `}></span>
          </button>
        </div>
      </div>

      {/* Desktop Navigation - Shows on md screens and up */}
      <div className="hidden md:block pt-6 px-4 sm:px-6 font-['Work_Sans']">
        <nav className="max-w-6xl mx-auto bg-white/80 backdrop-blur-md rounded-full shadow-lg px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-gray-800 flex items-center">
              <img 
                src={logo}
                alt="Triply Logo" 
                className="h-8 w-auto mr-2"
              />
              <span className="text-gray-800">Triply</span>
            </Link>
          </div>
          
          {/* Desktop Navigation - Centered */}
          <div className="flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="px-4 py-2 text-base font-semibold text-black hover:text-[#6c2bc7] rounded-full transition-all duration-200 hover:bg-purple-50/70"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side - CTA Button */}
          <div>
            <a
              href="https://play.google.com/store/apps/details?id=com.triply.app&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#6c2bc7] hover:bg-[#5a22a8] text-white px-5 py-2 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 hover:shadow-purple-200 inline-block"
            >
              Download
            </a>
          </div>
        </nav>
      </div>

      {/* Mobile Menu - Full Screen with Slide Animation from Right */}
      <div 
        className={`fixed top-0 left-0 w-screen z-[9999] md:hidden transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          backgroundColor: '#FFFFFF',
          backgroundImage: 'linear-gradient(to left, rgba(235, 149, 81, 0.9) 0%, rgba(235, 149, 81, 0.9) 1%, rgba(125, 143, 247, 0.7) 6%, rgba(157, 92, 212, 0.6) 15%, rgba(248, 242, 255, 0.2) 35%)',
          height: `${windowHeight}px`, // Use dynamic height
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Close button */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 p-2 focus:outline-none z-10"
          aria-label="Close menu"
        >
          <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Menu content */}
        <div 
          className="flex-1 flex flex-col pl-6 pr-6 pt-40 pb-6 overflow-y-auto"
          style={{
            WebkitOverflowScrolling: 'touch',
            paddingBottom: 'calc(env(safe-area-inset-bottom) + 1.5rem)'
          }}
        >
          {/* Main navigation links - moved higher */}
          <div className="space-y-8 flex-1">
            {navLinks.map((link, index) => {
              // For exit: top to bottom (same as enter)
              const appear = menuItemsVisible && !isExiting;
              const disappear = isExiting && !menuItemsVisible;
              // Slightly slower enter animation (75ms delay between items)
              const delay = appear
                ? `${index * 75}ms`
                : disappear
                  ? `${index * 60}ms`
                  : '0ms';
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block text-5xl font-normal text-gray-800 hover:text-[#6c2bc7] transition-all duration-250 ${
                    menuItemsVisible && !isExiting
                      ? 'opacity-100 translate-x-0'
                      : (!menuItemsVisible && isExiting)
                        ? 'opacity-0 translate-x-8'
                        : (!menuItemsVisible ? 'opacity-0 translate-x-8' : '')
                  }`}
                style={{
                  transitionDelay: delay,
                  fontFamily: "'Work Sans', sans-serif"
                }}
                onClick={() => {
                  // Close menu immediately without waiting for exit animation
                  setIsOpen(false);
                  setMenuItemsVisible(false);
                  setIsExiting(false);
                }}
              >
                {link.name}
              </Link>
            );
          })}
          </div>

          {/* Download button - positioned at bottom with full width */}
          <div className="mt-auto mb-8">
            <a
              href="https://play.google.com/store/apps/details?id=com.triply.app&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full text-center bg-black text-white py-4 rounded-full text-xl font-medium transition-all duration-200 ${
                menuItemsVisible && !isExiting
                  ? 'opacity-100 translate-y-0'
                  : (!menuItemsVisible && isExiting)
                    ? 'opacity-0 translate-y-4'
                    : (!menuItemsVisible ? 'opacity-0 translate-y-4' : '')
              }`}
              style={{
                transitionDelay: menuItemsVisible && !isExiting
                  ? `${navLinks.length * 75}ms`
                  : (!menuItemsVisible && isExiting)
                    ? `${(navLinks.length) * 60}ms`
                    : '0ms',
                fontFamily: "'Work Sans', sans-serif",
                display: 'block',
                paddingLeft: '1rem',
                paddingRight: '1rem',
                marginBottom: 'env(safe-area-inset-bottom, 20px)'
              }}
              onClick={() => {
                setMenuItemsVisible(false);
                setTimeout(() => setIsOpen(false), 300);
              }}
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
