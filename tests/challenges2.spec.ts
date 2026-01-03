import { test } from "playwright/test";

test('FizzBuzz', async () => {
    //loop 100 times
    // if current number % 3 === 0
    // print Fizz
    // if current number % 5 === 0
    // print Buzz
    // if current number % 3 and current number % 5
    // print FizzBuzz
    // otherwirse
    // print current number
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

// another way to solve FizzBuzz
test('FizzBuzz2', async () => {
    for (let i = 1; i <= 100; i++) {
        // var result
        // if i % 3 === 0 += Fizz
        // if i % 5 === 0 += Buzz
        // if result is empty -> print i
        let result = "";
        if (i % 3 === 0) result += "Fizz";
        if (i % 5 === 0) result += "Buzz";
        console.log(result === "" ? i : result);
    }
});



test('Count Event', async () => {
    //function
    // counter
    // loop through the array
    // if number % 2 === 0
    // count++
    // return counter
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
// another way to solve Count Evens
test('Count Evens 2', async () => {
    function countEvens(nums: number[]): number {
        return nums.filter(n => n % 2 === 0).length;
    }
    console.log(countEvens([4, 6, 2, 3, 1]));
});
// another way to solve Count Evens
test('Count Evens 3', async () => {
    function countEvens(nums: number[]): number {
        return nums.reduce((acc, n) => n % 2 === 0 ? acc + 1 : acc, 0);
    }
    console.log(countEvens([4, 6, 2, 3, 1]));
    // array.reduce((accumulator, currentValue) => { // return next accumulated value }, initialValue)
});

test('Count Vowels', async () => {
    // function (input string)
    // list of vowels
    // declare counter
    // for loop iterate through input string
    // lowercase current character
    // if current_character is a vowel
    // count
    // return counter
    function countVowels(str: string): number {
        const vowels = "aeuio";
        let counter = 0;

        for (let i = 0; i < str.length; i++) {
            const char = str[i].toLowerCase();
            if (vowels.includes(char)) counter++;
        }
        return counter;
    }
    console.log(countVowels("Programming"));
});

test('Count Vowels 2', async () => {
    function countVowels(str: string): number {
        const vowels = "aeuio";
        return str.toLowerCase().split('').filter(c => vowels.includes(c)).length;
    }
    console.log(countVowels("Programming"));
});

// [[1,2],[3,4]] → [1,2,3,4]
test('Flatten array', async () => {
    function flattenArray(array: number[][]): number[] {
        let result: number[] = [];

        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array[i].length; j++) {
                result.push(array[i][j]);
            }
        }
        return result;
    }
    console.log(flattenArray([[1, 4, 2], [3, 2, 0], [4, 2, 0]]));
});

test('Flatten array 2', async () => {
    function flattenArray(array: number[][]): number[] {
        return array.flat(5);
    }
    console.log(flattenArray([[1, 4, 2], [3, 2, 0], [4, 2, 0]]));
});

test('Flatter with reduce', async () => {
    function flattenArray(array: number[][]): number[] {
        return array.reduce((acc, curr) => acc.concat(curr));
    }
    console.log(flattenArray([[1, 4, 2], [3, 2, 0], [4, 2, 0]]));
});

//Input: [1,2,3] → (1,2), (1,3), (2,3)
// for loop for the value
// second iteration

test('Generate all pairs', async () => {
    function genAllPairs(nums: number[]): [number, number][] {
        let pairs: [number, number][] = [];
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                pairs.push([nums[i], nums[j]]);
            }
        }
        return pairs;
    }
    console.log(genAllPairs([1, 2, 3]));
});

// you have an array of items in a shopping cart
// create a function cartTotal(prices) that returns the total amount for the order
// input [3.1, 5.0, 7, 100.5]
// input []
// input [1560.78, 10345.32]

test('cartTotal', async () => {
    function cartTotal(prices: number[]): number {
        let total: number = 0;
        for (let i = 0; i < prices.length; i++) {
            total = total + prices[i];
        }
        return total;
    }
    console.log(cartTotal([3.1, 5.0, 7, 100.5]));
});

// totalRefund 
// totalRefund([-10, -5.5, -3]) -> -18.5

test('totalRefund', async () => {
    function totalRefund(refunds: number[]): number {
        let total: number = 0;
        for (let i = 0; i < refunds.length; i++) {
            total = total + refunds[i];
        }
        return total;
    }
    console.log(totalRefund([-10, -5.5, -3]));
});

// totalRefund
// totalRefund([]) -> -0

test('totalRefund 2', async () => {
    function totalRefund(refunds: number[]): number {
        return refunds.reduce((acc, curr) => acc + curr, 0);
    }
    console.log(totalRefund([]));
});

