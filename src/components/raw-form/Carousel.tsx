"use client";
import React from "react";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { cn } from "@/lib/utils";
import { Product } from "@/data/products";
import { ProductCard } from "../ui/ProductCard";

interface CarouselProps {
  products: Product[];
  className?: string;
}

export function Carousel({ products, className }: CarouselProps) {
  const css = `
  .swiper-button-next, .swiper-button-prev {
    display: none !important;
  }
  `;
  
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={cn("w-full relative py-12 px-6 overflow-hidden", className)}
    >
      <style>{css}</style>

      <div className="flex justify-between items-end mb-12 max-w-7xl mx-auto">
        <h2 className="font-clash font-bold uppercase text-[6vw] md:text-[4vw] tracking-tighter leading-none text-[var(--text-primary)]">
          Curated <span className="text-[var(--accent-red)]">Selection</span>
        </h2>
        
        {/* Custom Navigation */}
        <div className="flex gap-4">
          <button className="swiper-button-prev-custom w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center hover:bg-[var(--accent-red)] hover:border-[var(--accent-red)] transition-colors text-white">
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <button className="swiper-button-next-custom w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center hover:bg-[var(--accent-red)] hover:border-[var(--accent-red)] transition-colors text-white">
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
      </div>

      <Swiper
        spaceBetween={24}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        speed={800}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.2 },
          1280: { slidesPerView: 4 },
        }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        className="w-full max-w-7xl mx-auto !overflow-visible"
        modules={[Autoplay, Navigation]}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="h-auto">
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}
