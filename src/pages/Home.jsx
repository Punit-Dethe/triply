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

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative text-white pt-32 pb-16 -mt-24 md:pt-48 overflow-hidden bg-cover bg-center" style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.pexels.com/photos/315938/pexels-photo-315938.jpeg?cs=srgb&dl=pexels-pixabay-315938.jpg&fm=jpg)',
        backgroundPosition: 'center 30%',
        minHeight: 'calc(100vh - 6rem)'
      }}>
        {/* Spacer to account for fixed navbar */}
        <div className="h-24"></div>
        
        {/* Content */}
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8 px-4">Smarter Commutes, Happier Offices</h1>
          <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
            Triply transforms your daily commute with affordable, eco-friendly cab sharing for office-goers.
            Save up to 60% on your daily travel costs while reducing your carbon footprint.
          </p>
          <div className="space-x-4">
            <Link 
              to="/signup" 
              className="bg-[#6c2bc7] hover:bg-[#5a22a8] text-white px-6 py-2 md:px-8 md:py-3 rounded-lg font-medium text-base md:text-lg inline-block transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 hover:shadow-purple-200"
            >
              Start Saving Now
            </Link>
            <Link 
              to="/how-it-works" 
              className="bg-white text-[#6c2bc7] hover:bg-gray-100 px-6 py-2 md:px-8 md:py-3 rounded-lg font-medium text-base md:text-lg inline-block transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 hover:shadow-purple-100"
            >
              How It Works
            </Link>
          </div>
        </div>
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
