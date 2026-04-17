"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="./1.webp"
          alt="Beauty salon"
          fill
          priority
          className="object-cover object-center opacity-25"
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
      </div>

      {/* Floating accent glows */}
      <div
        className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full opacity-20 pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, #e91e8c, transparent 70%)",
          animation: "float 8s ease-in-out infinite",
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT — Copy */}
          <div>
            <h1
              className={`font-display text-5xl sm:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight mb-6 transition-all duration-700 delay-100 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              <span className="text-white">Your Beauty,</span>
              <br />
              <span className="shimmer-text">Your Story.</span>
            </h1>

            <p
              className={`text-[#aaaaaa] text-lg leading-relaxed mb-8 max-w-lg transition-all duration-700 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              Chatham's premier destination for Afro hair care, wigs,
              extensions, skincare, and cosmetics. Everything you need to look
              and feel extraordinary.
            </p>

            <div
              className={`flex flex-wrap gap-4 transition-all duration-700 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <Link
                href="/products"
                className="px-8 py-3.5 bg-[#e91e8c] text-white text-sm tracking-widest uppercase rounded-full hover:bg-[#ff4db8] transition-all duration-300 pink-glow"
              >
                Shop Now
              </Link>
              <Link
                href="/about"
                className="px-8 py-3.5 border border-white/20 text-white text-sm tracking-widest uppercase rounded-full hover:border-[#e91e8c] hover:bg-white/5 transition-all duration-300"
              >
                Our Story
              </Link>
            </div>

            {/* Stats */}
            <div
              className={`flex gap-8 mt-12 pt-12 border-t border-white/10 transition-all duration-700 delay-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              {[
                { num: "1000+", label: "Products" },
                { num: "4.8★", label: "Google Rating" },
                { num: "2023", label: "Est. Chatham" },
              ].map((s) => (
                <div key={s.label}>
                  <p
                    className="text-white text-2xl font-bold"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {s.num}
                  </p>
                  <p className="text-[#888888] text-xs tracking-widest uppercase mt-0.5">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Image collage */}
          <div
            className={`hidden lg:block relative transition-all duration-1000 delay-400 ${loaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="relative h-[560px]">
              {/* Main tall image */}
              <div className="absolute left-0 top-0 w-[58%] h-full rounded-3xl overflow-hidden border border-white/10">
                <Image
                  src="./4.webp"
                  alt="Makeup and cosmetics"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  sizes="400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {/* <div className="absolute bottom-5 left-5">
                  <span className="bg-[#e91e8c] text-white text-[10px] tracking-widest uppercase px-3 py-1 rounded-full">
                    Makeup
                  </span>
                </div> */}
              </div>

              {/* Top right image */}
              <div className="absolute right-0 top-0 w-[38%] h-[47%] rounded-3xl overflow-hidden border border-white/10">
                <Image
                  src="./3.webp"
                  alt="Hair care products"
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                  sizes="250px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                {/* <div className="absolute bottom-4 left-4">
                  <span className="bg-[#c9a84c] text-white text-[10px] tracking-widest uppercase px-3 py-1 rounded-full">
                    Hair Care
                  </span>
                </div> */}
              </div>

              {/* Bottom right image */}
              <div className="absolute right-0 bottom-0 w-[38%] h-[47%] rounded-3xl overflow-hidden border border-white/10">
                <Image
                  src="./2.webp"
                  alt="Beauty salon wigs"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  sizes="250px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                {/* <div className="absolute bottom-4 left-4">
                  <span className="bg-[#9b59b6] text-white text-[10px] tracking-widest uppercase px-3 py-1 rounded-full">
                    Wigs
                  </span>
                </div> */}
              </div>

              {/* Floating rating badge */}
              {/* <div className="absolute -bottom-4 left-[30%] bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl px-5 py-3 shadow-2xl z-20">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#e91e8c] flex items-center justify-center text-white text-xs font-bold">
                    S
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">
                      4.8 ★★★★★
                    </p>
                    <p className="text-[#888888] text-[10px]">Google Reviews</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 z-10">
        <span className="text-[#888888] text-xs tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-[#888888] to-transparent" />
      </div>
    </section>
  );
}
