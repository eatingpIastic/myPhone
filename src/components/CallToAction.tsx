import React from 'react';
import { useInView } from '../hooks/useInView';
import Button from './Button';

const CallToAction: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Ready to experience the difference?</h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who have already transformed their daily experience with our innovative products.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button variant="primary" size="lg">Get Started Today</Button>
            <Button variant="text" size="lg">Contact Sales</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;