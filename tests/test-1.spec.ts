import { test, expect } from '@playwright/test';


test('quote', async ({ page }) => {
  await page.goto('https://skryabin.com/market/quote.html');
  await page.locator('input[name="username"]').fill('vskryabin');
  await page.locator('input[name="email"]').fill('slava@skryabin.com');
  await page.getByRole('textbox', { name: 'Password*', exact: true }).fill('welcome');
  await page.keyboard.press('Tab');
  await page.getByRole('textbox', { name: 'Confirm Password*' }).fill('welcome');
  await page.getByRole('textbox', { name: 'Name*' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Slava');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Skryabin');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('checkbox', { name: 'I have read and accept' }).check();
  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.locator('div').nth(1)).toContainText('slava@skryabin.com');
  await page.close();

});

test('usps', async ({ page }) => {

  await page.goto('https://www.usps.com/');
  await page.getByRole('menuitem', { name: 'Send' }).hover();
  await page.locator('a').filter({ hasText: /^Look Up a ZIP Code™$/ }).click();
  await page.getByRole('button', { name: 'By Address', exact: true }).click();
  await page.getByRole('textbox', { name: '*Street Address' }).fill('4970 El Camino Real');
  await page.getByRole('textbox', { name: 'City' }).fill('Los Altos');
  await page.getByLabel('State', { exact: true }).selectOption('CA');
  await page.getByRole('button', { name: 'Find' }).click();
  await expect(page.locator('#zipByAddressDiv')).toContainText('94022');
  await page.close();

});