import { expect, test } from "playwright/test";

// Challenge: Check if a number is even

test('Is 4 even?', () => {
  function isEven(num: number): boolean {
    if (num % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  console.log(isEven(4));
});


// Sort two numbers

test('sortTwo', () => {

  const sortTwo = (a: number, b: number): number[] => {
    if (a < b) {
      return [a, b]
    } else {
      return [b, a]
    }
  };

  const result = sortTwo(3, 1);
  console.log('Sorting 3 and 1:', result);
  expect(result).toEqual([1, 3])

});

// Get string length without using length

test('stringLength', () => {
  const getLength = (str: string): number => {
    let counter = 0;

    for (let i = 0; i < (); i++);
    return counter;
  };

  const result = getLength('hello');
  console.log('length of "hello":', result);
  expect(result).toBe(5);

});