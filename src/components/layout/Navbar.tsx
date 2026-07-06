"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full border-2 border-pink-500 flex items-center justify-center bg-black">
                <span className="font-serif text-pink-500 text-xl italic font-bold">M</span>
              </div>
              <span className="text-white font-serif text-2xl tracking-wide">MARSHI</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-pink-400 transition-colors px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wider"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-600 hover:bg-pink-500 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-[0_0_15px_rgba(219,39,119,0.4)] hover:shadow-[0_0_25px_rgba(219,39,119,0.6)] text-sm"
            >
              WhatsApp Us
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              aria-label="Toggle mobile menu"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-pink-400 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center mt-4 bg-pink-600 text-white block px-3 py-3 rounded-md text-base font-medium"
            >
              WhatsApp Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
