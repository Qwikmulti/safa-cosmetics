import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts, Post } from "../../lib/posts";

export const metadata: Metadata = {
  title: "Beauty Journal",
  description:
    "Tips, trends and tutorials from the SAFA Hair & Cosmetics team.",
};

const posts: Post[] = getAllPosts();

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24">
      {/* Header with image */}
      <section className="relative py-24 px-6 border-b border-[#2a2a2a] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=1800&q=60&auto=format&fit=crop"
            alt="Beauty journal"
            fill
            className="object-cover opacity-15"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/50 to-[#0a0a0a]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <span className="text-[#e91e8c] text-xs tracking-widest uppercase mb-4 block">
            Beauty Tips & Trends
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h1
              className="text-white text-5xl md:text-6xl font-black leading-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              The Beauty
              <br />
              Journal
            </h1>
            <p className="text-[#888888] max-w-sm leading-relaxed">
              Expert tips, how-tos, and the latest trends in Afro hair care and
              beauty — curated by our in-store team.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Featured post */}
        <div className="mb-16">
          <Link
            href={`/blog/${featured.slug}`}
            className="rounded-3xl overflow-hidden border border-[#2a2a2a] hover:border-[#e91e8c]/40 transition-all duration-300 group block"
          >
            <div className="grid lg:grid-cols-2">
              <div className="relative aspect-video lg:aspect-auto min-h-72 overflow-hidden">
                <Image
                  src={featured.img}
                  alt={featured.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width:1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <span
                  className="absolute top-5 left-5 text-white text-xs tracking-widest uppercase px-3 py-1.5 rounded-full"
                  style={{ background: `${featured.catColor}cc` }}
                >
                  {featured.category}
                </span>
              </div>
              <div className="p-8 md:p-12 bg-[#111111] flex flex-col justify-center">
                <div className="flex items-center gap-4 text-[#888888] text-xs mb-4">
                  <span>{featured.date}</span>
                  <span>·</span>
                  <span>{featured.readTime}</span>
                  <span className="text-[#e91e8c] ml-auto">Featured</span>
                </div>
                <h2
                  className="text-white text-2xl md:text-3xl font-black mb-4 group-hover:text-[#e91e8c] transition-colors"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {featured.title}
                </h2>
                <p className="text-[#888888] leading-relaxed mb-6">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-2 text-[#e91e8c] text-sm">
                  <span>Read Article</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Article grid */}
        <h2
          className="text-white text-2xl font-bold mb-8"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          More Articles
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block"
            >
              <article className="bg-[#111111] border border-[#2a2a2a] rounded-2xl overflow-hidden hover:border-[#e91e8c]/40 transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
                <div className="relative aspect-video overflow-hidden">
                <Image
                  src={post.img}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-600"
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <span
                  className="absolute top-4 left-4 text-white text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full"
                  style={{ background: `${post.catColor}cc` }}
                >
                  {post.category}
                </span>
                </div>
                <div className="p-5">
                <div className="flex items-center gap-3 text-[#888888] text-xs mb-3">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h3
                  className="text-white font-bold mb-2 group-hover:text-[#e91e8c] transition-colors leading-snug"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {post.title}
                </h3>
                <p className="text-[#888888] text-sm leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-2 text-[#e91e8c] text-xs">
                  <span>Read More</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-20 relative rounded-3xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1400&q=60&auto=format&fit=crop"
            alt="Beauty products"
            fill
            className="object-cover opacity-15"
            sizes="100vw"
          />
          <div className="relative z-10 bg-gradient-to-r from-[#e91e8c]/10 to-[#c9a84c]/10 border border-[#e91e8c]/20 rounded-3xl p-12 text-center">
            <h3
              className="text-white text-3xl font-black mb-3"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Stay in the Know
            </h3>
            <p className="text-[#888888] mb-8 max-w-md mx-auto">
              Get beauty tips, new arrivals, and exclusive offers delivered to
              your inbox.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3.5 bg-[#e91e8c] text-white text-sm tracking-widest uppercase rounded-full hover:bg-[#ff4db8] transition-colors"
            >
              Subscribe via Contact Form
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
