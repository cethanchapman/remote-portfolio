export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-light">
      <div className="text-center space-y-8">
        {/* Animated Spinner */}
        <div className="relative w-24 h-24 mx-auto">
          {/* Outer Ring */}
          <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
          
          {/* Spinning Ring */}
          <div className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
          
          {/* Inner Pulse */}
          <div className="absolute inset-3 bg-primary/10 rounded-full animate-pulse"></div>
        </div>

        {/* Loading Text */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-dark">Loading</h2>
          <div className="flex justify-center items-center gap-1">
            <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
            <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
            <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
          </div>
        </div>
      </div>
    </div>
  );
}
