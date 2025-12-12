import React from 'react';
import { motion, MotionProps } from 'framer-motion';

interface CardProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  id?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  onClick, 
  id,
  onMouseEnter,
  onMouseLeave,
  whileHover,
  whileTap,
  ...props
}) => {
  const baseClasses = 'bg-white/70 rounded-xl shadow-md overflow-hidden backdrop-blur-sm transition-all duration-300 ease-in-out border border-cyan-200/50 water-texture tech-glow';
  const clickableClasses = onClick ? 'cursor-pointer hover:shadow-lg' : '';
  
  const classes = `${baseClasses} ${clickableClasses} ${className}`;
  
  return (
    <motion.div 
      id={id} 
      className={classes} 
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      whileHover={whileHover || { y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
      whileTap={whileTap || { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;