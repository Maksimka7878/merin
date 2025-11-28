import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Promo: React.FC = () => {
  return (
    <section id="promo" className="py-20 bg-meren-dark text-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="font-display font-black text-4xl md:text-5xl text-white mb-12 uppercase">
            Акции
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1. Valentine's Day Promo */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#434343] rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden h-[450px] group border border-white/5"
            >
                <div className="z-10 relative">
                    <p className="font-display text-meren-yellow text-sm mb-1 uppercase tracking-wider">
                        14 февраля в
                    </p>
                    <div className="leading-[0.85] mb-4">
                         <span className="font-display font-black text-2xl uppercase text-meren-yellow block">Meren</span>
                         <span className="font-display font-black text-2xl uppercase text-white block">Coffee</span>
                    </div>
                    <p className="text-sm text-gray-300 mb-4 leading-tight relative z-20">
                        Приходите вдвоём — получайте второй латте эликсир в подарок!
                    </p>
                </div>

                {/* Heart Graphic */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none mt-10 opacity-90">
                     <svg viewBox="0 0 200 200" className="w-64 h-64 text-meren-yellow fill-none stroke-current stroke-2">
                        <path d="M10,100 C10,50 50,20 100,50 C150,20 190,50 190,100 C190,150 100,190 100,190 C100,190 10,150 10,100 Z" />
                     </svg>
                     {/* Cup placeholder */}
                     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-28 bg-meren-yellow rounded-sm rotate-6 shadow-xl flex items-center justify-center">
                        <span className="font-display font-black text-meren-dark text-[8px] uppercase text-center leading-none">Meren<br/>Coffee</span>
                     </div>
                </div>

                 <div className="z-10 mt-auto relative">
                    <p className="font-display font-bold uppercase text-xl leading-none">
                        Любовь — <br/>
                        <span className="text-meren-yellow">это делиться</span>
                    </p>
                 </div>
            </motion.div>

            {/* 2. Student Promo (To Go) */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-black rounded-3xl p-6 relative overflow-hidden h-[450px] border border-white/10"
            >
                {/* Winding Road Background */}
                 <div className="absolute inset-0 opacity-20">
                    <svg viewBox="0 0 100 200" preserveAspectRatio="none" className="w-full h-full stroke-gray-500 fill-none stroke-[20px]">
                        <path d="M-20,20 C50,20 50,60 20,60 C-10,60 -10,100 20,100 C50,100 50,140 20,140 C-10,140 -10,180 20,180" />
                    </svg>
                 </div>
                 
                 <div className="relative z-10 h-full flex flex-col justify-end pb-8">
                     <h3 className="font-display font-black text-5xl uppercase leading-[0.8] mb-2">
                         Кофе<br/>с собой
                     </h3>
                     <p className="text-2xl font-medium text-white mb-1">
                         - 20%
                     </p>
                     <p className="text-gray-400 font-display uppercase tracking-wider">
                         Студентам
                     </p>
                 </div>
                 
                 {/* Floating Cups */}
                 <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-10 right-4 w-12 h-16 bg-meren-yellow rounded shadow-lg transform rotate-12 flex items-center justify-center"
                 >
                    <span className="bg-white w-full h-1 absolute top-2 opacity-50"></span>
                 </motion.div>
                 <motion.div 
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                    className="absolute top-32 left-4 w-10 h-14 bg-meren-yellow rounded shadow-lg transform -rotate-12 flex items-center justify-center"
                 >
                     <span className="bg-white w-full h-1 absolute top-2 opacity-50"></span>
                 </motion.div>
            </motion.div>

            {/* 3. Spring Mood */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-3xl p-6 relative overflow-hidden h-[450px] flex flex-col items-center text-center"
            >
                 <div className="w-full pt-8 pb-4 z-10">
                     <h3 className="font-display font-black text-3xl uppercase text-meren-dark leading-none mb-1">
                         Весеннее
                     </h3>
                     <h3 className="font-display font-black text-3xl uppercase text-meren-dark leading-none">
                         Настроение
                     </h3>
                 </div>

                 {/* Cup & Flowers */}
                 <div className="flex-grow relative flex items-center justify-center w-full">
                     <div className="w-32 h-40 bg-meren-yellow relative z-10 shadow-xl rounded-sm flex items-center justify-center overflow-hidden">
                        <div className="text-center">
                            <span className="font-display font-black text-meren-dark text-xs uppercase block">Meren</span>
                            <span className="font-display font-black text-meren-dark text-xs uppercase block">Coffee</span>
                        </div>
                        {/* Latte art swirl */}
                        <div className="absolute top-0 w-full h-4 bg-white/30"></div>
                     </div>
                      {/* Flowers (Circles) */}
                     <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute -top-6 -right-6 w-16 h-16 border-[8px] border-pink-300 rounded-full opacity-60 border-dashed" />
                     <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute top-10 -left-8 w-20 h-20 border-[8px] border-orange-300 rounded-full opacity-60 border-dotted" />
                 </div>

                 <div className="z-10 pb-6">
                     <p className="font-display font-bold text-meren-dark uppercase bg-meren-yellow px-4 py-1 rounded-full text-sm">
                         В каждой чашке!
                     </p>
                 </div>
            </motion.div>

            {/* 4. Award Badge */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-[#434343] rounded-3xl p-6 h-[450px] flex flex-col items-center justify-center relative border border-white/5"
            >
                <div className="text-center mb-8">
                     <span className="font-display font-black text-xl uppercase text-meren-yellow block">Meren</span>
                     <span className="font-display font-black text-xl uppercase text-white block">Coffee</span>
                </div>

                {/* Badge Shape */}
                <div className="relative w-40 h-56 bg-white rounded-b-full rounded-t-2xl shadow-2xl flex flex-col items-center pt-8 pb-4 px-4 text-center">
                    {/* Red Icon circle */}
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-2 shadow-inner">
                        <span className="font-display font-black text-white text-3xl">Я</span>
                    </div>
                    <p className="font-bold text-meren-dark text-sm leading-tight mb-4">
                        Хорошее<br/>место
                    </p>
                    <div className="mt-auto pb-4">
                        <p className="font-black text-meren-dark text-xl">5.0</p>
                        <div className="flex justify-center gap-0.5 text-meren-yellow">
                            {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" stroke="none" />)}
                        </div>
                    </div>
                    {/* Badge Tail simulation */}
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                         <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[15px] border-t-white"></div>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <p className="font-display font-bold text-meren-yellow text-lg uppercase leading-tight">
                        Мы получили<br/>награду
                    </p>
                </div>
            </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Promo;