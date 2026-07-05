import React from 'react';
import { Plus } from 'lucide-react';
import { GradientBlobs } from '@/components/raw-form/GradientBlobs';

export const metadata = {
  title: "Frequently Asked Questions",
  description: "Get answers to all your questions about Marshi Collection, our products, custom apparel, and nationwide delivery.",
};

const faqs = [
  { q: "Do you deliver across Pakistan?", a: "Yes, we offer nationwide delivery across all major cities in Pakistan including Karachi, Lahore, and Islamabad via reliable courier services." },
  { q: "Can I order customized t-shirts for special events?", a: "Absolutely. We specialize in custom printed apparel including couple shirts, Independence Day tees (14 August), and personalized gifts. Contact us with your design!" },
  { q: "What materials do you use for your Abayas and Hijabs?", a: "We source premium Nida, Chiffon, and Georgette fabrics for our Abayas and Hijabs, ensuring maximum comfort, breathability, and a luxurious drape." },
  { q: "How long does shipping usually take?", a: "Standard delivery within Pakistan takes 3-5 business days. Custom orders may require an additional 2-3 days for processing and printing." },
  { q: "Do you offer cash on delivery (COD)?", a: "Yes, we provide Cash on Delivery (COD) services across Pakistan to make your shopping experience as seamless as possible." },
  { q: "Can I return or exchange a product?", a: "We accept returns and exchanges within 7 days of delivery for standard items, provided they are unused and in original condition. Custom apparel is non-refundable unless there is a manufacturing defect." },
  { q: "Where is Marshi Collection located?", a: "We are an online-first premium brand. While we do not have a physical storefront yet, our digital experience is designed to bring the boutique directly to your screen." }
];

export default function FAQPage() {
  return (
    <div className="relative min-h-screen w-full pt-32 pb-24 px-6 md:px-12 overflow-hidden animate-slide-up">
      <GradientBlobs />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-16">
          <h1 className="font-clash font-bold uppercase text-[10vw] md:text-[6vw] leading-[0.85] tracking-tighter mb-6">
            Frequently <span className="text-[var(--accent-red)]">Asked</span>
          </h1>
          <p className="font-satoshi text-xl md:text-2xl opacity-80 max-w-2xl font-medium">
            Everything you need to know about our premium Pakistani dresses, custom apparel, and delivery policies.
          </p>
        </div>
        
        <div className="flex flex-col border-t-2 border-[var(--text-primary)]">
          {faqs.map((faq, idx) => (
            <details key={idx} className="group border-b-2 border-[var(--text-primary)] [&_summary::-webkit-details-marker]:hidden bg-[var(--bg-base)]">
              <summary className="flex cursor-pointer items-center justify-between py-8 font-clash font-bold text-2xl md:text-3xl uppercase tracking-wide hover:text-[var(--accent-red)] transition-colors">
                {faq.q}
                <span className="ml-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[var(--text-primary)] group-hover:border-[var(--accent-red)] group-open:rotate-45 transition-all duration-300">
                  <Plus size={24} />
                </span>
              </summary>
              <div className="pb-8 font-satoshi text-lg md:text-xl opacity-80 leading-relaxed pr-12">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
