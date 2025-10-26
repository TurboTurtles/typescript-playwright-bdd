console.log('Loading playwright.config.ts...');
import { defineConfig, devices } from '@playwright/test';
import { config } from './config';

const globalUse = {
  actionTimeout: config.timeouts.action,
  navigationTimeout: config.timeouts.navigation,
  trace: 'on',
  headless: config.browser.headless,
  screenshot: 'on',
  video: 'on',
  ignoreHTTPSErrors: true,
  launchOptions: {
    slowMo: config.browser.slowMo,
    args: [
      '--disable-web-security',
      '--disable-gpu',
      '--no-sandbox',
      '--disable-setuid-sandbox',
      `--window-position=${config.browser.position.x},${config.browser.position.y}`,
      `--window-size=${config.browser.viewport.width},${config.browser.viewport.height}`,
    ],
    ignoreDefaultArgs: ['--disable-extensions'],
  },
  contextOptions: {
    viewport: config.browser.viewport,
    permissions: ['geolocation'],
    geolocation: { longitude: -122.4194, latitude: 37.7749 },
    locale: 'en-US',
    timezoneId: 'America/New_York',
    recordVideo: {  // Explicit: Triggers recording with default dir
      dir: 'test-results/videos',
      size: { width: config.browser.viewport.width, height: config.browser.viewport.height },
    },
  },
};

const browserDevices: Record<string, any> = {
  chromium: devices['Desktop Chrome'],
  firefox: devices['Desktop Firefox'],
  webkit: devices['Desktop Safari'],
};

const projects = browserDevices[config.browser.name]
  ? [{ 
      name: config.browser.name, 
      use: { ...globalUse, ...browserDevices[config.browser.name] } 
    }]
  : [
      { name: 'chromium', use: { ...globalUse, ...devices['Desktop Chrome'] } },
      { name: 'firefox', use: { ...globalUse, ...devices['Desktop Firefox'] } },
      { name: 'webkit', use: { ...globalUse, ...devices['Desktop Safari'] } },
    ];

export default defineConfig({
  testDir: './tests',
  testMatch: ['**/*.spec.ts'],
  timeout: config.timeouts.global,
  outputDir: 'test-results',
  globalSetup: './playwright.setup.ts',
  globalTeardown: './playwright.teardown.ts',
  fullyParallel: true,
  forbidOnly: !!config.other.ci,
  retries: !!config.other.ci ? 2 : 0,
  workers: !!config.other.ci ? 2 : undefined,
  reporter: [
    ['html', { outputFolder: 'test-reports', open: 'never' }],
    ['json', { outputFile: 'test-reports/index.json' }],
    ['junit', { outputFile: 'test-reports/junit.xml' }],
  ],
  projects,
});