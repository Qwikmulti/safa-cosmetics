import Link from "next/link";
import Image from "next/image";

const hours = [
  { day: "Monday", time: "9:00 AM – 7:00 PM" },
  { day: "Tuesday", time: "9:00 AM – 7:00 PM" },
  { day: "Wednesday", time: "9:00 AM – 7:00 PM" },
  { day: "Thursday", time: "9:00 AM – 7:00 PM" },
  { day: "Friday", time: "9:00 AM – 7:00 PM" },
  { day: "Saturday", time: "9:00 AM – 7:00 PM" },
  { day: "Sunday", time: "10:00 AM – 5:00 PM" },
];

export default function StoreSection() {
  return (
    <section className="py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Full-width store image banner */}
        <div className="relative rounded-3xl overflow-hidden mb-12 aspect-[21/6]">
          {/* <Image
                src="./k.jpg"
            alt="Beauty store interior"
            fill
            className="object-cover object-center"
            sizes="100vw"
          /> */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex items-center px-10 md:px-16">
            <div>
              <p className="text-[#e91e8c] text-xs tracking-widest uppercase mb-3">
                Visit In Person
              </p>
              <h2
                className="text-white text-3xl md:text-5xl font-black leading-tight"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Experience SAFA
                <br />
                In-Store
              </h2>
              <p className="text-white/70 mt-3 text-sm max-w-xs hidden md:block">
                Over 1,000 products waiting for you at The Pentagon Shopping
                Centre, Chatham.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* CTA card */}
          <div className="relative bg-[#e91e8c] rounded-3xl p-10 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-white/5" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/5" />

            {/* Small product mosaic */}
            <div className="absolute top-6 right-6 grid grid-cols-2 gap-1.5 opacity-40 w-24">
              {[
                "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=80&q=60&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=80&q=60&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1556760544-74068565f05c?w=80&q=60&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=80&q=60&auto=format&fit=crop",
              ].map((src, i) => (
                <div
                  key={i}
                  className="w-11 h-11 rounded-lg overflow-hidden relative"
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                </div>
              ))}
            </div>

            <div className="relative z-10">
              <h3
                className="text-white text-3xl font-black leading-tight mb-4"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Come Experience SAFA In-Store
              </h3>
              <p className="text-white/80 leading-relaxed mb-8">
                Browse 1000+ products, get expert advice from our friendly team,
                and discover your next beauty obsession.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  { icon: "📍", text: "161 High Street, Chatham ME4 4BA" },
                  {
                    icon: "📞",
                    text: "+44 1634 790439",
                    href: "tel:+441634790439",
                  },
                  { icon: "🏬", text: "Inside The Pentagon Shopping Centre" },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-3 text-white text-sm"
                  >
                    <span className="text-base">{item.icon}</span>
                    {item.href ? (
                      <a href={item.href} className="hover:underline">
                        {item.text}
                      </a>
                    ) : (
                      <span>{item.text}</span>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://maps.google.com/?q=161+High+Street+Chatham+ME4+4BA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-[#e91e8c] text-xs tracking-widest uppercase rounded-full font-semibold hover:bg-[#faf5f0] transition-colors"
                >
                  Get Directions
                </a>
                <Link
                  href="/contact"
                  className="px-6 py-3 border border-white/30 text-white text-xs tracking-widest uppercase rounded-full hover:bg-white/10 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-3xl p-10">
            <span className="text-[#e91e8c] text-xs tracking-widest uppercase mb-4 block">
              Opening Hours
            </span>
            <h3
              className="text-white text-2xl font-bold mb-8"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              We're Open 7 Days a Week
            </h3>
            <div className="space-y-2">
              {hours.map((h) => {
                const today = new Date().toLocaleDateString("en-GB", {
                  weekday: "long",
                });
                const isToday = today === h.day;
                return (
                  <div
                    key={h.day}
                    className={`flex items-center justify-between py-3 px-4 rounded-xl transition-colors ${isToday ? "bg-[#e91e8c]/10 border border-[#e91e8c]/20" : "hover:bg-[#2a2a2a]/50"}`}
                  >
                    <div className="flex items-center gap-3">
                      {isToday && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#e91e8c] animate-pulse" />
                      )}
                      <span
                        className={`text-sm ${isToday ? "text-white font-medium" : "text-[#888888]"}`}
                      >
                        {h.day}
                      </span>
                      {isToday && (
                        <span className="text-[#e91e8c] text-xs tracking-widest">
                          Today
                        </span>
                      )}
                    </div>
                    <span
                      className={`text-sm ${isToday ? "text-[#e91e8c]" : "text-[#888888]"}`}
                    >
                      {h.time}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
