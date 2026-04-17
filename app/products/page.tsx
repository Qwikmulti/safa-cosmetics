import ProductsClient from '@/components/products/ProductsClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Browse our full range of Afro hair care, wigs, extensions, makeup, and skincare products at SAFA Hair & Cosmetics Chatham.',
};

export default function ProductsPage() {
  return <ProductsClient />;
}
