import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { defineConfig } from 'drizzle-kit';
import '@/app/ui/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pimetry',
  description: 'Pimetry is a personal information management system',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-yellow-800 bg-opacity-10`}>
        {children}
      </body>
    </html>
  );
}
