import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Disable React Compiler by using classic React plugin
export default defineConfig({
  plugins: [react()],
})
