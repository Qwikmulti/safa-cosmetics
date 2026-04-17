"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const features = [
  {
    icon: "🏪",
    title: "Largest Selection",
    desc: "One of the largest Afro hair & cosmetics shops in Chatham with 1000+ products.",
  },
  {
    icon: "💎",
    title: "Premium Quality",
    desc: "Every product is carefully chosen for quality, authenticity, and real results.",
  },
  {
    icon: "💰",
    title: "Affordable Prices",
    desc: "Premium beauty at prices that are accessible to everyone — no compromise.",
  },
  {
    icon: "🤝",
    title: "Expert Advice",
    desc: "Friendly, knowledgeable staff who are passionate about helping you look amazing.",
  },
];

export default function WhyChooseUs() {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    itemRefs.current.forEach((el) => {
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
    <section className="py-28 bg-[#111111] relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#e91e8c]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT — image + quote */}
          <div className="relative">
            {/* Main image */}
            <div className="rounded-3xl overflow-hidden aspect-[3/4] relative">
              <Image
                src="./1.webp"
                alt="Beauty products in store"
                fill
                className="object-cover object-center"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>

            {/* Floating product images */}
            <div className="absolute -right-6 top-16 w-36 h-36 rounded-2xl overflow-hidden border-4 border-[#111111] shadow-2xl hidden md:block">
              <Image
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&q=80&auto=format&fit=crop"
                alt="Cosmetics products"
                fill
                className="object-cover"
                sizes="144px"
              />
            </div>

            <div className="absolute -right-6 bottom-24 w-36 h-36 rounded-2xl overflow-hidden border-4 border-[#111111] shadow-2xl hidden md:block">
              <Image
                src="./f.jpg"
                alt="Skincare"
                fill
                className="object-cover"
                sizes="144px"
              />
            </div>

            {/* Review pull-quote card */}
            <div className="absolute bottom-8 left-4 right-4 md:right-8 bg-black/80 backdrop-blur-md border border-white/10 rounded-2xl p-5">
              <div className="flex gap-1 mb-2">
                {Array(5)
                  .fill(null)
                  .map((_, i) => (
                    <span key={i} className="text-[#c9a84c] text-sm">
                      ★
                    </span>
                  ))}
              </div>
              <p
                className="text-white text-sm italic leading-relaxed"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                "Great customer care, friendly staff, affordable products.
                Definitely my go-to place for hair products."
              </p>
              <p className="text-[#888888] text-xs mt-2">— Google Review</p>
            </div>
          </div>

          {/* RIGHT — text + features */}
          <div>
            <span className="text-[#e91e8c] text-xs tracking-widest uppercase mb-3 block">
              Why SAFA?
            </span>
            <h2
              className="text-white text-4xl md:text-5xl font-black leading-tight mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Beauty Made
              <br />
              <em className="not-italic text-[#c9a84c]">Accessible</em>
            </h2>
            <p className="text-[#888888] text-lg leading-relaxed mb-10">
              At SAFA, we believe every person deserves access to premium beauty
              products. Since opening in Chatham in 2023, we've built a
              reputation for quality, value, and outstanding customer care.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feat, i) => (
                <div
                  key={feat.title}
                  ref={(el) => {
                    itemRefs.current[i] = el;
                  }}
                  className="aos bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 hover:border-[#e91e8c]/30 transition-colors"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <span className="text-2xl mb-3 block">{feat.icon}</span>
                  <h3 className="text-white font-semibold mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-[#888888] text-sm leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
