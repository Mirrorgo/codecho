import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import rehypeMdxCodeProps from "rehype-mdx-code-props";
import mdx from "@mdx-js/rollup";

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
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
