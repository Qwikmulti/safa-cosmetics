import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn the story behind SAFA Hair & Cosmetics, Chatham's premier Afro beauty destination founded in 2023.",
};

const values = [
  {
    icon: "💎",
    title: "Quality First",
    desc: "Every product we stock is carefully vetted for quality, authenticity, and effectiveness.",
  },
  {
    icon: "🌍",
    title: "Inclusive Beauty",
    desc: "We celebrate all hair textures and skin tones. Everyone deserves to feel beautiful.",
  },
  {
    icon: "🤝",
    title: "Community",
    desc: "We're proud to serve the Chatham community, supporting local beauty needs since 2023.",
  },
  {
    icon: "💰",
    title: "Affordability",
    desc: "Premium beauty products should be accessible to everyone, not just a select few.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24">
      {/* Hero with image */}
      <section className="relative py-28 px-6 border-b border-[#2a2a2a] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/5.webp"
            alt="Beauty store"
            fill
            className="object-cover opacity-15"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-[#0a0a0a]/40 to-[#0a0a0a]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="text-[#e91e8c] text-xs tracking-widest uppercase mb-4 block">
            Our Story
          </span>
          <h1
            className="text-white text-5xl md:text-6xl font-black mb-6 leading-tight"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Beauty for
            <br />
            <em className="not-italic text-[#c9a84c]">Every Story</em>
          </h1>
          <p className="text-[#888888] text-xl leading-relaxed max-w-2xl mx-auto">
            SAFA Hair & Cosmetics was founded with a simple but powerful belief:
            that everyone deserves access to quality beauty products that
            celebrate who they are.
          </p>
        </div>
      </section>

      {/* Story section with large image */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden aspect-[4/5]">
                <Image
                  src="/1.webp"
                  alt="SAFA beauty store interior"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              {/* Overlay badge */}
              <div className="absolute bottom-8 left-8 right-8 bg-black/70 backdrop-blur-md rounded-2xl p-5 border border-white/10">
                <p className="text-[#e91e8c] text-xs tracking-widest uppercase mb-1">
                  Est. 2023
                </p>
                <p
                  className="text-white font-bold"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  SAFA Hair & Cosmetics
                </p>
                <p className="text-[#888888] text-sm">
                  161 High Street, Chatham · The Pentagon Centre
                </p>
              </div>
            </div>

            {/* Text + stats */}
            <div>
              <span className="text-[#e91e8c] text-xs tracking-widest uppercase mb-4 block">
                How We Started
              </span>
              <h2
                className="text-white text-3xl md:text-4xl font-black mb-6"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Born from a Passion for Beauty
              </h2>
              <div className="space-y-5 text-[#888888] leading-relaxed mb-10">
                <p>
                  Founded in August 2023, SAFA Hair & Cosmetics opened its doors
                  at 161 High Street, Chatham with a bold vision: to become the
                  region's most comprehensive and welcoming destination for Afro
                  hair and beauty products.
                </p>
                <p>
                  Located inside The Pentagon Shopping Centre, we've quickly
                  grown into one of Chatham's largest Afro hair and cosmetics
                  shops — stocking over 1,000 products across hair care, wigs,
                  extensions, makeup, skincare, and more.
                </p>
                <p>
                  Our team is knowledgeable, passionate, and genuinely committed
                  to helping every customer find exactly what they need.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "2023", label: "Year Founded", sub: "Chatham, Kent" },
                  { num: "1000+", label: "Products", sub: "Always in stock" },
                  {
                    num: "4.8★",
                    label: "Google Rating",
                    sub: "Customer approved",
                  },
                  { num: "7", label: "Days Open", sub: "Every week" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-5 hover:border-[#e91e8c]/30 transition-colors"
                  >
                    <p
                      className="text-[#e91e8c] text-2xl font-black mb-1"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      {stat.num}
                    </p>
                    <p className="text-white text-sm font-medium">
                      {stat.label}
                    </p>
                    <p className="text-[#888888] text-xs mt-0.5">{stat.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values with image backdrop */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/4.webp"
            alt="Cosmetics background"
            fill
            className="object-cover opacity-5"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#111111]/95" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#e91e8c] text-xs tracking-widest uppercase mb-4 block">
              What We Stand For
            </span>
            <h2
              className="text-white text-4xl md:text-5xl font-black"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Our Values
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val) => (
              <div
                key={val.title}
                className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 text-center hover:border-[#e91e8c]/30 transition-colors"
              >
                <span className="text-3xl mb-4 block">{val.icon}</span>
                <h3 className="text-white font-semibold mb-3">{val.title}</h3>
                <p className="text-[#888888] text-sm leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image gallery strip */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#888888] text-xs tracking-widest uppercase text-center mb-8">
            Our Products & Store
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                src: "/g.jpg",
                label: "Makeup",
              },
              {
                src: "/k.jpg",
                label: "Hair Care",
              },
              {
                src: "/f.jpg",
                label: "Skincare",
              },
              {
                src: "/8.webp",
                label: "Braiding",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="relative aspect-square rounded-2xl overflow-hidden group"
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width:768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <span className="absolute bottom-3 left-3 text-white text-xs tracking-widest uppercase bg-black/50 px-2.5 py-1 rounded-full">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#111111]">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-white text-4xl font-black mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Ready to Experience SAFA?
          </h2>
          <p className="text-[#888888] text-lg mb-8">
            Visit us in-store or browse our products. We'd love to help you find
            your next beauty favourite.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/products"
              className="px-8 py-3.5 bg-[#e91e8c] text-white text-sm tracking-widest uppercase rounded-full hover:bg-[#ff4db8] transition-colors"
            >
              Shop Products
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 border border-[#2a2a2a] text-white text-sm tracking-widest uppercase rounded-full hover:border-[#e91e8c] transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
