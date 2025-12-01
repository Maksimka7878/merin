import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Milk, Droplets } from 'lucide-react';
import { MENU_DATA, ADDONS } from '../constants';

const Menu: React.FC = () => {
  const [activeTab, setActiveTab] = useState(MENU_DATA[0].id);
  const activeCategory = MENU_DATA.find(cat => cat.id === activeTab);

  // Helper to find price for a specific volume
  const getPrice = (prices: { volume: string; price: number }[] | undefined, targetVol: string) => {
    if (!prices) return null;
    return prices.find(p => p.volume === targetVol)?.price || null;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.05 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  };

  const bgLines = [
    { d: "M200,0 Q150,100 200,200", delay: 0 },
    { d: "M100,0 Q180,100 200,150", delay: 0.5 },
    { d: "M0,50 Q100,150 200,50", delay: 1 }
  ];

  // Steam animation component
  const Steam: React.FC = () => (
    <motion.div 
      className="absolute -top-8 left-0 right-0 flex justify-center gap-1.5 opacity-0 group-hover/price:opacity-100 transition-opacity duration-500 pointer-events-none"
    >
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="w-0.5 h-4 bg-white/40 rounded-full blur-[2px]"
          animate={{ 
            y: [-2, -12],
            opacity: [0, 0.6, 0],
            scaleY: [0.5, 1.5, 0.5]
          }}
          transition={{ 
            duration: 1.5 + i * 0.2, 
            repeat: Infinity, 
            delay: i * 0.3,
            ease: "easeInOut"
          }}
        />
      ))}
    </motion.div>
  );

  return (
    <section id="menu" className="py-24 bg-meren-menu relative z-20 text-white min-h-[800px] overflow-hidden">
      
      {/* Background Texture (Animated) */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 200 200" className="w-full h-full preserve-3d" preserveAspectRatio="none">
             {bgLines.map((line, i) => (
               <motion.path 
                 key={i}
                 d={line.d} 
                 fill="none" 
                 stroke="white" 
                 strokeWidth="0.5" 
                 initial={{ pathLength: 0, opacity: 0 }}
                 whileInView={{ pathLength: 1, opacity: 1 }}
                 transition={{ duration: 2, delay: line.delay, ease: "easeInOut" }}
               />
             ))}
          </svg>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-6xl relative z-10">
        
        {/* Navigation / Tabs */}
        <div className="flex flex-col items-center mb-16 space-y-8">
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase text-white tracking-tight relative">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  Меню
                </motion.span>
            </h2>
            
            <div className="flex flex-wrap justify-center gap-2 bg-white/5 p-2 rounded-full backdrop-blur-sm border border-white/5 shadow-lg">
                {MENU_DATA.map((category) => (
                    <button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={`px-6 py-3 rounded-full text-sm md:text-base font-display font-bold uppercase tracking-wide transition-all duration-300 ${
                        activeTab === category.id
                        ? 'bg-meren-yellow text-meren-dark shadow-lg shadow-meren-yellow/20 scale-105'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                    >
                        {category.label}
                    </button>
                ))}
            </div>
        </div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Menu Items Grid */}
            <div className="lg:col-span-3">
                <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
                >
                    {activeCategory?.items.map((item) => {
                        const p02 = getPrice(item.prices, '0.2');
                        const p03 = getPrice(item.prices, '0.3');
                        const p04 = getPrice(item.prices, '0.4');
                        const singlePrice = item.price;

                        return (
                        <motion.div 
                            key={item.id} 
                            variants={itemVariants} 
                            className="group relative bg-[#4a4a4a] border border-white/5 rounded-3xl p-6 md:p-8 hover:bg-[#505050] transition-all duration-300 flex flex-col justify-between min-h-[180px] overflow-hidden"
                        >
                            {/* Hover Gradient Spotlight */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />

                            <div className="flex justify-between items-start mb-6 relative z-10">
                                <h3 className="font-display font-bold text-xl md:text-2xl uppercase tracking-wide text-white group-hover:text-meren-yellow transition-colors pr-8 leading-tight">
                                    {item.name}
                                </h3>
                                {(item.isHit || item.isNew) && (
                                    <div className="absolute top-0 right-0 flex gap-2">
                                        {item.isHit && (
                                            <span className="text-[10px] font-black uppercase bg-meren-yellow text-meren-dark px-2 py-1 rounded-md shadow-sm">
                                                Hit
                                            </span>
                                        )}
                                        {item.isNew && (
                                            <span className="text-[10px] font-black uppercase bg-green-400 text-meren-dark px-2 py-1 rounded-md shadow-sm">
                                                New
                                            </span>
                                        )}
                                    </div>
                                )}
                            </div>

                            <div className="flex items-end justify-between mt-auto relative z-10">
                                {item.prices ? (
                                    <div className="flex items-end gap-6 w-full">
                                        {/* 0.2 Volume - Small Cup */}
                                        {p02 && (
                                            <div className="group/price flex flex-col items-center gap-3 cursor-pointer relative">
                                                <Steam />
                                                <div className="relative h-9 w-9 flex items-center justify-center transition-transform duration-300 group-hover/price:scale-110">
                                                    {/* Custom Small Cup Icon */}
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full text-white/30 group-hover/price:text-meren-dark group-hover/price:fill-meren-yellow transition-all duration-300" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                        {/* Lid */}
                                                        <path d="M7 6 L8 3 H16 L17 6" />
                                                        <path d="M5 6 H19" />
                                                        {/* Cup Body */}
                                                        <path d="M6 6 L7.5 19 H16.5 L18 6" />
                                                    </svg>
                                                    <span className="absolute -bottom-5 text-[10px] font-bold text-white/40 group-hover/price:text-meren-yellow transition-colors">0.2</span>
                                                </div>
                                                <span className="font-bold text-lg text-white/80 group-hover/price:text-meren-yellow transition-colors mt-2">{p02}₽</span>
                                            </div>
                                        )}
                                        
                                        {/* 0.3 Volume - Medium Cup */}
                                        {p03 && (
                                            <div className="group/price flex flex-col items-center gap-3 cursor-pointer relative">
                                                <Steam />
                                                <div className="relative h-11 w-11 flex items-center justify-center transition-transform duration-300 group-hover/price:scale-110">
                                                    {/* Custom Medium Cup Icon with Sleeve */}
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full text-white/30 group-hover/price:text-meren-dark group-hover/price:fill-meren-yellow transition-all duration-300" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                        {/* Lid */}
                                                        <path d="M7 6 L8 3 H16 L17 6" />
                                                        <path d="M5 6 H19" />
                                                        {/* Cup Body */}
                                                        <path d="M6 6 L7.5 21 H16.5 L18 6" />
                                                        {/* Sleeve */}
                                                        <path d="M6.5 11 H17.5" opacity="0.5" stroke="currentColor" strokeWidth="1.5" className="group-hover/price:stroke-meren-dark" />
                                                    </svg>
                                                    <span className="absolute -bottom-5 text-[10px] font-bold text-white/40 group-hover/price:text-meren-yellow transition-colors">0.3</span>
                                                </div>
                                                <span className="font-bold text-xl text-white/80 group-hover/price:text-meren-yellow transition-colors mt-2">{p03}₽</span>
                                            </div>
                                        )}

                                        {/* 0.4 Volume - Large Cup */}
                                        {p04 && (
                                            <div className="group/price flex flex-col items-center gap-3 cursor-pointer relative">
                                                <Steam />
                                                <div className="relative h-14 w-14 flex items-center justify-center transition-transform duration-300 group-hover/price:scale-110 -mb-1">
                                                    {/* Custom Large Cup Icon with Large Sleeve */}
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full text-white/30 group-hover/price:text-meren-dark group-hover/price:fill-meren-yellow transition-all duration-300" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                        {/* Lid */}
                                                        <path d="M7 5 L8 2 H16 L17 5" />
                                                        <path d="M5 5 H19" />
                                                        {/* Cup Body */}
                                                        <path d="M6 5 L7.5 23 H16.5 L18 5" />
                                                        {/* Sleeve */}
                                                        <path d="M6.3 10 H17.7" opacity="0.5" stroke="currentColor" strokeWidth="1.5" className="group-hover/price:stroke-meren-dark" />
                                                        <path d="M6.7 15 H17.3" opacity="0.5" stroke="currentColor" strokeWidth="1.5" className="group-hover/price:stroke-meren-dark" />
                                                    </svg>
                                                    <span className="absolute -bottom-5 text-[10px] font-bold text-white/40 group-hover/price:text-meren-yellow transition-colors">0.4</span>
                                                </div>
                                                <span className="font-bold text-2xl text-white/80 group-hover/price:text-meren-yellow transition-colors mt-2">{p04}₽</span>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="w-full flex justify-end">
                                        <span className="font-display font-black text-3xl text-meren-yellow drop-shadow-md">{singlePrice}₽</span>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                        );
                    })}
                </motion.div>
                </AnimatePresence>
            </div>
            
            {/* Addons Section - Redesigned */}
             <div className="lg:col-span-3 mt-16">
                 <div className="flex flex-col items-center">
                    <div className="flex items-center gap-4 mb-8 opacity-60">
                        <div className="h-px w-12 bg-meren-yellow"></div>
                        <h3 className="text-white font-display font-bold uppercase text-sm tracking-[0.2em]">
                            Сделай вкуснее
                        </h3>
                        <div className="h-px w-12 bg-meren-yellow"></div>
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-6">
                        {ADDONS.map((addon, i) => {
                             const isMilk = addon.name.toLowerCase().includes('молоко');
                             const Icon = isMilk ? Milk : Droplets;
                             
                             return (
                                 <motion.div 
                                    whileHover={{ y: -4 }}
                                    key={i} 
                                    className="group relative bg-[#2A2A2A] p-1 rounded-2xl overflow-hidden shadow-lg"
                                 >
                                     <div className="absolute inset-0 bg-gradient-to-r from-meren-yellow/0 via-meren-yellow/30 to-meren-yellow/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                                     
                                     <div className="relative bg-[#333] px-6 py-4 rounded-xl flex items-center gap-4 border border-white/5 group-hover:border-meren-yellow/50 transition-colors">
                                         <div className="p-2.5 bg-white/5 rounded-lg text-white/70 group-hover:bg-meren-yellow group-hover:text-meren-dark transition-colors duration-300">
                                            <Icon size={20} strokeWidth={2.5} />
                                         </div>
                                         
                                         <div className="flex flex-col">
                                             <span className="text-sm font-bold text-white uppercase tracking-wide group-hover:text-meren-yellow transition-colors">{addon.name}</span>
                                             <span className="text-[10px] text-white/40">Добавить к любому напитку</span>
                                         </div>
                                         
                                         <div className="ml-4 pl-4 border-l border-white/10">
                                             <span className="text-meren-yellow font-black text-lg">+{addon.price}₽</span>
                                         </div>
                                     </div>
                                 </motion.div>
                             )
                        })}
                    </div>
                 </div>
             </div>

        </div>
      </div>
    </section>
  );
};

export default Menu;