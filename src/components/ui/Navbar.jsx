import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  // ---------------------------------------------------------------------------
  // State Variables
  // ---------------------------------------------------------------------------
  const [isOpen, setIsOpen] = useState(false); // Mobile menu open state
  const [menuItemsVisible, setMenuItemsVisible] = useState(false); // Visibility of items within mobile menu (for animation)
  const [isExiting, setIsExiting] = useState(false); // Tracks if mobile menu is in exiting animation phase (currently not used for exit animation in toggle)
  
  const [visible, setVisible] = useState(true); // Navbar visibility based on scroll
  const [lastScrollY, setLastScrollY] = useState(0); // Last scroll position to determine scroll direction
  
  const [windowHeight, setWindowHeight] = useState(window.innerHeight); // Window height for full-screen mobile menu

  const navbarRef = useRef(null);

  // ---------------------------------------------------------------------------
  // Helper Functions
  // ---------------------------------------------------------------------------

  // Updates window height state, primarily for mobile menu sizing.
  const updateWindowHeight = () => {
    const vh = window.innerHeight;
    setWindowHeight(vh);
  };

  // Toggles the mobile menu.
  // Handles animation timing for menu items appearing.
  // Note: Closing is immediate and does not use an exit animation via isExiting here.
  const toggleMenu = () => {
    if (!isOpen) {
      // Open menu
      updateWindowHeight(); // Ensure height is correct before opening
      setIsOpen(true);
      setIsExiting(false); // Reset exiting state
      setTimeout(() => setMenuItemsVisible(true), 50); // Show items shortly after menu starts opening
    } else {
      // Close menu immediately
      setMenuItemsVisible(false);
      setIsOpen(false);
      // setIsExiting(false); // isExiting is reset, could be set to true if an exit animation was triggered here
    }
  };
  
  // ---------------------------------------------------------------------------
  // Effects
  // ---------------------------------------------------------------------------

  // Effect to control navbar visibility on scroll and handle window resize/orientation changes.
  useEffect(() => {
    // Controls navbar visibility based on scroll direction and position.
    const controlNavbar = () => {
      if (window.scrollY > 100) { // Only apply effect after scrolling 100px
        if (window.scrollY > lastScrollY && visible) {
          // Scrolling down and navbar is visible: hide navbar
          setVisible(false);
        } else if (window.scrollY < lastScrollY && !visible) {
          // Scrolling up and navbar is hidden: show navbar
          setVisible(true);
        }
      } else {
        // Near the top of the page, always show navbar
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    // Handles window resize and orientation changes by updating window height.
    const handleResize = () => {
      updateWindowHeight();
    };

    window.addEventListener('scroll', controlNavbar);
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    
    // Initial setup for window height
    updateWindowHeight();
    
    // Cleanup listeners on component unmount
    return () => {
      window.removeEventListener('scroll', controlNavbar);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, [lastScrollY, visible]); // Dependencies for the effect

  // ---------------------------------------------------------------------------
  // Navigation Links Configuration
  // ---------------------------------------------------------------------------
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '#features' },
    { name: 'About', path: '#about-us' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    // -------------------------------------------------------------------------
    // Main Navbar Container
    // -------------------------------------------------------------------------
      <div 
      ref={navbarRef}
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } bg-transparent`}
    >
      {/* ======================================================================= */}
      {/* Mobile Header (Visible on small screens)                            */}
      {/* ======================================================================= */}
      <div className="md:hidden bg-white shadow-sm py-3 px-4 border-b-2 border-black font-['Work_Sans']">
        <div className="flex items-center justify-between">
          {/* Logo (Mobile) */}
          <Link to="/" className="flex-shrink-0">
            <img  
              src={logo}
              alt="Triply Logo" 
              className="h-8 w-auto"
            />
          </Link>
          
          {/* Centered Name (Mobile) */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <span className="text-xl font-bold text-gray-800">Triply</span>
          </div>
          
          {/* Menu Button (Mobile Hamburger) */}
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

      {/* ======================================================================= */}
      {/* Desktop Navigation (Visible on medium screens and up)                 */}
      {/* ======================================================================= */}
      <div className="hidden md:block pt-6 px-4 sm:px-6 font-['Work_Sans']">
        <nav className="max-w-6xl mx-auto bg-white/80 backdrop-blur-md rounded-full shadow-lg px-6 py-3 flex items-center justify-between">
          {/* Logo and Name (Desktop) */}
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
          
          {/* Navigation Links (Desktop) */}
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

          {/* CTA Button (Desktop) */}
          <div>
            <a
              href="https://play.google.com/store/apps/details?id=com.triply.app&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#6c2bc7] text-white hover:bg-[#5a22a8] px-5 py-2 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 hover:shadow-purple-200 inline-block"
            >
              Download
            </a>
          </div>
        </nav>
      </div>

      {/* ======================================================================= */}
      {/* Mobile Menu (Full Screen Overlay)                                   */}
      {/* ======================================================================= */}
      <div 
        className={`fixed top-0 left-0 w-screen z-[9999] md:hidden transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          backgroundColor: '#FFFFFF',
          backgroundImage: 'linear-gradient(to left, rgba(108, 43, 199, 0.5) 0%, rgba(108, 43, 199, 0) 70%)',
          height: `${windowHeight}px`, // Use dynamic height
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Close Button (Mobile Menu) */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 p-2 focus:outline-none z-10"
          aria-label="Close menu"
        >
          <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Mobile Menu Content */}
        <div 
          className="flex-1 flex flex-col pl-6 pr-6 pt-40 pb-6 overflow-y-auto"
          style={{
            WebkitOverflowScrolling: 'touch',
            paddingBottom: 'calc(env(safe-area-inset-bottom) + 1.5rem)'
          }}
        >
          {/* Navigation Links (Mobile Menu) */}
          <div className="space-y-8 flex-1">
            {navLinks.map((link, index) => {
              // Animation logic for mobile menu items
              // Enter: Items slide in from right and fade in, staggered.
              // Exit: Controlled by onClick on link, items immediately disappear (due to setIsOpen(false) & setMenuItemsVisible(false)).
              // The 'isExiting' state is set but not currently utilized for a staggered exit animation here.
              const appear = menuItemsVisible && !isExiting;
              const disappear = isExiting && !menuItemsVisible; // This 'disappear' logic is not effectively used due to immediate close.
              
              // Staggered delay for items appearing
              const delay = appear
                ? `${index * 75}ms` // Delay for appearing items
                : disappear
                  ? `${index * 60}ms` // Theoretical delay for disappearing (not currently effective)
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
                  // Close menu immediately when a link is clicked.
                  // This bypasses any potential exit animation for the menu items.
                  setIsOpen(false);
                  setMenuItemsVisible(false);
                  setIsExiting(false); // Reset exiting state
                }}
              >
                {link.name}
              </Link>
            );
          })}
          </div>

          {/* Download Button (Mobile Menu) */}
          <div className="mt-auto mb-8">
            <a
              href="https://play.google.com/store/apps/details?id=com.triply.app&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full text-center bg-[#6c2bc7] text-white hover:bg-[#5a22a8] hover:text-white py-4 rounded-full text-xl font-medium transition-all duration-200 ${
                menuItemsVisible && !isExiting
                  ? 'opacity-100 translate-y-0'
                  : (!menuItemsVisible && isExiting)
                    ? 'opacity-0 translate-y-4'
                    : (!menuItemsVisible ? 'opacity-0 translate-y-4' : '')
              }`}
              style={{
                transitionDelay: menuItemsVisible && !isExiting
                  ? `${navLinks.length * 75}ms` // Delay for appearing button
                  : (!menuItemsVisible && isExiting)
                    ? `${(navLinks.length) * 60}ms` // Theoretical delay for disappearing button
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
