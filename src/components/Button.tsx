import React from 'react';
import { motion, MotionProps } from 'framer-motion';

interface ButtonProps extends MotionProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  onMouseEnter,
  onMouseLeave,
  type = 'button',
  disabled = false,
  className = '',
  whileHover,
  whileTap,
  ...props
}) => {
  const baseClasses = 'font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 ease-in-out';
  
  const variantClasses = {
    primary: 'bg-[#0ea5e9] text-white hover:bg-[#0284c7] focus:ring-[#0ea5e9] shadow-md hover:shadow-lg',
    secondary: 'bg-[#0891b2] text-white hover:bg-[#0c4a6e] focus:ring-[#0891b2] shadow-md hover:shadow-lg',
    outline: 'bg-transparent border border-[#0ea5e9] text-[#0284c7] hover:bg-[#0ea5e9]/10 focus:ring-[#0ea5e9]',
  };
  
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;
  
  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      disabled={disabled}
      whileHover={whileHover || { scale: 1.05, y: -2 }}
      whileTap={whileTap || { scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;