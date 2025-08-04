// app/api/culture/[id]/route.ts
import { NextResponse } from "next/server"
import { generateMockCultureData } from "@/lib/culture-data"
import { allCountries } from "@/lib/countries"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const countryId = params.id

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 700))

  const countryExists = allCountries.some((c) => c.id === countryId)

  if (!countryExists) {
    return NextResponse.json({ error: "Country not found" }, { status: 404 })
  }

  const data = generateMockCultureData(countryId)
  return NextResponse.json(data)
}
