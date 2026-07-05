"use client";
import Image from "next/image";

import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

import { cn } from "@/lib/utils";
import { Product } from "@/data/products";

interface CarouselProps {
  products: Product[];
  className?: string;
  showPagination?: boolean;
  showNavigation?: boolean;
  loop?: boolean;
  autoplay?: boolean;
  spaceBetween?: number;
}

export function Carousel({
  products,
  className,
  showPagination = true,
  showNavigation = true,
  loop = true,
  autoplay = true,
  spaceBetween = 40,
}: CarouselProps) {
  const css = `
  .Carousal_001 {
    padding-bottom: 50px !important;
  }
  .swiper-button-next, .swiper-button-prev {
    color: var(--text-primary) !important;
  }
  .swiper-pagination-bullet-active {
    background: var(--accent-red) !important;
  }
  `;
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.5,
      }}
      className={cn("w-full relative py-12 px-6 overflow-hidden", className)}
    >
      <style>{css}</style>

      <div className="flex justify-between items-end mb-12 max-w-7xl mx-auto">
        <h2 className="font-clash font-bold uppercase text-[6vw] md:text-[4vw] tracking-tighter leading-none text-[var(--text-primary)]">
          Curated <span className="text-[var(--accent-red)]">Selection</span>
        </h2>
      </div>

      <Swiper
        spaceBetween={spaceBetween}
        autoplay={
          autoplay
            ? {
                delay: 2500,
                disableOnInteraction: false,
              }
            : false
        }
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={loop}
        slidesPerView={1.5}
        breakpoints={{
          768: { slidesPerView: 2.5 },
          1024: { slidesPerView: 3.5 }
        }}
        coverflowEffect={{
          rotate: 0,
          slideShadows: false,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={
          showPagination
            ? {
                clickable: true,
              }
            : false
        }
        navigation={
          showNavigation
            ? {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }
            : false
        }
        className="Carousal_001 w-full max-w-7xl mx-auto"
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="!h-[450px] w-full group relative cursor-pointer overflow-hidden border border-[var(--text-primary)]/20">
            <Image
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              src={product.image}
              alt={product.name}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--text-primary)] to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 p-6 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 w-full text-[var(--bg-base)]">
              <div className="text-xs font-satoshi uppercase tracking-widest text-[var(--accent-red)] mb-2">{product.category}</div>
              <h3 className="font-clash font-bold text-2xl uppercase">{product.name}</h3>
              <p className="font-satoshi font-medium mt-2">LKR {product.price}</p>
            </div>
          </SwiperSlide>
        ))}
        {showNavigation && (
          <div>
            <div className="swiper-button-next after:hidden bg-[var(--bg-base)] w-12 h-12 rounded-full border border-[var(--text-primary)] flex items-center justify-center hover:bg-[var(--text-primary)] hover:text-[var(--bg-base)] transition-colors shadow-lg !right-4">
              <ChevronRightIcon className="h-6 w-6" />
            </div>
            <div className="swiper-button-prev after:hidden bg-[var(--bg-base)] w-12 h-12 rounded-full border border-[var(--text-primary)] flex items-center justify-center hover:bg-[var(--text-primary)] hover:text-[var(--bg-base)] transition-colors shadow-lg !left-4">
              <ChevronLeftIcon className="h-6 w-6" />
            </div>
          </div>
        )}
      </Swiper>
    </motion.div>
  );
}
