"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  "All",
  "Wigs & Weaves",
  "Hair Extensions",
  "Natural Hair Care",
  "Braiding Hair",
  "Skincare",
  "Makeup",
  "Hair Tools",
  "Body Care",
];

const products = [
  {
    id: 1,
    name: "Full Lace Front Wig – Natural Black",
    cat: "Wigs & Weaves",
    price: "£45.99",
    tag: "Bestseller",
    tagColor: "#e91e8c",
    img: "/3.webp",
  },
  {
    id: 2,
    name: "Closure Wig 4x4 Brazilian Wave",
    cat: "Wigs & Weaves",
    price: "£55.00",
    tag: "Popular",
    tagColor: "#e91e8c",
    img: "/2.webp",
  },
  {
    id: 3,
    name: "180g Clip-In Hair Extensions",
    cat: "Hair Extensions",
    price: "£18.99",
    tag: "In Stock",
    tagColor: "#c9a84c",
    img: "/7.webp",
  },
  {
    id: 4,
    name: 'Tape-In Remy Extensions 20"',
    cat: "Hair Extensions",
    price: "£24.99",
    tag: "New",
    tagColor: "#c9a84c",
    img: "/6.webp",
  },
  {
    id: 5,
    name: "Safa Organics Hair Growth Oil 236ml",
    cat: "Natural Hair Care",
    price: "£8.99",
    tag: "Bestseller",
    tagColor: "#4caf7d",
    img: "/k.jpg",
  },
  {
    id: 6,
    name: "Shea Moisture Curl Enhancing Smoothie",
    cat: "Natural Hair Care",
    price: "£10.99",
    tag: "Popular",
    tagColor: "#4caf7d",
    img: "/9.jpg",
  },
  {
    id: 7,
    name: "African Pride Moisture Miracle",
    cat: "Natural Hair Care",
    price: "£7.99",
    tag: "In Stock",
    tagColor: "#4caf7d",
    img: "/a.jpg",
  },
  {
    id: 8,
    name: "X-Pression Braiding Hair 165g",
    cat: "Braiding Hair",
    price: "£5.99",
    tag: "In Stock",
    tagColor: "#ab47bc",
    img: "/8.webp",
  },
  {
    id: 9,
    name: "Kanekalon Jumbo Braid Pack",
    cat: "Braiding Hair",
    price: "£4.49",
    tag: "Popular",
    tagColor: "#ab47bc",
    img: "/2.webp",
  },
  {
    id: 10,
    name: "Black Opal Even True Foundation",
    cat: "Makeup",
    price: "£9.99",
    tag: "Bestseller",
    tagColor: "#ef5350",
    img: "/f.jpg",
  },
  {
    id: 11,
    name: "Vital Matte Lip Colour",
    cat: "Makeup",
    price: "£4.99",
    tag: "In Stock",
    tagColor: "#ef5350",
    img: "/g.jpg",
  },
  {
    id: 12,
    name: "Superior Cover Finished Powder",
    cat: "Makeup",
    price: "£6.49",
    tag: "New",
    tagColor: "#ef5350",
    img: "/d.jpg",
  },
  {
    id: 13,
    name: "Palmer's Cocoa Butter Formula",
    cat: "Skincare",
    price: "£6.99",
    tag: "Bestseller",
    tagColor: "#64b5f6",
    img: "/5.webp",
  },
  {
    id: 14,
    name: "Ambi Fade Cream Oily Skin",
    cat: "Skincare",
    price: "£8.49",
    tag: "In Stock",
    tagColor: "#64b5f6",
    img: "/4.webp",
  },
  {
    id: 15,
    name: "Cantu Shea Butter Leave-In",
    cat: "Natural Hair Care",
    price: "£9.49",
    tag: "Popular",
    tagColor: "#4caf7d",
    img: "/9.jpg",
  },
  {
    id: 16,
    name: "Babyliss Pro Ceramic Hair Dryer",
    cat: "Hair Tools",
    price: "£29.99",
    tag: "New",
    tagColor: "#ff7043",
    img: "/k.jpg",
  },
  {
    id: 17,
    name: "Wide Tooth Detangling Comb Set",
    cat: "Hair Tools",
    price: "£3.99",
    tag: "In Stock",
    tagColor: "#ff7043",
    img: "/7.webp",
  },
  {
    id: 18,
    name: "Shea Butter Body Lotion 500ml",
    cat: "Body Care",
    price: "£5.99",
    tag: "Popular",
    tagColor: "#ffca28",
    img: "/a.jpg",
  },
];

