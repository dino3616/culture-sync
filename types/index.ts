export interface Insight {
  id: string
  title: string
  description: string
  caution: string
  translationLink: string
  gradient: string // Tailwind gradient class
}

export interface Caution {
  id: string
  title: string
  details: string
}
