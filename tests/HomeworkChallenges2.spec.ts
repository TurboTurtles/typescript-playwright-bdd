import { test } from "playwright/test";

//  Sum of even natural numbers

test('sumNaturalEvenNumbers', () => {
    const sumNaturalEvenNumbers = (n: number): number => {
        let sum = 0;
        for (let i = 0; i <= n; i++) {
            if (i % 2 === 0) {
                sum += i;
    } 
        }
        return sum;
    };
    console.log(sumNaturalEvenNumbers(10));
    console.log(sumNaturalEvenNumbers(5));
    console.log(sumNaturalEvenNumbers(0));
});


// Reverse integer

test('reverseInteger', async () =>{
 function reverseInteger = (num: number): number =>{
 let reversed = "";
 for (let i = num.length - 1; i >= 0; i--)
 }
})
