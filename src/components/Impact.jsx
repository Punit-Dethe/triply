import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import impactBg from '../assets/more.avif';

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
      className="relative w-full text-white px-4 sm:px-6 lg:px-8 h-[100vh] min-h-[800px] overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${impactBg})`,
          y: y,
        }}
      />
      {/* New gradient overlay above the image */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/70 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-orange-400/10 rounded-full blur-3xl filter z-1" />

      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/70 to-transparent z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/70 to-transparent z-20" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
        {/* Left side: Content */}
        <div className="space-y-12">
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.6)' }}>
            Better Cities. Better Living.
          </h1>
          
          <div className="space-y-6">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center space-x-6 p-4 rounded-full bg-black/20 backdrop-blur-md border border-white/10 shadow-lg" style={{ minWidth: '450px' }}>
                <div className="w-1/3">
                  <p className="text-sm font-semibold tracking-wider text-gray-300">{stat.label}</p>
                </div>
                <div className="flex-1">
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="text-sm text-gray-400">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-400 pt-8">
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
 