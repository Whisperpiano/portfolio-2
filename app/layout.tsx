import './globals.css';

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Toaster } from 'sonner';

import Template from './template';
import CustomCursor from '@/components/layout/custom-cursor';
import BackgroundNoise from '@/components/layout/background-noise';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio of Whisperpiano',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} dark min-h-screen cursor-none antialiased`}
      >
        <BackgroundNoise />
        <Template>{children}</Template>
        <Toaster />
        <CustomCursor />
      </body>
    </html>
  );
}
