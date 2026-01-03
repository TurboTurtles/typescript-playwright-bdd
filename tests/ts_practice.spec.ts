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

test('expect', async ({ page }) => {
    await page.goto('https://oganesyan.us/ts_practice.html');

    // URL and title
    await expect(page).toHaveTitle('TS Practice');
    await expect(page).toHaveTitle'TS Practice');

// to be visible/hidden
const visibleText = page.getByTestId('visible-text');
await expect(visibleText).toBeVisible();

await expect(page.getByTestId('visible-text')).toBeVisible();

const hiddenText = page.getByTestId('hidden-text');
await expect(hiddenText).toBeHidden();

// enabled/disabled
const enabledButton = page.getByTestId('enabled-button');
await expect(enabledButton).toBeEnabled();
const disabledButton = page.getByTestId('disabled-button');
await expect(disabledButton).toBeDisabled();

// checkbox
const checkedCheckbox = page.getByTestId('checked-checkbox');
await expect(checkedCheckbox).toBeChecked();

const uncheckedCheckbox = page.getByTestId('unchecked-checkbox');
await expect(uncheckedCheckbox).not.toBeChecked();


// editable
const editableInput = page.getByTestId('editable-input');
await expect(editableInput).toBeEditable();

// to have text
const statusText = page.getByTestId('status-text');
await expect(statusText).toHaveText('Submitted');
await expect(statusText).toContainText('Sub');

// to have value
const nameInput = page.getByTestId('name-input');
await expect(nameInput).toHaveValue('John Doe');

// to have attribute
const homeLink = page.getByTestId('home-link');
await expect(homeLink).toHaveAttribute('href', '/ts_practice.html');

// count items
const todoItems = page.locator('[data-testid="todo-list"] li');
await expect(todoItems).toHaveCount(3);    

});


test('expect 2' - class', async ({ page }) => {
    await page.goto('https://oganesyan.us/ts_practice.html');

// have a class
const alert = page.getByTestId('alert');
await expect(alert).toHaveClass(/alert/);

// have id
const profile = page.getByTestId('profile-block');
await expect(profile).toHaveId('profile-block');

// js property
const jsPropButton = page.getByTestId('js-prop-button');
await expect(jsPropButton).toHaveJSProperty('foo', 'bar');








});

// write a function that swap 2 numbers and return as array
const swapNumbers = (a: number, b: number): [number, number] => {
    [a, b] = [b, a];
    return [a, b];
}
console.log(swapNumbers(10, -3));

// write a function that return greeting with 'hello,' {name}
const greet = (name: string): string => {
    return `Hello, ${name}`;
}
console.log(greet('Mihran'));

// write a function that accept number and return 'positive/negative or zero' depending on the value
const checkNumber = (num: number): string => {
    if (num > 0) {
        return 'positive';
    } else if (num < 0) {
        return 'negative';
    } else {
        return 'zero';
    }
}
console.log(checkNumber(5));
console.log(checkNumber(-2));
console.log(checkNumber(0));



test('boolean logic', () => {
    // write a function that return valid for voting age (input - age, out - boolean) 18 - valid
    const isValidForVoting = (age: number): boolean => {
        return age >= 18;
    }
    console.log(isValidForVoting(20)); // true
    console.log(isValidForVoting(16)); // false
});

test('5', async () => {
    // max of two numbers
    const maxOfTwo = (a: number, b: number): number => {
        return a > b ? a : b;
    }
    console.log(maxOfTwo(10, 5)); // 10

});

test('6', async () => {
    // return day of week based in its number
    const dayOfWeek = (dayNum: number): string => {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[dayNum - 1] || 'Invalid day number';
    }
    console.log(dayOfWeek(3)); // Tuesday
});


test('7', async () => {
    // count the sum of all numbers in the array
    function count_of_num(num: number[]): number {
        let sum = 0
        for (let i = 0; i < num.length; i++) {
            sum += num[i];
        }

        return sum;
    }

    const arr = [1, 2, 3, 4, 5, 90];
    console.log(count_of_num(arr));
});


Homework