// we track daily sales, input is an array
// write maxSale(sales) that returns the highest sale amount in the given array
// maxSale([100, 150, 450, 800, 300]) => 800
// maxSale([100]) => 100;
// maxSale([-1000, 500, 100]) => 500
test('maxSales', async () => {
    function maxSale(sales: number[]): number {
        let max: number = 0;
        for (let sale of sales) {
            if (sale > max) {
                max = sale;
            }
        }
        return max;
    }
    console.log(maxSale([100, 150, 450, 800, 300]));
});

// Write minSales(sales) that returns the smallest amount

test('minSales', async () => {
    function minSale(sales: number[]): number {
        let min: number = sales[0];
        for (let sale of sales) {
            if (sale < min) {
                min = sale;
            }
        }
        return min;
    }
    console.log(minSale([-1000, 500, 100]));
});

// Write minSale(sales) that returns the smallest amount

test('minSales2', async () => {
    function minSales(sales: number[]): number {
        let min = 0;

        for (let i = 1; i < sales.length; i++) {
            if (sales[i] < min) {
                min = sales[i];
            }
        }
        return min;
    }
    console.log(minSales([100]));
});

// we have an array of daily profit values (can be negative for loss)
// write counfProfitableDays(profits) that will show how many days we had profit
// countP([100, -20, 0, 50]) => 2
// countP([-5, -10]) => 0
// countP([1, 2, 3]) => 3

test('countProfit', async () => {
    function countProfitableDays(profits: number[]): number {
        let counter: number = 0;
        for (let i = 0; i < profits.length; i++) {
            if (profits[i] > 0) {
                counter = counter + 1;
                // counter++;
            }
        }
        return counter;
    }
    console.log(countProfitableDays([1, 2, 3]));
});

// Count loss days
test('countLossDays', async () => {
    function countLossDays(profits: number[]): number {
        let counter: number = 0;
        for (let i = 0; i < profits.length; i++) {
            if (profits[i] < 0) {
                counter = counter + 1;
            }
        }
        return counter;
    }
    console.log(countLossDays([-5, -10, 0, 50, -3]));
});


// count custommers with even IDs from the given array
// countC ([101, 102, 103, 104]) => 2
// countC ([1, 3, 5]) => 0

test('countCustomersWithEvenIDs', async () => {
    function countCustomersWithEvenIDs(customerIDs: number[]): number {
        let counter: number = 0;
        for (let i = 0; i < customerIDs.length; i++) {
            if (customerIDs[i] % 2 === 0) {
                counter++;
            }
        }
        return counter;
    }
    console.log(countCustomersWithEvenIDs([101, 102, 103, 104]));
});

test('countCustomersWithEvenIDs 2', async () => {
    function countCustomersWithEvenIDs(customerIDs: number[]): number {
        return customerIDs.filter(id => id % 2 === 0).length;
    }
    console.log(countCustomersWithEvenIDs([1, 3, 5]));
});

// we need to show phone number in a secure way, for a given full phone number show only last 4 digits
// hiding any preceding with *
// maskPhone("12343434224") => "*******4224"
// maskPhone("123-1234") => "***-1234"
// maskPhone("12") => "12"

test('maskPhone', async () => {
    function maskPhone(phone: string): string {
        let result: string = "";
        const visibleCount: number = 4;
        const length: number = phone.length;

        for (let i = 0; i < length; i++) {
            if (i < length - visibleCount) {
                result += "*"
            } else {
                result += phone[i];
            }
        }
        return result;
    }
    console.log(maskPhone("9991112221234"));
});


// reverse order number
// ex "ABC12345" => "54321CBA"
// (let i = order.length; i > 0; i--)

test('reverseString', async () => {
    function reverseString(str: string): string {
        let reversed = "";
        for (let i = str.length - 1; i >= 0; i--) {
            reversed += str[i];
        }
        return reversed;
    }
    console.log(reverseString("ABC12345"));
});


//Reverse a string using for loop
test('reverseString2', async () => {
    function reverseString(str: string): string {
        let reversed = "";
        for(let i = str.length -1; i >= 0; i--) {
            reversed += str[i];
        }
        return reversed;
    }    
    console.log(reverseString("NARHIM"));
});


// you have array of prices and budget
// write a function that filter prices that are in the budget
// budgetFilter([10,25,5,40], 20) => [10, 5]
test('budget filter', async () => {
    function budgetFilter(prices: number[], budget: number): number[] {
        const result: number[] = [];
        for (let i = 0; i < prices.length; i++) {
            if (prices[i] <= budget) {
                result.push(prices[i]);
            }
        }
        return result;
    }
    console.log(budgetFilter([10, 25, 5, 40], 20));
});

