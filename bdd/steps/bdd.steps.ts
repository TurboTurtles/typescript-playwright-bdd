console.log('Loading bdd.steps.ts...');

import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';  // Adjust path if needed
import { config } from '../../config';  // Import centralized config

expect.configure({ timeout: config.timeouts.expect });
const WAIT_TIMEOUT = config.timeouts.wait;

Given('I go to url {string}', async function (this: CustomWorld, url: string) {
  await this.page.goto(url);
});

When('I reload the page', async function (this: CustomWorld) {
  await this.page.reload();
});

When('I go back', async function (this: CustomWorld) {
  await this.page.goBack();
});

When('I go forward', async function (this: CustomWorld) {
  await this.page.goForward();
});

When('I click on element using xpath {string}', async function (this: CustomWorld, selector: string) {
  await this.page.locator(`xpath=${selector}`).click();
});

When('I click on element using css {string}', async function (this: CustomWorld, selector: string) {
  await this.page.locator(selector).click();
});

When('I double click on element using xpath {string}', async function (this: CustomWorld, selector: string) {
  await this.page.locator(`xpath=${selector}`).dblclick();
});

When('I double click on element using css {string}', async function (this: CustomWorld, selector: string) {
  await this.page.locator(selector).dblclick();
});

When('I right click on element using xpath {string}', async function (this: CustomWorld, selector: string) {
  await this.page.locator(`xpath=${selector}`).click({ button: 'right' });
});

When('I right click on element using css {string}', async function (this: CustomWorld, selector: string) {
  await this.page.locator(selector).click({ button: 'right' });
});

When('I hover over element using xpath {string}', async function (this: CustomWorld, selector: string) {
  await this.page.locator(`xpath=${selector}`).hover();
});

When('I hover over element using css {string}', async function (this: CustomWorld, selector: string) {
  await this.page.locator(selector).hover();
});

When('I fill element using xpath {string} with value {string}', async function (this: CustomWorld, selector: string, value: string) {
  await this.page.locator(`xpath=${selector}`).fill(value);
});

When('I fill element using css {string} with value {string}', async function (this: CustomWorld, selector: string, value: string) {
  await this.page.locator(selector).fill(value);
});

When('I type {string} into element using xpath {string}', async function (this: CustomWorld, text: string, selector: string) {
  await this.page.locator(`xpath=${selector}`).type(text);
});

When('I type {string} into element using css {string}', async function (this: CustomWorld, text: string, selector: string) {
  await this.page.locator(selector).type(text);
});

When('I clear element using xpath {string}', async function (this: CustomWorld, selector: string) {
  await this.page.locator(`xpath=${selector}`).clear();
});

When('I clear element using css {string}', async function (this: CustomWorld, selector: string) {
  await this.page.locator(selector).clear();
});

When('I focus on element using xpath {string}', async function (this: CustomWorld, selector: string) {
  await this.page.locator(`xpath=${selector}`).focus();
});

When('I focus on element using css {string}', async function (this: CustomWorld, selector: string) {
  await this.page.locator(selector).focus();
});

When('I select option {string} from element using xpath {string}', async function (this: CustomWorld, value: string, selector: string) {
  await this.page.locator(`xpath=${selector}`).selectOption(value);
});

When('I select option {string} from element using css {string}', async function (this: CustomWorld, value: string, selector: string) {
  await this.page.locator(selector).selectOption(value);
});

When('I select option by text {string} from element using xpath {string}', async function (this: CustomWorld, text: string, selector: string) {
  await this.page.locator(`xpath=${selector}`).selectOption({ label: text });
});

When('I select option by text {string} from element using css {string}', async function (this: CustomWorld, text: string, selector: string) {
  await this.page.locator(selector).selectOption({ label: text });
});

When('I check element using xpath {string}', async function (this: CustomWorld, selector: string) {
  await this.page.locator(`xpath=${selector}`).check();
});

When('I check element using css {string}', async function (this: CustomWorld, selector: string) {
  await this.page.locator(selector).check();
});

When('I uncheck element using xpath {string}', async function (this: CustomWorld, selector: string) {
  await this.page.locator(`xpath=${selector}`).uncheck();
});

When('I uncheck element using css {string}', async function (this: CustomWorld, selector: string) {
  await this.page.locator(selector).uncheck();
});

When('I scroll to element using xpath {string}', async function (this: CustomWorld, selector: string) {
  await this.page.locator(`xpath=${selector}`).scrollIntoViewIfNeeded();
});