//Reverse a string using for loop,   *Use debugger to observe execution details







test('expect', async ({ page }) => {
    await page.goto('https://oganesyan.us/ts_practice.html');

    // URL and title
    await expect(page).toHaveTitle('TS Practice');
    await expect(page).toHaveTitle'TS Practice');

// to be visible/hidden
const visibleText = page.getByTestId('visible-text');
await expect(visibleText).toBeVisible();

await expect(page.getByTestId('visible-text')).toBeVisible();

const hiddenText = page.getByTestId('hidden-text');
await expect(hiddenText).toBeHidden();

// enabled/disabled
const enabledButton = page.getByTestId('enabled-button');
await expect(enabledButton).toBeEnabled();
const disabledButton = page.getByTestId('disabled-button');
await expect(disabledButton).toBeDisabled();

// checkbox
const checkedCheckbox = page.getByTestId('checked-checkbox');
await expect(checkedCheckbox).toBeChecked();

const uncheckedCheckbox = page.getByTestId('unchecked-checkbox');
await expect(uncheckedCheckbox).not.toBeChecked();


// editable
const editableInput = page.getByTestId('editable-input');
await expect(editableInput).toBeEditable();

// to have text
const statusText = page.getByTestId('status-text');
await expect(statusText).toHaveText('Submitted');
await expect(statusText).toContainText('Sub');

// to have value
const nameInput = page.getByTestId('name-input');
await expect(nameInput).toHaveValue('John Doe');

// to have attribute
const homeLink = page.getByTestId('home-link');
await expect(homeLink).toHaveAttribute('href', '/ts_practice.html');

// count items
const todoItems = page.locator('[data-testid="todo-list"] li');
await expect(todoItems).toHaveCount(3);    

});


test('expect 2' - class', async ({ page }) => {
    await page.goto('https://oganesyan.us/ts_practice.html');

// have a class
const alert = page.getByTestId('alert');
await expect(alert).toHaveClass(/alert/);

// have id
const profile = page.getByTestId('profile-block');
await expect(profile).toHaveId('profile-block');

// js property
const jsPropButton = page.getByTestId('js-prop-button');
await expect(jsPropButton).toHaveJSProperty('foo', 'bar');








});

// write a function that swap 2 numbers and return as array
const swapNumbers = (a: number, b: number): [number, number] => {
    [a, b] = [b, a];
    return [a, b];
}
console.log(swapNumbers(10, -3));

// write a function that return greeting with 'hello,' {name}
const greet = (name: string): string => {
    return `Hello, ${name}`;
}
console.log(greet('Mihran'));

// write a function that accept number and return 'positive/negative or zero' depending on the value
const checkNumber = (num: number): string => {
    if (num > 0) {
        return 'positive';
    } else if (num < 0) {
        return 'negative';
    } else {
        return 'zero';
    }
}
console.log(checkNumber(5));
console.log(checkNumber(-2));
console.log(checkNumber(0));



test('boolean logic', () => {
    // write a function that return valid for voting age (input - age, out - boolean) 18 - valid
    const isValidForVoting = (age: number): boolean => {
        return age >= 18;
    }
    console.log(isValidForVoting(20)); // true
    console.log(isValidForVoting(16)); // false
});

test('5', async () => {
    // max of two numbers
    const maxOfTwo = (a: number, b: number): number => {
        return a > b ? a : b;
    }
    console.log(maxOfTwo(10, 5)); // 10

});

test('6', async () => {
    // return day of week based in its number
    const dayOfWeek = (dayNum: number): string => {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[dayNum - 1] || 'Invalid day number';
    }
    console.log(dayOfWeek(3)); // Tuesday
});


test('7', async () => {
    // count the sum of all numbers in the array
    function count_of_num(num: number[]): number {
        let sum = 0
        for (let i = 0; i < num.length; i++) {
            sum += num[i];
        }

        return sum;
    }

    const arr = [1, 2, 3, 4, 5, 90];
    console.log(count_of_num(arr));
});


Homework

//Reverse a string using for loop,   *Use debugger to observe execution details







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