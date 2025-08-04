"use client"

import SearchInput from "@/components/search-input"
import CultureCard from "@/components/culture-card"
import SkeletonCard from "@/components/skeleton-card"
import ErrorBoundary from "@/components/error-boundary"
import { useCultureSyncStore } from "@/lib/store"
import { useEffect } from "react"

export default function Home() {
  const { insights, loading, error, destination } = useCultureSyncStore()

  // Initial fetch or clear insights if destination is empty
  useEffect(() => {
    if (!destination) {
      // Optionally fetch default insights or clear previous ones
      // useCultureSyncStore.setState({ insights: [] });
    }
  }, [destination])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 sm:p-6 lg:p-8">
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">CultureSync</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">異文化体験を豊かにする文化インサイトと注意事項</p>
      </header>

      <main className="max-w-6xl mx-auto">
        <SearchInput />

        <ErrorBoundary>
          {loading && (
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 p-4">
              {[...Array(3)].map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          )}

          {error && (
            <div className="text-center text-red-600 dark:text-red-400 mt-8 p-4" role="alert">
              <p className="text-lg font-semibold">{error}</p>
              <p className="text-sm mt-2">検索ワードを変えて再度お試しください。</p>
            </div>
          )}

          {!loading && !error && insights.length === 0 && destination && (
            <div className="text-center text-gray-600 dark:text-gray-400 mt-8 p-4">
              <p className="text-lg font-semibold">「{destination}」に関する文化インサイトは見つかりませんでした。</p>
              <p className="text-sm mt-2">別の目的地を検索してみてください。</p>
            </div>
          )}

          {!loading && !error && insights.length > 0 && (
            <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 p-4">
              <h2 className="sr-only">文化インサイト</h2>
              {insights.map((insight) => (
                <CultureCard key={insight.id} insight={insight} />
              ))}
            </section>
          )}

          {!loading && !error && !destination && insights.length === 0 && (
            <div className="text-center text-gray-600 dark:text-gray-400 mt-8 p-4">
              <p className="text-lg font-semibold">旅行先を入力して、文化インサイトを検索しましょう！</p>
              <p className="text-sm mt-2">例: 日本、アメリカ、フランス</p>
            </div>
          )}
        </ErrorBoundary>
      </main>
    </div>
  )
}
