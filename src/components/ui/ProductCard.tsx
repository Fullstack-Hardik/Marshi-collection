"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const whatsappMessage = `Hi, I'm interested in ordering:\n*${product.name}*\nPrice: Rs. ${product.price}${product.details ? `\n\nDetails: ${product.details}` : ""}`;
  const whatsappUrl = `https://wa.me/923108736356?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      <div 
        onClick={() => setIsOpen(true)}
        className="group cursor-pointer relative overflow-hidden rounded-2xl bg-[var(--text-primary)]/5 backdrop-blur-md border border-[var(--text-primary)]/10 hover:border-[var(--accent-red)] transition-all duration-300 flex flex-col transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-[var(--accent-red)]/20"
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-black/40">
          <Image
            src={product.image}
            alt={`${product.name} - ${product.category} at Marshi Collection`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        </div>
        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
            <div className="inline-block px-3 py-1 bg-[var(--accent-red)]/10 text-[var(--accent-red)] text-xs uppercase tracking-widest font-bold rounded-md mb-3 border border-[var(--accent-red)]/20">
              {product.category}
            </div>
            <h3 className="font-clash text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-2 line-clamp-2 leading-tight tracking-tight group-hover:text-[var(--accent-red)] transition-colors duration-300">
              {product.name}
            </h3>
          </div>
          <div className="flex items-center gap-2 mt-4 pt-4 border-t border-[var(--text-primary)]/10">
            <span className="text-sm font-medium text-[var(--text-primary)]/60">Price:</span>
            <span className="text-2xl font-clash font-extrabold text-[var(--text-primary)]">Rs. {product.price}</span>
          </div>
        </div>
      </div>

      {/* Details Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row shadow-2xl animate-in fade-in zoom-in-95 duration-300">
            {/* Close Button */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-colors"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Image */}
            <div className="relative w-full md:w-1/2 h-[40vh] md:h-auto bg-black/50">
              <Image
                src={product.image}
                alt={`${product.name} - Detailed View`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Modal Content */}
            <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col overflow-y-auto">
              <div className="text-sm font-bold text-[var(--accent-red)] uppercase tracking-widest mb-3">
                {product.category}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                {product.name}
              </h2>
              <div className="text-3xl font-bold text-white mb-6">
                Rs. {product.price}
              </div>
              
              <div className="prose prose-invert mb-8">
                <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">
                  {product.details || "A beautifully crafted piece from Marshi Collection. Made with premium quality materials and extreme attention to detail."}
                </p>
              </div>

              <div className="mt-auto pt-6 border-t border-white/10">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-[#25D366] text-white rounded-xl font-bold text-lg shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:bg-[#128C7E] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] transition-all flex items-center justify-center gap-3 transform hover:-translate-y-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                  </svg>
                  Order via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
