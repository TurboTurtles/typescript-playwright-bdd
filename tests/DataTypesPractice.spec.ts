import { test, expect } from '@playwright/test';
import { console } from 'inspector';

test.describe('DataTypesPractice', () => {

test('String practice', () => {
    let url: string = 'https://google.com';
    console.log(url.toUpperCase(), url.toLowerCase());
    expect(url.includes("https")).toBe(true);
    let domain = url.startsWith('https') ? url.slice(8) : url;
    console.log('domain', domain);
    expect(domain).toBe('google.com');

});

test('Number practice', () => {
    let retryCount: number = 3;
    retryCount = (retryCount * 2) - 1;
    console.log('retryCount', retryCount);
    let retryCountStr: string = retryCount.toString();
    expect(retryCountStr).toBe('5');
    console.log('type:', typeof retryCountStr);
});

test('Boolean practice', () => {
    let isLoggedIn: boolean = false;
    console.log("Initial state:", isLoggedIn);
    isLoggedIn = !isLoggedIn;
    if (isLoggedIn) {
        console.log("Welcome!");
    } else {
        console.log("Please log in");
    }
});

test('Array practice', () => {
    let pages: string[] = ['home', 'login', 'dashboard'];
    pages.push('settings');
    console.log(pages[1]);
    let pagesWithO = pages.filter(page => page.includes('o'));
    console.log(pagesWithO);
    console.log(pages.length);
});

test('Map practice', () => {
    Let scores: Map<string, number> = new Map();
    scores.set('Alice', 85);
    scores.set('Bob', 92);
    console.log('Bob score:', scores.get('Bob'));

});