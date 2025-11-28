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
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="menu" className="py-20 bg-meren-menu relative z-20 text-white min-h-[800px]">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-5xl">
        
        {/* Navigation / Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8"
        >
            <div className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-12 w-full">
            {MENU_DATA.map((category) => (
                <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`text-xl md:text-3xl font-display font-bold uppercase tracking-wide transition-colors duration-300 relative ${
                    activeTab === category.id
                    ? 'text-meren-yellow'
                    : 'text-white hover:text-white/80'
                }`}
                >
                {category.label}
                {activeTab === category.id && (
                  <motion.div 
                    layoutId="underline" 
                    className="absolute -bottom-2 left-0 w-full h-1 bg-meren-yellow"
                  />
                )}
                </button>
            ))}
            </div>
             {/* "Dops" styling to match image right side */}
             <div className="hidden lg:block font-display text-3xl font-bold uppercase text-white tracking-wide">
                DOПЫ
             </div>
        </motion.div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Main Menu List */}
            <div className="lg:col-span-3">
                {/* Column Headers (Only visible on desktop for table feel) */}
                <div className="hidden md:flex justify-end mb-6 text-meren-yellow font-display font-bold text-lg px-4 gap-12">
                    <span className="w-12 text-center">0.2</span>
                    <span className="w-12 text-center">0.3</span>
                    <span className="w-12 text-center">0.4</span>
                </div>

                <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="flex flex-col space-y-5"
                >
                    {activeCategory?.items.map((item) => {
                        const p02 = getPrice(item.prices, '0.2');
                        const p03 = getPrice(item.prices, '0.3');
                        const p04 = getPrice(item.prices, '0.4');

                        return (
                        <motion.div key={item.id} variants={itemVariants} className="group">
                            {/* Desktop/Tablet Row View */}
                            <div className="hidden md:flex items-baseline justify-between py-2 border-b border-white/5 hover:border-white/10 transition-colors">
                                <div className="flex-grow pr-8 relative">
                                    <span className="font-display font-bold text-xl md:text-2xl uppercase tracking-wider text-white relative z-10 bg-meren-menu pr-2">
                                        {item.name}
                                    </span>
                                </div>
                                
                                <div className="flex items-center gap-12 font-display text-xl text-white">
                                    <span className="w-12 text-center">{p02 ? p02 : '—'}</span>
                                    <span className="w-12 text-center">{p03 ? p03 : '—'}</span>
                                    <span className="w-12 text-center">
                                        {p04 ? p04 : (item.price ? item.price : '—')}
                                    </span>
                                </div>
                            </div>

                            {/* Mobile Card View */}
                            <div className="md:hidden flex flex-col mb-6 pb-4 border-b border-white/10">
                                <h3 className="font-display font-bold text-2xl uppercase text-white mb-2">
                                    {item.name}
                                </h3>
                                {item.description && (
                                    <p className="text-gray-400 text-sm mb-3">{item.description}</p>
                                )}
                                <div className="flex justify-between items-center mt-2">
                                    {item.prices ? (
                                        item.prices.map((p, idx) => (
                                            <div key={idx} className="flex flex-col items-center">
                                                <span className="text-meren-yellow text-xs font-bold mb-1">{p.volume}</span>
                                                <span className="text-xl font-display">{p.price}</span>
                                            </div>
                                        ))
                                    ) : (
                                        <span className="text-xl font-display">{item.price} ₽</span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                        );
                    })}
                </motion.div>
                </AnimatePresence>
            </div>

            {/* Sidebar / Addons (Desktop) */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="lg:col-span-1 border-l border-white/10 pl-8 hidden lg:block"
            >
                 <div className="sticky top-24">
                    <h3 className="text-meren-yellow font-display font-bold text-xl mb-8 uppercase tracking-wider">
                        Добавить
                    </h3>
                    <div className="flex flex-col gap-6">
                        {ADDONS.map((addon) => (
                            <div key={addon.name} className="flex flex-col">
                                <span className="font-display font-bold text-white text-lg uppercase leading-tight mb-2">
                                    {addon.name}
                                </span>
                                <span className="text-meren-yellow font-display text-2xl">
                                    +{addon.price} ₽
                                </span>
                            </div>
                        ))}
                    </div>
                 </div>
            </motion.div>

            {/* Mobile Addons */}
            <div className="lg:hidden mt-8">
                 <h3 className="text-meren-yellow font-display font-bold text-xl mb-4 uppercase tracking-wider text-center">
                    Добавить к напитку
                </h3>
                <div className="flex justify-center gap-4 flex-wrap">
                    {ADDONS.map((addon) => (
                         <div key={addon.name} className="bg-white/5 rounded-lg px-4 py-3 flex items-center gap-3 border border-white/10">
                            <span className="text-white font-bold text-sm uppercase">{addon.name}</span>
                            <span className="text-meren-yellow font-bold text-sm">+{addon.price} ₽</span>
                        </div>
                    ))}
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Menu;