import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Ethan Chapman",
  description: "Thoughts on computer science, AI, machine learning, and technology.",
};

export default function BlogPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">Blog</h1>
      <p className="text-xl text-gray-600 mb-12">
        Coming soon! Thoughts on web development, tutorials, and lessons learned.
      </p>

      <div className="bg-white p-12 rounded-card shadow-lg text-center">
        <p className="text-gray-600 text-lg">
          I&apos;m currently working on setting up the blog. Check back soon for articles 
          on web development, best practices, and project insights.
        </p>
      </div>
    </main>
  );
}
