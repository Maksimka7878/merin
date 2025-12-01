import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const bgLines = [
    { d: "M200,0 Q150,100 200,200", delay: 0 },
    { d: "M100,0 Q180,100 200,150", delay: 0.5 },
    { d: "M0,50 Q100,150 200,50", delay: 1 }
  ];

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
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-2 bg-white/5 p-2 rounded-full backdrop-blur-sm border border-white/5">
                {MENU_DATA.map((category) => (
                    <button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={`px-6 py-3 rounded-full text-sm md:text-base font-display font-bold uppercase tracking-wide transition-all duration-300 ${
                        activeTab === category.id
                        ? 'bg-meren-yellow text-meren-dark shadow-lg shadow-meren-yellow/20'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                    >
                        {category.label}
                    </button>
                ))}
            </div>
        </div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Menu Items Grid */}
            <div className="lg:col-span-3">
                <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
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
                            className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-meren-yellow/50 transition-all duration-300 hover:bg-white/[0.07] flex flex-col justify-between min-h-[140px]"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="font-display font-bold text-xl uppercase tracking-wide text-white group-hover:text-meren-yellow transition-colors pr-8">
                                    {item.name}
                                </h3>
                                {(item.isHit || item.isNew) && (
                                    <div className="absolute top-6 right-6 flex gap-2">
                                        {item.isHit && (
                                            <span className="text-[10px] font-black uppercase bg-meren-yellow text-meren-dark px-2 py-1 rounded-full">
                                                Hit
                                            </span>
                                        )}
                                        {item.isNew && (
                                            <span className="text-[10px] font-black uppercase bg-green-400 text-meren-dark px-2 py-1 rounded-full">
                                                New
                                            </span>
                                        )}
                                    </div>
                                )}
                            </div>

                            <div className="flex items-end justify-between border-t border-white/10 pt-4">
                                {item.prices ? (
                                    <div className="flex gap-4 w-full">
                                        {p02 && (
                                            <div className="flex flex-col items-center">
                                                <span className="text-xs text-white/50 mb-1">0.2</span>
                                                <span className="font-bold text-lg">{p02}₽</span>
                                            </div>
                                        )}
                                        {p03 && (
                                            <div className="flex flex-col items-center">
                                                <span className="text-xs text-white/50 mb-1">0.3</span>
                                                <span className="font-bold text-lg">{p03}₽</span>
                                            </div>
                                        )}
                                        {p04 && (
                                            <div className="flex flex-col items-center">
                                                <span className="text-xs text-white/50 mb-1">0.4</span>
                                                <span className="font-bold text-lg">{p04}₽</span>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <span className="font-bold text-2xl">{singlePrice}₽</span>
                                )}
                            </div>
                        </motion.div>
                        );
                    })}
                </motion.div>
                </AnimatePresence>
            </div>
            
            {/* Addons Section */}
             <div className="lg:col-span-3 mt-8">
                 <div className="border-t border-white/10 pt-8">
                    <h3 className="text-white/60 font-display font-bold uppercase mb-4 text-center text-sm tracking-widest">
                        Добавить к напитку
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {ADDONS.map((addon, i) => (
                             <div key={i} className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
                                 <span className="text-sm font-medium">{addon.name}</span>
                                 <span className="text-sm font-bold text-meren-yellow">+{addon.price}₽</span>
                             </div>
                        ))}
                    </div>
                 </div>
             </div>

        </div>
      </div>
    </section>
  );
};

export default Menu;