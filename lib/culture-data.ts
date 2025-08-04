// lib/culture-data.ts
import { allCountries } from "./countries" // Import the new countries list

// Helper to generate mock data for a given country ID
export const generateMockCultureData = (countryId: string): CultureData => {
  const country = allCountries.find((c) => c.id === countryId)
  const destinationName = country?.name || "不明な国"
  const continent = country?.continent || "不明"

  return {
    id: countryId,
    destination: destinationName,
    lastUpdated: new Date().toISOString(),
    source: "CultureSync AI",
    reliability: "中", // Lower reliability for dynamically generated data
    insights: {
      religiousBackground: `${destinationName}では、多様な宗教的背景が見られます。主な宗教は地域によって異なります。`,
      socialManners: `${destinationName}では、一般的に礼儀正しさと他者への配慮が重視されます。`,
      traditionalGreetings: `${destinationName}では、握手や軽いお辞儀など、様々な挨拶方法があります。`,
      diningEtiquette: `${destinationName}の食事のエチケットは、地域や状況によって異なります。`,
      dressCode: `${destinationName}の服装規定は、場所や行事によって異なりますが、一般的に清潔感のある服装が好まれます。`,
    },
    sidebarInfo: `${destinationName}は${continent}に位置し、豊かな歴史と多様な文化を持っています。`,
    warnings: [
      {
        activity: "公共の場での振る舞い",
        type: "consideration",
        title: `${destinationName}での公共の場での注意事項`,
        description: "公共の場では、大声で話したり、過度に騒がしい行動は避けるべきです。",
        consequences: "周囲の人々に不快感を与える可能性があります。",
        alternative: "静かに、周囲に配慮して行動しましょう。",
        legalRisk: "無",
      },
      {
        activity: "写真撮影",
        type: "consideration",
        title: `${destinationName}での人物撮影に関する注意事項`,
        description: "人物を撮影する際は、必ず事前に許可を得てください。",
        consequences: "プライバシー侵害と見なされる可能性があります。",
        alternative: "許可を得るか、風景を中心に撮影しましょう。",
        legalRisk: "中",
      },
    ],
    touristSpots: [
      {
        name: `${destinationName}のランドマーク`,
        nameLocal: `${destinationName}のランドマーク (Landmark of ${destinationName})`,
        address: `${destinationName}の中心部`,
        addressLocal: `${destinationName}の中心部 (Central part of ${destinationName})`,
        openingHours: "9:00 - 17:00",
        openingHoursLocal: "午前9時〜午後5時 (Gozen ku-ji kara gogo go-ji)",
        culturalSignificance: `${destinationName}の象徴的な場所であり、その歴史と文化を反映しています。`,
        phrases: [
          {
            jp: `${destinationName}はどこですか？`,
            local: `${destinationName} wa doko desu ka?`,
            pronunciation: `${destinationName} ワ ドコ デス カ`,
          },
          {
            jp: "ありがとう",
            local: "Thank you", // Placeholder, ideally would be in local language
            pronunciation: "サンキュー",
          },
        ],
      },
    ],
  }
}

// Select the first 60 countries from allCountries for initial load
// NOTE: This is a simulation. In a real application, you would use UNWTO data
// and specific representative countries for the initial 60.
export const cultureData: CultureData[] = allCountries
  .slice(0, 60)
  .map((country) => generateMockCultureData(country.id))

export type CultureData = {
  id: string
  destination: string
  lastUpdated: string
  source: string
  reliability: string
  insights: {
    religiousBackground: string
    socialManners: string
    traditionalGreetings: string
    diningEtiquette: string
    dressCode: string
  }
  sidebarInfo: string
  warnings: {
    activity: string
    type: "taboo" | "consideration"
    title: string
    description: string
    consequences: string
    alternative: string
    legalRisk: "低" | "中" | "高" | "無"
  }[]
  touristSpots: {
    name: string
    nameLocal: string
    address: string
    addressLocal: string
    openingHours: string
    openingHoursLocal: string
    culturalSignificance: string
    phrases: {
      jp: string
      local: string
      pronunciation: string
    }[]
  }[]
}

export type CulturalInsight = CultureData["insights"]
export type CulturalWarning = CultureData["warnings"][0]
export type TouristSpot = CultureData["touristSpots"][0]
export type Phrase = TouristSpot["phrases"][0]
