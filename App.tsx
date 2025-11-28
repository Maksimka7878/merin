import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Promo from './components/Promo';
import Reviews from './components/Reviews';
import About from './components/About';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Menu />
        <Promo />
        <Reviews />
        <About />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;