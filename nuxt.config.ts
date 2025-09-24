import { defineNuxtConfig } from 'nuxt/config'
import tsconfigPaths from 'vite-tsconfig-paths'
import { fileURLToPath } from 'url'



export default defineNuxtConfig({
  pages: true,
  dir: {
    pages: fileURLToPath(new URL('./pages', import.meta.url))
  },
  compatibilityDate: '2025-09-24',
  vite: {
    plugins: [tsconfigPaths()]
  },

  app: {
    head: {
      title: 'Alexandra Wiesinger Projekt',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Projekt mit Nuxt 4.1.2' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  modules: [
 
  ],

  css: [
  '/Users/saramoreira/alexandra-wiesinger/assets/css/base.css',
  '/Users/saramoreira/alexandra-wiesinger/assets/css/main.css'
],

  build: {
    transpile: [],
   
  },


  typescript: {
    strict: true
  },

  nitro: {
    preset: 'node-server'
  }
})

