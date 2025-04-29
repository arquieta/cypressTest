import { defineConfig } from "cypress";
import fs from 'fs';

export default defineConfig({
  video: true,                       // activa grabación
  screenshotOnRunFailure: true,      // (true por defecto) solo en fallos
  trashAssetsBeforeRuns: true,       // limpia artefactos de ejecuciones previas       
  retries: { runMode: 2, openMode: 0 },  // 2 retries
  e2e: {
    setupNodeEvents(on, config) {
      on('after:spec', (spec, results) => {
        if (results && results.stats.failures === 0 && results.video) {
          fs.unlinkSync(results.video);          // elimina el archivo
        }
      });
      return config;
      // implement node event listeners here
      
    },
    baseUrl: 'https://demo-ecommerce.local'
  },
});
