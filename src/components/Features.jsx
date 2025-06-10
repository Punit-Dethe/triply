import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const features = [
  {
    title: 'Safe Rides',
    description: 'Prioritizing the safety of female employees is paramount for all corporations. We ensure secure transportation with trained drivers and real-time tracking.'
  },
  {
    title: 'On Time Pickup',
    description: 'Our dedicated on-time pickup service ensures that you arrive at the office promptly, helping maintain productivity and work schedules.'
  },
  {
    title: 'Hygienic Cabs',
    description: 'We prioritize cleanliness in our cabs, ensuring they are sanitized after each ride for your health and peace of mind.'
  },
  {
    title: 'Cost Efficient',
    description: 'We strategize rides to minimize company expenses, employing a point-to-point billing system that optimizes transportation costs.'
  },
  {
    title: 'Preventive Maintenance',
    description: 'Our fleet preventive maintenance policy constrains us to ensure that vehicles are checked at proper intervals for safety and reliability.'
  },
  {
    title: '24/7 Customer Support',
    description: 'We provide exceptional customer support through responsive inquiries, attentive in-ride experiences, and immediate assistance whenever needed.'
  },
];

const Features = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  });

  // Fine-tune the animation range to delay vertical scrolling just a bit more
  const x = useTransform(scrollYProgress, [0.03, 0.97], ['0%', '-100%']);

  return (
    <section ref={targetRef} className="relative h-[350vh] bg-black text-white">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Text Content */}
        <div className="w-full max-w-6xl mx-auto px-8 absolute top-24 left-1/2 -translate-x-1/2 z-10">
            <div className="flex flex-col md:flex-row justify-between items-start">
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight max-w-lg">
                    Your corporate ride partner.
                </h2>
                <p className="text-gray-400 mt-4 md:mt-2 max-w-xs text-lg">
                    Empowering productivity & elevating commutes for workplace. Our vision is to provide employees with a safe, reliable, comfortable, and affordable commuting experience.
                </p>
            </div>
        </div>
        
        {/* Horizontal Scroll Section */}
        <motion.div 
          style={{ x }} 
          className="absolute top-[40%] flex gap-8 pl-32 md:pl-48 lg:pl-64"
        >
            {features.map((feature, index) => (
              <div key={index} className="relative">
                <div 
                  className="relative w-[80vw] md:w-[70vw] max-w-[900px] h-[500px] rounded-2xl flex flex-col justify-end p-8 bg-white border-8 border-neutral-800 shadow-xl overflow-hidden"
                  style={{
                    boxShadow: '0 0 15px rgba(146, 51, 234, 0.31), 0 0 30px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  {/* Add dual gradients - purple from bottom-right and orange from top-left */}
                  <div className="absolute inset-0" style={{
                    background: 'linear-gradient(to top left, rgba(146, 51, 234, 0.25), transparent 70%), linear-gradient(to bottom right, rgba(234, 88, 12, 0.15), transparent 70%)',
                    borderRadius: '12px'
                  }}></div>
                  
                  {/* Number indicator in top right */}
                  <div className="absolute top-8 right-8 w-20 h-20 flex items-center justify-center">
                    <span className="text-5xl font-bold text-neutral-800 opacity-40">0{index + 1}</span>
                  </div>
                  
                  {/* Content aligned to bottom left */}
                  <div className="relative z-10 max-w-md text-left mb-4">
                    <h3 className="text-4xl font-bold text-black tracking-tight mb-4">{feature.title}</h3>
                    <p className="text-neutral-700 text-lg">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 