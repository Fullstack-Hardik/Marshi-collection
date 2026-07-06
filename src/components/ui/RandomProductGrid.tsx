"use client";
import React, { useEffect, useState } from "react";
import { Product } from "@/data/products";
import { ProductCard } from "./ProductCard";

export function RandomProductGrid({ products }: { products: Product[] }) {
  const [displayProducts, setDisplayProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Smart random shifting of products on client-side
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    setDisplayProducts(shuffled.slice(0, 4));
  }, [products]);

  // Prevent hydration mismatch by showing a skeleton or default grid initially
  if (displayProducts.length === 0) {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-6 lg:gap-8 px-2 sm:px-0">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-6 lg:gap-8 px-2 sm:px-0">
      {displayProducts.map((product) => (
        <div key={product.id} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
