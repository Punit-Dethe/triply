import React, { useRef, useState, useLayoutEffect } from 'react';
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
  const viewportRef = useRef(null);
  const motionDivRef = useRef(null);
  const textContainerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  });

  const [scrollEndOffset, setScrollEndOffset] = useState(0);
  const [dynamicPaddingLeft, setDynamicPaddingLeft] = useState(0);

  useLayoutEffect(() => {
    const updateLayout = () => {
      const viewport = viewportRef.current;
      const motionDiv = motionDivRef.current;
      const textContainer = textContainerRef.current;

      if (viewport && motionDiv) {
        // Calculate the width needed to show all cards
        const scrollWidth = motionDiv.scrollWidth;
        const clientWidth = viewport.clientWidth;
        const finalOffset = scrollWidth - clientWidth;
        setScrollEndOffset(finalOffset);
      }

      if (textContainer) {
        const computedStyle = window.getComputedStyle(textContainer);
        setDynamicPaddingLeft(parseFloat(computedStyle.paddingLeft));
      }
    };

    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  // Start horizontal scrolling very early, but make it last longer
  const x = useTransform(scrollYProgress, [0, 0.5], [0, -scrollEndOffset]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black text-white">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
        {/* Added extra space at top */}
        <div className="h-[12vh] md:h-[15vh]"></div>
        
        {/* Text Content */}
        <div ref={textContainerRef} className="w-full max-w-6xl mx-auto px-8 md:px-12 z-10 mb-3 md:mb-4">
            <div className="flex flex-col md:flex-row justify-between items-start">
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-tight max-w-lg">
                    Your corporate ride partner.
                </h2>
                <p className="text-gray-400 mt-2 md:mt-2 max-w-xs text-base md:text-lg">
                    Empowering productivity & elevating commutes for workplace. Our vision is to provide employees with a safe, reliable, comfortable, and affordable commuting experience.
                </p>
            </div>
        </div>
        
        {/* Horizontal Scroll Section Wrapper */}
        <div ref={viewportRef} className="w-full overflow-x-hidden flex-1">
          <motion.div 
            ref={motionDivRef}
            style={{ x, paddingLeft: dynamicPaddingLeft, paddingRight: dynamicPaddingLeft }} 
            className="flex gap-4 md:gap-8 py-4 md:py-8 w-max h-full"
          >
              {features.map((feature, index) => (
                <div key={index} className="relative shrink-0 h-full flex items-center">
                  <div 
                    className="relative w-[90vw] md:w-[60vw] lg:w-[45vw] max-w-[800px] h-[70%] rounded-2xl flex flex-col justify-end p-5 md:p-8 bg-white border-8 border-neutral-800 shadow-xl overflow-hidden"
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
                    <div className="absolute top-2 right-2 md:top-8 md:right-8 w-12 h-12 md:w-20 md:h-20 flex items-center justify-center">
                      <span className="text-3xl md:text-5xl font-bold text-neutral-800 opacity-40">0{index + 1}</span>
                    </div>
                    
                    {/* Content aligned to bottom left */}
                    <div className="relative z-10 max-w-md text-left mb-2 md:mb-4">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black tracking-tight mb-1 md:mb-4">{feature.title}</h3>
                      <p className="text-sm sm:text-base md:text-lg text-neutral-700">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
          </motion.div>
        </div>
        
        {/* Added space at bottom */}
        <div className="h-[8vh]"></div>
      </div>
    </section>
  );
};

export default Features; 