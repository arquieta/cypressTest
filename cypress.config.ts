import { defineConfig } from "cypress";
import fs from 'fs';

export default defineConfig({
  video: true,                       
  screenshotOnRunFailure: true,      
  trashAssetsBeforeRuns: true,             
  retries: { runMode: 2, openMode: 0 },  
  e2e: {
    setupNodeEvents(on, config) {
      on('after:spec', (spec, results) => {
        if (results && results.stats.failures === 0 && results.video) {
          fs.unlinkSync(results.video);          
        }
      });
      return config;
      
      
    },
    baseUrl: 'https://demo-ecommerce.local'
  },
});
