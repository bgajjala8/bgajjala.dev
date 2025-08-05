import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Bgajjala',
  description:
    'Hi, I’m Bharath Gajjala. I’m a software engineer focused on distributed systems and building scalable, reliable solutions at the enterprise level. I enjoy solving complex problems that directly affect our quality of life as humans',
  href: 'bgajjala.dev',
  author: 'bgajjala8',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/authors',
    label: 'authors',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/bgajjala8',
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/bharath-g8',
    label: 'Linkedin',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
