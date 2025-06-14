import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutUs = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <div id="about-us" ref={containerRef} className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top Section: Title and Description */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <div>
            <p className="text-base font-semibold leading-7 text-purple-600">ABOUT US</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Providing the building blocks for a smarter commute.
            </h1>
          </div>
          <div className="lg:pt-2 relative">
             <div className="absolute inset-0 bg-orange-400/10 blur-3xl rounded-full -z-1" />
            <p className="relative text-lg leading-8 text-gray-600">
              Triply offers a community-driven platform for office commuters. We empower employees to share rides, reducing traffic congestion and their carbon footprint. Our smart, route-optimized system ensures reliability, affordability, and convenience. The platform includes a user-friendly dashboard and a seamless mobile app for managing your daily travel.
            </p>
          </div>
        </div>

        {/* Image Section - Aligned to the right */}
        <div className="mt-16 sm:mt-24 lg:w-3/5 ml-auto">
          <motion.div style={{ y }} className="relative">
            {/* Glow Element */}
            <div className="absolute -inset-4 bg-purple-500/25 blur-3xl rounded-3xl z-0" aria-hidden="true" />
            {/* Image container with clipping */}
            <div className="relative isolate overflow-hidden bg-gray-100 rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Our team"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <p className="mt-8 text-right text-lg leading-8 text-gray-600">
            On a mission to remove the complexity of the daily commute.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs; 