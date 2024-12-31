import { defineThemeConfig } from './types'

export default defineThemeConfig({
  site: 'https://nordlys.fjelloverflow.dev',
  title: '陈迪の自留地',
  description: '偶尔想到的一些内容会做记录，题材不限于技术文章，更多的是一些个人的只言片语。博主平时喜欢运动，以糊代码为乐趣，偶尔也靠读些哲学书籍来打发无聊。',
  author: 'Chen Di',
  navbarItems: [
    { label: 'Blog', href: '/posts' },
    { label: 'Projects', href: '/projects' },
    { label: 'Tags', href: '/tags' },
    { label: 'Link', href: '/friends' },
    { label: 'About', href: '/about' },
    // {
    //   label: 'Other pages',
    //   children: [
    //     { label: 'Landing page', href: '/' },
    //     { label: '404 page', href: '/404' },
    //     { label: 'Author: FjellOverflow', href: '/authors/FjellOverflow' },
    //     { label: 'Tag: documentation', href: '/tags/documentation' }
    //   ]
    // }
  ],
  footerItems: [
    {
      icon: 'tabler--brand-github',
      href: 'https://github.com/FjellOverflow/nordlys',
      label: 'Github'
    },
    {
      icon: 'tabler--rss',
      href: '/feed.xml',
      label: 'RSS feed'
    }
  ],

  // optional settings
  locale: 'zh-CN',
  mode: 'dark',
  modeToggle: true,
  colorScheme: 'scheme-mono',
  openGraphImage: undefined,
  postsPerPage: 4,
  projectsPerPage: 3,
  scrollProgress: false,
  scrollToTop: true,
  tagIcons: {
    tailwindcss: 'tabler--brand-tailwind',
    astro: 'tabler--brand-astro',
    documentation: 'tabler--book'
  },
  shikiThemes: {
    light: 'vitesse-light',
    dark: 'vitesse-black'
  }
})
