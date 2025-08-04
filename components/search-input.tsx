"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { useCultureSyncStore } from "@/lib/store"
import { z } from "zod"

const destinationSchema = z.string().min(1, { message: "目的地を入力してください。" })

export default function SearchInput() {
  const [input, setInput] = useState("")
  const [inputError, setInputError] = useState<string | null>(null)
  const { fetchInsights, setDestination } = useCultureSyncStore()

  const handleSearch = async () => {
    try {
      destinationSchema.parse(input)
      setInputError(null)
      setDestination(input)
      await fetchInsights(input)
    } catch (e) {
      if (e instanceof z.ZodError) {
        setInputError(e.errors[0].message)
      } else {
        setInputError("検索中にエラーが発生しました。")
      }
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch()
    }
  }

  return (
    <div className="flex flex-col items-center gap-2 p-4 w-full max-w-xl mx-auto">
      <div className="relative w-full">
        <Input
          type="text"
          placeholder="旅行先（例: 日本）を入力してください"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="pr-10 py-2 pl-4 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary w-full"
          aria-label="旅行先の検索"
        />
        <Button
          onClick={handleSearch}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2"
          size="icon"
          aria-label="検索"
        >
          <Search className="w-5 h-5" />
        </Button>
      </div>
      {inputError && (
        <p className="text-red-500 text-sm mt-1" role="alert">
          {inputError}
        </p>
      )}
    </div>
  )
}
