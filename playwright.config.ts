import { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = 
{
    timeout: 60000,
    retries: 0,
    reporter: [
      ['html', {open: 'never'}], 
      ['allure-playwright', {open: 'never'}]
    ],
    use: {
        headless: true,
        viewport: { width: 1800, height: 1000 },
        actionTimeout: 15000,
        ignoreHTTPSErrors: true,
        trace: 'on-first-retry',
        video: 'on',
        screenshot: 'only-on-failure'
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