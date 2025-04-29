import React, { useEffect, useRef } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span';
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  delay = 0,
  duration = 1000,
  tag = 'h1',
}) => {
  const elementRef = useRef<HTMLElement | null>(null);
  const animationDuration = duration / 1000;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Set initial opacity to 0
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    
    const timeoutId = setTimeout(() => {
      element.style.transition = `opacity ${animationDuration}s ease-out, transform ${animationDuration}s ease-out`;
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [delay, animationDuration]);

  const Component = tag;

  return (
    <Component
      ref={elementRef as React.RefObject<any>}
      className={className}
    >
      {text}
    </Component>
  );
};

export default AnimatedText;