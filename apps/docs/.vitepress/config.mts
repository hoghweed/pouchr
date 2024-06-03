import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Pouchr ",
  base: '/pouchr/',
  description: "A modern, Fastify driven, PouchDB server",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started' }
    ],

    sidebar: [
      {
        text: 'Documentation',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting started', link: '/getting-started' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hoghweed/pouchr' }
    ]
  }
})
