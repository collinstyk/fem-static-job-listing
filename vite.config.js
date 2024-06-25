import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "src/images", // Path to your images folder
          dest: "assets/src", // Destination folder in the build output
        },
      ],
    }),
  ],
});
