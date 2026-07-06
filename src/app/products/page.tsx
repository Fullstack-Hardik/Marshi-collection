import { Metadata } from "next";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";

export const metadata: Metadata = {
  title: "Shop All Collections",
  description: "Browse Ladies, Gents, Kids, Abaya, Hijab, Jewelry, Watches, Cosmetics and Custom Gift collections. Order online with nationwide delivery in Pakistan.",
  alternates: {
    canonical: "https://marshicollection.vercel.app/products",
  },
};

const CATEGORIES = [
  { slug: "ladies", label: "Ladies Dresses" },
  { slug: "kids", label: "Kids Wear" },
  { slug: "gents", label: "Gents Wear" },
  { slug: "jewelry", label: "Jewelry" },
  { slug: "watches", label: "Watches" },
  { slug: "cosmetics", label: "Cosmetics" },
  { slug: "abaya", label: "Abaya" },
  { slug: "hijab", label: "Hijab" },
  { slug: "shoes", label: "Shoes" },
  { slug: "gadgets", label: "Gadgets" },
  { slug: "gifts", label: "Gifts" }
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 max-w-7xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://marshicollection.vercel.app/"},
              {"@type": "ListItem", "position": 2, "name": "Products", "item": "https://marshicollection.vercel.app/products"}
            ]
          })
        }}
      />
      
      <h1 className="text-4xl md:text-6xl font-clash font-bold text-center mb-12 uppercase tracking-tighter text-[var(--text-primary)]">
        Explore Our <span className="text-[var(--accent-red)]">Collections</span>
      </h1>
      
      {/* Category Navigation (Sticky) */}
      <div className="sticky top-20 z-40 bg-[var(--bg-base)]/90 backdrop-blur-md py-4 mb-16 border-b border-[var(--text-primary)]/10 overflow-x-auto whitespace-nowrap hide-scrollbar">
        <div className="flex gap-2 sm:gap-4 px-4 w-max mx-auto md:w-auto md:mx-0 md:justify-center">
          {CATEGORIES.map((cat) => (
            <a 
              key={cat.slug} 
              href={`/products/${cat.slug}`}
              className="px-4 py-1.5 sm:px-6 sm:py-2 rounded-full border border-[var(--text-primary)]/20 hover:border-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-base)] transition-all font-satoshi font-medium text-xs sm:text-sm uppercase tracking-wider"
            >
              {cat.label}
            </a>
          ))}
        </div>
      </div>

      {/* Dynamic Category Sections */}
      <div className="space-y-32">
        {CATEGORIES.map((category) => {
          const categoryProducts = products.filter(
            (p) => p.category.toLowerCase() === category.slug.toLowerCase()
          );

          if (categoryProducts.length === 0) return null;

          return (
            <section 
              key={category.slug} 
              id={category.slug}
              className="scroll-mt-40"
            >
              <div className="flex items-center gap-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-clash font-bold uppercase tracking-wide">
                  {category.label}
                </h2>
                <div className="h-[1px] flex-grow bg-[var(--text-primary)]/20"></div>
                <span className="font-satoshi text-[var(--text-primary)]/60 text-sm">
                  {categoryProducts.length} Items
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-0">
                {categoryProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

