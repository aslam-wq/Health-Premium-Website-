import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroCards from './components/IntroCards';
import Optimization from './components/Optimization';
import TestingPricing from './components/TestingPricing';
import Journey from './components/Journey';
import Memberships from './components/Memberships';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background text-white font-sans antialiased overflow-x-hidden selection:bg-primary selection:text-black">
      <Navbar />
      <Hero />
      <IntroCards />
      <Optimization />
      <TestingPricing />
      <Journey />
      <Memberships />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default App;
