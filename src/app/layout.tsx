import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Your Name — Portfolio",
  description: "Personal portfolio showcasing projects and case studies.",
  keywords: ["portfolio", "web development", "software engineer", "projects"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Name — Portfolio",
    description: "Personal portfolio showcasing projects and case studies.",
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
