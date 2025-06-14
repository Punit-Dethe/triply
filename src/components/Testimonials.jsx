import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { TextAnimate } from './ui/TextAnimate';
import cityScape from '../assets/city.png';

const allTestimonials = [
  {
    quote: '"FlixLogix has redefined the benchmarks in Employee Transportation. They offer clear reporting, significant cost reductions, and an enhanced experience for employees."',
    company: 'Meddo',
    author: 'Swati Sinha',
    position: 'HR'
  },
  {
    quote: '"Their customer service is truly unparalleled. Their team is always ready to go the extra mile, ensuring every interaction is seamless and every concern addressed promptly."',
    company: 'COHO',
    author: 'Uday Lakkar',
    position: 'Founder and CEO'
  },
  {
    quote: '"The commitment to customer satisfaction and safety is commendable. Their proactive approach to addressing inquiries makes every ride a worry-free experience."',
    company: 'Ak Tours',
    author: 'Amit Kumar',
    position: 'Founder and CEO'
  }
];

const meddoLogo = ( <div className="font-bold text-xl tracking-wider text-black">Meddo</div> );
const cohoLogo = ( <div className="font-extrabold text-xl tracking-tighter text-black">COHO</div> );
const akToursLogo = ( <div className="font-serif text-xl tracking-widest text-black">AK TOURS</div> );

const logos = {
  Meddo: meddoLogo,
  COHO: cohoLogo,
  'Ak Tours': akToursLogo
};

export const Testimonials = () => {
  const [testimonials, setTestimonials] = useState(allTestimonials.slice(0, 3));
  const [previousTestimonials, setPreviousTestimonials] = useState([null, null, null]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const cardIndexToUpdate = useRef(0);
  const nextTestimonialIndex = useRef(0);
  const isFirstRun = useRef(true);
  const timeoutRef = useRef(null);

  const handleToggle = (cardIndex) => {
    // This allows swapping between the current and previous testimonial for a card
    const current = testimonials[cardIndex];
    const previous = previousTestimonials[cardIndex];
    
    if (!previous) return; // No history to toggle

    setTestimonials(currentT => {
      const newT = [...currentT];
      newT[cardIndex] = previous;
      return newT;
    });
    setPreviousTestimonials(currentP => {
      const newP = [...currentP];
      newP[cardIndex] = current;
      return newP;
    });
  };

  useEffect(() => {
    const runTimer = () => {
      const delay = isFirstRun.current ? 10000 : 5000;
      isFirstRun.current = false; // Set to false after the first run

      timeoutRef.current = setTimeout(() => {
        setTestimonials(currentTestimonials => {
          const newTestimonials = [...currentTestimonials];
          const oldTestimonial = currentTestimonials[cardIndexToUpdate.current];
          const newTestimonial = allTestimonials[nextTestimonialIndex.current];

          // Store the old testimonial for manual navigation
          setPreviousTestimonials(prev => {
              const newPrev = [...prev];
              newPrev[cardIndexToUpdate.current] = oldTestimonial;
              return newPrev;
          });

          newTestimonials[cardIndexToUpdate.current] = newTestimonial;
          return newTestimonials;
        });
        
        cardIndexToUpdate.current = (cardIndexToUpdate.current + 1) % 3;
        nextTestimonialIndex.current = (nextTestimonialIndex.current + 1) % allTestimonials.length;
        
        runTimer(); // Schedule the next update
      }, delay);
    };

    runTimer();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
    <section className="py-20 sm:py-32 bg-transparent relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-full h-[400px] z-0"
        style={{
          backgroundImage: `url(${cityScape})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat',
          opacity: 0.3,
        }}
      />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="flex flex-col lg:flex-row justify-between items-center gap-12"
        >
          {/* Left side - Heading */}
          <motion.div 
            variants={itemVariants}
            className="lg:w-5/12 text-left"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-black tracking-tighter leading-tight">
              Testimonials
            </h2>
            <p className="mt-6 text-lg text-gray-800 max-w-md">
              Hear what our clients have to say about our corporate transportation services. We pride ourselves on delivering exceptional experiences that exceed expectations.
            </p>
            <button className="mt-8 flex items-center gap-2 text-black font-semibold">
              <span>Contact Us</span>
              <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </button>
          </motion.div>

          {/* Right side - Testimonial Cards */}
          <motion.div 
            className="lg:w-6/12 flex justify-center"
            variants={itemVariants}
          >
            <div className="space-y-6 w-full max-w-lg">
              {testimonials.map((testimonial, index) => {
                let alignmentClass = '';
                if (index === 0) alignmentClass = 'lg:ml-auto';
                if (index === 1) alignmentClass = 'lg:mr-auto';
                if (index === 2) alignmentClass = 'lg:ml-auto';
                
                const hasHistory = previousTestimonials[index] !== null;

                return (
                  <motion.div
                    key={index}
                    className={`relative max-w-sm ${alignmentClass}`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="absolute top-0 left-0 w-full h-full bg-[#46157f] rounded-lg transform translate-x-3 translate-y-3 border-2 border-black"></div>
                    <div className="relative bg-white p-6 border-2 border-black rounded-lg">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={testimonial.quote}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="min-h-[140px]"
                        >
                          <TextAnimate as="p" by="word" className="text-sm text-black mb-4 leading-snug">
                            {testimonial.quote}
                          </TextAnimate>
                          <div className="flex flex-col">
                          <TextAnimate by="word">
                            {logos[testimonial.company]}
                          </TextAnimate>
                            <p className="text-xs text-gray-600 mt-1">
                              {testimonial.author}, {testimonial.position}
                            </p>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                      <AnimatePresence>
                        {hoveredIndex === index && hasHistory && (
                          <motion.div 
                            className="absolute bottom-2 right-2 flex gap-1"
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <button onClick={() => handleToggle(index)} className="p-1 transition-opacity hover:opacity-70">
                              <ChevronLeft className="w-4 h-4 text-black" />
                            </button>
                            <button onClick={() => handleToggle(index)} className="p-1 transition-opacity hover:opacity-70">
                              <ChevronRight className="w-4 h-4 text-black" />
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 