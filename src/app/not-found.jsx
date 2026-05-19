'use client'
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a] text-white px-4">
      <div className="text-center space-y-6">
        
        <h1 className="text-7xl font-bold text-red-500">
          404
        </h1>

        <h2 className="text-3xl font-semibold">
          Page Not Found
        </h2>

        <p className="text-gray-400 max-w-md">
          The page you are looking for does not exist or may have been moved.
        </p>

        <Link href="/">
          <button className="bg-red-500 hover:bg-red-600 cursor-pointer transition px-6 py-3 rounded-xl font-medium">
            Back To Home
          </button>
        </Link>

      </div>
    </div>
  );
}