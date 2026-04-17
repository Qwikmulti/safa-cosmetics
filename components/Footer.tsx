import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#2a2a2a] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#e91e8c] flex items-center justify-center text-white text-xs font-bold">
                S
              </div>
              <span
                className="text-white font-display text-xl font-bold tracking-widest"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                SAFA
              </span>
            </div>
            <p className="text-[#888888] text-sm leading-relaxed mb-6">
              One of Chatham's largest Afro Hair and Cosmetics destinations. Quality beauty products
              for every hair type and skin tone.
            </p>
            <div className="flex gap-4">
              {['FB', 'IG', 'TK'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 border border-[#2a2a2a] rounded-full flex items-center justify-center text-[#888888] hover:border-[#e91e8c] hover:text-[#e91e8c] transition-all duration-200 text-xs"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-xs tracking-widest uppercase mb-6 font-medium">
              Navigate
            </h4>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/products', label: 'Products' },
                { href: '/about', label: 'About Us' },
                { href: '/blog', label: 'Beauty Journal' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#888888] hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white text-xs tracking-widest uppercase mb-6 font-medium">
              Categories
            </h4>
            <ul className="space-y-3">
              {[
                'Hair Extensions',
                'Wigs & Weaves',
                'Natural Hair Care',
                'Skincare',
                'Makeup',
                'Braiding Hair',
                'Hair Tools',
              ].map((cat) => (
                <li key={cat}>
                  <Link
                    href="/products"
                    className="text-[#888888] hover:text-white text-sm transition-colors"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Store Info */}
          <div>
            <h4 className="text-white text-xs tracking-widest uppercase mb-6 font-medium">
              Store
            </h4>
            <div className="space-y-4 text-sm text-[#888888]">
              <div>
                <p className="text-white text-xs tracking-wider uppercase mb-1">Address</p>
                <p>161 High Street</p>
                <p>Chatham, ME4 4BA</p>
                <p>United Kingdom</p>
              </div>
              <div>
                <p className="text-white text-xs tracking-wider uppercase mb-1">Phone</p>
                <a href="tel:+441634790439" className="hover:text-white transition-colors">
                  +44 1634 790439
                </a>
              </div>
              <div>
                <p className="text-white text-xs tracking-wider uppercase mb-1">Hours</p>
                <p>Mon – Sat: 9:00 – 19:00</p>
                <p>Sunday: 10:00 – 17:00</p>
              </div>
              <div>
                <p className="text-white text-xs tracking-wider uppercase mb-1">Location</p>
                <p>The Pentagon Shopping Centre</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#2a2a2a] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#888888] text-xs tracking-widest">
            © {year} SAFA HAIR & COSMETICS LTD. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-[#888888]">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
