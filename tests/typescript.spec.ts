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

});