console.log('Loading world.ts...');
import { IWorldOptions, setWorldConstructor, World } from '@cucumber/cucumber';
import { chromium, firefox, Browser, BrowserContext, Page } from 'playwright';
import { config } from '../../config';
import fs from 'fs';
import path from 'path';

const VIDEO_DIR = path.resolve('test-reports/videos');
const LAUNCH_OPTS = {
  headless: config.browser.headless,
  slowMo: config.browser.slowMo,
  args: [
    '--disable-web-security',
    '--disable-gpu',
    '--no-sandbox',
    '--disable-setuid-sandbox',
    `--window-position=${config.browser.position.x},${config.browser.position.y}`  // Use centralized position
  ],
  ignoreDefaultArgs: ['--disable-extensions'],
};

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  constructor(options: IWorldOptions) {
    super(options);
  }

  async init(): Promise<void> {
    await fs.promises.rm(VIDEO_DIR, { recursive: true, force: true });
    await fs.promises.mkdir(VIDEO_DIR, { recursive: true });
    switch (config.browser.name) {
      case 'firefox':
        this.browser = await firefox.launch(LAUNCH_OPTS);
        break;
      case 'chromium':
      default:
        this.browser = await chromium.launch(LAUNCH_OPTS);
        break;
    }

    this.context = await this.browser.newContext({
      viewport: config.browser.viewport,
      permissions: ['geolocation'],
      geolocation: { longitude: -122.4194, latitude: 37.7749 },
      locale: 'en-US',
      timezoneId: 'America/New_York',
      ignoreHTTPSErrors: true,
      recordVideo: { dir: VIDEO_DIR, size: config.browser.viewport },
    });

    this.page = await this.context.newPage();
    this.page.setDefaultTimeout(config.timeouts.global);
    this.page.setDefaultNavigationTimeout(config.timeouts.navigation); 
  }

  async cleanup(): Promise<void> {
    await this.page?.waitForTimeout(500);
    await this.page?.close();
    await this.context?.close();
    await this.browser?.close();
    const tempDir = path.resolve(process.cwd(), 'temp');
    try {
      const files = fs.readdirSync(tempDir);
      files.forEach(file => {
        fs.unlinkSync(path.join(tempDir, file));
      });
      console.log(`Cleaned up ${files.length} temp files in ${tempDir}`);
    } catch (e: any) {
      if (e.code !== 'ENOENT') {
        console.warn(`Could not clean temp: ${e.message}`);
      }
    }
    const when = new Date().toISOString();
    console.log(`Completed at: ${when}`);
  }
}

setWorldConstructor(CustomWorld);