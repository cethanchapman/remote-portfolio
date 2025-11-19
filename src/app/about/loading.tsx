export default function AboutLoading() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      {/* Title Skeleton */}
      <div className="mb-8 animate-pulse">
        <div className="h-12 bg-gray-200 rounded w-1/3"></div>
      </div>

      {/* Sections Skeleton */}
      <div className="space-y-8">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="bg-white p-8 rounded-card shadow-lg animate-pulse">
            {/* Section Title */}
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
            
            {/* Content Lines */}
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
            
            {/* Additional Content (for skills section) */}
            {i === 2 && (
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((j) => (
                  <div key={j} className="space-y-2">
                    <div className="h-6 bg-gray-200 rounded w-2/3"></div>
                    <div className="flex gap-2 flex-wrap">
                      <div className="h-7 w-20 bg-gray-200 rounded-full"></div>
                      <div className="h-7 w-16 bg-gray-200 rounded-full"></div>
                      <div className="h-7 w-24 bg-gray-200 rounded-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
