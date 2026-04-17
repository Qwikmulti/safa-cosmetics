export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  catColor: string;
  img: string;
  content?: string;
};

export const posts: Post[] = [
  {
    slug: "how-to-care-for-4c-hair",
    title: "The Ultimate Guide to Caring for 4C Hair",
    excerpt:
      "Type 4C hair is the most tightly coiled and requires consistent moisture and gentle handling. Here's everything you need to know.",
    category: "Hair Care",
    readTime: "5 min read",
    date: "March 15, 2025",
    catColor: "#4caf7d",
    img: "/9.jpg",
    content:
      "4C hair loves moisture. Use a leave-in, seal with oil, and avoid over-manipulation. Sleep on silk and deep condition weekly.",
  },
  {
    slug: "best-wigs-beginners",
    title: "Best Wigs for Beginners: Where to Start",
    excerpt:
      "Thinking about trying a wig for the first time? We break down the different types, how to choose the right one, and how to style it.",
    category: "Wigs & Weaves",
    readTime: "6 min read",
    date: "March 5, 2025",
    catColor: "#e91e8c",
    img: "/3.webp",
    content:
      "Start with a lace front or closure wig in a natural colour. Practice blending and use gentle adhesives or wig grips for comfort.",
  },
  {
    slug: "afro-hair-moisture-tips",
    title: "5 Ways to Keep Afro Hair Moisturised All Week",
    excerpt:
      "Moisture retention is the foundation of healthy afro hair. Discover our top tips for locking in hydration and reducing breakage.",
    category: "Natural Hair",
    readTime: "4 min read",
    date: "Feb 20, 2025",
    catColor: "#c9a84c",
    img: "/k.jpg",
    content:
      "Use water-based moisturisers, seal with oils, protective styles, and trim regularly to maintain healthy ends.",
  },
  {
    slug: "foundation-for-dark-skin-tones",
    title: "Finding the Perfect Foundation for Deep Skin Tones",
    excerpt:
      "The beauty industry has come a long way in inclusive shade ranges. We've curated the best foundations available in-store for deeper complexions.",
    category: "Makeup",
    readTime: "5 min read",
    date: "Feb 10, 2025",
    catColor: "#ef5350",
    img: "/g.jpg",
    content:
      "Look for foundations with warm undertones and test along the jawline in natural light. Try samples or mixers to get the perfect match.",
  },
  {
    slug: "braiding-hair-guide",
    title: "Braiding Hair 101: Kanekalon, Marley & More",
    excerpt:
      "Not all braiding hair is the same. Learn about different textures, weights, and techniques to achieve your desired style.",
    category: "Hair Extensions",
    readTime: "7 min read",
    date: "Jan 28, 2025",
    catColor: "#ab47bc",
    img: "/8.webp",
    content:
      "Choose quality fibres for longevity. Pre-stretch and condition braiding hair, and store unused bundles in a cool, dry place.",
  },
  {
    slug: "skincare-routine-melanin-rich-skin",
    title: "Building a Skincare Routine for Melanin-Rich Skin",
    excerpt:
      "From hyperpigmentation to SPF, here's how to build a simple but effective routine that works for darker skin tones.",
    category: "Skincare",
    readTime: "6 min read",
    date: "Jan 12, 2025",
    catColor: "#64b5f6",
    img: "/f.jpg",
    content:
      "Use gentle exfoliation, targeted serums for dark spots, and SPF daily. Patch test new products and introduce actives slowly.",
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug) || null;
}

export function getAllPosts() {
  return posts;
}
