import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Minh Nhut Vo | Portfolio',
  description: 'Software Developer Portfolio built with Next.js, Tailwind, and Framer Motion.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-white text-gray-900 dark:bg-black dark:text-white transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
