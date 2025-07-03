import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // ← Required for JSX

export default defineConfig({
  plugins: [react()], // ← Add this line
  server: {
    port: 3000,
    strictPort: true
  }
});
