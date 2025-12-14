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
// another way to solve FizzBuzz
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


