import { test, expect } from '@playwright/test';
import { console } from 'inspector';

test.describe('DataTypesPractice', () => {

test('1.String practice', () => {
    let url: string = 'https://google.com';
    console.log(url.toUpperCase(), url.toLowerCase());
    expect(url.includes("https")).toBe(true);
    let domain = url.startsWith('https') ? url.slice(8) : url;
    console.log('domain', domain);
    expect(domain).toBe('google.com');

});

test('2.Number practice', () => {
    let retryCount: number = 3;
    retryCount = (retryCount * 2) - 1;
    console.log('retryCount', retryCount);
    let retryCountStr: string = retryCount.toString();
    expect(retryCountStr).toBe('5');
    console.log('type:', typeof retryCountStr);
});

test('3.Boolean practice', () => {
    let isLoggedIn: boolean = false;
    console.log("Initial state:", isLoggedIn);
    isLoggedIn = !isLoggedIn;
    if (isLoggedIn) {
        console.log("Welcome!");
    } else {
        console.log("Please log in");
    }
});

test('4.Array practice', () => {
    let pages: string[] = ['home', 'login', 'dashboard'];
    pages.push('settings');
    console.log(pages[1]);
    let pagesWithO = pages.filter(page => page.includes('o'));
    console.log(pagesWithO);
    console.log(pages.length);
});

test('5.Map practice', () => {
    let scores: Map<string, number> = new Map();
    scores.set('Alice', 85);
    scores.set('Bob', 92);
    console.log('Bob\'s score:', scores.get('Bob'));
    scores.set('Charlie', 78);
    scores.delete('Alice');
    console.log('All scores:', scores);
    expect(scores.has('Alice')).toBe(false); 

});

test('6.Object practice', () => {
    let user = {
        name: 'Mihran',
        active: true,
    }
    user.active = false;
    console.log(user.name, user.active);
});

test('7.Set practice', () => {
    let browsers: Set<string> = new Set(['chrome', 'firefox', 'chrome']);
    browsers.add('safari');
    console.log(browsers.size);
    expect(browsers.has('chrome')).toBe(true);
});

test('8.Date practice', () => {
    let now: Date = new Date();
    console.log('Current Date and Time:', now.toString());
    let oneHourLater: Date = new Date(now.getTime() + 60 * 60 * 1000);
    expect(oneHourLater > now).toBe(true);
    console.log('OneOurLater:', oneHourLater.toString());
});










});