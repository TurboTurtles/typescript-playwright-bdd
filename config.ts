import dotenv from 'dotenv';
dotenv.config();

// Centralized config object with defaults and types
export const config = {
  browser: {
    name: process.env.BROWSER?.toLowerCase() || 'chromium',
    headless: process.env.HEADLESS === 'true',
    slowMo: Number(process.env.SLOW_MO || 0),
    viewport: {
      width: parseInt(process.env.VIEWPORT_WIDTH || '1920'),
      height: parseInt(process.env.VIEWPORT_HEIGHT || '1080'),
    },
    position: {
      x: parseInt(process.env.WINDOW_POSITION_X || '0'),
      y: parseInt(process.env.WINDOW_POSITION_Y || '0'),
    },
  },
  timeouts: {
    global: parseInt(process.env.GLOBAL_TIMEOUT || '30000'),
    action: parseInt(process.env.ACTION_TIMEOUT || '5000'),
    navigation: parseInt(process.env.NAVIGATION_TIMEOUT || '30000'),
    expect: parseInt(process.env.EXPECT_TIMEOUT || '5000'),
    wait: parseInt(process.env.WAIT_TIMEOUT || '10000'),
  },
  testData: {
    quoteBaseUrl: process.env.TEST_QUOTE_BASE_URL!,
    username: process.env.TEST_USERNAME!,
    email: process.env.TEST_EMAIL!,
    password: process.env.TEST_PASSWORD!,
    firstName: process.env.TEST_FIRST_NAME!,
    lastName: process.env.TEST_LAST_NAME!,
  },
  other: {
    debug: process.env.DEBUG === 'true',
    ci: process.env.CI,
  },
};

export const { timeouts, browser, testData } = config;