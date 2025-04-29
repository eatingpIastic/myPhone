import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useInView = (options: UseInViewOptions = {}) => {
  const { threshold = 0, rootMargin = '0px', triggerOnce = false } = options;
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement | null>(null);
  const prevInView = useRef(inView);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isInView = entry.isIntersecting;
        setInView(isInView);
        
        if (isInView && triggerOnce && prevInView.current !== isInView) {
          observer.unobserve(element);
        }
        
        prevInView.current = isInView;
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, inView };
};