When('I scroll to element using css {string}', async function (this: CustomWorld, selector: string) {
  await this.page.locator(selector).scrollIntoViewIfNeeded();
});

When('I drag element using xpath {string} to element using xpath {string}', async function (this: CustomWorld, sourceSelector: string, targetSelector: string) {
  await this.page.locator(`xpath=${sourceSelector}`).dragTo(this.page.locator(`xpath=${targetSelector}`));
});

When('I drag element using css {string} to element using css {string}', async function (this: CustomWorld, sourceSelector: string, targetSelector: string) {
  await this.page.locator(sourceSelector).dragTo(this.page.locator(targetSelector));
});

When('I press {string} on element using xpath {string}', async function (this: CustomWorld, key: string, selector: string) {
  await this.page.locator(`xpath=${selector}`).press(key);
});

When('I press {string} on element using css {string}', async function (this: CustomWorld, key: string, selector: string) {
  await this.page.locator(selector).press(key);
});

When('I upload file {string} to element using xpath {string}', async function (this: CustomWorld, filePath: string, selector: string) {
  await this.page.locator(`xpath=${selector}`).setInputFiles(filePath);
});

When('I upload file {string} to element using css {string}', async function (this: CustomWorld, filePath: string, selector: string) {
  await this.page.locator(selector).setInputFiles(filePath);
});

When('I wait for any element using xpath {string} to be visible', async function (this: CustomWorld, selector: string) {
  await this.page.locator(`xpath=${selector}`).first().waitFor({ state: 'visible', timeout: WAIT_TIMEOUT });
});

When('I wait for any element using css {string} to be visible', async function (this: CustomWorld, selector: string) {
  await this.page.locator(selector).first().waitFor({ state: 'visible', timeout: WAIT_TIMEOUT });
});

When('I wait for any element using xpath {string} to be hidden', async function (this: CustomWorld, selector: string) {
  await this.page.locator(`xpath=${selector}`).first().waitFor({ state: 'hidden', timeout: WAIT_TIMEOUT });
});

When('I wait for any element using css {string} to be hidden', async function (this: CustomWorld, selector: string) {
  await this.page.locator(selector).first().waitFor({ state: 'hidden', timeout: WAIT_TIMEOUT });
});

When('I wait for text {string} to appear in element using xpath {string}', async function (this: CustomWorld, text: string, selector: string) {
  await expect(this.page.locator(`xpath=${selector}`)).toContainText(text, { timeout: WAIT_TIMEOUT });
});

When('I wait for text {string} to appear in element using css {string}', async function (this: CustomWorld, text: string, selector: string) {
  await expect(this.page.locator(selector)).toContainText(text, { timeout: WAIT_TIMEOUT });
});

When('I accept the alert', async function (this: CustomWorld) {
  this.page.on('dialog', dialog => dialog.accept());
});

When('I dismiss the alert', async function (this: CustomWorld) {
  this.page.on('dialog', dialog => dialog.dismiss());
});

When('I switch to frame using xpath {string}', async function (this: CustomWorld, selector: string) {
  const frame = this.page.frameLocator(`xpath=${selector}`);
  // Note: Further actions would use frame.locator()
});

When('I switch to frame using css {string}', async function (this: CustomWorld, selector: string) {
  const frame = this.page.frameLocator(selector);
  // Note: Further actions would use frame.locator()
});

When('I set viewport size to {int} by {int}', async function (this: CustomWorld, width: number, height: number) {
  await this.page.setViewportSize({ width, height });
});

When('I take a screenshot', async function (this: CustomWorld) {
  await this.page.screenshot({ path: 'screenshot.png' });
});

When('I take a full page screenshot', async function (this: CustomWorld) {
  await this.page.screenshot({ path: 'fullpage.png', fullPage: true });
});

When('I pause execution', async function (this: CustomWorld) {
  await this.page.pause();
});

When('I evaluate JavaScript {string}', async function (this: CustomWorld, script: string) {
  await this.page.evaluate(script);
});

When('I set cookie {string} with value {string}', async function (this: CustomWorld, name: string, value: string) {
  await this.page.context().addCookies([{ name, value, url: this.page.url() }]);
});

When('I clear cookies', async function (this: CustomWorld) {
  await this.page.context().clearCookies();
});

When('I set extra HTTP header {string} to {string}', async function (this: CustomWorld, name: string, value: string) {
  await this.page.setExtraHTTPHeaders({ [name]: value });
});

