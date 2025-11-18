import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ethan Chapman — Portfolio",
  description: "Computer Science, AI & Machine Learning, Information Technology - Portfolio showcasing projects in sports prediction, stock tracking, and more.",
  keywords: ["portfolio", "computer science", "AI", "machine learning", "software engineer", "IT", "projects"],
  authors: [{ name: "Ethan Chapman" }],
  openGraph: {
    title: "Ethan Chapman — Portfolio",
    description: "Computer Science, AI & Machine Learning, Information Technology - Portfolio showcasing projects in sports prediction, stock tracking, and more.",
    type: "website",
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
