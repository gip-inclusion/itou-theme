/// <reference types="vitest/config" />
import { resolve } from "path";
import path from 'node:path';
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import handlebars from "vite-plugin-handlebars";
import eslint from "vite-plugin-eslint";
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
const dirname = import.meta.dirname;

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default {
  root: resolve(import.meta.dirname, "src"),
  plugins: [handlebars({
    partialDirectory: resolve(import.meta.dirname, "src")
  }), eslint(), ViteImageOptimizer()],
  base: "./",
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "src/index.html"),
        layout_itou_authenticated_cms: resolve(import.meta.dirname, "src/layout-itou-authenticated-cms.html"),
        layout_itou_authenticated_dashboard: resolve(import.meta.dirname, "src/layout-itou-authenticated-dashboard.html"),
        layout_itou_authenticated_detail_candidature: resolve(import.meta.dirname, "src/layout-itou-authenticated-detail-candidature.html"),
        layout_itou_authenticated_form: resolve(import.meta.dirname, "src/layout-itou-authenticated-form.html"),
        layout_itou_authenticated_mentions: resolve(import.meta.dirname, "src/layout-itou-authenticated-mentions.html"),
        layout_itou_authenticated_search_result: resolve(import.meta.dirname, "src/layout-itou-authenticated-search-result.html"),
        layout_itou_authenticated_candidature_result: resolve(import.meta.dirname, "src/layout-itou-authenticated-candidature-result.html"),
        layout_itou_authenticated_test: resolve(import.meta.dirname, "src/layout-itou-authenticated-test.html"),
        layout_itou_not_authenticated_homepage: resolve(import.meta.dirname, "src/layout-itou-not-authenticated-homepage.html"),
        layout_itou_not_authenticated_mentions: resolve(import.meta.dirname, "src/layout-itou-not-authenticated-mentions.html"),
        layout_itou_not_authenticated_search_result: resolve(import.meta.dirname, "src/layout-itou-not-authenticated-search-result.html"),
        layout_itou_not_authenticated_test: resolve(import.meta.dirname, "src/layout-itou-not-authenticated-test.html"),
        layout_itou_not_authenticated_signup: resolve(import.meta.dirname, "src/layout-itou-not-authenticated-signup.html"),
        layout_itou_not_authenticated_signup_proconnect: resolve(import.meta.dirname, "src/layout-itou-not-authenticated-signup-step-proconnect.html"),
        layout_itou_not_authenticated_signup_structure: resolve(import.meta.dirname, "src/layout-itou-not-authenticated-signup-step-structure.html"),
        layout_itou_not_authenticated_signup_confirmation: resolve(import.meta.dirname, "src/layout-itou-not-authenticated-signup-step-confirmation.html"),
        layout_not_itou_pilotage_form: resolve(import.meta.dirname, "src/layout-not-itou-pilotage-form.html"),
        layout_nexus_connect: resolve(import.meta.dirname, "src/layout-nexus-connect.html"),
        layout_nexus_dashboard: resolve(import.meta.dirname, "src/layout-nexus-dashboard.html"),
        layout_nexus_emplois: resolve(import.meta.dirname, "src/layout-nexus-emplois.html"),
        layout_nexus_emplois_active: resolve(import.meta.dirname, "src/layout-nexus-emplois-active.html"),
        layout_nexus_emplois_active_2: resolve(import.meta.dirname, "src/layout-nexus-emplois-active-2.html"),
        layout_nexus_emplois_attente: resolve(import.meta.dirname, "src/layout-nexus-emplois-attente.html"),
        layout_nexus_emplois_liste: resolve(import.meta.dirname, "src/layout-nexus-emplois-liste.html"),
        layout_nexus_dora: resolve(import.meta.dirname, "src/layout-nexus-dora.html"),
        layout_nexus_dora_active: resolve(import.meta.dirname, "src/layout-nexus-dora-active.html"),
        layout_nexus_dora_active_2: resolve(import.meta.dirname, "src/layout-nexus-dora-active-2.html"),
        layout_nexus_dora_attente: resolve(import.meta.dirname, "src/layout-nexus-dora-attente.html"),
        layout_nexus_communaute: resolve(import.meta.dirname, "src/layout-nexus-communaute.html"),
        layout_nexus_marche: resolve(import.meta.dirname, "src/layout-nexus-marche.html"),
        layout_nexus_pilotage: resolve(import.meta.dirname, "src/layout-nexus-pilotage.html"),
        layout_nexus_monrecap: resolve(import.meta.dirname, "src/layout-nexus-monrecap.html"),
        layout_nexus_monrecap_active: resolve(import.meta.dirname, "src/layout-nexus-monrecap-active.html"),
        layout_nexus_marche_active: resolve(import.meta.dirname, "src/layout-nexus-marche-active.html"),
        layout_nexus_pilotage_active: resolve(import.meta.dirname, "src/layout-nexus-pilotage-active.html"),
        layout_nexus_communaute_active: resolve(import.meta.dirname, "src/layout-nexus-communaute-active.html"),
        layout_nexus_dropdown_dsfr: resolve(import.meta.dirname, "src/layout-nexus-dropdown-dsfr.html"),
        external_libs_itou_ddp: resolve(import.meta.dirname, "src/external-libs-itou-ddp.html"),
        external_libs_itou_in: resolve(import.meta.dirname, "src/external-libs-itou-in.html"),
        external_libs_itou_s2: resolve(import.meta.dirname, "src/external-libs-itou-s2.html"),
        external_libs_itou_slider: resolve(import.meta.dirname, "src/external-libs-itou-slider.html"),
        external_libs_itou_tac: resolve(import.meta.dirname, "src/external-libs-itou-tac.html")
      },
      output: {
        entryFileNames: "javascripts/index.js",
        chunkFileNames: "javascripts/app.js",
        assetFileNames: "stylesheets/app.css"
      }
    }
  },
  server: {
    port: 3000
  },
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        quietDeps: true,
        silenceDeprecations: ['import', 'global-builtin']
      }
    }
  },
  test: {
    projects: [{
      extends: true,
      plugins: [
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
      storybookTest({
        configDir: path.join(dirname, '.storybook')
      })],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: playwright({}),
          instances: [{
            browser: 'chromium'
          }]
        },
        setupFiles: ['.storybook/vitest.setup.js']
      }
    }]
  }
};
