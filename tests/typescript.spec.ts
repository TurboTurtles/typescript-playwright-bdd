import { test, expect } from '@playwright/test';
import { console } from 'inspector';

test.describe('Typescript', () => {

    test('Common data types', () => {
        let isVisible: boolean = true;
        console.log('isVisible', isVisible);
        expect(isVisible).toBe(true);
        console.log('!isVisible', !isVisible);
        expect(!isVisible).toBe(false);

    });

    test('Maps', () => {
        let testData: Map<string, string> = new Map();
        testData.set('username', 'testuser');
        testData.set('password', 'testpass')
        console.log(testData);
        console.log('password', testData.get('password'));
        expect(testData.get('username')).toBe('testuser');
        console.log('testData.has("password")', testData.has('password'));
        testData.delete('password');
        expect(testData.has('password')).toBe(false);

    });

    test('Object', () => {
        let config: { browser: string, headless: boolean } = { browser: 'chrmium', headless: true };
        console.log('config', config);
        expect(config.browser).toBe('chromium');
        config.headless = false;
        console.log('updated config', config);
        expect(config.headless).toBe(false);
    });

    test('set', () => {
        let uniqueSelectors: Set<string> = new Set(['.btn', '.input', '.error', '.btn']);
        console.log('uniqueSelectors:', uniqueSelectors);
        let arr = Array.from(uniqueSelectors);
        console.log(arr[0]);
        expect(uniqueSelectors.has('.btn')).toBe(true);
        expect(uniqueSelectors.size).toBe(3);
        uniqueSelectors.add('.btn-danger');
        console.log(uniqueSelectors);

    });


    test('Number comparisons', () => {
        const a: number = 15;
        const b: number = 7;
        const modulo = a % b;

        console.log('a', a);
        console.log('b', b);
        console.log('a % b', modulo);
        console.log('a > b', a > b);
        console.log('a === b + 8', a === b + 8);
        console.log('a % b !== 0 && a > b', modulo !== 0 && a > b);

        expect(modulo).toBe(1);
        expect(a === b + 8).toBe(true);
        expect(modulo !== 0 && a > b).toBe(true);
    });

    test('Type mixing', () => {
        const price: number = 99.99;
        const priceStr: string = price.toString();
        const label: string = 'Price: $';
        const fullLabel = label + priceStr;

        const newPrice = price + 0.01;
        const intPart = Math.trunc(newPrice);

        console.log('price', price);
        console.log('priceStr', priceStr);
        console.log('fullLabel', fullLabel);
        console.log('newPrice', newPrice);
        console.log('integer part', intPart);

        expect(fullLabel).toContain('99.99');
        expect(intPart).toBe(100);
    });

    test('string manipulation', () => {
        let url: string = 'https://chikipuki.com';


        console.log('url lowercase:', url.toLowerCase());
        console.log('url uppercase:', url.toUpperCase());

        const startsWithHttps: boolean = url.startsWith('https');
        console.log('starts with https:', startsWithHttps);
        expect(startsWithHttps).toBe(true);

        const domain: string = url.replace('https://', '');
        console.log('domain:', domain);
        expect(domain).toBe('chikipuki.com');
    });

    test('number operations', () => {
        let retryCount: number = 3;
        const multiplied = retryCount * 2;
        const subtracted = multiplied - 1;
        const asString: string = subtracted.toString();

        console.log('initial retryCount:', retryCount);
        console.log('after multiply:', multiplied);
        console.log('after subtract:', subtracted);
        console.log('asString:', asString);
        console.log('type of asString:', typeof asString);

        expect(typeof asString).toBe('string');
        expect(asString).toBe('5');
    });

    test('Boolean logic', () => {
        let isLoggedIn: boolean = false;
        isLoggedIn = !isLoggedIn;
        if (isLoggedIn) {
            console.log('Welcome');
        } else {
            console.log('Please log in');
        }
    });

    test('Array operations', () => {
        let pages: string[] = ['home', 'login', 'dashboard'];

        // Add "settings" to it
        pages.push('settings');
        console.log('pages after push:', pages);

        // Print the second item (index 1)
        const secondItem = pages[1];
        console.log('second item:', secondItem);

        // Filter the array for items that contain "o"
        const filtered = pages.filter(item => item.includes('o'));
        console.log('items containing "o":', filtered);

        // Print the total number of items
        const totalItems = pages.length;
        console.log('total items:', totalItems);

        // Assertions
        expect(pages.length).toBe(4);
        expect(pages[1]).toBe('login');
        expect(filtered.length).toBe(3); // 'home', 'login', 'dashboard' all contain 'o'
    });

    test('Random Email', () => {
        const timestamp = Date.now();
        const email = 'testemail' + timestamp + '@fakeemail.com';

    });
});


