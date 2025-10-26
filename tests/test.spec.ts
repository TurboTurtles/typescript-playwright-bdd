console.log('Loading test.spec.ts...');
import { test, expect } from '@playwright/test';
import { config } from '../config';

test.describe('Quote Form Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(config.testData.quoteBaseUrl);
  });

  test('should fill out and verify required fields', async ({ page }) => {

  });
});