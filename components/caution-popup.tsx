"use client"

import type React from "react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import type { Caution } from "@/types"

interface CautionPopupProps {
  caution: Caution
  children: React.ReactNode
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function CautionPopup({ caution, children, open, onOpenChange }: CautionPopupProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] rounded-lg p-6">
        <DialogHeader className="flex flex-row items-center justify-between pb-4 border-b border-gray-200">
          <DialogTitle className="text-xl font-bold text-primary">{caution.title}</DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onOpenChange(false)}
            className="rounded-full"
            aria-label="閉じる"
          >
            <X className="w-5 h-5" />
          </Button>
        </DialogHeader>
        <DialogDescription className="py-4 text-gray-700 leading-relaxed">{caution.details}</DialogDescription>
        {/* Error handling example: If caution.details is empty or an error state */}
        {caution.details === "" && (
          <p className="text-red-500 text-sm mt-2" role="alert">
            情報を取得できませんでした
          </p>
        )}
      </DialogContent>
    </Dialog>
  )
}
