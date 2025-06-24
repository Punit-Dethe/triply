import React, { useRef, useState, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const features = [
  {
    title: 'Safe Rides',
    description: 'Prioritizing the safety of female employees is paramount for all corporations. We ensure secure transportation with trained drivers and real-time tracking.',
    imageUrl: 'https://images.pexels.com/photos/15774577/pexels-photo-15774577.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=2'
  },
  {
    title: 'On Time Pickup',
    description: 'Our dedicated on-time pickup service ensures that you arrive at the office promptly, helping maintain productivity and work schedules.',
    imageUrl: 'https://images.pexels.com/photos/6209367/pexels-photo-6209367.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=2'
  },
  {
    title: 'Hygienic Cabs',
    description: 'We prioritize cleanliness in our cabs, ensuring they are sanitized after each ride for your health and peace of mind.',
    imageUrl: 'https://images.pexels.com/photos/4473360/pexels-photo-4473360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=2'
  },
  {
    title: 'Cost Efficient',
    description: 'We strategize rides to minimize company expenses, employing a point-to-point billing system that optimizes transportation costs.',
    imageUrl: 'https://images.pexels.com/photos/1098982/pexels-photo-1098982.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=2'
  },
  {
    title: 'Preventive Maintenance',
    description: 'Our fleet preventive maintenance policy ensures that vehicles are checked at proper intervals for safety and reliability.',
    imageUrl: 'https://images.pexels.com/photos/5779827/pexels-photo-5779827.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=2'
  },
  {
    title: '24/7 Customer Support',
    description: 'We provide exceptional customer support through responsive inquiries, attentive in-ride experiences, and immediate assistance whenever needed.',
    imageUrl: 'https://images.pexels.com/photos/6407443/pexels-photo-6407443.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=2'
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
        const extraGap = 5; // px, adjust as needed
        const finalOffset = scrollWidth - clientWidth + extraGap;
        setScrollEndOffset(finalOffset);
      }

      if (textContainer) {
        const computedStyle = window.getComputedStyle(textContainer);
        setDynamicPaddingLeft(parseFloat(computedStyle.paddingLeft));
      }
    };

    updateLayout();
    window.addEventListener('resize', updateLayout);

    // --- Fix: Trigger updateLayout after a short delay (for late layout changes) ---
    const timeoutId = setTimeout(updateLayout, 200);

    // --- Fix: Listen for image load events inside the scroll area ---
    const motionDiv = motionDivRef.current;
    let images = [];
    if (motionDiv) {
      images = Array.from(motionDiv.querySelectorAll('img'));
      images.forEach(img => img.addEventListener('load', updateLayout));
    }

    return () => {
      window.removeEventListener('resize', updateLayout);
      clearTimeout(timeoutId);
      if (images.length > 0) {
        images.forEach(img => img.removeEventListener('load', updateLayout));
      }
    };
  }, []);

  // Add dead zone at start (first 15% of scroll) then smooth scroll until 75%
  const x = useTransform(
    scrollYProgress,
    [0, 0.05, 0.75],  // Dead zone for first 15%, then scroll until 75%
    [0, 0, -scrollEndOffset]  // No movement during dead zone
  );

  return (
    <section id="features" ref={targetRef} className="relative h-[300vh] bg-black text-white">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
        {/* Added extra space at top - only visible on mobile */}
        <div className="h-[12vh] sm:h-0"></div>
        
        {/* Desktop-only top spacing - REDUCED */}
        <div className="hidden sm:block sm:h-[7vh] md:h-[9vh] lg:h-[12vh]"></div>
        
        {/* Text Content */}
        <div ref={textContainerRef} className="w-full max-w-6xl mx-auto px-8 md:px-12 z-10 mb-1 sm:mb-4 md:mb-6">
            <div className="flex flex-col md:flex-row justify-between items-start">
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-tight max-w-lg text-orange-50">
                    Your corporate ride partner.
                </h2>
                <p className="text-orange-100/90 mt-2 md:mt-2 max-w-xs text-base md:text-lg">
                    Empowering productivity & elevating commutes for workplace. Our vision is to provide employees with a safe, reliable, comfortable, and affordable commuting experience.
                </p>
            </div>
        </div>
        
        {/* Horizontal Scroll Section Wrapper */}
        <div ref={viewportRef} className="w-full overflow-x-hidden flex-1">
          <motion.div 
            ref={motionDivRef}
            style={{ x, paddingLeft: dynamicPaddingLeft, paddingRight: dynamicPaddingLeft }} 
            className="flex gap-4 sm:gap-8 py-2 sm:py-10 md:py-14 w-max h-full"
          >
              {features.map((feature, index) => (
                <div key={index} className="relative shrink-0 h-full flex items-center">
                  <div 
                    className="relative w-[90vw] md:w-[60vw] lg:w-[45vw] max-w-[800px] h-[75%] sm:h-auto sm:aspect-[4/2.7] rounded-2xl border-8 border-neutral-800 shadow-xl overflow-hidden"
                    style={{
                      boxShadow: '0 0 15px rgba(146, 51, 234, 0.31), 0 0 30px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    {/* Full-bleed background image */}
                    {feature.imageUrl && (
                      <img 
                        src={feature.imageUrl}
                        alt={feature.title} 
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                      />
                    )}

                    {/* Gradient overlay for text legibility */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_200%_150%_at_bottom_left,_rgba(0,0,0,0.8)_0%,_rgba(0,0,0,0.2)_70%)]"></div>

                    {/* Content Container */}
                    <div className="relative z-10 h-full flex flex-col justify-end p-5 md:p-8">
                      {/* Number indicator in top right */}
                      <div className="absolute top-2 right-2 sm:top-4 md:top-8 sm:right-4 md:right-8 w-12 h-12 sm:w-16 md:w-20 sm:h-16 md:h-20 flex items-center justify-center">
                        <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white opacity-40">0{index + 1}</span>
                      </div>
                      
                      {/* Text content at the bottom */}
                      <div className="max-w-md text-left">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-50 tracking-tight mb-1 sm:mb-2 md:mb-4">{feature.title}</h3>
                        <p className="text-sm sm:text-base md:text-lg text-orange-100/90">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </motion.div>
        </div>
        
        {/* Added space at bottom - only visible on mobile */}
        <div className="h-[8vh] sm:h-0"></div>
      </div>
    </section>
  );
};

export default Features; 