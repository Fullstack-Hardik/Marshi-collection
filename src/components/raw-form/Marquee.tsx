import React from 'react';

interface MarqueeProps {
  text: string;
}

export function Marquee({ text }: MarqueeProps) {
  return (
    <div className="relative w-full overflow-hidden bg-[var(--text-primary)] py-4 flex items-center whitespace-nowrap">
      <div className="animate-[marquee_20s_linear_infinite] flex items-center font-clash uppercase font-bold text-4xl tracking-widest text-[var(--bg-base)]">
        <span className="mx-8">{text}</span>
        <span className="mx-8 text-[var(--accent-red)]">•</span>
        <span className="mx-8">{text}</span>
        <span className="mx-8 text-[var(--accent-red)]">•</span>
        <span className="mx-8">{text}</span>
        <span className="mx-8 text-[var(--accent-red)]">•</span>
        <span className="mx-8">{text}</span>
        <span className="mx-8 text-[var(--accent-red)]">•</span>
        <span className="mx-8">{text}</span>
        <span className="mx-8 text-[var(--accent-red)]">•</span>
        <span className="mx-8">{text}</span>
      </div>
    </div>
  );
}
