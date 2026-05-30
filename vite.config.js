import { defineConfig } from 'vite'
import compression from 'vite-plugin-compression'
import { createHtmlPlugin } from 'vite-plugin-html'
import sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  base: '/',
  plugins: [
    sitemap({
      hostname: 'https://shoplenca.com'
    }),

    createHtmlPlugin({
      inject: {
        data: {
          title: 'Shoplenca',
          description: 'Buy and sell products on Shoplenca'
        }
      }
    }),

    compression()
  ]
})