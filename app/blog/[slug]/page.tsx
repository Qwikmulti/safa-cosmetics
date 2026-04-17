import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getPostBySlug } from "../../../lib/posts";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const slug = (await params).slug;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article" };
  return { title: post.title, description: post.excerpt };
}
export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const post = getPostBySlug(slug);
  if (!post) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] pt-24 text-center text-white">
        <p className="py-40">Article not found.</p>
        <Link href="/blog" className="text-[#e91e8c] underline">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24">
      <section className="relative py-20 px-6 border-b border-[#2a2a2a] overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1
            className="text-white text-4xl md:text-5xl font-black mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {post.title}
          </h1>
          <p className="text-[#888888]">{post.date} · {post.readTime}</p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="rounded-2xl overflow-hidden mb-8">
          <div className="relative aspect-video">
            <Image src={post.img} alt={post.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
        </div>

        <article className="prose prose-invert max-w-none text-[#e6e6e6]">
          <p>{post.content}</p>
        </article>
      </div>
    </div>
  );
}
