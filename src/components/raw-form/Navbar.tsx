"use client";

import React from 'react';
import { Search, ShoppingBag, Sparkles } from 'lucide-react';
import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-[var(--bg-base)]/80 backdrop-blur-xl border-b border-[var(--text-primary)]/10 text-[var(--text-primary)] transition-all duration-300">
      <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity group">
        <div className="bg-[var(--text-primary)] text-[var(--bg-base)] p-2 rounded-sm group-hover:bg-[var(--accent-red)] transition-colors">
          {/* Logo fallback icon since image can't be fetched */}
          <Sparkles size={20} className="hidden" />
          <img src="/logo.png" alt="Marshi Collection" className="h-8 w-auto object-contain dark:invert hidden" onError={(e) => { e.currentTarget.classList.add('hidden'); e.currentTarget.previousElementSibling?.classList.remove('hidden') }} />
        </div>
        <span className="font-clash font-bold uppercase text-xl md:text-2xl tracking-tighter">Marshi Collection</span>
      </Link>
      <div className="hidden lg:flex gap-10 font-satoshi font-bold text-[13px] tracking-[0.15em] uppercase">
        <Link href="/products" className="relative group overflow-hidden">
          <span className="group-hover:-translate-y-full transition-transform duration-300 inline-block">Products</span>
          <span className="absolute left-0 top-full group-hover:-translate-y-full transition-transform duration-300 inline-block text-[var(--accent-red)]">Products</span>
        </Link>
        <Link href="/about" className="relative group overflow-hidden">
          <span className="group-hover:-translate-y-full transition-transform duration-300 inline-block">About Us</span>
          <span className="absolute left-0 top-full group-hover:-translate-y-full transition-transform duration-300 inline-block text-[var(--accent-red)]">About Us</span>
        </Link>
        <Link href="/blog" className="relative group overflow-hidden">
          <span className="group-hover:-translate-y-full transition-transform duration-300 inline-block">Blog</span>
          <span className="absolute left-0 top-full group-hover:-translate-y-full transition-transform duration-300 inline-block text-[var(--accent-red)]">Blog</span>
        </Link>
        <Link href="/contact" className="relative group overflow-hidden">
          <span className="group-hover:-translate-y-full transition-transform duration-300 inline-block">Contact</span>
          <span className="absolute left-0 top-full group-hover:-translate-y-full transition-transform duration-300 inline-block text-[var(--accent-red)]">Contact</span>
        </Link>
      </div>
      <div className="flex gap-4 md:gap-6">
        <button className="hover:text-[var(--accent-red)] transition-colors p-2 hover:bg-[var(--text-primary)]/5 rounded-full"><Search size={22} strokeWidth={1.5} /></button>
        <button className="hover:text-[var(--accent-red)] transition-colors p-2 hover:bg-[var(--text-primary)]/5 rounded-full relative">
          <ShoppingBag size={22} strokeWidth={1.5} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-[var(--accent-red)] rounded-full border-2 border-[var(--bg-base)]"></span>
        </button>
      </div>
    </nav>
  );
}
