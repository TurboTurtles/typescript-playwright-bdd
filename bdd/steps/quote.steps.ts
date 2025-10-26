console.log('Loading quote.steps.ts...');

import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import dotenv from 'dotenv';
import QuoteForm from '../../pages/QuoteForm';
import QuoteResult from '../../pages/QuoteResult';

dotenv.config();

Given('I navigate to {string} page', async function (s: string) {
  await new QuoteForm(this.page).navigate();
})

When('I fill out quote required fields', async function () {
  const formPage = new QuoteForm(this.page);
  await formPage.fillUsername(process.env.TEST_USERNAME!);
  await formPage.fillEmail(process.env.TEST_EMAIL!);
  await formPage.fillPassword(process.env.TEST_PASSWORD!);
  await formPage.fillName(process.env.TEST_FIRST_NAME!, process.env.TEST_LAST_NAME!);
  await formPage.checkPrivacyPolicy();
});

When('I submit the quote form', async function () {
  await new QuoteForm(this.page).submit();
});

Then('I should verify required fields submitted successfully', async function () {
  const resultPage = new QuoteResult(this.page);
  expect(await resultPage.isVisible(), 'Result panel is not visible').toBeTruthy();
  expect(await resultPage.getUsernameText()).toEqual(process.env.TEST_USERNAME!);
  expect(await resultPage.getEmailText()).toEqual(process.env.TEST_EMAIL!);
  expect(await resultPage.getPasswordText()).toEqual('[entered]');
  expect(await resultPage.getFirstNameText()).toEqual(process.env.TEST_FIRST_NAME!);
  expect(await resultPage.getLastNameText()).toEqual(process.env.TEST_LAST_NAME!);
  expect(await resultPage.getNameText()).toEqual(`${process.env.TEST_FIRST_NAME!} ${process.env.TEST_LAST_NAME!}`);
  expect(await resultPage.isPrivacyPolicyAccepted(), 'Privacy Policy is not accepted').toBeTruthy();
});

When('I wait for {int} sec', async function (int: number) {
  await this.page.waitForTimeout(int * 1000);
})
