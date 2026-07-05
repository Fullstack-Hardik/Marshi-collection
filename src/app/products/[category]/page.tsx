import { Metadata } from "next";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const categoryTitle = resolvedParams.category.charAt(0).toUpperCase() + resolvedParams.category.slice(1);
  return {
    title: `${categoryTitle} Collection | Marshi Collection`,
    description: `Explore beautiful ${categoryTitle.toLowerCase()} collection with latest fashion trends.`,
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
    <div className="min-h-screen py-20 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-16 capitalize bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
        {categoryTitle} Collection
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
