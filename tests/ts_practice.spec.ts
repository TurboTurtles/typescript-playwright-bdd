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

test('scroll into view', async ({ page }) => {
    await page.goto('https://nop-qa.portnov.com/register');
    const newsletter = page.locator('#Newsletter');
    await newsletter.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await expect(newsletter).toBeVisible();
});

test('set content', async ({ page }) => {
    await page.goto('https://nop-qa.portnov.com/register');
    await page.evaluate(() => {
        document.body.innerHTML = '<p>This is our new content!!!</p>';
    });
    await page.waitForTimeout(1000);
    await expect(selectedText).toContain('Wikipedia');
});

test('evaluate demo', async ({ page }) => {
    await page.goto('https://nop-qa.portnov.com/register');
    const firstNameField = page.locator('#FirstName');
    await firstNameField.evaluate((el: HTMLInputElement) => {
        el.value = 'This is JS value';
    });
    await page.waitForTimeout(1000);
});

test('evaluate demo', async ({ page }) => {
    await page.goto('https://nop-qa.portnov.com/register');
    const firstNameField = page.locator('#FirstName');
    await firstNameField.evaluate((el: HTMLInputElement) => {
        el.value = 'This is JS value';
    });
    await page.waitForTimeout(1000);

    const maleRadio = page.locator('#gender-male');
    await maleRadio.evaluate((el: HTMLInputElement) => {
        el.click();
    });
    await page.waitForTimeout(1000);
});

test('expect', async ({ page }) => {
    await page.goto('https://nop-qa.portnov.com/register');
    await expect(page.locator('#FirstName')).toBeVisible();

});

await expect(page.locator('#FirstName')).toBeEnabled();

const maleRadio = page.locator('#gender-male');
await maleRadio.evaluate((el: HTMLInputElement) => {
    el.click();
});

await expect(maleRadio).toBeChecked();