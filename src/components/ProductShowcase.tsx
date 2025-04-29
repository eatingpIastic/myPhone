import React from 'react';
import { useInView } from '../hooks/useInView';
import Button from './Button';

const ProductShowcase: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 transition-all duration-1000 ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}
        >
          <div className="flex-1 lg:order-2">
            <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-lg flex items-center justify-center">
              <div className="p-8 text-center text-gray-400">
                <p className="text-sm">Product Image</p>
                <p className="text-xs mt-1">(Placeholder)</p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Introducing the future of technology</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Our latest innovation combines cutting-edge design with unprecedented performance. Engineered to perfection, it transforms how you interact with technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Learn More</Button>
              <Button variant="secondary">Specifications</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;