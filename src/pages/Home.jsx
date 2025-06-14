import React, { useState, useEffect } from 'react';
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

const TEXTS = [
  { 
    normal: 'we make your ride to work,',
    highlight: 'stress free',
    after: '.',
  },
  {
    normal: 'comfort of your car,',
    highlight: 'without the driving',
    after: '.',
  },
  {
    normal: 'doorstep to office ',
    highlight: 'direct',
    after: '.',
  },
  {
    normal: 'On time cabs',
    highlight: 'always',
    after: '.',
  },
];

const Home = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % TEXTS.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  const currentText = TEXTS[currentTextIndex];
  
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
          {/* Black gradient fading from 100% to 0% opacity */}
          <div className="absolute bottom-0 left-0 right-0 h-[120px]" 
               style={{ 
                 background: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)'
               }}>
          </div>
        </div>
        {/* Bottom-left overlay content */}
        <div className="absolute bottom-0 left-0 z-20 w-full sm:w-auto p-6 sm:p-12 pt-10 sm:pt-8 flex flex-col items-start">
          <motion.h1 
            key={currentTextIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl font-bold text-white min-h-[100px] sm:min-h-[120px] flex flex-col justify-center pt-32 sm:pt-12"
          >
            <span>{currentText.normal} <span className="text-[#A855F7]">{currentText.highlight}</span><span className="text-white">{currentText.after}</span></span>
          </motion.h1>
          <p className="text-base sm:text-lg text-gray-200 mb-6 mt-2">Experience the future of corporate commuting</p>
          <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-2 w-full">
            <a 
              href="#how-it-works" 
              className="flex-shrink-0 bg-white text-black font-semibold px-5 sm:px-8 py-2.5 sm:py-3 rounded-full shadow hover:bg-gray-100 transition whitespace-nowrap text-sm sm:text-base"
            >
              How it works
            </a>
            <button className="flex-shrink-0 bg-black text-[#A855F7] border-2 border-[#A855F7] font-semibold px-5 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-[#A855F7] hover:text-black transition whitespace-nowrap text-sm sm:text-base">
              Get it now
            </button>
          </div>
        </div>
        {/* Spacer to account for fixed navbar */}
        <div className="h-24 relative z-10"></div>
      </div>

      <section id="about-us">
        <AboutUs />
      </section>
      
      <section id="features">
        <Features />
      </section>
      
      <Amenities />
      <WhyChooseUs />
          
      <div className="relative sm:mt-12" style={{
        background: 'radial-gradient(circle at center, rgba(138, 92, 246, 0.16) 0%, rgba(249, 116, 22, 0.07) 40%, transparent 100%)',
      }}>
        <div id="how-it-works" className="relative pb-20 pt-4 sm:-mt-10 -mt-20">
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
