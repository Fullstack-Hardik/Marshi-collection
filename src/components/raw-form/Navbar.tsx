"use client";

import React, { useState } from 'react';
import { Search, ShoppingBag, Sparkles, Menu, X } from 'lucide-react';
import Link from 'next/link';

export function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-[var(--bg-base)]/80 backdrop-blur-xl border-b border-[var(--text-primary)]/10 text-[var(--text-primary)] transition-all duration-300">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity group">
          <div className="bg-[var(--text-primary)] text-[var(--bg-base)] p-2 rounded-sm group-hover:bg-[var(--accent-red)] transition-colors">
            {/* Logo fallback icon since image can't be fetched */}
            <Sparkles size={20} className="hidden" />
            <img src="/logo.png" alt="Marshi Collection" className="h-8 w-auto object-contain dark:invert hidden" onError={(e) => { e.currentTarget.classList.add('hidden'); e.currentTarget.previousElementSibling?.classList.remove('hidden') }} />
          </div>
          <span className="font-clash font-bold uppercase text-xl md:text-2xl tracking-tighter">Marshi Collection</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-10 font-satoshi font-bold text-[13px] tracking-[0.15em] uppercase">
          <Link href="/" className="relative group overflow-hidden">
            <span className="group-hover:-translate-y-full transition-transform duration-300 inline-block">Home</span>
            <span className="absolute left-0 top-full group-hover:-translate-y-full transition-transform duration-300 inline-block text-[var(--accent-red)]">Home</span>
          </Link>
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

        <div className="flex items-center gap-4 md:gap-6">
          <button className="hover:text-[var(--accent-red)] transition-colors p-2 hover:bg-[var(--text-primary)]/5 rounded-full">
            <Search size={22} strokeWidth={1.5} />
          </button>
          
          {/* Menu Toggle */}
          <button 
            className="hover:text-[var(--accent-red)] transition-colors p-2 hover:bg-[var(--text-primary)]/5 rounded-full"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-[60] flex">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsSidebarOpen(false)}
          />
          
          {/* Sidebar */}
          <div className="relative w-[80%] max-w-sm h-full bg-[#0a0a0a] border-r border-white/10 shadow-2xl flex flex-col p-6 animate-in slide-in-from-left duration-300">
            <div className="flex justify-between items-center mb-12">
              <span className="font-clash font-bold uppercase text-2xl text-white tracking-tighter">Menu</span>
              <button 
                onClick={() => setIsSidebarOpen(false)}
                className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-8 font-clash font-bold text-2xl uppercase tracking-wider text-white/80">
              <Link href="/" onClick={() => setIsSidebarOpen(false)} className="hover:text-[var(--accent-red)] transition-colors">Home</Link>
              <Link href="/products" onClick={() => setIsSidebarOpen(false)} className="hover:text-[var(--accent-red)] transition-colors">Products</Link>
              <Link href="/about" onClick={() => setIsSidebarOpen(false)} className="hover:text-[var(--accent-red)] transition-colors">About Us</Link>
              <Link href="/blog" onClick={() => setIsSidebarOpen(false)} className="hover:text-[var(--accent-red)] transition-colors">Blog</Link>
              <Link href="/contact" onClick={() => setIsSidebarOpen(false)} className="hover:text-[var(--accent-red)] transition-colors">Contact</Link>
            </div>
            
            <div className="mt-auto pt-8 border-t border-white/10 flex items-center justify-between">
              <span className="text-sm text-white/50 uppercase font-satoshi">Marshi Collection</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
