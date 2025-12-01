import React, { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { REVIEWS } from '../constants';

const Reviews: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -350 : 350;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="reviews" className="py-20 bg-white relative overflow-hidden">
      
      {/* Context-Aware Animation: Floating Quotes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
           animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0],
            opacity: [0.05, 0.1, 0.05]
           }}
           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-10 left-10 text-meren-dark opacity-5"
        >
          <Quote size={200} fill="currentColor" />
        </motion.div>
        
        <motion.div
           animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0],
            opacity: [0.05, 0.08, 0.05]
           }}
           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
           className="absolute bottom-10 right-10 text-meren-yellow opacity-10"
        >
          <Quote size={150} fill="currentColor" className="transform scale-x-[-1]" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-between items-end mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-meren-dark mb-4">Отзывы гостей</h2>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">5.0</span>
              <div className="flex text-meren-yellow">
                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
              </div>
              <span className="text-gray-400 text-sm ml-2">на Яндекс.Картах</span>
            </div>
          </div>
          
          <div className="flex gap-2">
            <button 
              onClick={() => scroll('left')}
              className="p-3 rounded-full border border-gray-200 hover:bg-meren-dark hover:text-white hover:border-meren-dark transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3 rounded-full border border-gray-200 hover:bg-meren-dark hover:text-white hover:border-meren-dark transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar pb-8 snap-x"
        >
          {REVIEWS.map((review) => (
            <motion.div 
              key={review.id}
              className="min-w-[300px] md:min-w-[400px] bg-meren-gray p-8 rounded-2xl snap-center flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div>
                <div className="flex items-center gap-1 mb-4 text-meren-yellow">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-meren-dark text-lg font-medium leading-relaxed mb-6 relative">
                  "{review.text}"
                </p>
              </div>
              <div className="flex justify-between items-center border-t border-gray-200 pt-4">
                <span className="font-bold text-meren-dark">{review.author}</span>
                <span className="text-sm text-gray-400">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;