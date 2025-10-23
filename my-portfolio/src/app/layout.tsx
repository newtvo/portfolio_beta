import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nhut Vo',
  description: 'Software Developer specializing in C#, Python, Azure, and Modern Web Applications.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning style={{ background: '#001D39' }}>
      <body style={{ background: '#001D39', margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
