export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative">
        <div className="h-32 w-32 rounded-full border-t-2 border-b-2 border-primary animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-primary text-lg font-medium">Loading</span>
        </div>
      </div>
    </div>
  )
}