When('I emulate media type {string}', async function (this: CustomWorld, mediaType: string) {
  await this.page.emulateMedia({ media: mediaType as 'screen' | 'print' });
});

When('I set geolocation to latitude {float} longitude {float}', async function (this: CustomWorld, latitude: number, longitude: number) {
  await this.page.context().setGeolocation({ latitude, longitude });
});

When('I grant permission {string}', async function (this: CustomWorld, permission: string) {
  await this.page.context().grantPermissions([permission]);
});

When('I route {string} to respond with {string}', async function (this: CustomWorld, urlPattern: string, responseBody: string) {
  await this.page.route(urlPattern, route => route.fulfill({ body: responseBody }));
});

When('I wait for request {string}', async function (this: CustomWorld, urlPattern: string) {
  await this.page.waitForRequest(urlPattern);
});

When('I wait for response {string}', async function (this: CustomWorld, urlPattern: string) {
  await this.page.waitForResponse(urlPattern);
});

When('I add script tag with url {string}', async function (this: CustomWorld, url: string) {
  await this.page.addScriptTag({ url });
});

When('I add script tag with content {string}', async function (this: CustomWorld, content: string) {
  await this.page.addScriptTag({ content });
});

When('I add style tag with url {string}', async function (this: CustomWorld, url: string) {
  await this.page.addStyleTag({ url });
});

When('I add style tag with content {string}', async function (this: CustomWorld, content: string) {
  await this.page.addStyleTag({ content });
});

When('I set local storage item {string} to {string}', async function (this: CustomWorld, key: string, value: string) {
  await this.page.evaluate(([k, v]) => localStorage.setItem(k, v), [key, value]);
});

When('I set session storage item {string} to {string}', async function (this: CustomWorld, key: string, value: string) {
  await this.page.evaluate(([k, v]) => sessionStorage.setItem(k, v), [key, value]);
});

When('I tap on element using xpath {string}', async function (this: CustomWorld, selector: string) {
  await this.page.locator(`xpath=${selector}`).tap();
});

When('I tap on element using css {string}', async function (this: CustomWorld, selector: string) {
  await this.page.locator(selector).tap();
});

When('I take screenshot of element using xpath {string}', async function (this: CustomWorld, selector: string) {
  await this.page.locator(`xpath=${selector}`).screenshot({ path: 'element.png' });
});

When('I take screenshot of element using css {string}', async function (this: CustomWorld, selector: string) {
  await this.page.locator(selector).screenshot({ path: 'element.png' });
});

When('I press keyboard key {string}', async function (this: CustomWorld, key: string) {
  await this.page.keyboard.press(key);
});

When('I hold keyboard key {string}', async function (this: CustomWorld, key: string) {
  await this.page.keyboard.down(key);
});

When('I release keyboard key {string}', async function (this: CustomWorld, key: string) {
  await this.page.keyboard.up(key);
});

When('I type {string} on page', async function (this: CustomWorld, text: string) {
  await this.page.keyboard.type(text);
});

When('I click at coordinates {int} {int}', async function (this: CustomWorld, x: number, y: number) {
  await this.page.mouse.click(x, y);
});

When('I double click at coordinates {int} {int}', async function (this: CustomWorld, x: number, y: number) {
  await this.page.mouse.dblclick(x, y);
});

When('I move mouse to coordinates {int} {int}', async function (this: CustomWorld, x: number, y: number) {
  await this.page.mouse.move(x, y);
});

When('I press mouse button {string} down', async function (this: CustomWorld, button: string) {
  await this.page.mouse.down({ button: button as 'left' | 'right' | 'middle' });
});

When('I press mouse button {string} up', async function (this: CustomWorld, button: string) {
  await this.page.mouse.up({ button: button as 'left' | 'right' | 'middle' });
});

When('I wheel mouse by {int} {int}', async function (this: CustomWorld, deltaX: number, deltaY: number) {
  await this.page.mouse.wheel(deltaX, deltaY);
});

When('I close the page', async function (this: CustomWorld) {
  await this.page.close();
});

When('I bring page to front', async function (this: CustomWorld) {
  await this.page.bringToFront();
});

When('I set page content to {string}', async function (this: CustomWorld, html: string) {
  await this.page.setContent(html);
});

When('I wait for load state {string}', async function (this: CustomWorld, state: string) {
  await this.page.waitForLoadState(state as 'load' | 'domcontentloaded' | 'networkidle');
});

