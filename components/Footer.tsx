import React from 'react';
import { CONTACTS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-meren-dark text-white pt-16 pb-8 border-t border-white/5">
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
          </div>

           {/* Call to action */}
           <div className="col-span-1">
             <h4 className="text-lg font-bold mb-4 text-white">Заходите в гости</h4>
             <a 
               href="https://yandex.ru/maps" // Deep link in production
               target="_blank"
               rel="noopener noreferrer"
               className="inline-block bg-white text-meren-dark font-bold px-6 py-3 rounded-xl hover:bg-meren-yellow transition-colors"
             >
               Построить маршрут
             </a>
           </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Meren Coffee. Все права защищены.</p>
          <p className="text-center md:text-right">
            Создание сайта и реклама — <span className="text-gray-300">Едалин Владимир</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;