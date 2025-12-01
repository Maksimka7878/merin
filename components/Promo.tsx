import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Star } from 'lucide-react';

const TiltCard = ({ children, className }: { children?: React.ReactNode, className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={`perspective-1000 ${className}`}
    >
      <div className="h-full w-full transform-style-3d">
         {children}
      </div>
    </motion.div>
  );
};

const Promo: React.FC = () => {
  return (
    <section id="promo" className="py-24 bg-meren-dark text-white relative overflow-hidden">
      
      {/* Context-Aware Animation: Ambient Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-meren-yellow rounded-full blur-[100px] opacity-10"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.1, 0.05],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[120px] opacity-5"
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <h2 className="font-display font-black text-4xl md:text-6xl text-white mb-16 uppercase text-center md:text-left">
            Акции
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1. Valentine's Day Promo */}
            <TiltCard className="h-[500px]">
                <div 
                    className="bg-[#434343] rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden h-full group border border-white/5 shadow-xl hover:border-meren-yellow/30 transition-colors"
                >
                    <div className="z-10 relative pointer-events-none">
                        <p className="font-display text-meren-yellow text-sm mb-2 uppercase tracking-widest font-bold">
                            14 февраля
                        </p>
                        <div className="leading-[0.85] mb-6">
                            <span className="font-display font-black text-3xl uppercase text-meren-yellow block">Meren</span>
                            <span className="font-display font-black text-3xl uppercase text-white block">Coffee</span>
                        </div>
                        <p className="text-sm text-gray-300 mb-4 leading-relaxed relative z-20 max-w-[80%]">
                            Приходите вдвоём — получайте второй латте эликсир в подарок!
                        </p>
                    </div>

                    {/* Heart Graphic */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none mt-10">
                        <motion.svg 
                            viewBox="0 0 24 24" 
                            className="w-72 h-72 text-meren-yellow/10 fill-none stroke-meren-yellow stroke-[0.5]"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </motion.svg>
                        
                        {/* Floating Heart Line */}
                        <svg className="absolute w-full h-full text-meren-yellow top-10 left-0 opacity-80" viewBox="0 0 200 100">
                            <motion.path 
                                d="M0,50 Q20,50 40,50 L50,20 L60,80 L70,30 L80,60 L200,60" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2"
                                strokeDasharray="1 0"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                            />
                        </svg>
                    </div>

                    <div className="z-10 mt-auto relative bg-black/20 backdrop-blur-sm p-4 rounded-2xl border border-white/5 pointer-events-none">
                        <p className="font-display font-bold uppercase text-xl leading-none">
                            Любовь — <br/>
                            <span className="text-meren-yellow">это делиться</span>
                        </p>
                    </div>
                </div>
            </TiltCard>

            {/* 2. Student Promo (To Go) */}
            <TiltCard className="h-[500px]">
                <div 
                    className="bg-black rounded-3xl p-8 relative overflow-hidden h-full border border-white/10 shadow-xl group"
                >
                    {/* Improved Winding Road Background */}
                    <div className="absolute inset-0 opacity-40 top-10 pointer-events-none">
                        <svg viewBox="0 0 200 400" preserveAspectRatio="none" className="w-full h-full">
                            {/* Asphalt */}
                            <path 
                                d="M-50,50 C100,50 150,150 50,200 C-50,250 -50,350 50,400" 
                                fill="none" 
                                stroke="#333" 
                                strokeWidth="60" 
                            />
                            {/* Center Line */}
                            <path 
                                d="M-50,50 C100,50 150,150 50,200 C-50,250 -50,350 50,400" 
                                fill="none" 
                                stroke="#FFD200" 
                                strokeWidth="2" 
                                strokeDasharray="10 10"
                                className="opacity-50"
                            />
                        </svg>
                    </div>
                    
                    <div className="relative z-10 h-full flex flex-col justify-end pb-4 pointer-events-none">
                        <h3 className="font-display font-black text-5xl lg:text-6xl uppercase leading-[0.8] mb-4 tracking-tighter">
                            Кофе<br/><span className="text-outline-white">с собой</span>
                        </h3>
                        <div className="flex items-center gap-4">
                            <div className="bg-meren-yellow text-meren-dark font-black text-3xl px-4 py-2 rounded-lg transform -rotate-2">
                                -20%
                            </div>
                            <p className="text-gray-400 font-display font-bold uppercase tracking-wider text-sm">
                                Студентам
                            </p>
                        </div>
                    </div>
                    
                    {/* Floating Cups traveling down */}
                    <motion.div 
                        animate={{ 
                            offsetDistance: "100%",
                            scale: [0.5, 1, 0.5],
                            opacity: [0, 1, 0]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        style={{ offsetPath: `path("M-20,30 C100,50 150,150 50,200 C-50,250 -50,350 50,400")` }}
                        className="absolute w-12 h-16 bg-white rounded shadow-lg flex items-center justify-center top-0 left-0 z-0"
                    >
                        <span className="text-[8px] font-black text-black">MEREN</span>
                    </motion.div>
                </div>
            </TiltCard>

            {/* 3. Spring Mood */}
            <TiltCard className="h-[500px]">
                <div 
                    className="bg-white rounded-3xl p-8 relative overflow-hidden h-full flex flex-col items-center text-center shadow-xl"
                >
                    <div className="w-full z-10 pointer-events-none">
                        <h3 className="font-display font-black text-3xl uppercase text-meren-dark leading-none mb-1 tracking-tight">
                            Весеннее
                        </h3>
                        <h3 className="font-display font-black text-4xl uppercase text-meren-yellow leading-none tracking-tight">
                            Настроение
                        </h3>
                    </div>

                    {/* Cup & Flowers */}
                    <div className="flex-grow relative flex items-center justify-center w-full">
                        <motion.div 
                            className="w-36 h-48 bg-meren-yellow relative z-10 shadow-2xl rounded-sm flex items-center justify-center overflow-hidden"
                            whileHover={{ scale: 1.05, rotate: 2 }}
                        >
                            <div className="text-center transform -rotate-2">
                                <span className="font-display font-black text-meren-dark text-sm uppercase block">Meren</span>
                                <span className="font-display font-black text-meren-dark text-sm uppercase block">Coffee</span>
                            </div>
                            {/* Reflection */}
                            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/40 to-transparent pointer-events-none"></div>
                        </motion.div>
                        
                        {/* Flowers (Blooming) */}
                        <motion.div 
                            animate={{ scale: [0.8, 1.1, 0.8], rotate: 360 }} 
                            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} 
                            className="absolute top-10 right-0 w-24 h-24 pointer-events-none"
                        >
                            <svg viewBox="0 0 100 100" fill="#FCA5A5" className="opacity-80 drop-shadow-lg">
                                <path d="M50 50 Q70 20 90 50 Q70 80 50 50" />
                                <path d="M50 50 Q80 70 50 90 Q20 70 50 50" />
                                <path d="M50 50 Q30 80 10 50 Q30 20 50 50" />
                                <path d="M50 50 Q20 30 50 10 Q80 30 50 50" />
                                <circle cx="50" cy="50" r="10" fill="#FCD34D" />
                            </svg>
                        </motion.div>
                    </div>

                    <div className="z-10 pb-2 pointer-events-none">
                        <p className="font-display font-bold text-meren-dark uppercase bg-meren-yellow px-6 py-2 rounded-full text-sm shadow-md">
                            В каждой чашке!
                        </p>
                    </div>
                </div>
            </TiltCard>

            {/* 4. Award Badge */}
            <TiltCard className="h-[500px]">
                <div 
                    className="bg-[#434343] rounded-3xl p-8 h-full flex flex-col items-center justify-center relative border border-white/5 shadow-xl"
                >
                    <div className="text-center mb-8 pointer-events-none">
                        <span className="font-display font-black text-2xl uppercase text-meren-yellow block">Meren</span>
                        <span className="font-display font-black text-2xl uppercase text-white block">Coffee</span>
                    </div>

                    {/* Badge Shape */}
                    <motion.div 
                        className="relative w-44 h-60 bg-white rounded-b-full rounded-t-2xl shadow-2xl flex flex-col items-center pt-8 pb-4 px-4 text-center z-10"
                    >
                        {/* Red Icon circle */}
                        <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-3 shadow-inner">
                            <span className="font-display font-black text-white text-3xl">Я</span>
                        </div>
                        <p className="font-bold text-meren-dark text-base leading-tight mb-4">
                            Хорошее<br/>место
                        </p>
                        <div className="mt-auto pb-6">
                            <p className="font-black text-meren-dark text-3xl mb-1">5.0</p>
                            <div className="flex justify-center gap-0.5 text-meren-yellow">
                                {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" stroke="none" />)}
                            </div>
                        </div>
                        {/* Badge Tail simulation */}
                        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 drop-shadow-md">
                            <div className="w-0 h-0 border-l-[18px] border-l-transparent border-r-[18px] border-r-transparent border-t-[18px] border-t-white"></div>
                        </div>
                    </motion.div>

                    <div className="mt-8 text-center pointer-events-none">
                        <p className="font-display font-bold text-meren-yellow text-xl uppercase leading-tight">
                            Мы получили<br/>награду
                        </p>
                    </div>
                </div>
            </TiltCard>

        </div>
      </div>
    </section>
  );
};

export default Promo;