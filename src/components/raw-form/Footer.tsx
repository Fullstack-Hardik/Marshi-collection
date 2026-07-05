import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-[var(--text-primary)] text-[var(--bg-base)] relative overflow-hidden pt-24 pb-8 px-6 md:px-12 w-full mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10 mb-24 max-w-7xl mx-auto">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="relative w-12 h-12 bg-white rounded-full overflow-hidden shadow-lg border border-[var(--accent-red)]/20">
              <Image src="/logo.png" alt="Marshi Collection" fill className="object-cover" />
            </div>
            <div className="font-clash font-bold uppercase text-2xl tracking-tighter">Marshi Collection</div>
          </div>
          <p className="font-satoshi opacity-70">Your Complete Fashion Destination.</p>
        </div>
        <div className="md:col-span-1 flex flex-col gap-2 font-satoshi text-[14px]">
          <span className="font-bold uppercase mb-2">Shop Categories</span>
          <Link href="/products/ladies" className="hover:text-[var(--accent-red)] transition-colors">Ladies Dresses</Link>
          <Link href="/products/kids" className="hover:text-[var(--accent-red)] transition-colors">Kids Dresses</Link>
          <Link href="/products/gents" className="hover:text-[var(--accent-red)] transition-colors">Gents Dresses</Link>
          <Link href="/products/jewelry" className="hover:text-[var(--accent-red)] transition-colors">Jewelry</Link>
          <Link href="/products/watches" className="hover:text-[var(--accent-red)] transition-colors">Watches</Link>
          <Link href="/products/cosmetics" className="hover:text-[var(--accent-red)] transition-colors">Cosmetics</Link>
          <Link href="/products/abaya" className="hover:text-[var(--accent-red)] transition-colors">Abaya</Link>
          <Link href="/products/hijab" className="hover:text-[var(--accent-red)] transition-colors">Hijab</Link>
          <Link href="/products/shoe" className="hover:text-[var(--accent-red)] transition-colors">Shoes</Link>
          <Link href="/products/gegads" className="hover:text-[var(--accent-red)] transition-colors">Gadgets</Link>
        </div>
        <div className="md:col-span-1 flex flex-col gap-4 font-satoshi text-[14px]">
          <a href="#" className="hover:text-[var(--accent-red)] transition-colors">Instagram</a>
          <a href="#" className="hover:text-[var(--accent-red)] transition-colors">Facebook</a>
          <a href="#" className="hover:text-[var(--accent-red)] transition-colors">Pinterest</a>
        </div>
        <div className="md:col-span-1 flex flex-col gap-4 font-satoshi text-[14px]">
          <Link href="/terms" className="hover:text-[var(--accent-red)] transition-colors">Terms of Service</Link>
          <Link href="/privacy" className="hover:text-[var(--accent-red)] transition-colors">Privacy Policy</Link>
          <Link href="/contact" className="hover:text-[var(--accent-red)] transition-colors">Contact Us</Link>
        </div>
      </div>
      
      <div className="relative z-10 flex justify-end font-satoshi text-xs opacity-50 max-w-7xl mx-auto">
        © 2026 MARSHI COLLECTION. ALL RIGHTS RESERVED.
      </div>
      
      {/* Massive year indicator */}
      <div className="absolute bottom-[-10%] left-0 font-clash font-bold text-[20vw] leading-none text-[var(--bg-base)] opacity-5 pointer-events-none select-none">
        2026
      </div>
    </footer>
  );
}