When('I wait for function {string}', async function (this: CustomWorld, expression: string) {
  await this.page.waitForFunction(expression);
});

When('I wait for timeout in milliseconds {int}', async function (this: CustomWorld, milliseconds: number) {
  await this.page.waitForTimeout(milliseconds);
});

Then('I should see any element using xpath {string}', async function (this: CustomWorld, selector: string) {
  await this.page.locator(`xpath=${selector}`).first().waitFor({ state: 'visible', timeout: WAIT_TIMEOUT });
});

Then('I should see any element using css {string}', async function (this: CustomWorld, selector: string) {
  await this.page.locator(selector).first().waitFor({ state: 'visible', timeout: WAIT_TIMEOUT });
});

Then('I should not see any element using xpath {string}', async function (this: CustomWorld, selector: string) {
  await this.page.locator(`xpath=${selector}`).first().waitFor({ state: 'hidden', timeout: WAIT_TIMEOUT });
});

Then('I should not see any element using css {string}', async function (this: CustomWorld, selector: string) {
  await this.page.locator(selector).first().waitFor({ state: 'hidden', timeout: WAIT_TIMEOUT });
});

Then('I should see element using xpath {string} contains {string}', async function (this: CustomWorld, selector: string, text: string) {
  const elementText = await this.page.locator(`xpath=${selector}`).textContent();
  expect(elementText).toContain(text);
});

Then('I should see element using css {string} contains {string}', async function (this: CustomWorld, selector: string, text: string) {
  const elementText = await this.page.locator(selector).textContent();
  expect(elementText).toContain(text);
});

Then('I should see the page title is exactly {string}', async function (this: CustomWorld, expectedTitle: string) {
  const title = await this.page.title();
  expect(title).toBe(expectedTitle);
});

Then('I should see the current URL is exactly {string}', async function (this: CustomWorld, expectedUrl: string) {
  const url = this.page.url();
  expect(url).toBe(expectedUrl);
});

Then('I should see element using xpath {string} has attribute {string} with value exactly {string}', async function (this: CustomWorld, selector: string, attribute: string, value: string) {
  const attrValue = await this.page.locator(`xpath=${selector}`).getAttribute(attribute);
  expect(attrValue).toBe(value);
});

Then('I should see element using css {string} has attribute {string} with value exactly {string}', async function (this: CustomWorld, selector: string, attribute: string, value: string) {
  const attrValue = await this.page.locator(selector).getAttribute(attribute);
  expect(attrValue).toBe(value);
});

Then('I should see element using xpath {string} is checked', async function (this: CustomWorld, selector: string) {
  const isChecked = await this.page.locator(`xpath=${selector}`).isChecked();
  expect(isChecked).toBe(true);
});

Then('I should see element using css {string} is checked', async function (this: CustomWorld, selector: string) {
  const isChecked = await this.page.locator(selector).isChecked();
  expect(isChecked).toBe(true);
});

Then('I should see element using xpath {string} is not checked', async function (this: CustomWorld, selector: string) {
  const isChecked = await this.page.locator(`xpath=${selector}`).isChecked();
  expect(isChecked).toBe(false);
});

Then('I should see element using css {string} is not checked', async function (this: CustomWorld, selector: string) {
  const isChecked = await this.page.locator(selector).isChecked();
  expect(isChecked).toBe(false);
});

Then('I should see element using xpath {string} is enabled', async function (this: CustomWorld, selector: string) {
  const isEnabled = await this.page.locator(`xpath=${selector}`).isEnabled();
  expect(isEnabled).toBe(true);
});

Then('I should see element using css {string} is enabled', async function (this: CustomWorld, selector: string) {
  const isEnabled = await this.page.locator(selector).isEnabled();
  expect(isEnabled).toBe(true);
});

Then('I should see element using xpath {string} is disabled', async function (this: CustomWorld, selector: string) {
  const isEnabled = await this.page.locator(`xpath=${selector}`).isEnabled();
  expect(isEnabled).toBe(false);
});

Then('I should see element using css {string} is disabled', async function (this: CustomWorld, selector: string) {
  const isEnabled = await this.page.locator(selector).isEnabled();
  expect(isEnabled).toBe(false);
});

Then('I should see element using xpath {string} is visible', async function (this: CustomWorld, selector: string) {
  const isVisible = await this.page.locator(`xpath=${selector}`).isVisible();
  expect(isVisible).toBe(true);
});

