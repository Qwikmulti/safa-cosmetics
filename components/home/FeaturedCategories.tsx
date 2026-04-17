"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    title: "Wigs & Weaves",
    desc: "Full lace, frontal & closure wigs in every texture",
    count: "200+ styles",
    img: "/3.webp",
    color: "#e91e8c",
  },
  {
    title: "Hair Extensions",
    desc: "Clip-ins, tape-ins, sew-in & bonded extensions",
    count: "150+ options",
    img: "/7.webp",
    color: "#c9a84c",
  },
  {
    title: "Natural Hair Care",
    desc: "Butters, oils, leave-ins for natural textures",
    count: "100+ products",
    img: "/k.jpg",
    color: "#4caf7d",
  },
  {
    title: "Makeup",
    desc: "Foundation, lip colour, powder & eyeshadow",
    count: "300+ products",
    img: "/g.jpg",
    color: "#ef5350",
  },
  {
    title: "Skincare",
    desc: "Serums, moisturisers & brightening treatments",
    count: "120+ products",
    img: "/f.jpg",
    color: "#1abc9c",
  },
  {
    title: "Braiding Hair",
    desc: "Kanekalon, X-Pression, Jumbo Braid & more",
    count: "80+ types",
    img: "/8.webp",
    color: "#ab47bc",
  },
];

export default function FeaturedCategories() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const cards = el.querySelectorAll<HTMLElement>(".cat-card");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.opacity = "1";
            (e.target as HTMLElement).style.transform = "translateY(0)";
          }
        }),
      { threshold: 0.08 },
    );
    cards.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-[#e91e8c] text-xs tracking-[0.4em] uppercase mb-3">
              What We Offer
            </p>
            <h2
              className="text-white text-4xl sm:text-5xl font-black leading-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Shop by
              <br />
              Category
            </h2>
          </div>
          <Link
            href="/products"
            className="text-[#888888] text-sm tracking-widest uppercase hover:text-white transition-colors border-b border-[#2a2a2a] hover:border-white pb-1 self-start sm:self-auto"
          >
            View All Products →
          </Link>
        </div>

        {/* Grid: 2 large + 4 small */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <Link href="/products" key={cat.title}>
              <div
                className="cat-card group relative rounded-2xl overflow-hidden cursor-pointer"
                style={{
                  opacity: 0,
                  transform: "translateY(30px)",
                  transition: `opacity 0.6s ease ${i * 70}ms, transform 0.6s ease ${i * 70}ms`,
                  aspectRatio: i < 2 ? "4/3" : "1/1",
                }}
              >
                <Image
                  src={cat.img}
                  alt={cat.title}
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                {/* Hover color overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                  style={{ background: cat.color }}
                />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span
                    className="text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full text-white mb-3 inline-block"
                    style={{ background: `${cat.color}99` }}
                  >
                    {cat.count}
                  </span>
                  <h3
                    className="text-white font-bold text-lg leading-tight mb-1"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {cat.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-snug">
                    {cat.desc}
                  </p>
                  <div className="flex items-center gap-2 mt-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span
                      className="text-xs tracking-widest uppercase"
                      style={{ color: cat.color }}
                    >
                      Browse
                    </span>
                    <span style={{ color: cat.color }}>→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
