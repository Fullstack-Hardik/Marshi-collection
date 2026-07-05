import { Metadata } from "next";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";

export const metadata: Metadata = {
  title: "All Products - Categories",
  description: "Browse the complete Marshi Collection catalog by category.",
};

const CATEGORIES = [
  "Ladies Dresses",
  "Kids Dresses",
  "Gents Dresses",
  "Jewelry",
  "Watches",
  "Cosmetics",
  "Abaya",
  "Hijab",
  "Shoes",
  "Gadgets"
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-clash font-bold text-center mb-12 uppercase tracking-tighter text-[var(--text-primary)]">
        Our <span className="text-[var(--accent-red)]">Collections</span>
      </h1>
      
      {/* Category Navigation (Sticky) */}
      <div className="sticky top-20 z-40 bg-[var(--bg-base)]/90 backdrop-blur-md py-4 mb-16 border-b border-[var(--text-primary)]/10 overflow-x-auto whitespace-nowrap hide-scrollbar">
        <div className="flex gap-4 md:justify-center px-4">
          {CATEGORIES.map((cat) => (
            <a 
              key={cat} 
              href={`#${cat.toLowerCase().replace(/\s+/g, '-')}`}
              className="px-6 py-2 rounded-full border border-[var(--text-primary)]/20 hover:border-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-base)] transition-all font-satoshi font-medium text-sm uppercase tracking-wider"
            >
              {cat}
            </a>
          ))}
        </div>
      </div>

      {/* Dynamic Category Sections */}
      <div className="space-y-32">
        {CATEGORIES.map((category) => {
          const categoryProducts = products.filter(
            (p) => p.category.toLowerCase() === category.toLowerCase()
          );

          return (
            <section 
              key={category} 
              id={category.toLowerCase().replace(/\s+/g, '-')}
              className="scroll-mt-40"
            >
              <div className="flex items-center gap-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-clash font-bold uppercase tracking-wide">
                  {category}
                </h2>
                <div className="h-[1px] flex-grow bg-[var(--text-primary)]/20"></div>
                <span className="font-satoshi text-[var(--text-primary)]/60 text-sm">
                  {categoryProducts.length} Items
                </span>
              </div>

              {categoryProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {categoryProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="w-full py-16 flex flex-col items-center justify-center border border-dashed border-[var(--text-primary)]/20 rounded-2xl bg-[var(--text-primary)]/5">
                  <p className="font-satoshi text-[var(--text-primary)]/60 text-lg">
                    New collections arriving soon in this category.
                  </p>
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}