Then('I should see element using css {string} is visible', async function (this: CustomWorld, selector: string) {
  const isVisible = await this.page.locator(selector).isVisible();
  expect(isVisible).toBe(true);
});

Then('I should see element using xpath {string} is hidden', async function (this: CustomWorld, selector: string) {
  const isHidden = await this.page.locator(`xpath=${selector}`).isHidden();
  expect(isHidden).toBe(true);
});

Then('I should see element using css {string} is hidden', async function (this: CustomWorld, selector: string) {
  const isHidden = await this.page.locator(selector).isHidden();
  expect(isHidden).toBe(true);
});

Then('I should see element using xpath {string} inner text is exactly {string}', async function (this: CustomWorld, selector: string, expectedText: string) {
  const innerText = await this.page.locator(`xpath=${selector}`).innerText();
  expect(innerText).toBe(expectedText);
});

Then('I should see element using css {string} inner text is exactly {string}', async function (this: CustomWorld, selector: string, expectedText: string) {
  const innerText = await this.page.locator(selector).innerText();
  expect(innerText).toBe(expectedText);
});

Then('I should see element using xpath {string} inner HTML is exactly {string}', async function (this: CustomWorld, selector: string, expectedHTML: string) {
  const innerHTML = await this.page.locator(`xpath=${selector}`).innerHTML();
  expect(innerHTML).toBe(expectedHTML);
});

Then('I should see element using css {string} inner HTML is exactly {string}', async function (this: CustomWorld, selector: string, expectedHTML: string) {
  const innerHTML = await this.page.locator(selector).innerHTML();
  expect(innerHTML).toBe(expectedHTML);
});

Then('I should see element using xpath {string} text content is exactly {string}', async function (this: CustomWorld, selector: string, expectedText: string) {
  const textContent = await this.page.locator(`xpath=${selector}`).textContent();
  expect(textContent).toBe(expectedText);
});

Then('I should see element using css {string} text content is exactly {string}', async function (this: CustomWorld, selector: string, expectedText: string) {
  const textContent = await this.page.locator(selector).textContent();
  expect(textContent).toBe(expectedText);
});

Then('I should see element using xpath {string} input value is exactly {string}', async function (this: CustomWorld, selector: string, expectedValue: string) {
  const inputValue = await this.page.locator(`xpath=${selector}`).inputValue();
  expect(inputValue).toBe(expectedValue);
});

Then('I should see element using css {string} input value is exactly {string}', async function (this: CustomWorld, selector: string, expectedValue: string) {
  const inputValue = await this.page.locator(selector).inputValue();
  expect(inputValue).toBe(expectedValue);
});

Then('I should see element using xpath {string} count is exactly {int}', async function (this: CustomWorld, selector: string, expectedCount: number) {
  const count = await this.page.locator(`xpath=${selector}`).count();
  expect(count).toBe(expectedCount);
});

Then('I should see element using css {string} count is exactly {int}', async function (this: CustomWorld, selector: string, expectedCount: number) {
  const count = await this.page.locator(selector).count();
  expect(count).toBe(expectedCount);
});

Then('I should see local storage item {string} is exactly {string}', async function (this: CustomWorld, key: string, expectedValue: string) {
  const value = await this.page.evaluate((k) => localStorage.getItem(k), key);
  expect(value).toBe(expectedValue);
});

Then('I should see session storage item {string} is exactly {string}', async function (this: CustomWorld, key: string, expectedValue: string) {
  const value = await this.page.evaluate((k) => sessionStorage.getItem(k), key);
  expect(value).toBe(expectedValue);
});

Then('I should see cookie {string} value is exactly {string}', async function (this: CustomWorld, name: string, expectedValue: string) {
  const cookies = await this.page.context().cookies();
  const cookie = cookies.find(c => c.name === name);
  expect(cookie?.value).toBe(expectedValue);
});

Then('I should see the page title contains {string}', async function (this: CustomWorld, expectedTitle: string) {
  const title = await this.page.title();
  expect(title).toContain(expectedTitle);
});

Then('I should see the current URL contains {string}', async function (this: CustomWorld, expectedUrl: string) {
  const url = this.page.url();
  expect(url).toContain(expectedUrl);
});

Then('I should see element using xpath {string} has attribute {string} contains {string}', async function (this: CustomWorld, selector: string, attribute: string, value: string) {
  const attrValue = await this.page.locator(`xpath=${selector}`).getAttribute(attribute);
  expect(attrValue).toContain(value);
});

