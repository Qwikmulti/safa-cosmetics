'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Journal' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-[#2a2a2a]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#e91e8c] flex items-center justify-center text-white text-xs font-bold tracking-widest">
              S
            </div>
            <span
              className="text-white font-display text-xl font-bold tracking-widest uppercase"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              SAFA
            </span>
            <span className="text-[#888888] text-xs tracking-[0.3em] uppercase hidden sm:block">
              Hair & Cosmetics
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm tracking-widest uppercase transition-colors duration-200 relative group ${
                    pathname === link.href
                      ? 'text-[#e91e8c]'
                      : 'text-[#888888] hover:text-white'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-[#e91e8c] transition-all duration-300 ${
                      pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+441634790439"
              className="text-xs tracking-widest text-[#888888] hover:text-white transition-colors"
            >
              +44 1634 790439
            </a>
            <Link
              href="/contact"
              className="px-5 py-2 bg-[#e91e8c] text-white text-xs tracking-widest uppercase hover:bg-[#ff4db8] transition-all duration-300 rounded-full"
            >
              Visit Us
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-px bg-white transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-[8px]' : ''
              }`}
            />
            <span
              className={`block w-6 h-px bg-white transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-px bg-white transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-[8px]' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col items-center justify-center transition-all duration-500 lg:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col items-center gap-8">
          {links.map((link, i) => (
            <li key={link.href} style={{ transitionDelay: `${i * 60}ms` }}>
              <Link
                href={link.href}
                className={`text-3xl font-display font-bold tracking-widest transition-colors ${
                  pathname === link.href ? 'text-[#e91e8c]' : 'text-white hover:text-[#e91e8c]'
                }`}
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-12 text-center">
          <p className="text-[#888888] text-sm tracking-widest">161 High Street, Chatham ME4 4BA</p>
          <a
            href="tel:+441634790439"
            className="text-[#e91e8c] text-sm tracking-widest mt-2 block"
          >
            +44 1634 790439
          </a>
        </div>
      </div>
    </>
  );
}
