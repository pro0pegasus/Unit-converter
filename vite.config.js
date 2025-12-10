import { defineConfig } from 'vite'

// Use a relative base so built assets work when the site is hosted under
// a subpath (GitHub Pages, static hosts using a repo path).
export default defineConfig({
  base: './',
  plugins: []
})

