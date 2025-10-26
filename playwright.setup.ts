console.log('Loading playwright.setup.ts...');
import { expect } from '@playwright/test';
import { config } from './config';

expect.configure({ timeout: config.timeouts.expect });

async function setupGlobalResources() {
  // Add actual setup if needed, e.g., database, API client
}

export default async function globalSetup() {
  await setupGlobalResources();
  console.log('Global setup completed successfully.');
}