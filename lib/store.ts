import { create } from "zustand"
import type { Insight } from "@/types"

interface CultureSyncState {
  destination: string
  insights: Insight[]
  loading: boolean
  error: string | null
  setDestination: (destination: string) => void
  fetchInsights: (destination: string) => Promise<void>
}

export const useCultureSyncStore = create<CultureSyncState>((set) => ({
  destination: "",
  insights: [],
  loading: false,
  error: null,
  setDestination: (destination) => set({ destination }),
  fetchInsights: async (destination: string) => {
    set({ loading: true, error: null, insights: [] })
    try {
      const response = await fetch(`/api/insights?destination=${encodeURIComponent(destination)}`)
      if (!response.ok) {
        throw new Error("Failed to fetch insights")
      }
      const data: Insight[] = await response.json()
      set({ insights: data, loading: false })
    } catch (err) {
      set({ error: "情報を取得できませんでした", loading: false })
      console.error("Error fetching insights:", err)
    }
  },
}))
