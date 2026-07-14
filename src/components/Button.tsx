import React, { forwardRef } from 'react';
import { motion, MotionProps, HTMLMotionProps } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof MotionProps>, MotionProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  href?: string;
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  onMouseEnter,
  onMouseLeave,
  type = 'button',
  disabled = false,
  className = '',
  href,
  whileHover,
  whileTap,
  ...props
}, ref) => {
  const baseClasses = 'font-bold rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 ease-in-out relative overflow-hidden group inline-block text-center';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-cyan-500 to-sky-600 text-white hover:from-cyan-400 hover:to-sky-500 focus:ring-cyan-500 shadow-lg hover:shadow-cyan-500/40',
    secondary: 'bg-gradient-to-r from-teal-500 to-cyan-600 text-white hover:from-teal-400 hover:to-cyan-500 focus:ring-teal-500 shadow-lg hover:shadow-teal-500/40',
    outline: 'bg-transparent border-2 border-cyan-400 text-cyan-300 hover:bg-white/20 backdrop-blur-sm focus:ring-cyan-400 hover:text-white shadow-lg hover:shadow-cyan-400/20',
  };
  
  const sizeClasses = {
    small: 'px-5 py-2.5 text-sm',
    medium: 'px-7 py-3.5 text-base',
    large: 'px-9 py-4.5 text-lg',
  };
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;
  
  const innerContent = (
    <>
      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
      </span>
      <span className="relative z-10">{children}</span>
    </>
  );

  const motionProps = {
    whileHover: whileHover || { scale: 1.05, y: -3 },
    whileTap: whileTap || { scale: 0.95 },
    transition: { type: "spring", stiffness: 400, damping: 17 },
    onClick,
    onMouseEnter,
    onMouseLeave,
    ...props
  } as any;

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');
    
    if (isExternal) {
      return (
        <motion.a
          href={href}
          className={classes}
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...motionProps}
        >
          {innerContent}
        </motion.a>
      );
    }

    const MotionLink = motion(Link);
    return (
      <MotionLink
        to={href}
        className={classes}
        ref={ref as any}
        {...motionProps}
      >
        {innerContent}
      </MotionLink>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      disabled={disabled}
      ref={ref as React.Ref<HTMLButtonElement>}
      {...motionProps}
    >
      {innerContent}
    </motion.button>
  );
});

Button.displayName = 'Button';

export default Button;