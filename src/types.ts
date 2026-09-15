export type Site = {
  title: string
  description: string
  href: string
  author: string
  locale: string
  featuredPostCount: number
  postsPerPage: number
}

export type SocialLink = {
  href: string
  label: string
}

export type NoteLink = {
  title: string
  href: string
  description?: string
  source: 'Markdown' | 'Notion'
  external?: boolean
}

export type IconMap = {
  [key: string]: string
}
