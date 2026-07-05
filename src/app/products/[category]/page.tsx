import { Metadata } from "next";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const category = resolvedParams.category;
  const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1);
  
  return {
    title: `${categoryTitle} Online Pakistan | Buy ${categoryTitle} & More – Marshi`,
    description: `Shop premium ${category} online in Pakistan. Elegant designs, quality fabric, nationwide delivery with cash on delivery available.`,
    alternates: {
      canonical: `https://marshicollection.vercel.app/products/${category}`,
    },
  };
}

export function generateStaticParams() {
  const categories = Array.from(new Set(products.map(p => p.category)));
  return categories.map(category => ({ category }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = await params;
  const categoryProducts = products.filter(p => p.category === resolvedParams.category);
  
  const categoryTitle = resolvedParams.category.charAt(0).toUpperCase() + resolvedParams.category.slice(1);

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
              {"@type": "ListItem", "position": 2, "name": "Products", "item": "https://marshicollection.vercel.app/products"},
              {"@type": "ListItem", "position": 3, "name": categoryTitle, "item": `https://marshicollection.vercel.app/products/${resolvedParams.category}`}
            ]
          })
        }}
      />
      
      <h1 className="text-4xl md:text-6xl font-clash font-bold text-center mb-16 uppercase tracking-tighter text-[var(--text-primary)]">
        {categoryTitle} <span className="text-[var(--accent-red)]">Collection</span>
      </h1>
      
      {categoryProducts.length > 0 ? (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8 px-2 sm:px-0">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-400 py-20">
          <p className="text-xl">No products found in this category yet.</p>
        </div>
      )}
    </div>
  );
}
