
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from "node:url"
import { ViteSSG } from "vite-ssg"

// https://vite.dev/config/
export default defineConfig({
    json: {
    stringify: false, // ensure JSON is parsed, not converted into a string
  },
  plugins: [react()],
  ssgOptions: {
    script: "sync", //  disables JS bundle injection
    formatting: "minify",
  },
    resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  }
})
