import React from 'react';
import { useInView } from '../hooks/useInView';
import AnimatedText from './AnimatedText';

interface FeatureProps {
  title: string;
  description: string;
  index: number;
}

const Feature: React.FC<FeatureProps> = ({ title, description, index }) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div 
      ref={ref}
      className={`flex flex-col max-w-md mx-auto transition-all duration-700 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      title: "Stunning Design",
      description: "Every detail meticulously crafted to deliver a premium experience that feels intuitive and elegant.",
    },
    {
      title: "Powerful Performance",
      description: "Engineered for speed and efficiency, delivering exceptional performance even under demanding conditions.",
    },
    {
      title: "Seamless Integration",
      description: "Works flawlessly with your existing ecosystem, making your workflow smoother and more efficient.",
    },
    {
      title: "Future-Ready",
      description: "Built with tomorrow in mind, our solutions adapt and evolve to meet your changing needs.",
    }
  ];

  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24">
          <div ref={ref}>
            <AnimatedText
              text="Designed for excellence"
              tag="h2"
              className={`text-3xl md:text-4xl font-semibold mb-6 transition-all duration-700 ease-out ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            />
            <p 
              className={`text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed transition-all duration-700 ease-out ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '150ms' }}
            >
              Our commitment to innovation and quality creates products that don't just meet expectations—they redefine them.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;