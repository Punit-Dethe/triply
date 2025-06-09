import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Route, CreditCard, Ticket, Repeat } from 'lucide-react';
import { BackgroundGradient } from './ui/BackgroundGradient';

// Videos
import video1 from '../assets/videos/Video.mp4';
import video2 from '../assets/videos/Video2.mp4';
import video3 from '../assets/videos/Video3.mp4';
import video4 from '../assets/videos/Video4.mp4';

const features = [
  {
    title: 'Select your route',
    description: 'select your route and book your ride',
    icon: Route,
    video: video1,
  },
  {
    title: 'select your pricing plan',
    description: 'select your pricing plan and book your ride',
    icon: CreditCard,
    video: video2,
  },
  {
    title: 'access your ride',
    description: 'access your ride and enjoy your journey on time',
    icon: Ticket,
    video: video3,
  },
  {
    title: 'renew after selected time',
    description: 'renew your ride after selected time',
    icon: Repeat,
    video: video4,
  },
];

export const HowItWorks = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef(Array(features.length).fill(null));
  const videoContainerRef = useRef(null);
  
  const motionProgress = useMotionValue(0);
  const smoothProgress = useSpring(motionProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const backgroundColor = useTransform(
    smoothProgress,
    [0, 100],
    ['#8b5cf6', '#8b5cf6']
  );
  const width = useTransform(smoothProgress, (v) => `${v}%`);
  
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

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

  // Handle video timeupdate events for the active video
  useEffect(() => {
    const currentVideo = videoRefs.current[activeIndex];
    if (!currentVideo) return;
    
    const updateProgress = () => {
      if (currentVideo.duration) {
        const percent = (currentVideo.currentTime / currentVideo.duration) * 100;
        motionProgress.set(percent);
      }
    };
    
    currentVideo.addEventListener('timeupdate', updateProgress);
    
    return () => {
      currentVideo.removeEventListener('timeupdate', updateProgress);
    };
  }, [activeIndex]);
  
  // Handle video ended events for auto-advancing
  useEffect(() => {
    const currentVideo = videoRefs.current[activeIndex];
    if (!currentVideo) return;
    
    const handleVideoEnd = () => {
      motionProgress.set(0);
      setActiveIndex(prev => (prev + 1) % features.length);
    };
    
    currentVideo.addEventListener('ended', handleVideoEnd);
    
    return () => {
      currentVideo.removeEventListener('ended', handleVideoEnd);
    };
  }, [activeIndex]);
  
  // Control video playback when active index changes
  useEffect(() => {
    // Stop all videos first
    videoRefs.current.forEach((video, i) => {
      if (video && i !== activeIndex) {
        video.pause();
        video.currentTime = 0;
      }
    });
    
    // Play the active video
    const currentVideo = videoRefs.current[activeIndex];
    if (currentVideo) {
      // Reset progress
      motionProgress.set(0);
      currentVideo.currentTime = 0;
      
      // Try to play with a slight delay to allow for UI updates
      setTimeout(() => {
        const playPromise = currentVideo.play();
        
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.error('Video play failed:', error);
            // Add more aggressive retry logic
            setTimeout(() => {
              currentVideo.play().catch(e => console.error('Retry failed:', e));
            }, 500);
          });
        }
      }, 100);
    }
  }, [activeIndex]);

  const handleFeatureClick = (index) => {
    if (activeIndex !== index) {
      setActiveIndex(index);
    }
  };

  return (
    <div className="my-8 sm:mx-8">
      <motion.section
        ref={sectionRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="relative py-20 sm:py-32 bg-transparent overflow-hidden rounded-3xl border-[3px] border-[#481878]"
        style={{ 
          boxShadow: '0 0 25px 5px rgba(0, 0, 0, 0.2)' 
        }}
      >
        <div 
          aria-hidden="true"
          className="absolute inset-0 z-0 bg-white/80 backdrop-blur-sm"
        />
        
        {/* Mobile-only Top Gradient */}
        <div
          aria-hidden="true"
          className="md:hidden absolute top-0 left-0 right-0 h-1/4 z-10"
          style={{
            background: 'linear-gradient(to bottom, rgba(249, 115, 22, 0.1) 0%, transparent 100%)'
          }}
        />
        {/* Mobile-only Bottom Gradient */}
        <div
          aria-hidden="true"
          className="md:hidden absolute bottom-0 left-0 right-0 h-1/4 z-10"
          style={{
            background: 'linear-gradient(to top, rgba(249, 115, 22, 0.1) 0%, transparent 100%)'
          }}
        />

        {/* Mobile-only LEFT side continuous orange glow */}
        <div 
          aria-hidden="true"
          className="md:hidden absolute top-0 left-0 bottom-0 w-1/3 z-10"
          style={{
            background: 'linear-gradient(to right, rgba(249, 115, 22, 0.15) 0%, transparent 100%)'
          }}
        />

        {/* Right side continuous orange glow */}
        <motion.div
          className="absolute top-0 right-0 bottom-0 w-1/3 z-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeIn" }}
        >
          <div 
            className="w-full h-full"
            style={{
              background: 'linear-gradient(to left, rgba(249, 116, 22, 0.08) 0%, transparent 100%)'
            }}
          />
        </motion.div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div variants={itemVariants} className="text-center md:text-left mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">How it works</h2>
            <p className="mt-4 text-lg text-[#481878]">
              It's simple to take a ride. Just search, select and it's done!
            </p>
          </motion.div>

          <div className="mt-20 flex flex-col-reverse lg:flex-row lg:justify-between lg:items-start">
            <motion.div variants={itemVariants} className="lg:w-5/12 flex flex-col gap-4 mt-12 lg:mt-0">
              {features.map((feature, index) => {
                const isActive = activeIndex === index;
                
                return (
                  <motion.button
                    key={feature.title}
                    onClick={() => handleFeatureClick(index)}
                    className="text-left rounded-2xl w-full overflow-hidden"
                    animate={{
                      backgroundColor: isActive ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0)',
                      boxShadow: isActive
                        ? `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 0px 30px 12px rgba(139, 92, 246, 0.3)`
                        : 'none',
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-4">
                        <feature.icon className="w-8 h-8 text-purple-600" />
                        <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                      </div>
                      <AnimatePresence>
                        {isActive && (
                          <motion.p
                            className="text-gray-600"
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: 'auto', marginTop: '0.5rem' }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                          >
                            {feature.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                    
                    {isActive && (
                      <div className="w-full h-2 bg-transparent rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor, width }}
                        />
                      </div>
                    )}
                  </motion.button>
                );
              })}
            </motion.div>

            <motion.div variants={itemVariants} className="lg:w-6/12 flex justify-center items-start">
              <BackgroundGradient containerClassName="rounded-[3.2rem]">
                <div 
                  className="relative w-[300px] h-[610px] bg-white rounded-[3rem] border-[6px] border-gray-900 overflow-hidden shadow-2xl"
                  ref={videoContainerRef}
                >
                  {features.map((feature, index) => (
                    <div 
                      key={index}
                      className="absolute inset-0"
                      style={{ 
                        opacity: activeIndex === index ? 1 : 0,
                        zIndex: activeIndex === index ? 10 : 0,
                        transition: 'opacity 0.5s ease-in-out'
                      }}
                    >
                      <video
                        ref={el => videoRefs.current[index] = el}
                        src={feature.video}
                        muted
                        playsInline
                        preload="auto"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </BackgroundGradient>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default HowItWorks; 