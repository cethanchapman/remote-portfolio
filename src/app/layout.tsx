import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ethan Chapman — Portfolio",
  description: "Computer Science, AI & Machine Learning, Information Technology - Portfolio showcasing projects in sports prediction, stock tracking, and more.",
  keywords: ["portfolio", "computer science", "AI", "machine learning", "software engineer", "IT", "projects", "Ethan Chapman", "Auburn University", "mobile development"],
  authors: [{ name: "Ethan Chapman" }],
  creator: "Ethan Chapman",
  publisher: "Ethan Chapman",
  metadataBase: new URL('https://cethanchapman.github.io/remote-portfolio'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Ethan Chapman — Portfolio",
    description: "Computer Science, AI & Machine Learning, Information Technology - Portfolio showcasing projects in sports prediction, stock tracking, and more.",
    url: 'https://cethanchapman.github.io/remote-portfolio',
    siteName: 'Ethan Chapman Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ethan Chapman - Computer Science Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ethan Chapman — Portfolio',
    description: 'Computer Science, AI & Machine Learning, Information Technology - Portfolio showcasing innovative projects.',
    images: ['/og-image.png'],
    creator: '@cethanchapman',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-light">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
