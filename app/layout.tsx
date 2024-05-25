import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pokrovka-Rates',
  description: 'Restaurant rating by Pokrovka workers',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="flex flex-col h-full">
          <header className="px-3 py-4 bg-neutral-200">Header</header>
          <main className="px-3 py-4 basis-full">{children}</main>
          <footer className="px-3 py-4 bg-neutral-200">Footer</footer>
        </div>
      </body>
    </html>
  );
}
