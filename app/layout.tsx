import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'SAFA Hair & Cosmetics | Chatham\'s Premier Beauty Destination',
    template: '%s | SAFA Hair & Cosmetics',
  },
  description:
    'One of Chatham\'s largest Afro Hair and Cosmetics shops. Discover premium hair care, wigs, extensions, skincare, and makeup at 161 High Street, Chatham ME4 4BA.',
  keywords: [
    'afro hair',
    'cosmetics',
    'Chatham',
    'wigs',
    'hair extensions',
    'beauty',
    'makeup',
    'skincare',
    'SAFA',
  ],
  openGraph: {
    title: 'SAFA Hair & Cosmetics',
    description: 'Chatham\'s premier Afro Hair & Cosmetics destination',
    url: 'https://safacosmetics.co.uk',
    siteName: 'SAFA Hair & Cosmetics',
    locale: 'en_GB',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
