import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import impactBg from '../assets/just car.png';

const stats = [
  {
    label: 'LESS CONGESTION',
    value: '14L car trips',
    description: 'avoided in 2023',
  },
  {
    label: 'GREENER',
    value: '53L kg CO2',
    description: 'reduced(=14.2L trees)',
  },
  {
    label: 'LESS STRESS',
    value: '63%',
    description: 'reduced stress, compared to driving',
  },
  {
    label: 'MORE TIME',
    value: '41L hours',
    description: 'reclaimed by Cityflo commuters',
  },
];

const Impact = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div
      ref={targetRef}
      className="relative w-full text-black px-4 sm:px-6 lg:px-8 h-[100vh] min-h-[800px] overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center object-cover"
        style={{
          backgroundImage: `url(${impactBg})`,
          y: y,
        }}
      />
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-orange-400/10 rounded-full blur-3xl filter z-1" />

      <div className="absolute top-0 left-0 right-0 h-32 z-5" 
        style={{ 
          background: 'linear-gradient(to bottom, white 0%, transparent 100%)' 
        }} 
      />
      <div className="absolute bottom-0 left-0 right-0 h-32 z-5" 
        style={{ 
          background: 'linear-gradient(to top, white 0%, transparent 100%)' 
        }} 
      />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
        {/* Left side: Content */}
        <div className="space-y-12 w-full max-w-full overflow-hidden">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white sm:text-6xl" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.6)' }}>
            Better Cities. Better Living.
          </h1>
          
          <div className="space-y-6 w-full">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 p-4 rounded-xl bg-white/85 backdrop-blur-md shadow-xl border border-white/50 w-full max-w-full" 
                style={{ 
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)'
                }}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-full sm:w-1/3">
                  <p className="text-sm font-semibold tracking-wider text-black">{stat.label}</p>
                </div>
                <div className="flex-1">
                  <p className="text-2xl sm:text-3xl font-bold text-gray-800">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-gray-600">{stat.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-xs text-white pt-8" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
            *all figures are for the year 2023
          </p>
        </div>

        {/* Right side: Empty for now, will be covered by the background image of buses */}
        <div>
            {/* This space will be implicitly filled by the background image */}
        </div>
      </div>
    </div>
  );
};

export default Impact;
 