import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [menuItemsVisible, setMenuItemsVisible] = useState(false);
  const navbarRef = useRef(null);

  // Handle menu open/close with animation timing
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

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <div 
      ref={navbarRef}
      className={`fixed top-0 left-0 right-0 z-50 bg-transparent transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Mobile Header - Only shows on mobile */}
      <div className="md:hidden bg-white shadow-sm py-3 px-4 border-b-2 border-black font-['Work_Sans']">
        <div className="flex items-center justify-between">
          {/* Logo on the left */}
          <Link to="/" className="flex-shrink-0">
            <span className="bg-[#FA812F] text-white rounded-full w-8 h-8 flex items-center justify-center border border-black">
              T
            </span>
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
              block w-6 h-1 bg-[#FA812F] rounded-full transform transition-all duration-300 ease-in-out
              ${isOpen ? 'rotate-45 translate-y-1' : 'mb-2'}
              group-hover:bg-[#e67329] origin-center
            `}></span>
            <span className={`
              block w-6 h-1 bg-[#FA812F] rounded-full transform transition-all duration-300 ease-in-out
              ${isOpen ? '-rotate-45 -translate-y-0.5' : ''}
              group-hover:bg-[#e67329] origin-center
            `}></span>
          </button>
        </div>
      </div>

      {/* Desktop Navigation - Shows on md screens and up */}
      <div className="hidden md:block pt-6 px-4 sm:px-6 font-['Work_Sans']">
        <nav className="max-w-6xl mx-auto bg-purple-50/70 backdrop-blur-md rounded-full border border-black shadow-lg px-6 py-3 flex items-center justify-between" style={{ borderWidth: '2px' }}>
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-gray-800 flex items-center">
              <span className="bg-[#FA812F] text-white rounded-full w-8 h-8 flex items-center justify-center mr-2 border-2 border-black">
                T
              </span>
              <span className="text-gray-800">Triply</span>
            </Link>
          </div>
          
          {/* Desktop Navigation - Centered */}
          <div className="flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="px-4 py-2 text-base font-semibold text-black hover:text-[#FA812F] rounded-full transition-all duration-200 hover:bg-orange-50/70"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side - CTA Button */}
          <div>
            <Link
              to="/download"
              className="bg-[#FA812F] hover:bg-[#e67329] text-white px-5 py-2 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 hover:shadow-orange-200 border border-black"
            >
              Download
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile Menu - Full Screen with Slide Animation from Right */}
      <div 
        className={`fixed inset-0 z-[100] md:hidden transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          backgroundColor: '#FFFAF5',
          backgroundImage: 'linear-gradient(to right, #FFFAF5 60%, #FFE4D6 100%)',
          width: '100vw',
          height: '100vh',
          overflowY: 'auto'
        }}
      >
        {/* Close button */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 p-2 focus:outline-none"
          aria-label="Close menu"
        >
          <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Menu content */}
        <div className="h-full flex flex-col pl-12 pr-12 pt-32 pb-12">
          {/* Main navigation links - moved higher */}
          <div className="space-y-8 flex-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block text-5xl font-normal text-gray-800 hover:text-[#FA812F] transition-all duration-300 ${
                  menuItemsVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-8'
                }`}
                style={{
                  transitionDelay: menuItemsVisible ? `${index * 100}ms` : '0ms',
                  fontFamily: "'Work Sans', sans-serif"
                }}
                onClick={() => {
                  setMenuItemsVisible(false);
                  setTimeout(() => setIsOpen(false), 300);
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Download button - positioned at bottom with full width */}
          <div className="mt-auto">
            <Link
              to="/download"
              className={`w-full text-center bg-black text-white py-4 rounded-full text-xl font-medium transition-all duration-300 ${
                menuItemsVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 -translate-y-4'
              }`}
              style={{
                transitionDelay: menuItemsVisible ? `${(navLinks.length) * 75}ms` : '0ms',
                fontFamily: "'Work Sans', sans-serif",
                display: 'block',
                paddingLeft: '1rem',
                paddingRight: '1rem'
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
    </div>
  );
};

export default Navbar;
