import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: "Fashion Blog & Editorial",
  description: "Discover the latest trends in Pakistani fashion, abayas, and custom apparel with the Marshi Collection editorial team.",
};

const blogPosts = [
  {
    id: 1,
    title: "Top 5 Abaya Trends for 2024 in Pakistan",
    category: "Style Guide",
    date: "July 12, 2024",
    excerpt: "Explore the ultimate guide to the most elegant and modest abaya styles sweeping across Karachi and Lahore this season.",
    image: "https://images.unsplash.com/photo-1589810635657-232948472d98?q=80&w=1500&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "How to Style Custom T-Shirts for 14 August",
    category: "Custom Apparel",
    date: "July 05, 2024",
    excerpt: "Independence day is around the corner. Discover how to create the perfect personalized outfit to celebrate Pakistan in style.",
    image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=1500&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "The Essential Jewelry Care Guide",
    category: "Care Guide",
    date: "June 28, 2024",
    excerpt: "Keep your premium jewelry looking brand new with our expert maintenance tips and cleaning secrets.",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1500&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Choosing the Right Fabric for Pakistani Summers",
    category: "Fabrics",
    date: "June 15, 2024",
    excerpt: "From breathable lawn to luxurious silk, we break down the best fabrics for surviving the intense summer heat.",
    image: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=1500&auto=format&fit=crop"
  }
];

export default function BlogPage() {
  return (
    <div className="relative min-h-screen w-full pt-32 pb-24 px-6 md:px-12">
      
      {/* Blog Hero */}
      <section className="mb-24 mt-12">
        <h1 className="font-clash font-bold uppercase text-[12vw] md:text-[8vw] leading-[0.85] tracking-tighter text-[var(--text-primary)]">
          The <span className="text-[var(--accent-red)]">Editorial</span>
        </h1>
        <p className="font-satoshi text-xl md:text-2xl opacity-80 mt-8 max-w-2xl font-medium">
          Insights, trends, and styling guides from the forefront of Pakistani fashion.
        </p>
      </section>

      {/* Featured Post */}
      <section className="mb-24">
        <article className="group cursor-pointer grid grid-cols-1 lg:grid-cols-2 gap-0 border-2 border-[var(--text-primary)] relative overflow-hidden">
          <div className="relative h-[400px] lg:h-[600px] w-full overflow-hidden border-b-2 lg:border-b-0 lg:border-r-2 border-[var(--text-primary)]">
            <img 
              src={blogPosts[0].image} 
              alt={blogPosts[0].title} 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
          </div>
          <div className="bg-[var(--bg-base)] p-8 md:p-16 flex flex-col justify-center relative">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[var(--accent-red)] text-white font-satoshi font-bold uppercase tracking-widest text-xs px-3 py-1">
                {blogPosts[0].category}
              </span>
              <span className="font-satoshi font-medium opacity-60 text-sm">
                {blogPosts[0].date}
              </span>
            </div>
            <h2 className="font-clash font-bold text-4xl md:text-6xl uppercase tracking-tighter leading-[0.9] mb-8 group-hover:text-[var(--accent-red)] transition-colors">
              {blogPosts[0].title}
            </h2>
            <p className="font-satoshi text-lg md:text-xl opacity-80 mb-12">
              {blogPosts[0].excerpt}
            </p>
            <Link href={`/blog/${blogPosts[0].id}`} className="font-clash font-bold uppercase text-xl flex items-center gap-2 hover:opacity-70 transition-opacity">
              Read Article <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </article>
      </section>

      {/* Article Grid */}
      <section>
        <div className="flex justify-between items-end border-b-2 border-[var(--text-primary)] pb-6 mb-12">
          <h2 className="font-clash font-bold uppercase text-4xl tracking-tighter">Latest Posts</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <article key={post.id} className="group cursor-pointer flex flex-col border border-[var(--text-primary)]/20 hover:border-[var(--text-primary)] transition-colors duration-300">
              <div className="w-full aspect-[4/3] overflow-hidden relative border-b border-[var(--text-primary)]/20">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-[var(--bg-base)] text-[var(--text-primary)] font-satoshi font-bold uppercase tracking-widest text-xs px-3 py-1">
                  {post.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1 bg-[var(--bg-base)]">
                <span className="font-satoshi text-xs font-medium opacity-60 mb-3">{post.date}</span>
                <h3 className="font-clash font-bold text-2xl uppercase leading-tight mb-4 group-hover:text-[var(--accent-red)] transition-colors">
                  {post.title}
                </h3>
                <p className="font-satoshi opacity-80 mb-6 flex-1">
                  {post.excerpt}
                </p>
                <Link href={`/blog/${post.id}`} className="font-satoshi font-bold uppercase text-sm tracking-widest flex items-center gap-2 group-hover:text-[var(--accent-red)] transition-colors">
                  Read <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

    </div>
  );
}
