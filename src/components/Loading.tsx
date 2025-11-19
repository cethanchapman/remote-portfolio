'use client';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function LoadingSpinner({ size = 'md', className = '' }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  return (
    <div className={`${sizeClasses[size]} relative ${className}`}>
      <div className="absolute inset-0 border-3 border-primary/20 rounded-full"></div>
      <div className="absolute inset-0 border-3 border-transparent border-t-primary rounded-full animate-spin"></div>
    </div>
  );
}

interface LoadingDotsProps {
  className?: string;
}

export function LoadingDots({ className = '' }: LoadingDotsProps) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
      <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
      <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
    </div>
  );
}

interface LoadingSkeletonProps {
  className?: string;
  count?: number;
}

export function LoadingSkeleton({ className = '', count = 1 }: LoadingSkeletonProps) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={`bg-gray-200 rounded animate-pulse ${className}`}
        ></div>
      ))}
    </>
  );
}

interface LoadingCardProps {
  className?: string;
}

export function LoadingCard({ className = '' }: LoadingCardProps) {
  return (
    <div className={`bg-white p-6 rounded-card shadow-lg ${className}`}>
      <div className="animate-pulse space-y-4">
        {/* Header */}
        <div className="h-6 bg-gray-200 rounded w-3/4"></div>
        
        {/* Content lines */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded w-4/6"></div>
        </div>
        
        {/* Tags */}
        <div className="flex gap-2">
          <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
          <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
          <div className="h-6 w-14 bg-gray-200 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

interface PageLoadingProps {
  message?: string;
}

export function PageLoading({ message = 'Loading...' }: PageLoadingProps) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-4">
        <LoadingSpinner size="lg" />
        <p className="text-gray-600 font-medium">{message}</p>
      </div>
    </div>
  );
}

// Button loading state
interface LoadingButtonProps {
  isLoading: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export function LoadingButton({
  isLoading,
  children,
  className = '',
  onClick,
  disabled = false,
}: LoadingButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`relative ${className} ${
        isLoading || disabled ? 'opacity-70 cursor-not-allowed' : ''
      }`}
    >
      {isLoading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <LoadingSpinner size="sm" />
        </span>
      )}
      <span className={isLoading ? 'invisible' : ''}>{children}</span>
    </button>
  );
}
