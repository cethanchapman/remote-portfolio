import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Ethan Chapman",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <main className="min-h-[calc(100vh-200px)] flex items-center justify-center px-6 py-12">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Animation Container */}
        <div className="mb-8">
          <h1 className="text-9xl md:text-[200px] font-bold text-primary opacity-20 leading-none">
            404
          </h1>
        </div>

        {/* Error Message */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-dark">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            Oops! The page you&apos;re looking for seems to have wandered off into the digital void. 
            Let&apos;s get you back on track.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link
            href="/"
            className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3 rounded-full transition-colors inline-block"
          >
            Go Home
          </Link>
          <Link
            href="/#projects"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-3 rounded-full transition-colors inline-block"
          >
            View Projects
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-4">You might be looking for:</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/#about"
              className="text-primary hover:text-primary-dark font-medium transition-colors"
            >
              About
            </Link>
            <span className="text-gray-400">•</span>
            <Link
              href="/projects"
              className="text-primary hover:text-primary-dark font-medium transition-colors"
            >
              Projects
            </Link>
            <span className="text-gray-400">•</span>
            <Link
              href="/blog"
              className="text-primary hover:text-primary-dark font-medium transition-colors"
            >
              Blog
            </Link>
            <span className="text-gray-400">•</span>
            <Link
              href="/#contact"
              className="text-primary hover:text-primary-dark font-medium transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Fun Tech Fact */}
        <div className="mt-12 bg-white p-6 rounded-card shadow-lg">
          <p className="text-sm text-gray-600 italic">
            💡 <span className="font-semibold">Tech Fact:</span> The 404 error code is named after 
            room 404 at CERN where the World Wide Web was born. The room where the central database 
            was located couldn&apos;t be found!
          </p>
        </div>
      </div>
    </main>
  );
}
