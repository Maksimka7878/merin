import React from 'react';
import { CONTACTS } from '../constants';
import { Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
             <div className="flex flex-col items-start leading-[0.85] mb-6 select-none">
               <span className="font-display font-black text-2xl tracking-tighter text-meren-yellow uppercase">
                 Meren
               </span>
               <span className="font-display font-black text-2xl tracking-tighter text-white uppercase -mt-0.5">
                 Coffee
               </span>
             </div>
             <p className="text-gray-400 text-sm mb-6">
               Атмосферная кофейня в центре Петербурга. Вкусный кофе, авторские напитки и уют для работы и отдыха.
             </p>
          </div>

          {/* Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-6 text-meren-yellow">Навигация</h4>
            <ul className="space-y-3">
              <li><a href="#menu" className="text-gray-400 hover:text-white transition-colors">Меню</a></li>
              <li><a href="#promo" className="text-gray-400 hover:text-white transition-colors">Акции</a></li>
              <li><a href="#reviews" className="text-gray-400 hover:text-white transition-colors">Отзывы</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">О нас</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
             <h4 className="text-lg font-bold mb-6 text-meren-yellow">Контакты</h4>
             <ul className="space-y-3 text-gray-400">
               <li>{CONTACTS.address}</li>
               <li><a href={`tel:${CONTACTS.phone}`} className="hover:text-white transition-colors">{CONTACTS.displayPhone}</a></li>
               <li>Ежедневно</li>
             </ul>
             
             {/* Socials */}
             <div className="mt-6">
                <h4 className="text-sm font-bold mb-3 text-white uppercase">Мы в соцсетях</h4>
                <div className="flex gap-4">
                  <a href={CONTACTS.socials.vk} target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-meren-yellow hover:text-meren-dark transition-all">
                     {/* VK Icon */}
                     <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                       <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zM17.6 13.9c-.3.48-.9 1.54-1.85 2.54-1.8 1.9 1.6 1.8-3.4 1.8h-1.3c-2.8 0-4.3-.6-6.1-2.9-2.5-3.3-3.3-6.8-3.3-6.8 0-.3.1-.4.4-.4h2.2c.3 0 .4.1.5.4 0 0 .7 3.5 1.7 5.2.5.9.9 1.2 1.3 1.2.2 0 .3-.1.3-.8V8.9c0-1.7-.1-2.4-1.4-2.6-.2 0-.3-.1-.3-.3 0-.3.3-.6 1-.6h2.2c.6 0 .9.3.9.9v3.8c0 .4.2.5.6.5.4 0 1-.8 2-2.8.2-.4.4-.8.5-.8h2.3c.3 0 .5.2.4.6-.3 1.1-2.5 4.3-2.5 4.3z" />
                     </svg>
                  </a>
                  <a href={CONTACTS.socials.instagram} target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-meren-yellow hover:text-meren-dark transition-all">
                     <Instagram size={20} />
                  </a>
                </div>
             </div>
          </div>

           {/* Call to action */}
           <div className="col-span-1">
             <h4 className="text-lg font-bold mb-4 text-white">Заходите в гости</h4>
             <a 
               href="https://yandex.ru/maps" 
               target="_blank"
               rel="noopener noreferrer"
               className="inline-block bg-white text-black font-bold px-6 py-3 rounded-xl hover:bg-meren-yellow transition-colors"
             >
               Построить маршрут
             </a>
           </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Meren Coffee. Все права защищены.</p>
          <p className="text-center md:text-right">
            Создание сайта и реклама — <span className="text-gray-400">Едалин Владимир</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;