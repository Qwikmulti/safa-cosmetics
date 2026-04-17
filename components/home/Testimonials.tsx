"use client";

import { useState } from "react";
import Image from "next/image";

const reviews = [
  {
    name: "Amara T.",
    initials: "AT",
    rating: 5,
    text: "Great customer care, friendly staff, affordable products. Definitely my go-to place for hair products in Chatham.",
    source: "Google Review",
    color: "#e91e8c",
  },
  {
    name: "Precious O.",
    initials: "PO",
    rating: 5,
    text: "Amazing selection of hair products! Found exactly what I needed. The staff are so knowledgeable and helpful.",
    source: "Google Review",
    color: "#c9a84c",
  },
  {
    name: "Sandra M.",
    initials: "SM",
    rating: 5,
    text: "Best beauty shop in Chatham by far. They always have everything in stock and the prices are unbeatable.",
    source: "Google Review",
    color: "#4caf7d",
  },
  {
    name: "Fatima K.",
    initials: "FK",
    rating: 5,
    text: "Love this shop! Such a wide range of afro hair products. The staff go above and beyond to help you.",
    source: "Google Review",
    color: "#ab47bc",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-28 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background beauty image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=1800&q=60&auto=format&fit=crop"
          alt="Beauty background"
          fill
          className="object-cover object-center opacity-5"
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#e91e8c] text-xs tracking-widest uppercase mb-3 block">
            Customer Love
          </span>
          <h2
            className="text-white text-4xl md:text-5xl font-black"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            What Our Customers Say
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — active review */}
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-3xl p-10 relative">
            {/* Big quote mark */}
            <div className="absolute top-6 right-8 text-8xl text-[#e91e8c]/10 font-serif leading-none select-none">
              "
            </div>

            <div className="flex gap-1 mb-6">
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <span key={i} className="text-[#c9a84c] text-xl">
                    ★
                  </span>
                ))}
            </div>

            <blockquote
              className="text-white text-xl md:text-2xl leading-relaxed mb-8 relative z-10"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              "{reviews[active].text}"
            </blockquote>

            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm"
                style={{ background: reviews[active].color }}
              >
                {reviews[active].initials}
              </div>
              <div>
                <p className="text-white font-semibold">
                  {reviews[active].name}
                </p>
                <p className="text-[#888888] text-sm">
                  ★★★★★ {reviews[active].source}
                </p>
              </div>
            </div>

            {/* Dots */}
            <div className="flex gap-3 mt-8">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`transition-all duration-300 rounded-full ${i === active ? "w-8 h-2 bg-[#e91e8c]" : "w-2 h-2 bg-[#2a2a2a] hover:bg-[#888888]"}`}
                />
              ))}
            </div>
          </div>

          {/* Right — image + stats */}
          <div className="flex flex-col gap-6">
            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden aspect-video">
              <Image
                src="./1.webp"
                alt="Happy beauty customer"
                fill
                className="object-cover object-center"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#e91e8c]/20 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 bg-black/70 backdrop-blur-sm rounded-xl px-4 py-2">
                <p className="text-white text-sm font-medium">
                  4.8 ★ on Google
                </p>
                <p className="text-[#888888] text-xs">
                  Based on verified reviews
                </p>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { num: "4.8", label: "Avg Rating" },
                { num: "9+", label: "Reviews" },
                { num: "100%", label: "Recommend" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-5 text-center hover:border-[#e91e8c]/30 transition-colors"
                >
                  <p
                    className="text-2xl font-black text-white"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {s.num}
                  </p>
                  <p className="text-[#888888] text-xs tracking-widest mt-1">
                    {s.label}
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
