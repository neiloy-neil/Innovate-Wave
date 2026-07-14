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
  const baseClasses = 'bg-white/70 rounded-xl shadow-md overflow-hidden backdrop-blur-md transition-all duration-300 ease-in-out border border-cyan-300/40 water-texture tech-glow';
  const clickableClasses = onClick ? 'cursor-pointer hover:shadow-xl hover:border-cyan-400/60' : '';
  
  const classes = `${baseClasses} ${clickableClasses} ${className}`;
  
  return (
    <motion.div 
      id={id} 
      className={classes} 
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      whileHover={whileHover || { y: -8, scale: 1.02, boxShadow: "0 25px 30px -5px rgba(2, 132, 199, 0.15), 0 15px 15px -5px rgba(2, 132, 199, 0.05)" }}
      whileTap={whileTap || { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;