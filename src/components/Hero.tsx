import React from 'react';
import AnimatedText from './AnimatedText';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white z-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <AnimatedText
            text="Innovation"
            tag="h1"
            className="text-5xl sm:text-7xl font-semibold tracking-tight mb-2"
            delay={200}
          />
          
          <AnimatedText
            text="Reimagined"
            tag="h1"
            className="text-5xl sm:text-7xl font-semibold tracking-tight bg-gradient-to-r from-gray-700 via-gray-900 to-black bg-clip-text text-transparent mb-8"
            delay={600}
          />
          
          <AnimatedText
            text="Experience the future today with our revolutionary products that redefine what's possible."
            tag="p"
            className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto"
            delay={1000}
          />
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 opacity-0 animate-fade-in" style={{animationDelay: '1.4s', animationFillMode: 'forwards'}}>
            <Button variant="primary" size="lg">
              Discover More
            </Button>
            <Button variant="secondary" size="lg">
              Watch the Video
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center opacity-0 animate-fade-in" style={{animationDelay: '2s', animationFillMode: 'forwards'}}>
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-gray-400 rounded-full animate-scroll-hint"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;