import { resolve } from 'path';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import handlebars from 'vite-plugin-handlebars';
import eslint from "vite-plugin-eslint";

export default {
  root: resolve(__dirname, "src"),
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "src"),
    }),
    eslint(),
    ViteImageOptimizer(),
  ],
  base: "./",
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        layout: resolve(__dirname, "src/layout.html"),
        content: resolve(__dirname, "src/content.html"),
        components: resolve(__dirname, "src/components.html"),
        forms: resolve(__dirname, "src/forms.html"),
        content_itou: resolve(__dirname, "src/content-itou.html"),
        components_itou: resolve(__dirname, "src/components-itou.html"),
        sections_itou_01: resolve(__dirname, "src/sections-itou-01.html"),
        sections_itou_02: resolve(__dirname, "src/sections-itou-02.html"),
        sections_itou_03: resolve(__dirname, "src/sections-itou-03.html"),
        sections_itou_04: resolve(__dirname, "src/sections-itou-04.html"),
        sections_itou_05: resolve(__dirname, "src/sections-itou-05.html"),
        sections_itou_06: resolve(__dirname, "src/sections-itou-06.html"),
        layout_itou_authenticated_cms: resolve(__dirname, "src/layout-itou-authenticated-cms.html"),
        layout_itou_authenticated_dashboard: resolve(__dirname, "src/layout-itou-authenticated-dashboard.html"),
        layout_itou_authenticated_detail_pass: resolve(__dirname, "src/layout-itou-authenticated-detail-pass.html"),
        layout_itou_authenticated_form: resolve(__dirname, "src/layout-itou-authenticated-form.html"),
        layout_itou_authenticated_mentions: resolve(__dirname, "src/layout-itou-authenticated-mentions.html"),
        layout_itou_authenticated_search_result: resolve(__dirname, "src/layout-itou-authenticated-search-result.html"),
        layout_itou_authenticated_test: resolve(__dirname, "src/layout-itou-authenticated-test.html"),
        layout_itou_not_authenticated_homepage: resolve(__dirname, "src/layout-itou-not-authenticated-homepage.html"),
        layout_itou_not_authenticated_mentions: resolve(__dirname, "src/layout-itou-not-authenticated-mentions.html"),
        layout_itou_not_authenticated_search_result: resolve(__dirname, "src/layout-itou-not-authenticated-search-result.html"),
        layout_itou_not_authenticated_test: resolve(__dirname, "src/layout-itou-not-authenticated-test.html"),
        layout_itou_not_emplois_homepage: resolve(__dirname, "src/layout-itou-not-emplois-homepage.html"),
        layout_itou_not_emplois_mentions: resolve(__dirname, "src/layout-itou-not-emplois-mentions.html"),
        layout_itou_not_emplois_test: resolve(__dirname, "src/layout-itou-not-emplois-test.html"),
        external_libs_itou_ac: resolve(__dirname, "src/external-libs-itou-ac.html"),
        external_libs_itou_ddp: resolve(__dirname, "src/external-libs-itou-ddp.html"),
        external_libs_itou_in: resolve(__dirname, "src/external-libs-itou-in.html"),
        external_libs_itou_lt: resolve(__dirname, "src/external-libs-itou-lt.html"),
        external_libs_itou_ri: resolve(__dirname, "src/external-libs-itou-ri.html"),
        external_libs_itou_s2: resolve(__dirname, "src/external-libs-itou-s2.html"),
        external_libs_itou_slider: resolve(__dirname, "src/external-libs-itou-slider.html"),
        external_libs_itou_tac: resolve(__dirname, "src/external-libs-itou-tac.html"),
      },
      output: {
        entryFileNames: "javascripts/index.js",
        chunkFileNames: "javascripts/app.js",
        assetFileNames: "stylesheets/app.css",
      },
    },
  },
  server: {
    port: 3000,
  },
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        quietDeps: true,
      },
    },
  },
};
