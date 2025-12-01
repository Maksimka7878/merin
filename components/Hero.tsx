import React from 'react';
import { MapPin, ArrowDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  // y1 was used for the student block, removed from usage below.
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  // Line configuration for the background
  const lines = [
    { d: "M-100,900 C200,800 400,200 800,0 L1440,0 L1440,900 Z", width: 120, duration: 20, delay: 0 },
    { d: "M-200,600 C100,600 600,800 900,1000", width: 80, duration: 15, delay: 2 },
    { d: "M800,-100 C900,300 1200,600 1600,700", width: 100, duration: 18, delay: 1 },
    // Extra abstract lines for more movement
    { d: "M-50,200 Q400,500 900,-50", width: 2, duration: 10, delay: 0, opacity: 0.3 },
    { d: "M1500,800 Q1000,400 500,1000", width: 3, duration: 12, delay: 4, opacity: 0.3 },
    { d: "M200,0 Q600,400 200,900", width: 1, duration: 25, delay: 1, opacity: 0.2 },
    { d: "M1200,0 Q900,600 1400,900", width: 4, duration: 22, delay: 3, opacity: 0.4 },
  ];

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#E2E2E2]">
      
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <svg viewBox="0 0 1440 900" className="w-full h-full preserve-3d" preserveAspectRatio="xMidYMid slice">
           {lines.map((line, i) => (
             <motion.path 
               key={i}
               d={line.d} 
               fill="none" 
               stroke="white" 
               strokeWidth={line.width}
               className="opacity-100"
               initial={{ pathLength: 0, opacity: 0 }}
               animate={{ 
                 pathLength: [0, 1, 1], 
                 opacity: [0, 1, line.opacity || 1],
                 pathOffset: [0, 0, 1] 
               }}
               transition={{ 
                 duration: line.duration, 
                 repeat: Infinity, 
                 ease: "easeInOut",
                 repeatType: "reverse",
                 delay: line.delay
               }}
             />
           ))}
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Logo-like branding (Stacked) */}
          <motion.div 
            className="mb-8 md:mb-12 flex flex-col items-center leading-[0.85]"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
             <span className="font-display font-black text-2xl md:text-3xl tracking-tighter text-meren-dark uppercase">
               Meren
             </span>
             <span className="font-display font-black text-2xl md:text-3xl tracking-tighter text-meren-dark uppercase -mt-0.5 md:-mt-1">
               Coffee
             </span>
          </motion.div>

          <motion.div style={{ y: y2 }} className="relative z-20">
            <h1 className="font-display font-black text-6xl md:text-8xl lg:text-9xl text-meren-dark leading-[0.9] tracking-tighter uppercase mb-6 flex flex-col items-center">
              <motion.span 
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                КОФЕ
              </motion.span>
              <motion.span 
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative md:-mt-2"
              >
                РЯДОМ
                {/* Animated underline */}
                <motion.svg 
                  className="absolute -bottom-4 left-0 w-full h-4 text-meren-yellow" 
                  viewBox="0 0 200 9" 
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 1 }}
                >
                  <path d="M2.00025 7.00005C39.637 3.51862 121.282 -1.45564 198.001 3.00005" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                </motion.svg>
              </motion.span>
            </h1>
          </motion.div>

          <motion.div 
            // Removed parallax y1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col items-center gap-2 mt-8 md:mt-12"
          >
            <p className="text-xl md:text-3xl font-medium text-meren-dark/80 uppercase">
              для студентов
            </p>
            <motion.div 
              className="inline-block bg-meren-yellow px-6 py-2 transform"
              whileHover={{ rotate: [-2, 2, -2], scale: 1.1 }}
              animate={{ rotate: -2 }}
            >
               <p className="text-2xl md:text-4xl font-black text-meren-dark">
                 СКИДКА 20%
               </p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 mt-16"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#menu"
              className="px-8 py-4 bg-meren-dark text-white font-bold rounded-full shadow-xl flex items-center justify-center gap-2 min-w-[200px]"
            >
              Смотреть меню
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(26, 26, 26, 0.1)' }}
              whileTap={{ scale: 0.95 }}
              href="#contacts"
              className="px-8 py-4 bg-transparent border-2 border-meren-dark text-meren-dark font-bold rounded-full transition-all duration-300 flex items-center justify-center gap-2 min-w-[200px]"
            >
              <MapPin className="w-5 h-5" />
              Тележная 32
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-meren-dark/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;