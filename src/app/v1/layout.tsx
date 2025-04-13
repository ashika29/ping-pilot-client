// app/layout.tsx
import '@/globals.css'; // Import global styles if any.
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Ping Pilot - Home',
  description: 'Ping Pilot - Customized to user needs',
};

export default function AuthenticatedLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* Padding top to offset fixed navbar (assume navbar height is 4rem) */}
      <main className="flex-grow pt-16">{children}</main>
      <Footer />
    </div>
  );
}
