import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import AiProctoring from './components/AiProctoring';
import Demo from './components/Demo';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <div id="home">
        <Hero />
      </div>
      <div id="features">
        <Features />
      </div>
      <AiProctoring />
      <div id="demo">
        <Demo />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="faq">
        <Faq />
      </div>
      <Footer />
    </div>
  );
}

export default App;