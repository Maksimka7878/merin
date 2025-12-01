import React, { useEffect, useState } from 'react';
import { BadgeCheck, Play } from 'lucide-react';
import { motion } from 'framer-motion';

// NOTE: To make the dynamic fetch work, you need the Channel ID (starts with UC). 
// You can find it by viewing the page source of the YouTube channel or sharing the channel.
// For @IDEN, if you have the ID, replace it here.
const CHANNEL_ID = 'UCvW7Q3X5q8q8q8q8q8q8q8'; // Placeholder ID. Replace with real ID for @IDEN

interface Video {
  id: string | number;
  title: string;
  views: string; // Or date for dynamic
  image: string;
  link?: string;
  isDynamic?: boolean;
}

const About: React.FC = () => {
  const [avatar, setAvatar] = useState("https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop");
  const [videos, setVideos] = useState<Video[]>([
    {
      id: 1,
      title: "КОФЕЙНЯ В УБЫТКАХ? Нужен ремонт! Сколько заработал?",
      views: "444 тыс. просмотров",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop",
      link: "https://www.youtube.com/@IDEN"
    },
    {
      id: 2,
      title: "Кофейня приносит деньги? Я в шоке!",
      views: "752 тыс. просмотров",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop",
      link: "https://www.youtube.com/@IDEN"
    },
    {
      id: 3,
      title: "Открыл КОФЕЙНЮ - сколько заработал за месяц?",
      views: "831 тыс. просмотров",
      image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop",
      link: "https://www.youtube.com/@IDEN"
    }
  ]);

  useEffect(() => {
    const fetchYouTubeData = async () => {
      try {
        // Using rss2json to bridge XML to JSON for frontend usage without backend
        const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`);
        const data = await res.json();

        if (data.status === 'ok') {
          // 1. Update Avatar if available in feed
          if (data.feed && data.feed.image) {
            setAvatar(data.feed.image);
          }

          // 2. Update Videos
          // Transform RSS items to our Video format
          const newVideos = data.items.slice(0, 3).map((item: any) => {
             // Extract video ID from link or guid to get high-res thumbnail
             const videoId = item.guid.split(':')[2]; 
             const thumbnail = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
             
             // Format date
             const date = new Date(item.pubDate).toLocaleDateString('ru-RU', {
                day: 'numeric', month: 'long', year: 'numeric'
             });

             return {
               id: videoId,
               title: item.title,
               views: date, // RSS doesn't give views, so we show date
               image: thumbnail,
               link: item.link,
               isDynamic: true
             };
          });

          if (newVideos.length > 0) {
            setVideos(newVideos);
          }
        }
      } catch (error) {
        console.error("Failed to fetch YouTube data, using fallback.", error);
      }
    };

    fetchYouTubeData();
  }, []);

  // Background flow lines
  const bgLines = [
    { d: "M-50,100 C150,50 350,150 500,200", delay: 0 },
    { d: "M1000,50 C800,100 600,0 400,50", delay: 1 },
    { d: "M-100,500 C200,450 400,550 700,500", delay: 0.5 },
  ];

  return (
    <section id="about" className="py-20 bg-[#E2E2E2] text-meren-dark relative overflow-hidden">
      
      {/* Context-Aware Animation: Flow Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <svg viewBox="0 0 1440 600" className="w-full h-full preserve-3d" preserveAspectRatio="xMidYMid slice">
             {bgLines.map((line, i) => (
               <motion.path 
                 key={i}
                 d={line.d} 
                 fill="none" 
                 stroke="white" 
                 strokeWidth="2" 
                 initial={{ pathLength: 0, opacity: 0 }}
                 whileInView={{ pathLength: 1, opacity: 0.6 }}
                 transition={{ duration: 2, delay: line.delay, ease: "easeInOut" }}
               />
             ))}
          </svg>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        
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
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-white/50 shadow-sm shrink-0 bg-gray-200">
                    <img 
                      src={avatar} 
                      alt="Айден" 
                      className="w-full h-full object-cover" 
                      onError={(e) => {
                        // Fallback if dynamic avatar fails to load
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop";
                      }}
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <a href="https://www.youtube.com/@IDEN" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group">
                        <span className="font-display font-bold text-3xl md:text-4xl uppercase tracking-wide group-hover:text-meren-accent transition-colors">АЙДЕН</span>
                        <BadgeCheck className="text-black fill-black text-white" size={28} strokeWidth={3} /> 
                    </a>
                    <span className="text-2xl md:text-3xl font-medium text-meren-dark leading-none mt-1">1,09 млн</span>
                </div>
            </motion.div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-10">
            {videos.map((video, index) => (
                <motion.a
                  href={video.link || "https://www.youtube.com/@IDEN"}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={video.id} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="group cursor-pointer block"
                >
                    {/* Thumbnail */}
                    <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden mb-4 relative shadow-lg">
                         <img 
                           src={video.image} 
                           alt={video.title} 
                           className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" 
                           onError={(e) => {
                              // Fallback thumbnail
                              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop";
                           }}
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
                        <h3 className="font-display font-medium text-xl md:text-2xl leading-tight text-meren-dark uppercase group-hover:opacity-80 transition-opacity line-clamp-2">
                            {video.title}
                        </h3>
                        <span className="text-base font-medium text-gray-600">
                            {video.views}
                        </span>
                    </div>
                </motion.a>
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