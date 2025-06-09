import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Testimonials = () => {
  const testimonials = [
    {
      quote: '"This magical product actually works! The audiences we built using Triply increased new customer sales by 6X in our most mature market."',
      company: 'Treatwell',
      logo: 'https://placehold.co/200x50/text=Treatwell'
    },
    {
      quote: '"We generate prospecting audiences using Triply to drive incremental growth. Our ROI has been fantastic!"',
      company: 'Revolution Beauty',
      logo: 'https://placehold.co/200x50/text=Revolution'
    },
    {
      quote: '"Triply\'s product does its thing in the background: dynamically refreshing all of our audiences so that we convert new customers everyday, profitably."',
      company: 'Derek Rose',
      logo: 'https://placehold.co/200x50/text=DerekRose'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-24 sm:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="flex flex-col lg:flex-row justify-between items-start gap-16"
        >
          {/* Left side - Heading */}
          <motion.div 
            variants={itemVariants}
            className="lg:w-5/12 mb-16 lg:mb-0"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
              Unlimited <br />
              audiences.<br />
              <span className="mt-2 inline-block">Unlimited <br />
              success.</span>
            </h2>
            <p className="mt-8 text-lg text-gray-700 leading-relaxed">
              Generating, prioritising & experimenting with audiences is the only way to find winners. 
              If your audiences have saturated, you're stuck for new audience ideas, or performance has flatlined. 
              You need a slice of Triply.
            </p>
            <Link 
              to="/contact" 
              className="mt-10 px-8 py-3 bg-[#481878] text-white rounded-md font-medium hover:bg-[#5a2996] transition-colors inline-block"
            >
              Book a demo
            </Link>
          </motion.div>

          {/* Right side - Testimonial Cards */}
          <motion.div 
            variants={itemVariants}
            className="lg:w-6/12 space-y-10"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                {/* Purple border frame */}
                <div className="absolute inset-0 bg-[#6d28d9] rounded-3xl transform translate-x-2 translate-y-2"></div>
                
                {/* White content card */}
                <div className="relative bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-sm z-10">
                  <p className="text-lg sm:text-xl text-gray-800 mb-8 font-medium leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center">
                    <div className="font-semibold text-gray-900 text-lg">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 