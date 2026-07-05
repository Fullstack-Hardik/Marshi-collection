import React from 'react';
import { ArrowUpRight, ArrowRight, Plus, Sparkles, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatedButton } from '@/components/raw-form/AnimatedButton';
import { GradientBlobs } from '@/components/raw-form/GradientBlobs';
import { Marquee } from '@/components/raw-form/Marquee';
import { Carousel } from '@/components/raw-form/Carousel';
import { products } from '@/data/products';
import { ProductCard } from '@/components/ui/ProductCard';
import { RandomProductGrid } from '@/components/ui/RandomProductGrid';

export default function Home() {
  return (
    <div className="relative w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Marshi Collection",
            "url": "https://marshicollection.vercel.app",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://marshicollection.vercel.app/products?search={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-16 w-full flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 overflow-hidden animate-slide-up">
        <GradientBlobs />
        
        <div className="relative z-10 w-full lg:w-1/2 flex flex-col items-start pt-12 lg:pt-0">
          <h1 className="font-clash font-bold uppercase leading-[0.85] text-[12vw] lg:text-[8vw] tracking-[-0.02em] text-[var(--text-primary)]">
            Marshi<br/>Collection
          </h1>
          
          <div className="mt-8 flex flex-col gap-8 items-start">
            <p className="font-satoshi text-[18px] lg:text-[20px] max-w-[450px] leading-relaxed text-[var(--text-primary)] font-medium">
              Your Complete Fashion Destination. Premium Interactive Fashion Experience for Ladies, Kids, Abaya, Jewelry and more.
            </p>
            <div className="flex items-center gap-6">
              <AnimatedButton>Shop Now</AnimatedButton>
              <Link href="/products" className="flex items-center gap-2 text-[var(--accent-red)] font-satoshi font-bold hover:opacity-80 transition-opacity whitespace-nowrap group">
                Explore Collection <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Image Block */}
        <div className="relative z-10 w-full lg:w-5/12 h-[50vh] lg:h-[75vh] mt-12 lg:mt-0 overflow-hidden shadow-2xl group border-2 border-[var(--text-primary)]/10">
           <Image fill priority sizes="(max-width: 1024px) 100vw, 40vw" src="/images/products/heart-tee-bundle.webp" alt="Marshi Collection - Premium Fashion" className="object-cover object-center transition-all duration-1000 group-hover:scale-105" />
           <div className="absolute inset-0 bg-gradient-to-t from-[var(--text-primary)]/40 to-transparent opacity-50 mix-blend-multiply" />
        </div>
      </section>

      {/* Marquee Strip */}
      <section className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
        <Marquee text="PREMIUM FASHION • EXCLUSIVE DESIGNS • QUALITY MATERIALS • WORLDWIDE SHIPPING" />
      </section>

      {/* Carousel Section for Top Products */}
      <section className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
        <Carousel products={products.slice(0, 6)} />
      </section>

      {/* Product Grid */}
      <section className="px-6 md:px-12 py-24 animate-slide-up" id="products" style={{ animationDelay: '0.3s' }}>
        <div className="flex flex-col items-center mb-16">
          <h2 className="font-clash font-bold uppercase text-[8vw] md:text-[5vw] tracking-tighter leading-none text-[var(--text-primary)]">
            Explore <span className="text-[var(--accent-red)]">Everything</span>
          </h2>
        </div>
        
        <RandomProductGrid products={products} />
      </section>

      {/* Campaign Block / Collections */}
      <section className="bg-[var(--bg-base)] w-full py-24 px-6 md:px-12 animate-slide-up border-y border-[var(--text-primary)]/10" style={{ animationDelay: '0.35s' }}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 max-w-7xl mx-auto">
          <div className="md:col-span-8 flex flex-col justify-center">
            <h2 className="font-clash font-bold text-[10vw] md:text-[6vw] leading-[0.9] uppercase text-[var(--text-primary)]">
              The Architecture<br />Of <span className="text-[var(--accent-red)]">Style.</span>
            </h2>
          </div>
          <div className="md:col-span-4 flex flex-col justify-end">
            {[
              { name: 'Ladies Collection', link: '/products' },
              { name: 'Kids Apparel', link: '/products' },
              { name: 'Abaya Exclusive', link: '/products' }
            ].map((campaign, idx) => (
              <Link href={campaign.link} key={idx} className="border-t border-[var(--text-primary)]/20 py-6 flex justify-between items-center group cursor-pointer hover:border-[var(--accent-red)] transition-colors">
                <span className="font-satoshi font-bold text-xl uppercase group-hover:text-[var(--accent-red)] transition-colors">{campaign.name}</span>
                <div className="w-10 h-10 rounded-full border border-[var(--text-primary)] flex items-center justify-center group-hover:border-[var(--accent-red)] group-hover:bg-[var(--accent-red)] group-hover:text-white transition-all transform group-hover:rotate-45">
                  <ArrowUpRight size={18} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
