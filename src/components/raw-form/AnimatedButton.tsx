import React from 'react';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedButton({ children, className = '', ...props }: AnimatedButtonProps) {
  return (
    <button
      className={`group relative overflow-hidden bg-primary text-base font-clash uppercase font-bold px-8 py-4 transition-colors duration-300 ease-out hover:text-accent ${className}`}
      style={{
        backgroundColor: 'var(--text-primary)',
        color: 'var(--bg-base)'
      }}
      {...props}
    >
      <span className="relative z-10 group-hover:text-[var(--accent-red)] transition-colors duration-300">
        {children}
      </span>
      <div 
        className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"
      />
    </button>
  );
}
