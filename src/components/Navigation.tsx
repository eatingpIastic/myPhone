import React, { useEffect, useState } from 'react';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          <div className="flex items-center">
            <span className="text-xl font-semibold tracking-tight">Innovate</span>
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {['Products', 'Features', 'Design', 'Support'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-sm text-gray-800 hover:text-black transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <div>
            <button className="px-5 py-2 text-sm font-medium hover:bg-gray-100 rounded-full transition-colors duration-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;