import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import rehypeMdxCodeProps from "rehype-mdx-code-props";
import mdx from "@mdx-js/rollup";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    {
      enforce: "pre",
      ...mdx({
        /* jsxImportSource: …, otherOptions… */
        providerImportSource: "@mdx-js/react",
        rehypePlugins: [rehypeMdxCodeProps],
      }),
    },
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "robots.txt"],
      manifest: {
        name: "Codecho - 个人代码片段分享",
        short_name: "Codecho",
        description:
          "我个人整理的代码片段库，通过简单复制粘贴即可在项目中使用！",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",
        id: "/",
        lang: "zh-CN",
        dir: "ltr",
        orientation: "portrait-primary",
        categories: ["development", "productivity", "utilities"],
        icons: [
          {
            src: "pwa-192x192.png", // 需要创建这些图标
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
        screenshots: [
          {
            src: "screenshot.png",
            sizes: "1908x891",
            type: "image/png",
            label: "Codecho代码片段库",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,mdx}"], // 包含MDX文件
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1年
              },
            },
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
