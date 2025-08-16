import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Minimal Vite config with preview.allowedHosts
// Docs: https://vite.dev/config/preview-options
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    cors: true,
  },
  preview: {
    host: true,
    cors: true,
    allowedHosts: ['example.com', 'example.com'],
  },
});