import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-['Inter',sans-serif]">
      {children}
    </div>
  );
};

export default Layout;