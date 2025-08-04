"use client"

import { Button } from "@/components/ui/button"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Info, ExternalLink } from "lucide-react"
import type { Insight } from "@/types"
import CautionPopup from "./caution-popup"

interface CultureCardProps {
  insight: Insight
}

export default function CultureCard({ insight }: CultureCardProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const handleTranslationClick = (e: React.MouseEvent) => {
    e.stopPropagation() // Prevent card click from triggering
    window.open(insight.translationLink, "_blank", "noopener,noreferrer")
  }

  return (
    <Card
      className={`relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${insight.gradient}`}
      aria-labelledby={`card-title-${insight.id}`}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
        }}
      ></div>
      <CardHeader className="relative z-10 p-4 pb-2">
        <CardTitle id={`card-title-${insight.id}`} className="text-lg font-bold text-white">
          {insight.title}
        </CardTitle>
        <CardDescription className="text-sm text-white/90">{insight.description}</CardDescription>
      </CardHeader>
      <CardContent className="relative z-10 p-4 pt-2 flex flex-col gap-2">
        <div className="flex justify-end">
          <CautionPopup
            caution={{ id: insight.id, title: `${insight.title}に関する注意事項`, details: insight.caution }}
            open={isPopupOpen}
            onOpenChange={setIsPopupOpen}
          >
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20 transition-colors duration-200 rounded-full"
              onClick={(e) => {
                e.stopPropagation()
                setIsPopupOpen(true)
              }}
              aria-label={`${insight.title}に関する注意事項を表示`}
              aria-expanded={isPopupOpen}
              aria-haspopup="dialog"
            >
              <Info className="w-5 h-5" />
            </Button>
          </CautionPopup>
        </div>
        <Button
          variant="link"
          className="text-white hover:text-accent flex items-center gap-1 p-0 h-auto justify-end"
          onClick={handleTranslationClick}
          aria-label={`${insight.title}の翻訳を見る`}
        >
          翻訳を見る
          <ExternalLink className="w-4 h-4" />
        </Button>
      </CardContent>
    </Card>
  )
}
