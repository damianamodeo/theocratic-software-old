import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";
import { createHtmlPlugin } from "vite-plugin-html";
import svgr from "vite-plugin-svgr";
import path from "node:path";

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  if (process.env.VITE_APP_NAME === "Storybook") {
    return defineConfig({
      plugins: [react()],
    });
  }
  return defineConfig({
    base: `/theocratic-software/`,
    build: {
      outDir: `dist/${process.env.VITE_APP_NAME.toLowerCase()}`,
      // Tauri uses Chromium on Windows and WebKit on macOS and Linux
      target:
        process.env.TAURI_PLATFORM == "windows" ? "chrome105" : "safari13",
      // don't minify for debug builds
      minify: !process.env.TAURI_DEBUG ? "esbuild" : false,
      // produce sourcemaps for debug builds
      sourcemap: !!process.env.TAURI_DEBUG,
    },

    // prevent vite from obscuring rust errors
    clearScreen: false,
    // Tauri expects a fixed port, fail if that port is not available
    server: {
      strictPort: true,
    },
    // to make use of `TAURI_PLATFORM`, `TAURI_ARCH`, `TAURI_FAMILY`,
    // `TAURI_PLATFORM_VERSION`, `TAURI_PLATFORM_TYPE` and `TAURI_DEBUG`
    // env variables
    envPrefix: ["VITE_", "TAURI_"],

    publicDir: `src/apps/${process.env.VITE_APP_NAME.toLowerCase()}/public`,
    plugins: [
      svgr({
        svgrOptions: {
          icon: true,
          replaceAttrValues: {
            "#000000": "currentColor",
            nonef: "currentColor",
          },
        },
      }),
      react(),
      createHtmlPlugin({
        minify: false,
        /**
         * After writing entry here, you will not need to add script tags in `index.html`, the original tags need to be deleted
         * @default src/main.ts
         */
        entry: `src/apps/${process.env.VITE_APP_NAME.toLowerCase()}/app/main.tsx`,
        /**
         * If you want to store `index.html` in the specified folder, you can modify it, otherwise no configuration is required
         * @default index.html
         */
        // template: 'public/index.html',

        /**
         * Data that needs to be injected into the index.html ejs template
         */
        inject: {
          data: {
            title: `${process.env.VITE_APP_NAME}`,
            appFolder: `${process.env.VITE_APP_FOLDER_NAME}`,
            themeColorLight: `${process.env.VITE_APP_THEME_COLOR_LIGHT}`,
            themeColorDark: `${process.env.VITE_APP_THEME_COLOR_DARK}`,
          },
          // tags: [
          // 	{
          // 		injectTo: 'body-prepend', // body | body-prepend | head | head-prepend
          // 		tag: 'div',
          // 		attrs: {
          // 			id: 'tag',
          // 		},
          // 	},
          // ],
        },
      }),
      VitePWA({
        registerType: "autoUpdate",
        devOptions: {
          enabled: false,
        },
        // workbox: {
        // 	globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
        // },
        manifest: {
          short_name: `${process.env.VITE_APP_NAME}`,
          name: `${process.env.VITE_APP_NAME}`,
          // scope: `${process.env.VITE_APP_REPO}`,
          scope: `.`,
          icons: [
            {
              src: "assets/manifest-icon-192.maskable.png",
              sizes: "192x192",
              type: "image/png",
              purpose: "any",
            },
            {
              src: "assets/manifest-icon-192.maskable.png",
              sizes: "192x192",
              type: "image/png",
              purpose: "maskable",
            },
            {
              src: "assets/manifest-icon-512.maskable.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "any",
            },
            {
              src: "assets/manifest-icon-512.maskable.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "maskable",
            },
          ],
          start_url: "./",
          display: "standalone",
          theme_color: `${process.env.VITE_APP_THEME_COLOR_PRIMARY}`,
          background_color: `${process.env.VITE_APP_THEME_COLOR_BACKGROUND}`,
        },
      }),
    ],
    resolve: {
      alias: {
        "@CONTAINERS": path.resolve(__dirname, "src/components/containers"),
        "@EXAMPLES": path.resolve(__dirname, "src/components/examples"),
        "@ICONS": path.resolve(__dirname, "src/components/icons"),
        "@INPUTS": path.resolve(__dirname, "src/components/inputs"),
        "@COMPONENTS": path.resolve(__dirname, "src/components"),
        "@SERVICES": path.resolve(__dirname, "src/services"),
      },
    },
    server: { watch: { usePolling: true } },
  });
};
