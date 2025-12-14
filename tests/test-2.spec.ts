import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://skryabin.com/market/quote.html');
  await page.getByRole('button', { name: 'Choose File' }).click();
  await page.getByRole('button', { name: 'Choose File' }).setInputFiles('Sti_Trace.log');
  await page.getByRole('checkbox', { name: 'I have read and accept' }).check();
  await page.getByRole('button', { name: 'Submit' }).click();
});