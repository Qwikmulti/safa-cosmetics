"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

const products = [
  {
    name: "Mink Lace Front Wig",
    category: "Wigs",
    price: "£45.99",
    tag: "Bestseller",
    tagColor: "#e91e8c",
    img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&q=80&auto=format&fit=crop",
  },
  {
    name: "Jamaican Black Castor Oil",
    category: "Hair Care",
    price: "£8.99",
    tag: "Popular",
    tagColor: "#c9a84c",
    img: "/k.jpg",
  },
  {
    name: "Vital Long Lasting Lip Colour",
    category: "Makeup",
    price: "£4.99",
    tag: "In Stock",
    tagColor: "#ef5350",
    img: "/g.jpg",
  },
  {
    name: "Pure Matte Foundation",
    category: "Makeup",
    price: "£9.99",
    tag: "Popular",
    tagColor: "#ab47bc",
    img: "/f.jpg",
  },
  {
    name: "Shea Moisture Curl Enhancer",
    category: "Natural Hair",
    price: "£10.99",
    tag: "New",
    tagColor: "#4caf7d",
    img: "/9.jpg",
  },
  {
    name: "Braiding Hair Extension",
    category: "Extensions",
    price: "£5.99",
    tag: "In Stock",
    tagColor: "#64b5f6",
    img: "/8.webp",
  },
];

export default function FeaturedProducts() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    refs.current.forEach((el) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add("visible");
            obs.disconnect();
          }
        },
        { threshold: 0.1 },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[#e91e8c] text-xs tracking-widest uppercase mb-3 block">
              Handpicked
            </span>
            <h2
              className="text-white text-4xl md:text-5xl font-black leading-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Featured Products
            </h2>
          </div>
          <Link
            href="/products"
            className="text-[#888888] text-sm tracking-widest uppercase border-b border-[#2a2a2a] pb-1 hover:text-white hover:border-white transition-all self-start md:self-auto"
          >
            See All Products →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <div
              key={product.name}
              ref={(el) => {
                refs.current[i] = el;
              }}
              className="aos group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="bg-[#111111] border border-[#2a2a2a] rounded-2xl overflow-hidden hover:border-[#e91e8c]/40 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#e91e8c]/5">
                {/* Product image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.img}
                    alt={product.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-600"
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  {/* <span
                    className="absolute top-3 left-3 text-white text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full"
                    style={{ background: `${product.tagColor}dd` }}
                  >
                    {product.tag}
                  </span> */}
                </div>

                <div className="p-5">
                  <span className="text-[#888888] text-xs tracking-widest uppercase">
                    {product.category}
                  </span>
                  <h3 className="text-white font-semibold mt-1 mb-3 group-hover:text-[#e91e8c] transition-colors leading-snug">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    {/* <span className="text-[#c9a84c] font-bold text-lg">
                      {product.price}
                    </span> */}
                    <Link
                      href="/contact"
                      className="text-xs tracking-widest uppercase text-[#888888] hover:text-white transition-colors border border-[#2a2a2a] hover:border-[#e91e8c] px-3 py-1.5 rounded-full"
                    >
                      Enquire
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
