import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run rapp1:serve',
        production: 'nx run rapp1:preview',
      },
      ciWebServerCommand: 'nx run rapp1:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
