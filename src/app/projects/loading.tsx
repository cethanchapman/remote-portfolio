export default function ProjectsLoading() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      {/* Header Skeleton */}
      <div className="mb-12 space-y-4 animate-pulse">
        <div className="h-12 bg-gray-200 rounded w-1/3"></div>
        <div className="h-6 bg-gray-200 rounded w-2/3"></div>
      </div>

      {/* Project Cards Skeleton */}
      <div className="space-y-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white p-8 rounded-card shadow-lg animate-pulse">
            {/* Image placeholder */}
            <div className="w-full h-64 bg-gray-200 rounded-card mb-6"></div>
            
            {/* Content */}
            <div className="space-y-4">
              <div className="h-8 bg-gray-200 rounded w-3/4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
              
              {/* Tags */}
              <div className="flex gap-2">
                <div className="h-7 w-20 bg-gray-200 rounded-full"></div>
                <div className="h-7 w-24 bg-gray-200 rounded-full"></div>
                <div className="h-7 w-16 bg-gray-200 rounded-full"></div>
              </div>
              
              {/* Buttons */}
              <div className="flex gap-4 pt-4">
                <div className="h-10 w-32 bg-gray-200 rounded-full"></div>
                <div className="h-10 w-32 bg-gray-200 rounded-full"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