Then('I should see element using css {string} has attribute {string} contains {string}', async function (this: CustomWorld, selector: string, attribute: string, value: string) {
  const attrValue = await this.page.locator(selector).getAttribute(attribute);
  expect(attrValue).toContain(value);
});

Then('I should see element using xpath {string} inner text contains {string}', async function (this: CustomWorld, selector: string, expectedText: string) {
  const innerText = await this.page.locator(`xpath=${selector}`).innerText();
  expect(innerText).toContain(expectedText);
});

Then('I should see element using css {string} inner text contains {string}', async function (this: CustomWorld, selector: string, expectedText: string) {
  const innerText = await this.page.locator(selector).innerText();
  expect(innerText).toContain(expectedText);
});

Then('I should see element using xpath {string} inner HTML contains {string}', async function (this: CustomWorld, selector: string, expectedHTML: string) {
  const innerHTML = await this.page.locator(`xpath=${selector}`).innerHTML();
  expect(innerHTML).toContain(expectedHTML);
});

Then('I should see element using css {string} inner HTML contains {string}', async function (this: CustomWorld, selector: string, expectedHTML: string) {
  const innerHTML = await this.page.locator(selector).innerHTML();
  expect(innerHTML).toContain(expectedHTML);
});

Then('I should see element using xpath {string} input value contains {string}', async function (this: CustomWorld, selector: string, expectedValue: string) {
  const inputValue = await this.page.locator(`xpath=${selector}`).inputValue();
  expect(inputValue).toContain(expectedValue);
});

Then('I should see element using css {string} input value contains {string}', async function (this: CustomWorld, selector: string, expectedValue: string) {
  const inputValue = await this.page.locator(selector).inputValue();
  expect(inputValue).toContain(expectedValue);
});

Then('I should see local storage item {string} contains {string}', async function (this: CustomWorld, key: string, expectedValue: string) {
  const value = await this.page.evaluate((k) => localStorage.getItem(k), key);
  expect(value).toContain(expectedValue);
});

Then('I should see session storage item {string} contains {string}', async function (this: CustomWorld, key: string, expectedValue: string) {
  const value = await this.page.evaluate((k) => sessionStorage.getItem(k), key);
  expect(value).toContain(expectedValue);
});

Then('I should see cookie {string} value contains {string}', async function (this: CustomWorld, name: string, expectedValue: string) {
  const cookies = await this.page.context().cookies();
  const cookie = cookies.find(c => c.name === name);
  expect(cookie?.value).toContain(expectedValue);
});

When('I wait for element using xpath {string} to be interactable', async function (this: CustomWorld, selector: string) {
  const locator = this.page.locator(`xpath=${selector}`);
  await locator.waitFor({ state: 'visible', timeout: WAIT_TIMEOUT });
  await expect(locator).toBeEnabled({ timeout: WAIT_TIMEOUT });
});

When('I wait for element using css {string} to be interactable', async function (this: CustomWorld, selector: string) {
  const locator = this.page.locator(selector);
  await locator.waitFor({ state: 'visible', timeout: WAIT_TIMEOUT });
  await expect(locator).toBeEnabled({ timeout: WAIT_TIMEOUT });
});

When('I wait for new popup to open', async function (this: CustomWorld) {
  await this.page.waitForEvent('popup');
});

When('I wait for new tab to open', async function (this: CustomWorld) {
  await this.page.context().waitForEvent('page');
});

Then('I should see a new tab has opened', async function (this: CustomWorld) {
  const pages = this.page.context().pages();
  expect(pages.length).toBeGreaterThan(1);
});

When('I switch to new tab', async function (this: CustomWorld) {
  const pages = this.page.context().pages();
  expect(pages.length).toBeGreaterThan(1);
  this.page = pages[pages.length - 1];
  await this.page.waitForLoadState();
  await this.page.bringToFront();
});

When('I wait for new tab and switch to it', async function (this: CustomWorld) {
  const newPage = await this.page.context().waitForEvent('page');
  this.page = newPage;
  await this.page.waitForLoadState();
  await this.page.bringToFront();
});

When('I switch to tab with title {string}', async function (this: CustomWorld, title: string) {
  const pages = this.page.context().pages();
  const pageTitles = await Promise.all(pages.map(p => p.title()));
  const targetIndex = pageTitles.findIndex(t => t === title);
  if (targetIndex !== -1) {
    this.page = pages[targetIndex];
    await this.page.bringToFront();
  } else {
    throw new Error(`Tab with title "${title}" not found`);
  }
});