import { test } from "playwright/test";
// 1. FizzBuzz
// Write a program that prints the numbers from 1 to 100, following these rules:
// If a number is divisible by 3, print "Fizz".
// If divisible by 5, print "Buzz".
// If divisible by both 3 and 5, print "FizzBuzz".
//     Otherwise, print the number.
// Examples:
// 1 → 1
// 3 → Fizz
// 15 → FizzBuzz
// Tip: Use the modulo operator(%) to check divisibility.
test('FizzBuzz', async () => {
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else if (i % 3 === 0) {
        console.log("Fizz")
    } else {
        console.log(i)
    }
}
});

// 2. Count Evens
// Write a function that takes an array of integers and returns the number of even values.
//     Examples:
// [2, 4, 6] → 3
// [1, 3, 5] → 0
// [10, 21, 32, 43] → 2
// Tip: A number is even if number % 2 == 0.

test('Count Event', async () => {
    function countEvens(nums: number[]): number {
        let counter = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] % 2 === 0) {
                counter++;
            }
        }
        return counter;
    }
    console.log(countEvens([4, 6, 2, 3, 1]));
});


// 3. Count Vowels
// Write a function that returns the number of vowels(a, e, i, o, u, case -insensitive) in a given string.
//     Examples:
// "Hello" → 2
// "Programming" → 3
// "XYZ" → 0
// Tip: Convert characters to lowercase so you only check one case.

test('Count Vowels', async () => {
    function countVowels(str: string): number {
        const vowels = "aeuio";
        let counter = 0;

        for (let i = 0; i < str.length; i++) {
            const char = str[i].toLowerCase();
            if (vowels.includes(char)) counter++;
        }
        return counter;
    }
    console.log(countVowels("Hello"));
    console.log(countVowels("Programming"));
    console.log(countVowels("XYZ"));
});


// 4. Flatten 2D Array
// Write a function that converts a 2D array into a 1D array containing all elements in order.
//     Examples:
// [[1, 2], [3, 4]] →[1, 2, 3, 4]
// [[7], [8, 9, 10]] →[7, 8, 9, 10]
// [[]] →[]
// Tip: Use nested loops or built -in functions(like flat, concat, or spread syntax depending on the language).

test('Flatten array', async () => {
    function flatten2DArray(arr: number[][]): number[] {
        let flattened: number[] = [];
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                flattened.push(arr[i][j]);
            }
        }
        return flattened;
    }
    console.log(flatten2DArray([[1, 2], [3, 4]]));
    console.log(flatten2DArray([[7], [8, 9, 10]]));
    console.log(flatten2DArray([[]]));
});

// 5. Generate All Pairs
// Given an array of numbers, output all unique pairs of elements.

//     Examples:
// Input: [1, 2, 3] → (1, 2), (1, 3), (2, 3)
// Input: [4, 5] → (4, 5)
// Input: [9] → (no pairs)

// Tip: Use two loops, but make the inner loop start after the outer loop index to avoid duplicates.

test('Generate all pairs', async () => {
    function genAllPairs(nums: number[]): [number, number ][] {
        let pairs: [number, number][] = [];
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                pairs.push([nums[i], nums[j]]);
            }
        }
        return pairs;
    }
    console.log(genAllPairs([1, 2, 3]));
    console.log(genAllPairs([4, 5]));
    console.log(genAllPairs([9]));
});