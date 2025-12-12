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
  const baseClasses = 'font-bold rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 ease-in-out relative overflow-hidden';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-cyan-500 to-sky-600 text-white hover:from-cyan-400 hover:to-sky-500 focus:ring-cyan-500 shadow-lg hover:shadow-xl',
    secondary: 'bg-gradient-to-r from-teal-500 to-cyan-600 text-white hover:from-teal-400 hover:to-cyan-500 focus:ring-teal-500 shadow-lg hover:shadow-xl',
    outline: 'bg-transparent border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-400/10 focus:ring-cyan-400 hover:text-white shadow-lg hover:shadow-xl',
  };
  
  const sizeClasses = {
    small: 'px-5 py-2.5 text-sm',
    medium: 'px-7 py-3.5 text-base',
    large: 'px-9 py-4.5 text-lg',
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
      whileHover={whileHover || { scale: 1.05, y: -3 }}
      whileTap={whileTap || { scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      {...props}
    >
      {/* Shiny overlay effect */}
      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
      </span>
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default Button;