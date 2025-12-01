import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { CONTACTS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Меню', href: '#menu' },
    { name: 'Акции', href: '#promo' },
    { name: 'Отзывы', href: '#reviews' },
    { name: 'О нас', href: '#about' },
    { name: 'Контакты', href: '#contacts' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled || isOpen 
        ? 'bg-white/80 backdrop-blur-xl shadow-sm py-3 border-b border-white/20' 
        : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo - Stacked Typography */}
        <a href="#" className="flex flex-col items-start leading-[0.8] group select-none hover:opacity-80 transition-opacity">
          <span className={`font-display font-black text-2xl tracking-tighter uppercase transition-colors duration-300 ${scrolled || isOpen ? 'text-meren-dark' : 'text-meren-dark'}`}>
            Meren
          </span>
          <span className={`font-display font-black text-2xl tracking-tighter uppercase transition-colors duration-300 -mt-0.5 ${scrolled || isOpen ? 'text-meren-dark' : 'text-meren-dark'}`}>
            Coffee
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-bold uppercase tracking-wide transition-colors relative hover:text-meren-yellow ${
                 scrolled ? 'text-meren-dark' : 'text-meren-dark'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href={`tel:${CONTACTS.phone}`}
            className="px-6 py-2.5 text-sm font-bold bg-meren-yellow text-meren-dark rounded-full hover:bg-meren-dark hover:text-white transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            {CONTACTS.displayPhone}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-meren-dark p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute w-full bg-white/95 backdrop-blur-xl border-t border-gray-100 transition-all duration-300 ease-in-out overflow-hidden shadow-xl ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="flex flex-col px-4 py-8 space-y-6 h-screen">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-display font-black uppercase text-meren-dark hover:text-meren-yellow transition-colors"
            >
              {link.name}
            </a>
          ))}
           <a
            href={`tel:${CONTACTS.phone}`}
            className="mt-8 w-full text-center py-4 font-bold bg-meren-yellow text-meren-dark rounded-xl uppercase tracking-wider"
          >
            Позвонить
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;