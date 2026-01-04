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

    for (let i = 0; str.charAt(i) !== ''; i++) {
      counter++;
    }

    return counter;
  };

  const result = getLength('hello');
  console.log('length of "hello":', result);
  expect(result).toBe(5);

});

// Check if a number is even

test ('isEven2', () =>{
  const isEven2 = (num: number ): boolean => {
    if (num % 2 === 0) {
      return true;
    } else{
      return false;
    }
  }
   const result = isEven2(4);
    console.log('Is 4 even?', result);
    expect(result).toBe(true);
  });


  // Sum of even elements array

  test ('sumEvenArray',() =>{
    const sumEvenArray = (arr: number[]): number => {
     let sum = 0;

      for(let i = 0; i < arr.length; i++) {
           if (arr[i] % 2 === 0) {
      sum += arr[i];
      }
    }

    return sum;
  };
    const result = sumEvenArray([4, 2, 3, 3, 5, 6, 5]);
    console.log('Sum of even elements of [4, 2, 3, 3, 5, 6, 5]:', result);
    expect(result).toBe(12);
  });


  // Sum of every second element of an array

  test ('sumEverySecondElememnt',() =>{
    const sumEverySecondElememnt = (arr: number[]): number =>{
      let sum = 0;

      for (let i = 1; i < arr.length; i+=2) {
      sum += arr[i];
    }

    return sum;
    };

    const result = sumEverySecondElememnt([4, 2, 3, 3, 5, 6, 5]);
    console.log('Sum of every second elements of [4, 2, 3, 3, 5, 6, 5]:', result);
    expect(result).toBe(11);
  });
