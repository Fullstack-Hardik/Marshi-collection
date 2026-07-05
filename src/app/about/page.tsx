import { Metadata } from "next";
import Image from "next/image";
import { Sparkles, Heart, ShieldCheck, Truck } from "lucide-react";

export const metadata: Metadata = {
  title: "About Marshi Collection | Premium Fashion & Custom Apparel",
  description: "Discover the story behind Marshi Collection. We bring premium ladies dresses, kids apparel, exclusive abayas, and custom jewelry to Pakistan.",
  keywords: ["Marshi Collection", "About Us", "Pakistani Fashion", "Custom T-shirts", "Abayas", "Jewelry Pakistan"],
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen w-full pt-32 pb-24">
      
      {/* Hero Section */}
      <section className="px-6 md:px-12 mb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-[var(--accent-red)] font-satoshi font-bold uppercase tracking-widest text-sm mb-4">Our Story</div>
            <h1 className="font-clash font-bold uppercase text-5xl md:text-7xl leading-[0.9] tracking-tighter mb-8 text-[var(--text-primary)]">
              Redefining<br />Everyday<br /><span className="text-[var(--accent-red)]">Elegance.</span>
            </h1>
            <p className="font-satoshi text-lg md:text-xl opacity-80 leading-relaxed max-w-lg">
              Welcome to Marshi Collection. We started with a simple vision: to make high-quality, trend-setting fashion and customized apparel accessible to everyone in Pakistan. 
              Today, we are proud to be your ultimate destination for premium style.
            </p>
          </div>
          <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden border border-[var(--text-primary)]/10 shadow-2xl">
            <Image 
              src="/images/products/cotton-code-set-1.jpg" 
              alt="Marshi Collection Premium Wear" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-[var(--text-primary)]/5 py-24 px-6 md:px-12 mb-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-clash font-bold text-4xl md:text-5xl uppercase tracking-tighter text-center mb-16">
            The Marshi <span className="text-[var(--accent-red)]">Promise</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Sparkles, title: "Finest Quality", desc: "Every fabric and material is hand-selected to ensure durability, comfort, and a premium feel." },
              { icon: Heart, title: "Made with Love", desc: "From customized shirts to elegant jewelry, we put our heart into every single piece." },
              { icon: ShieldCheck, title: "Trust & Security", desc: "A safe, personalized checkout process directly via WhatsApp with transparent pricing." },
              { icon: Truck, title: "Nationwide Delivery", desc: "Fast and reliable shipping to your doorstep, anywhere in Pakistan." }
            ].map((Value, idx) => (
              <div key={idx} className="p-8 bg-[var(--bg-base)] rounded-3xl border border-[var(--text-primary)]/10 hover:border-[var(--accent-red)] transition-colors">
                <div className="w-14 h-14 bg-[var(--accent-red)]/10 rounded-full flex items-center justify-center text-[var(--accent-red)] mb-6">
                  <Value.icon size={28} />
                </div>
                <h3 className="font-clash font-bold text-xl uppercase mb-3">{Value.title}</h3>
                <p className="font-satoshi opacity-80 leading-relaxed">{Value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Showcase */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-clash font-bold text-4xl md:text-5xl uppercase tracking-tighter mb-4">Our Collections</h2>
          <p className="font-satoshi text-lg opacity-80">Carefully curated to meet all your fashion needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-[400px] rounded-3xl overflow-hidden group">
            <Image src="/images/products/hania-amir-maxi.jpg" alt="Ladies Wear" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="font-clash font-bold text-3xl uppercase mb-2">Ladies Wear</h3>
              <p className="font-satoshi opacity-90 max-w-sm">Premium unstitched and ready-to-wear dresses.</p>
            </div>
          </div>
          <div className="relative h-[400px] rounded-3xl overflow-hidden group">
            <Image src="/images/products/kids-tshirts-mama-baba-1.jpg" alt="Kids Apparel" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="font-clash font-bold text-3xl uppercase mb-2">Kids Apparel</h3>
              <p className="font-satoshi opacity-90 max-w-sm">Comfortable and trendy customized outfits for the little ones.</p>
            </div>
          </div>
          <div className="relative h-[400px] rounded-3xl overflow-hidden group">
            <Image src="/images/products/cap-shawl-maxi.jpg" alt="Exclusive Abayas" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="font-clash font-bold text-3xl uppercase mb-2">Exclusive Abayas</h3>
              <p className="font-satoshi opacity-90 max-w-sm">Modest elegance designed for the modern woman.</p>
            </div>
          </div>
          <div className="relative h-[400px] rounded-3xl overflow-hidden group">
            <Image src="/images/products/custom-necklace-1.jpg" alt="Custom Jewelry" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="font-clash font-bold text-3xl uppercase mb-2">Custom Jewelry</h3>
              <p className="font-satoshi opacity-90 max-w-sm">Personalized name necklaces, rings, and bracelets.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
