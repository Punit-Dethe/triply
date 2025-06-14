import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import Impact from '../components/Impact';
import FAQ from '../components/FAQ';
import AboutUs from '../components/AboutUs';
import WhyChooseUs from '../components/WhyChooseUs';
import Features from '../components/Features';
import Amenities from '../components/Amenities';
import heroImage from '../assets/istockphoto-924908526-2048x2048-Photoroom (1).png';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative -mt-24 w-full h-screen overflow-hidden">
        {/* Image Background (replaces video) */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={heroImage}
            alt="Corporate car on the road" 
            className="absolute top-0 left-0 w-full h-full object-cover"
            style={{ minWidth: '100%', minHeight: '100%' }}
          />
          {/* More prominent black gradient at the top (215px) */}
          <div className="absolute top-0 left-0 right-0 h-[215px]" 
               style={{ 
                 background: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 30%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0) 100%)'
               }}>
          </div>
          {/* White gradient at the bottom - 100% to 0% opacity */}
          <div className="absolute bottom-0 left-0 right-0 h-[70px]" 
               style={{ 
                 background: 'linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 100%)'
               }}>
          </div>
        </div>
        {/* Bottom-left overlay content */}
        <div className="absolute bottom-0 left-0 z-20 w-full sm:w-auto p-6 sm:p-12 flex flex-col items-start">
          <h1 className="text-3xl sm:text-5xl font-bold mb-2 text-white">
            <span className="text-[#A855F7]">Reclaim</span> your commute time
          </h1>
          <p className="text-base sm:text-lg text-gray-200 mb-6">Comfortable Home to Office cab rides</p>
          <div className="flex gap-4 flex-wrap">
            <button className="bg-white text-black font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition">Find my bus</button>
            <button className="bg-black text-[#A855F7] border-2 border-[#A855F7] font-semibold px-8 py-3 rounded-full hover:bg-[#A855F7] hover:text-black transition">Download the app</button>
          </div>
        </div>
        {/* Spacer to account for fixed navbar */}
        <div className="h-24 relative z-10"></div>
      </div>

      <AboutUs />
      <Features />
      <Amenities />
      <WhyChooseUs />
          
      <div className="relative" style={{
        background: 'radial-gradient(circle at center, rgba(138, 92, 246, 0.16) 0%, rgba(249, 116, 22, 0.07) 40%, transparent 100%)',
      }}>
        <div className="relative pb-20">
          <HowItWorks />
          <div className="absolute -bottom-8 inset-x-0 flex justify-center z-10">
            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              <ArrowDown className="h-14 w-14 text-gray-400" />
            </motion.div>
          </div>
        </div>

        <Testimonials />
      </div>

      <Impact />
      <FAQ />

    </div>
  );
};

export default Home;