test('NaturalOddNumbers',  () => {
 const sumNaturaloddNumbers = (n: number): number => {
    let sum = 0;
    for (let i = 1; i <= n; i += 2) {
        sum += i;
    }
    return sum;
    };
    console.log(sumNaturaloddNumbers(10));
});

test('Natural odd numbers2', () => {
    // the param limit represents the end range of a natural numbers set, i.e. for 10, it is 0,1,2,3,4..10
    const sumNaturalOddNumbers = (limit: number): number => {
        if (limit < 0) {
            throw new Error(`Provided parameter ${limit} is not a natural number! (0-n)`);
        }
        let sum = 0;
        for (let num = 0; num <= limit; num++) {
            if (num % 2 !== 0) {
                sum += num;
            }
        }
        return sum;
    };
    console.log('sumNaturalOddNumbers(10): ', sumNaturalOddNumbers(10));
    console.log('sumNaturalOddNumbers(-5): ', sumNaturalOddNumbers(-5));
});

test('Factorial', () => {
    // Factorial of 5! = 5*4*3*2*1 = 120
    // Factorial of 0! = 1
    // Factorial of negative is not allowed

    const factorial = (n: number): number => {
        let result: number = 1;
        for (let i = n; i > 0; i--) {
            result = result * i;
        }
        return result;
    };
    console.log('factorial(5): ', factorial(5));
});


test('Factorial 2', () => {
    // console.log('factorial(-3): ', factorial(-3)); // this will throw an error
const factorial = (num: number): number => {
    if (num < 0) {
        throw new Error('Negative number is not allowed');
    }

    let result: number = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
};
console.log('factorial(5): ', factorial(5));
console.log('factorial(0): ', factorial(0));

});



test('Count digits of Int number', () => {
    // 582359246 => 9 digits
    // 0 => 1 digit

    const countDigitsOfIntNumber = (num: number): number => {
        let result = num.toString().length;
        return result;

    };
    console.log('countDigitsOfIntNumber(0): ', countDigitsOfIntNumber(0));
    console.log('countDigitsOfIntNumber(582359246): ', countDigitsOfIntNumber(582359246));
});

// isPowerOfTwo(8) // true
// isPowerOfTwo(10) // false

test('Power of 2', async () => {
    function isPowerOfTwo(n: number): boolean {
        if (n <= 0) {
            return false;
        }

        while (n > 1) {
            if (n % 2 !== 0) {
                return false; // not divisible by 2
            }
            n = n / 2;
        }
        return true;
    }
    console.log(isPowerOfTwo(16));
});

// write a function that validate if memory can be allocated if yes - return "Valid memory size"
// otherwise return "Invalid memory size"
// validateMemory(512) // "Valid memory size"
// validateMemory(300) // "Invalid memory size"


// const validMem = (inValue: number): string => {
//     if (inValue === 1)
//         return ‘inValid memory size’;
//     While(inValue > 1)
//     {
//         if (inValue % 2 !== 0)
//             return ‘inValid memory size’;
//         inValue = inValue / 2;
    // }
    // return ‘Valid memory size’;
    // let testdata1 = validMem(10);
    // console.log(testdata1);
    // expect(testdata1).tobe(‘inValid memory size’);
    // testdata1 = validMem(512);
    // console.log(testdata1);
    // expect(testdata1).tobe(‘Valid memory size’);



// Fibanacci sequence

    test('Fibonacci sequenc', async () => {
        function generateFibonacci(count: number): number[] {
            if (count <= 0) {
                return [];
            }
            if (count === 1) {
                return [0];
            }

            const fib: number[] = [0, 1];
            for (let i = 2; i < count; i++) {
                fib[i] = fib[i - 1] + fib[i - 2];
            }
            return fib;
        }
        console.log(generateFibonacci(5));
    });

// number of users in your company grow with fibonacci sequence
// create a function that will return number of users after n weeks
// usersAfterWeeks(1) //1
// usersAfterWeeks(2) //1
// usersAfterWeeks(6) //8

test('Fib users', async () => {
    function usersWeeks(week: number): number {
        if (week <= 0) return 0;
        if (week === 1 || week === 2) return 1;

        let prev = 1;
        let curr = 1;

        for (let i = 3; i <= week; i++) {
            const next = prev + curr;
            prev = curr;
            curr = next;
        }

        return curr;
    }
    //expect(usersWeeks(6)).toBe(8);
    console.log(usersWeeks(6));
});

