import { defineNuxtConfig } from 'nuxt/config'
import tsconfigPaths from 'vite-tsconfig-paths'
import { fileURLToPath } from 'url'

export default defineNuxtConfig({
  pages: true,
  components: [
   
    { path: '~/components/atoms', pathPrefix: false },      
    { path: '~/components/molecules', pathPrefix: false },   

   
    { path: '~/components/organisms', pathPrefix: false },  
    { path: '~/components/sections', pathPrefix: false },  
    { path: '~/components/templates', pathPrefix: false },  

    
    { path: '~/components', pathPrefix: false }
  ],

  dir: {
    pages: fileURLToPath(new URL('./pages', import.meta.url))
  },
  compatibilityDate: '2025-09-24',

  vite: {
    plugins: [
      tsconfigPaths({
        root: './' 
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./', import.meta.url))
      }
    }
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

  runtimeConfig: {
    public: {
      contactEmail: process.env.CONTACT_EMAIL
    },
    smtpUser: process.env.SMTP_USER || '',
    smtpPass: process.env.SMTP_PASS || '',
    smtpHost: process.env.SMTP_HOST || '',
    smtpPort: Number(process.env.SMTP_PORT) || 587
  },

  modules: [],

  css: [
  '@/assets/css/base.css',
  '@/assets/css/main.css'
],

  build: {
    transpile: []
  },

  typescript: {
    strict: true
  },

  nitro: {
    preset: 'node-server',
    serveStatic: true
  }
})
