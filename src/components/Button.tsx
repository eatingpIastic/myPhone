import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'text';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
}) => {
  const baseClasses = 'font-medium transition-all rounded-full focus:outline-none';
  
  const variantClasses = {
    primary: 'bg-gray-900 text-white hover:bg-gray-800 active:bg-gray-950',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-300',
    text: 'bg-transparent text-gray-900 hover:bg-gray-100 active:bg-gray-200',
  };
  
  const sizeClasses = {
    sm: 'text-xs px-4 py-1.5',
    md: 'text-sm px-5 py-2.5',
    lg: 'text-base px-6 py-3',
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button className={combinedClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;