import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { CONTACTS } from '../constants';
import { motion } from 'framer-motion';

const Contacts: React.FC = () => {
  return (
    <section id="contacts" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Info Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-meren-gray rounded-3xl p-8 md:p-10 flex flex-col justify-center"
          >
            <h2 className="text-3xl font-bold text-meren-dark mb-8">Контакты</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-meren-dark">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-meren-dark mb-1">Адрес</h3>
                  <p className="text-gray-600">{CONTACTS.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-meren-dark">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-meren-dark mb-1">Время работы</h3>
                  <p className="text-gray-600 whitespace-pre-line">{CONTACTS.hours}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-meren-dark">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-meren-dark mb-1">Телефон</h3>
                  <a href={`tel:${CONTACTS.phone}`} className="text-lg text-meren-dark font-medium hover:text-meren-yellow transition-colors">
                    {CONTACTS.displayPhone}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-200">
               <a href={CONTACTS.socials.vk} target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-blue-600 text-white text-center font-bold rounded-xl hover:bg-blue-700 transition-colors">
                 Мы ВКонтакте
               </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3 h-[400px] lg:h-auto rounded-3xl overflow-hidden shadow-lg border border-gray-100 relative"
          >
            <iframe
              title="Meren Coffee Yandex Map"
              src="https://yandex.ru/map-widget/v1/?text=Meren+Coffee+Тележная+32&z=17"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(1)' }}
              allowFullScreen={true}
            ></iframe>
             <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow-md text-sm font-bold text-meren-dark pointer-events-none">
                Meren Coffee
             </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Contacts;