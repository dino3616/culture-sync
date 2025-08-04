import { Card } from "@/components/ui/card"

export default function SkeletonCard() {
  return (
    <Card className="rounded-lg shadow-md p-4 h-[180px] animate-pulse bg-gray-200 dark:bg-gray-700">
      <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-5/6 mb-4"></div>
      <div className="flex justify-end gap-2">
        <div className="h-8 w-8 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
        <div className="h-8 w-24 bg-gray-300 dark:bg-gray-600 rounded"></div>
      </div>
    </Card>
  )
}
