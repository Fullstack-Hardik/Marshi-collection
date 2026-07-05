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
           <Image fill src="/images/products/heart-tee-bundle.png" alt="Marshi Collection - Premium Fashion" className="object-cover object-center transition-all duration-1000 group-hover:scale-105" />
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

      {/* Benefits Section */}
      <section className="bg-[var(--text-primary)]/5 w-full py-24 px-6 md:px-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { title: "Premium Quality", desc: "Handpicked fabrics and materials for ultimate comfort." },
            { title: "Custom Designs", desc: "Personalized printing for your special occasions." },
            { title: "Nationwide Delivery", desc: "Fast and reliable shipping across Pakistan." },
            { title: "Secure Ordering", desc: "Easy and safe checkout via WhatsApp." }
          ].map((benefit, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-8 border border-[var(--text-primary)]/10 rounded-3xl hover:border-[var(--accent-red)] transition-colors bg-[var(--bg-base)]">
              <div className="w-16 h-16 rounded-full bg-[var(--accent-red)]/10 flex items-center justify-center mb-6 text-[var(--accent-red)]">
                <Sparkles size={32} />
              </div>
              <h3 className="font-clash font-bold text-xl uppercase mb-3">{benefit.title}</h3>
              <p className="font-satoshi opacity-80">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-24 px-6 md:px-12 animate-slide-up" style={{ animationDelay: '0.5s' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="font-clash font-bold uppercase text-[8vw] md:text-[5vw] tracking-tighter leading-none text-[var(--text-primary)]">
              Client <span className="text-[var(--accent-red)]">Reviews</span>
            </h2>
            <p className="font-satoshi text-xl opacity-80 mt-4 max-w-2xl">See what our beautiful customers have to say about Marshi Collection.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Fatima R.", text: "The quality of the Abaya is incredible! It fits perfectly and the fabric feels so premium. Will definitely order again." },
              { name: "Ahmed S.", text: "Ordered custom t-shirts for 14th August for my kids. The print quality is fantastic and delivery was super fast!" },
              { name: "Zainab M.", text: "I love the customized name necklace. It looks so elegant and hasn't faded at all. Excellent customer service via WhatsApp." }
            ].map((review, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-[var(--text-primary)]/5 border border-[var(--text-primary)]/10 relative">
                <div className="flex gap-1 text-[var(--accent-red)] mb-6">
                  {[1,2,3,4,5].map(star => <Star key={star} size={20} fill="currentColor" />)}
                </div>
                <p className="font-satoshi text-lg opacity-90 mb-8 leading-relaxed italic">"{review.text}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-[var(--accent-red)] flex items-center justify-center text-white font-bold font-clash text-xl">
                    {review.name.charAt(0)}
                  </div>
                  <span className="font-clash font-bold uppercase text-lg">{review.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / SEO Content Section */}
      <section className="w-full py-32 px-6 md:px-12 animate-slide-up" style={{ animationDelay: '0.7s' }}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="font-clash font-bold uppercase text-5xl md:text-7xl tracking-tighter leading-none mb-6">
              Frequently <span className="text-[var(--accent-red)]">Asked</span>
            </h2>
            <p className="font-satoshi text-xl opacity-80 max-w-2xl">
              Everything you need to know about our premium Pakistani dresses, custom apparel, and nationwide delivery.
            </p>
          </div>
          
          <div className="flex flex-col border-t-2 border-[var(--text-primary)]">
            {[
              { q: "Do you deliver across Pakistan?", a: "Yes, we offer nationwide delivery across all major cities in Pakistan including Karachi, Lahore, and Islamabad via reliable courier services." },
              { q: "Can I order customized t-shirts for special events?", a: "Absolutely. We specialize in custom printed apparel including couple shirts, Independence Day tees (14 August), and personalized gifts. Contact us with your design!" },
              { q: "What materials do you use for your Abayas and Hijabs?", a: "We source premium Nida, Chiffon, and Georgette fabrics for our Abayas and Hijabs, ensuring maximum comfort, breathability, and a luxurious drape." },
              { q: "How long does shipping usually take?", a: "Standard delivery within Pakistan takes 3-5 business days. Custom orders may require an additional 2-3 days for processing and printing." }
            ].map((faq, idx) => (
              <details key={idx} className="group border-b-2 border-[var(--text-primary)] [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between py-6 font-clash font-bold text-2xl uppercase tracking-wide hover:text-[var(--accent-red)] transition-colors">
                  {faq.q}
                  <span className="ml-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[var(--text-primary)] group-hover:border-[var(--accent-red)] group-open:rotate-45 transition-all duration-300">
                    <Plus size={20} />
                  </span>
                </summary>
                <div className="pb-8 font-satoshi text-lg opacity-80 leading-relaxed pr-12">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