// calculate position of a given Fibonacci number in a sequence
// ex. [0,1,1,2,3,5,8,13] for imput 8 -> 7, for input 13 -> 8, if not found return 0.

test('Fibonacci position', async () => {
    function fibPosition(n: number) {
        let a = 0;
        let b = 1;
        let index = 1;

        while (a < n) {
            const next = a + b;
            a = b;
            b = next;
            index++;
        }

        return a === n ? index : 0;
    }
    console.log(fibPosition(8));
});

test("beardLenght", () => {
    function beardLenght(count: number): number {
        let summary = 0;
        for (let i = 1; i <= count; i++) {
            if (i % 2 == 0) {
                summary = summary + 2.5; //2.5*2=5
            } else {
                summary = summary + 5; //5*3=15
            }
        }
        return summary;
    }
    console.log(beardLenght(5));
});

// The RPG Experience CalculatorTask: You are developing the progression system for an RPG.Given an array of integers representing XP rewards from completed quests, write a function that calculates the total experience points gained by the player.

// Dwarf Beard Growth: Every dwarf adds 5 inches of beard, but every second dwarf braids it (half length of what was grown). What is the total cumulative growth of the beard across all dwarfs?

// Dwarf Total Beard Length: Every dwarf adds 5 inches of beard, but every second dwarf braids it (half length of total grown). What is the total length of the beard across all dwarfs?



//3", 6" , 7", 1", 0"
test("beardLenght2", () => {
    function beardLenght2(arr: number[]): number {
        let summary = 0;
        for (let i = 0; i < arr.length; i++) {
            if ((i + 1) % 2 == 0) {
                summary = summary + (arr[i] + 5) / 2;
            } else {
                summary = summary + (arr[i] + 5);
            }
        }
        return summary;
    }
    console.log(beardLenght2([3, 6, 7, 1, 0])); 8 + 5.5 + 12 + 3 + 5
});

// Dwarf Tunnel Song: Concatenate verses, but every second verse is "Hi Ho!".

test('verses', () => {
    const verses = (ver: string[]): string => {
        let song = '';
        for (let i = 0; i < ver.length; i++) {
            song += ver[i] + " ";
            if ((i + 1) % 2 === 0) {
                song += "Hi Ho ";
            }
        }
        return song;
    }
    console.log(verses(["1", "2", "3", "4", "5"]));
    console.log(verses(["let's sing", "let's sing", "let's sing", "let's sing", "let's sing"]));
});


 
// Highest Mountain: The drone investigated the area and scanned the mountains in it.The task is to find the highest peak

test('dron', () => {
    function highestPeak(arr: number[]): number {
        let max = arr[0];

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i]
            }
        }
        return max;
    }
    console.log(highestPeak([1, 4, 101, 67, 99]))
});



// Oldest Dwarf: Find the oldest dwarf, but ignore ghosts (age > 500).

test('two oldest dwarf', () => {
    function twoOldestDwarf(arr: number[]): number[] {
        let max1 = -Infinity;
        let max2 = -Infinity;


        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > max1) {
                max2 = max1;
                max1 = arr[i];
            } else if (arr[i] > max2) {
                max2 = arr[i];
            }
        }
        return [max1, max2];
    }
    console.log(twoOldestDwarf([1, 502, 101, 67, 99, 504, 3]))
});

test('two oldest dwarf2', () => {
    function twoOldestDwarf(arr: number[]): number[] {
        let max1 = -Infinity;
        let max2 = -Infinity;


        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > max1) {
                max2 = max1;
                max1 = arr[i];
            } else if (arr[i] > max2 && arr[i] !== max1) {
                max2 = arr[i];
            }
        }
        return [max1, max2];
    }
    console.log(twoOldestDwarf([1, 504, 502, 101, 67, 99, 504, 3]))
});

// Bar Tab
// Calculate the cost of Ale, when every 3th ale is free.

test('Ales', () => {
    const listOfDrinks = (drinks: number[]): number => {
        let sum = 0;
        for (let i = 0; i < drinks.length; i++) {
            if ((i + 1) % 3 !== 0) {
                sum += drinks[i];
            }

        }
        return sum;
    }
    console.log(listOfDrinks([5, 10, 5, 15, 10, 5]));

});


//Password digits
 
// Count digits in a password.Example password:
// "hu3h452jijg" => 4 digits

test('Count digits', () => {
    const countDigits = (pas: string): number => {
        let count: number = 0;
        for (let i = 0; i < pas.length; i++) {
            if (pas[i] >= '0' && pas[i] <= '9') {
                count++;
            }
        }
        return count;
    }
    console.log(countDigits('hu3h452jijg'));

});