export default function ProductsClient() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) => {
    const matchesCat = activeCategory === "All" || p.cat === activeCategory;
    const matchesSearch =
      search === "" ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.cat.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24">
      {/* Hero with background image */}
      <div className="relative py-20 px-6 border-b border-[#2a2a2a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/1.webp"
            alt="Products background"
            fill
            className="object-cover opacity-10"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <span className="text-[#e91e8c] text-xs tracking-widest uppercase mb-3 block">
            Our Range
          </span>
          <h1
            className="text-white text-5xl md:text-6xl font-black mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            All Products
          </h1>
          <p className="text-[#888888] text-lg max-w-xl">
            Explore our curated selection of 1000+ premium beauty products for
            every hair type and skin tone.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Search + Filter */}
        <div className="flex flex-col lg:flex-row gap-6 mb-10">
          <div className="relative flex-1 max-w-md">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#888888] text-sm">
              🔍
            </span>
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-full pl-11 pr-4 py-3 text-white placeholder-[#888888] text-sm focus:outline-none focus:border-[#e91e8c] transition-colors"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs tracking-widest uppercase transition-all duration-200 ${activeCategory === cat ? "bg-[#e91e8c] text-white" : "border border-[#2a2a2a] text-[#888888] hover:border-[#e91e8c] hover:text-white"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <p className="text-[#888888] text-sm mb-8">
          Showing <span className="text-white">{filtered.length}</span> products
          {activeCategory !== "All" && (
            <span>
              {" "}
              in <span className="text-[#e91e8c]">{activeCategory}</span>
            </span>
          )}
        </p>

        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-[#888888] text-lg">No products found.</p>
            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("All");
              }}
              className="mt-4 text-[#e91e8c] text-sm underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((product) => (
              <div key={product.id} className="group">
                <div className="bg-[#111111] border border-[#2a2a2a] rounded-2xl overflow-hidden hover:border-[#e91e8c]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/50">
                  {/* Product image */}
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={product.img}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    {/* <span
                      className="absolute top-3 left-3 text-white text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full"
                      style={{ background: `${product.tagColor}dd` }}
                    >
                      {product.tag}
                    </span> */}
                  </div>
                  <div className="p-4">
                    <span className="text-[#888888] text-[10px] tracking-widest uppercase">
                      {product.cat}
                    </span>
                    <h3 className="text-white text-sm font-medium mt-1 mb-3 leading-snug group-hover:text-[#e91e8c] transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      {/* <span className="text-[#c9a84c] font-bold">{product.price}</span> */}
                      <Link
                        href="/contact"
                        className="text-[10px] tracking-widest uppercase text-[#888888] hover:text-white transition-colors border border-[#2a2a2a] hover:border-[#e91e8c] px-2.5 py-1 rounded-full"
                      >
                        Enquire
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-20 relative rounded-3xl overflow-hidden">
          <Image
            src="/5.webp"
            alt="Store"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="relative z-10 bg-[#1a1a1a]/80 backdrop-blur-sm border border-[#2a2a2a] rounded-3xl p-10 text-center">
            <h3
              className="text-white text-2xl font-bold mb-3"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Can't Find What You Need?
            </h3>
            <p className="text-[#888888] mb-6">
              Our in-store selection is much larger. Visit us or call for
              specific product enquiries.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="px-6 py-3 bg-[#e91e8c] text-white text-xs tracking-widest uppercase rounded-full hover:bg-[#ff4db8] transition-colors"
              >
                Contact Us
              </Link>
              <a
                href="tel:+441634790439"
                className="px-6 py-3 border border-[#2a2a2a] text-white text-xs tracking-widest uppercase rounded-full hover:border-[#e91e8c] transition-colors"
              >
                Call +44 1634 790439
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
