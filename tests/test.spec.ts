console.log('Loading test.spec.ts...');
import { test, expect } from '@playwright/test';
import { config } from '../config';

test.describe('Quote Form Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(config.testData.baseUrl);
  });

  test('should fill out and verify required fields', async ({ page }) => {
    await page.locator('input[name="username"]').fill(config.testData.username);
    await page.locator('input[name="email"]').fill(config.testData.email);
    await page.locator('#password').fill(config.testData.password);
    await page.locator('#password').press('Tab');
    await page.locator('#confirmPassword').fill(config.testData.password);
    await page.locator('input[name="name"]').click();
    await page.locator('input[name="firstName"]').fill(config.testData.firstName);
    await page.locator('input[name="lastName"]').fill(config.testData.lastName);
    await page.locator('text=Save').click();
    await page.locator('input[name="agreedToPrivacyPolicy"]').check();
    await page.locator('#formSubmit').click();
    await page.waitForTimeout(1000);
    const resultContainer = await page.locator('#quotePageResult');
    await expect(resultContainer).toBeVisible();
    await expect(resultContainer.locator('b[name="username"]')).toHaveText(config.testData.username);
    await expect(resultContainer.locator('b[name="email"]')).toHaveText(config.testData.email);
    await expect(resultContainer.locator('b[name="password"]')).toHaveText('[entered]');
    await expect(resultContainer.locator('b[name="firstName"]')).toHaveText(config.testData.firstName);
    await expect(resultContainer.locator('b[name="lastName"]')).toHaveText(config.testData.lastName);
    await expect(resultContainer.locator('b[name="name"]')).toHaveText(`${config.testData.firstName} ${config.testData.lastName}`);
    await expect(resultContainer.locator('b[name="agreedToPrivacyPolicy"]')).toHaveText('true');
  });
});