import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: "Marshi Collection Blog | Pakistani Fashion & Custom Apparel Trends",
  description: "Read the latest insights on Pakistani fashion, styling tips for Abayas and Ladies Dresses, and ideas for custom kids t-shirts and personalized jewelry.",
  keywords: ["Pakistani Fashion Blog", "Abaya Styling", "Custom T-shirts Pakistan", "Custom Jewelry", "Ladies Dresses Trends", "Marshi Collection"],
};

const blogPosts = [
  {
    id: 1,
    title: "The Ultimate Guide to Premium Abayas in Pakistan",
    category: "Abaya Trends",
    date: "July 20, 2024",
    excerpt: "Modest fashion is evolving. Discover how premium fabrics like Nida and Chiffon are transforming the Abaya scene across Karachi, Lahore, and Islamabad.",
    image: "/images/products/cap-shawl-maxi.jpg"
  },
  {
    id: 2,
    title: "Why Custom Name Jewelry is the Perfect Gift",
    category: "Jewelry & Accessories",
    date: "July 15, 2024",
    excerpt: "From gold-plated necklaces to customized cufflinks, explore why personalized jewelry is the most thoughtful gift for your loved ones in Pakistan.",
    image: "/images/products/custom-necklace-1.jpg"
  },
  {
    id: 3,
    title: "Trending Ladies Dresses for the Summer Season",
    category: "Ladies Wear",
    date: "July 05, 2024",
    excerpt: "Beat the heat with elegance. We break down the top trending printed maxis, cotton code sets, and breathable fabrics perfect for the Pakistani summer.",
    image: "/images/products/hania-amir-maxi.jpg"
  },
  {
    id: 4,
    title: "Styling Kids for Special Occasions",
    category: "Kids Apparel",
    date: "June 28, 2024",
    excerpt: "Whether it's Independence Day (14 August) or a family gathering, learn how to choose comfortable yet stylish customized t-shirts for kids.",
    image: "/images/products/kids-tshirts-mama-baba-1.jpg"
  }
];

export default function BlogPage() {
  return (
    <div className="relative min-h-screen w-full pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      
      {/* Blog Hero */}
      <section className="mb-24 mt-12 text-center">
        <h1 className="font-clash font-bold uppercase text-5xl md:text-7xl leading-[0.9] tracking-tighter text-[var(--text-primary)]">
          Style & <span className="text-[var(--accent-red)]">Insights</span>
        </h1>
        <p className="font-satoshi text-lg md:text-xl opacity-80 mt-6 mx-auto max-w-2xl font-medium">
          Your premier source for Pakistani fashion trends, custom apparel guides, and styling tips from the Marshi Collection team.
        </p>
      </section>

      {/* Featured Post */}
      <section className="mb-24">
        <article className="group cursor-pointer grid grid-cols-1 lg:grid-cols-2 gap-0 border border-[var(--text-primary)]/20 rounded-3xl relative overflow-hidden bg-[var(--text-primary)]/5 hover:border-[var(--accent-red)] transition-colors duration-500">
          <div className="relative h-[400px] lg:h-[500px] w-full overflow-hidden border-b lg:border-b-0 lg:border-r border-[var(--text-primary)]/20">
            <img 
              src={blogPosts[0].image} 
              alt={blogPosts[0].title} 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center relative">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[var(--accent-red)]/10 text-[var(--accent-red)] border border-[var(--accent-red)]/20 font-satoshi font-bold uppercase tracking-widest text-xs px-3 py-1 rounded-md">
                {blogPosts[0].category}
              </span>
              <span className="font-satoshi font-medium opacity-60 text-sm">
                {blogPosts[0].date}
              </span>
            </div>
            <h2 className="font-clash font-bold text-3xl md:text-5xl uppercase tracking-tighter leading-tight mb-6 group-hover:text-[var(--accent-red)] transition-colors">
              {blogPosts[0].title}
            </h2>
            <p className="font-satoshi text-lg opacity-80 mb-10 leading-relaxed">
              {blogPosts[0].excerpt}
            </p>
            <div className="font-clash font-bold uppercase text-lg flex items-center gap-2 group-hover:text-[var(--accent-red)] transition-colors w-fit">
              Read Article <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </article>
      </section>

      {/* Article Grid */}
      <section>
        <div className="flex justify-between items-end border-b border-[var(--text-primary)]/20 pb-4 mb-12">
          <h2 className="font-clash font-bold uppercase text-3xl tracking-tighter">Latest Posts</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <article key={post.id} className="group cursor-pointer flex flex-col border border-[var(--text-primary)]/10 rounded-2xl overflow-hidden hover:border-[var(--accent-red)] transition-colors duration-300 bg-[var(--text-primary)]/5">
              <div className="w-full aspect-[4/3] overflow-hidden relative border-b border-[var(--text-primary)]/10">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-[var(--bg-base)] text-[var(--accent-red)] font-satoshi font-bold uppercase tracking-widest text-[10px] px-3 py-1 rounded-md border border-[var(--accent-red)]/20 shadow-lg">
                  {post.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="font-satoshi text-xs font-medium opacity-60 mb-3">{post.date}</span>
                <h3 className="font-clash font-bold text-xl uppercase leading-tight mb-3 group-hover:text-[var(--accent-red)] transition-colors">
                  {post.title}
                </h3>
                <p className="font-satoshi text-sm opacity-80 mb-6 flex-1 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="font-satoshi font-bold uppercase text-xs tracking-widest flex items-center gap-2 group-hover:text-[var(--accent-red)] transition-colors w-fit">
                  Read <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

    </div>
  );
}
