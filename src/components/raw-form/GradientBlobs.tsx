import React from 'react';

export function GradientBlobs() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div 
        className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full animate-blob-pulse"
        style={{
          backgroundColor: 'var(--accent-red)',
          filter: 'blur(140px)',
          mixBlendMode: 'multiply'
        }}
      />
      <div 
        className="absolute top-[20%] right-[-10%] w-[60vw] h-[60vw] rounded-full animate-blob-pulse"
        style={{
          backgroundColor: 'var(--warm-orange)',
          filter: 'blur(140px)',
          mixBlendMode: 'multiply',
          animationDelay: '2s'
        }}
      />
      <div 
        className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] rounded-full animate-blob-pulse"
        style={{
          backgroundColor: 'var(--soft-pink)',
          filter: 'blur(140px)',
          mixBlendMode: 'multiply',
          animationDelay: '4s'
        }}
      />
    </div>
  );
}
