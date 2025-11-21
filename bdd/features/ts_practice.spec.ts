import { expect, test } from "playwright/test";

test('clear example', async ({ page }) => {
    await page.goto('https://nop-qa.portnov.com/register');
    const firstNameField = page.getByLabel('First name');

    await firstNameField.fill('Test firstname');
    await page.waitForTimeout(1000);
    await firstNameField.clear();
    await page.waitForTimeout(1000);
});


test('blur and focus', async ({ page }) => {
    await page.goto('https://nop-qa.portnov.com/register');
    const firstNameField = page.getByLabel('First name');
    firstNameField.focus();
    await page.waitForTimeout(1000);
    firstNameField.blur();
    await page.waitForTimeout(1000);
});

test('drag and drop', async ({ page }) => {
    await page.goto('https://www.globalsqa.com/demo-site/draganddrop/');
    const frame = page.frameLocator('.resp-tab-content-active iframe.demo-frame');
    const firstPhoto = frame.locator('#gallery li').first();
    const trash = frame.locator('#trash');

    await firstPhoto.dragTo(trash);
    await page.waitForTimeout(1000);
});