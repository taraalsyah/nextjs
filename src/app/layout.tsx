import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tara Alsyah | Senior Frontend Developer Portfolio',
  description:
    'Portfolio resmi Senior Frontend Developer spesialis Next.js App Router, React, TypeScript, dan Tailwind CSS.',
  keywords: [
    'Frontend Developer',
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Portfolio',
    'Tara Alsyah',
  ],
  authors: [{ name: 'Tara Alsyah' }],
  openGraph: {
    title: 'Tara Alsyah | Senior Frontend Developer Portfolio',
    description:
      'Single-Page Portfolio Landing Page modern yang responsif, cepat, dan bersih.',
    type: 'website',
    locale: 'id_ID',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="bg-[#030712] text-slate-100 font-sans antialiased min-h-screen selection:bg-cyan-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
