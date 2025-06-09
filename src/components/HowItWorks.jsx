import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView, useMotionValue, useTransform } from 'framer-motion';
import { Route, CreditCard, Ticket, Repeat } from 'lucide-react';
import { BackgroundGradient } from './ui/BackgroundGradient';

// Videos
import placeholderVideo from '../assets/videos/Video.mp4';

const features = [
  {
    title: 'Select your route',
    description: 'select your route and book your ride',
    icon: Route,
    video: placeholderVideo,
  },
  {
    title: 'select your pricing plan',
    description: 'select your pricing plan and book your ride',
    icon: CreditCard,
    video: placeholderVideo,
  },
  {
    title: 'access your ride',
    description: 'access your ride and enjoy your journey on time',
    icon: Ticket,
    video: placeholderVideo,
  },
  {
    title: 'renew after selected time',
    description: 'renew your ride after selected time',
    icon: Repeat,
    video: placeholderVideo,
  },
];

export const HowItWorks = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const videoRefs = useRef([]);

  const motionProgress = useMotionValue(0);
  const backgroundColor = useTransform(
    motionProgress,
    [0, 100],
    ['#ddd6fe', '#a78bfa']
  );
  
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

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setActiveIndex(i => (i + 1) % features.length);
          return 0;
        }
        return prev + 1;
      });
    }, 50); // This duration should ideally match video length / 100

    return () => clearInterval(interval);
  }, [activeIndex]);

  useEffect(() => {
    if (videoRefs.current[activeIndex]) {
      const videoElement = videoRefs.current[activeIndex];
      const updateProgress = () => {
        const percent = (videoElement.currentTime / videoElement.duration) * 100;
        setProgress(percent);
        motionProgress.set(percent);
      };
      videoElement.addEventListener('timeupdate', updateProgress);
      return () => {
        videoElement.removeEventListener('timeupdate', updateProgress);
      };
    }
  }, [activeIndex, motionProgress]);

  const handleFeatureClick = (index) => {
    setActiveIndex(index);
    setProgress(0);
    motionProgress.set(0);
  };

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="py-20 sm:py-32 bg-[#f8f9fa]"
    >
      <div className="container mx-auto px-4">
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
                    <div className="w-full h-2 bg-transparent rounded-full">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor }}
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0 }}
                      />
                    </div>
                  )}
                </motion.button>
              );
            })}
          </motion.div>

          <motion.div variants={itemVariants} className="lg:w-6/12 flex justify-center items-start">
            <BackgroundGradient containerClassName="rounded-[3.2rem]">
              <div className="relative w-[300px] h-[610px] bg-white rounded-[3rem] border-8 border-gray-900 overflow-hidden shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.video
                    key={activeIndex}
                    src={features[activeIndex].video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="w-full h-full object-cover"
                    ref={(el) => (videoRefs.current[activeIndex] = el)}
                  />
                </AnimatePresence>
              </div>
            </BackgroundGradient>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HowItWorks; 