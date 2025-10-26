import { expect } from '@playwright/test';
import { config } from './config';

// Configure expect timeout globally using centralized config
expect.configure({ timeout: config.timeouts.expect });

async function setupGlobalResources() {
  // Add actual setup if needed, e.g., database, API client
  console.log('Global resources initialized.');
}

// Main global setup function
export default async function globalSetup() {
  console.log('Starting global setup...');
  await setupGlobalResources();
  console.log('Global setup completed successfully.');
}