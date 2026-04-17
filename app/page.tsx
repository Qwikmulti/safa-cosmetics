import Hero from '@/components/home/Hero';
import Marquee from '@/components/home/Marquee';
import FeaturedCategories from '@/components/home/FeaturedCategories';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import Testimonials from '@/components/home/Testimonials';
import StoreSection from '@/components/home/StoreSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SAFA Hair & Cosmetics | Chatham\'s Premier Beauty Destination',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <FeaturedCategories />
      <WhyChooseUs />
      <FeaturedProducts />
      <Testimonials />
      <StoreSection />
    </>
  );
}
