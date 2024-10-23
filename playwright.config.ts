import { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = 
{
    timeout: 60000,
    retries: 0,
    reporter: 'html',
    use: {
        headless: true,
        viewport: { width: 1800, height: 1000 },
        actionTimeout: 15000,
        ignoreHTTPSErrors: true,
        video: 'off',
        screenshot: 'off'
      },
      projects: [
        {
          name: 'Chromium',
          use: { browserName: 'chromium' },
        },
        {
          name: 'Firefox',
          use: { browserName: 'firefox' },
        },
        {
          name: 'Webkit',
          use: { browserName: 'webkit' },
        },
      ],
}

export default config