import React from 'react';
import { useInView } from '../hooks/useInView';

const Testimonial: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`max-w-3xl mx-auto text-center transition-all duration-1000 ease-out ${
            inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <p className="text-xl md:text-2xl leading-relaxed text-gray-800 mb-8">
            "This product has completely transformed how I work. The attention to detail and thoughtful design make it a joy to use every day. It's not just a tool—it's an experience."
          </p>
          
          <div>
            <p className="font-semibold text-gray-900">Sarah Johnson</p>
            <p className="text-gray-600">Creative Director</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;