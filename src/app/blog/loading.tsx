export default function BlogLoading() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      {/* Header Skeleton */}
      <div className="mb-12 animate-pulse">
        <div className="h-12 bg-gray-200 rounded w-1/4 mb-4"></div>
        <div className="h-6 bg-gray-200 rounded w-2/3"></div>
      </div>

      {/* Content Card Skeleton */}
      <div className="bg-white p-12 rounded-card shadow-lg text-center animate-pulse">
        <div className="space-y-4">
          <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto"></div>
          <div className="h-6 bg-gray-200 rounded w-2/3 mx-auto"></div>
        </div>
      </div>
    </main>
  );
}
