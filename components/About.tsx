import React from 'react';
import { BadgeCheck, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const videos = [
    {
      id: 1,
      title: "КОФЕЙНЯ В УБЫТКАХ? Нужен ремонт! Сколько заработал?",
      views: "444 тыс. просмотров",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Кофейня приносит деньги? Я в шоке!",
      views: "752 тыс. просмотров",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Открыл КОФЕЙНЮ - сколько заработал за месяц?",
      views: "831 тыс. просмотров",
      image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#E2E2E2] text-meren-dark">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 mb-12">
            
            {/* Title */}
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-display font-black text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.9] tracking-tight"
            >
                ОСНОВАТЕЛЬ<br/>КОФЕЙНИ
            </motion.h2>

            {/* Profile */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-5"
            >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-white/50 shadow-sm shrink-0">
                    <img 
                      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop" 
                      alt="Айден" 
                      className="w-full h-full object-cover" 
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-2">
                        <span className="font-display font-bold text-3xl md:text-4xl uppercase tracking-wide">АЙДЕН</span>
                        <BadgeCheck className="text-black fill-black text-white" size={28} strokeWidth={3} /> 
                    </div>
                    <span className="text-2xl md:text-3xl font-medium text-meren-dark leading-none mt-1">1,09 млн</span>
                </div>
            </motion.div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-10">
            {videos.map((video, index) => (
                <motion.div 
                  key={video.id} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="group cursor-pointer"
                >
                    {/* Thumbnail */}
                    <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden mb-4 relative shadow-lg">
                         <img 
                           src={video.image} 
                           alt={video.title} 
                           className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" 
                         />
                         {/* Play overlay */}
                         <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                            <motion.div 
                              whileHover={{ scale: 1.1 }}
                              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30"
                            >
                                <Play fill="white" className="text-white ml-1" size={20} />
                            </motion.div>
                         </div>
                    </div>
                    
                    {/* Text Content */}
                    <div className="flex flex-col gap-1">
                        <h3 className="font-display font-medium text-xl md:text-2xl leading-tight text-meren-dark uppercase group-hover:opacity-80 transition-opacity">
                            {video.title}
                        </h3>
                        <span className="text-meren-yellow text-lg font-medium">
                            {video.views}
                        </span>
                    </div>
                </motion.div>
            ))}
        </div>
        
        {/* Additional Context */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 pt-8 border-t border-meren-dark/5"
        >
            <p className="text-lg md:text-xl text-meren-dark/80 max-w-3xl leading-relaxed">
              Кофейня — это реалити-шоу в реальном времени. Мы открыто рассказываем о цифрах, победах и проблемах на нашем YouTube-канале. Приходите стать частью истории.
            </p>
        </motion.div>

      </div>
    </section>
  );
};

export default About;