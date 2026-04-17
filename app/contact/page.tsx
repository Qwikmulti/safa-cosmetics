import ContactClient from '@/components/contact/ContactClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with SAFA Hair & Cosmetics. Visit us at 161 High Street Chatham, call +44 1634 790439, or send us a message.',
};

export default function ContactPage() {
  return <ContactClient />;
}
