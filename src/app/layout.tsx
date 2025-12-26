import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';
import { clsx } from 'clsx';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['500', '700'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Close more deals, effortlessly',
  description: 'The high stakes brand refresh for B2B sales leaders.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={clsx(jakarta.variable, inter.variable)}>
      <body className="antialiased min-h-screen selection:bg-[#6DF5B9] selection:text-[#161E2E]">
        {children}
      </body>
    </html>
  );
}
