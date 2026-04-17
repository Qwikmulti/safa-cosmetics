"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactClient() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Failed to send message. Please call us directly.");
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24">
      {/* Header with image */}
      <section className="relative py-24 px-6 border-b border-[#2a2a2a] overflow-hidden">
        <div className="absolute inset-0">
            <Image
              src="/4.webp"
            alt="Contact background"
            fill
            className="object-cover opacity-15"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/40 to-[#0a0a0a]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <span className="text-[#e91e8c] text-xs tracking-widest uppercase mb-4 block">
            Get in Touch
          </span>
          <h1
            className="text-white text-5xl md:text-6xl font-black mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Contact Us
          </h1>
          <p className="text-[#888888] text-lg max-w-xl">
            Have a question, product enquiry, or just want to say hello? We'd
            love to hear from you.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left — Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Address */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6">
              <span className="text-2xl mb-3 block">📍</span>
              <h3 className="text-white font-semibold mb-2">Visit Our Store</h3>
              <p className="text-[#888888] text-sm leading-relaxed">
                161 High Street
                <br />
                Chatham, ME4 4BA
                <br />
                United Kingdom
                <br />
                <span className="text-[#888888] text-xs">
                  (Inside The Pentagon Shopping Centre)
                </span>
              </p>
              <a
                href="https://maps.google.com/?q=161+High+Street+Chatham+ME4+4BA"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-[#e91e8c] text-xs tracking-widest uppercase hover:underline"
              >
                Get Directions →
              </a>
            </div>

            {/* Phone */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6">
              <span className="text-2xl mb-3 block">📞</span>
              <h3 className="text-white font-semibold mb-2">Call Us</h3>
              <a
                href="tel:+441634790439"
                className="text-[#888888] text-sm hover:text-white transition-colors block"
              >
                +44 1634 790439
              </a>
              <p className="text-[#888888] text-xs mt-2">
                Mon–Sat: 9am–7pm · Sun: 10am–5pm
              </p>
            </div>

            {/* Email */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6">
              <span className="text-2xl mb-3 block">✉️</span>
              <h3 className="text-white font-semibold mb-2">Email Us</h3>
              <a
                href="mailto:info@safacosmetics.co.uk"
                className="text-[#888888] text-sm hover:text-white transition-colors"
              >
                info@safacosmetics.co.uk
              </a>
              <p className="text-[#888888] text-xs mt-2">
                We reply within 24 hours
              </p>
            </div>

            {/* Social */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-3">
                {[
                  {
                    label: "Facebook",
                    icon: "FB",
                    href: "https://facebook.com/p/Safa-Hair-Cosmetics-Chatham-61550295792399",
                  },
                  { label: "Instagram", icon: "IG", href: "#" },
                  { label: "TikTok", icon: "TK", href: "#" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 border border-[#2a2a2a] rounded-full flex items-center justify-center text-[#888888] hover:border-[#e91e8c] hover:text-[#e91e8c] transition-all text-xs font-mono"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-3">
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-3xl p-8 md:p-10">
              <h2
                className="text-white text-2xl font-bold mb-8"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Send Us a Message
              </h2>

              {status === "success" ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
                    ✓
                  </div>
                  <h3 className="text-white text-xl font-bold mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-[#888888]">
                    Thank you for reaching out. We'll get back to you within 24
                    hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-[#e91e8c] text-sm underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[#888888] text-xs tracking-widest uppercase block mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Jane Smith"
                        className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl px-4 py-3 text-white placeholder-[#444] text-sm focus:outline-none focus:border-[#e91e8c] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[#888888] text-xs tracking-widest uppercase block mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="jane@example.com"
                        className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl px-4 py-3 text-white placeholder-[#444] text-sm focus:outline-none focus:border-[#e91e8c] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[#888888] text-xs tracking-widest uppercase block mb-2">
                        Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+44 7700 000000"
                        className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl px-4 py-3 text-white placeholder-[#444] text-sm focus:outline-none focus:border-[#e91e8c] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[#888888] text-xs tracking-widest uppercase block mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#e91e8c] transition-colors appearance-none"
                      >
                        <option value="" disabled>
                          Select a subject
                        </option>
                        <option>Product Enquiry</option>
                        <option>Stock Availability</option>
                        <option>Order Query</option>
                        <option>General Question</option>
                        <option>Wholesale/Trade</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[#888888] text-xs tracking-widest uppercase block mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell us how we can help..."
                      className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl px-4 py-3 text-white placeholder-[#444] text-sm focus:outline-none focus:border-[#e91e8c] transition-colors resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3">
                      <p className="text-red-400 text-sm">{errorMsg}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-4 bg-[#e91e8c] text-white text-sm tracking-widest uppercase rounded-full hover:bg-[#ff4db8] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed font-medium"
                  >
                    {status === "loading" ? "Sending..." : "Send Message"}
                  </button>

                  <p className="text-[#888888] text-xs text-center">
                    We typically respond within 24 hours. For urgent enquiries
                    call{" "}
                    <a href="tel:+441634790439" className="text-[#e91e8c]">
                      +44 1634 790439
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Map embed placeholder */}
        <div className="mt-16 bg-[#1a1a1a] border border-[#2a2a2a] rounded-3xl overflow-hidden">
          <div className="aspect-video relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2491.8!2d0.5236!3d51.3830!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8c6e9f61d6e7d%3A0x1!2s161+High+St%2C+Chatham+ME4+4BA!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "grayscale(1) invert(0.9) hue-rotate(180deg)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SAFA Hair & Cosmetics Location"
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-white font-medium">SAFA Hair & Cosmetics</p>
              <p className="text-[#888888] text-sm">
                161 High Street, Chatham ME4 4BA
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=161+High+Street+Chatham+ME4+4BA"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-[#e91e8c] text-white text-xs tracking-widest uppercase rounded-full hover:bg-[#ff4db8] transition-colors whitespace-nowrap"
            >
              Open in Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
