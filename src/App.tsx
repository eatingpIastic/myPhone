import React from 'react';
import Layout from './components/Layout';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductShowcase from './components/ProductShowcase';
import Testimonial from './components/Testimonial';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <Layout>
      <Navigation />
      <Hero />
      <Features />
      <ProductShowcase />
      <Testimonial />
      <CallToAction />
      <Footer />
    </Layout>
  );
}

export default App;