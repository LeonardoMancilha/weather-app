import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: ['react-feather'],
    },
  },
  resolve: {
    alias: {
      'react-feather': require.resolve('react-feather'),
    },
  },
  plugins: [react()],
});

