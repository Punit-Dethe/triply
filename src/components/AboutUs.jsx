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
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <div>
            <p className="text-base font-semibold leading-7 text-purple-600">
              About Triply (FlixLogix)
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Office Transportation: Safe, Reliable & Smart Commutes
            </h1>
            <h2 className="mt-4 text-2xl font-semibold text-gray-800">
            Your Trusted Every Day Ride Partner
            </h2>
          </div>
          <div className="lg:pt-2 relative">
            <div className="absolute inset-0 bg-orange-400/10 blur-3xl rounded-full -z-1" />
            <p className="relative text-lg leading-8 text-gray-600">
            Triply offers safe, reliable daily commute solutions for working professionals.
            With real-time tracking, on-time pickups, and sanitized cabs, we ensure a smooth ride to and from the office. Choose from flexible plans—single trip, weekly, or monthly—on fixed routes and time slots. Our growing EV fleet, verified drivers, and 24/7 support make commuting efficient, affordable, and secure—especially for female passengers.            </p>
          </div>
        </div>

        <div className="mt-16 sm:mt-24 lg:w-3/5 ml-auto">
          <motion.div style={{ y }} className="relative">
            <div
              className="absolute -inset-4 bg-purple-500/25 blur-3xl rounded-3xl z-0"
              aria-hidden="true"
            />

            <div className="relative isolate overflow-hidden bg-gray-100 rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Corporate employee commute team at FlixLogix Triply – Safe, Reliable Transportation"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
          <div className="mt-4 overflow-hidden">
            <p className="text-center sm:text-right text-sm text-gray-600 whitespace-nowrap">
              On a mission to remove the complexity of the daily commute.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
