console.log('Loading test.spec.ts...');
import { test, expect } from '@playwright/test';
import { config } from '../config';

test.describe('Playwright Codegen tests', () => {
  /* Automate the following test case:
     Open usps page
     Navigate to find by zip 
     Enter 4970 El Camino Real, Los Altos, CA
     Submit the form
     Validate that 94022 zip is present in the results
  */
  test('should fill out and verify usps return zip', async ({ page }) => {
    await page.goto('https://tools.usps.com/zip-code-lookup.htm?byaddress');
    await page.getByRole('textbox', { name: '*Street Address' }).fill('4970 El Camino Real');
    await page.getByRole('textbox', { name: 'City' }).fill('Los Altos');
    await page.getByLabel('State', { exact: true }).selectOption('CA');
    await page.getByRole('button', { name: 'Find' }).click();
    await expect(page.locator('.result-address-wrapper')).toBeVisible();
    await expect(page.locator('#zip-lookup-app')).toContainText('94022');
  });
  /* Automate the following test case:
     Open quote form url https://skryabin.com/market/quote.html
     Fill out required fields only
      - username: Mtwain
      - email: m.twain@example.com
      - password: welcome$123
      - click on name and fill out name as Mark and last name as Twain
      - check privacy policy checkbox
     Submit the form
     Validate the result output
      - username: Mtwain
      - email: m.twain@example.com
      - password: welcome$123
      - firstName: Mark
      - lastName: Twain
      - name: Mark Twain
  */
  test('should fill out and verify required fields on quote form', async ({ page }) => {
    await page.goto('https://skryabin.com/market/quote.html');
    await page.locator('input[name="username"]').fill('MTwain');
    await page.locator('input[name="email"]').fill('m.twain@example.com');
    await page.locator('input[name="password"]').type('welcome$123');
    await page.locator('#confirmPassword').fill('welcome$123');
    await page.click('#name');
    await page.locator('input[name="firstName"]').fill('Mark');
    await page.locator('input[name="lastName"]').fill('Twain');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByRole('textbox', { name: 'Phone Number' }).isVisible();
    await page.locator('#dateOfBirth').fill('11/30/1990');
    await page.keyboard.press('Tab');
    await page.locator('select[name="countryOfOrigin"]').selectOption('USA');
    await page.getByRole('radio', { name: 'Female' }).check();
    await page.getByRole('checkbox', { name: 'I allow to contact me via email or phone' }).check();
    await page.locator('select[name="carMake"]').selectOption('BMW');
    await page.click('#thirdPartyButton');
    await page.getByRole('button', { name: 'Choose File' }).click();
    await page.getByRole('button', { name: 'Choose File' }).setInputFiles('C:\\Users\\MG\\Sti_Trace.log');
    await page.getByRole('checkbox', { name: 'I have read and accept' }).check();
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.locator('#applicationResult')).toHaveText('Submitted Application');








  });
});