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
 const reverseInteger = (num: number): number => {
    let sign = num < 0 ? -1 : 1;
    let reversed = 0;
    num = Math.abs(num);

 while (num > 0){
    let lastDigit = num % 10;
    reversed = reversed * 10 + lastDigit;
    num = Math.floor(num / 10);
 }
   return reversed * sign;
}
 
  console.log(reverseInteger(123)); 
  console.log(reverseInteger(-456));
  console.log(reverseInteger(0));
 
});


test('Check if prime, () => {
    // Check if a number is prime (greater than 1, no divisors other than 1 and itself)
    const isPrime = (n: number): boolean => {
    };
    expect(isPrime(7)).toBe(true);
    expect(isPrime(1)).toBe(false);
    expect(isPrime(2)).toBe(true);
    expect(isPrime(4)).toBe(false);
});

