import { expect, test } from "playwright/test";

test('reverseString', async () => {

    function reverseString(str: string): string {
        let reversed = "";
        for (let i = str.length - 1; i >= 0; i--) {
            reversed += str[i];
        }
        return reversed;
    }
});

test('Swap vars', () => {
    const swapVars = (a: number, b: number) => {
        console.log('Before: ')
        console.log('a = ' + a);
        console.log('b = ' + b);
        let temp = a;
        a = b;
        b = temp;
        console.log('After: ')
        console.log('a = ' + a);
        console.log('b = ' + b);
    }

    const swapVarsArithmetic = (a: number, b: number) => {
        console.log('Before: ')
        console.log('a = ' + a);
        console.log('b = ' + b);
        a = a + b; // 8
        b = a - b; // 3
        a = a - b; // 5
        console.log('After: ')
        console.log('a = ' + a);
        console.log('b = ' + b);
    }

    // swap first and fourth elements of an array
    const swapVarsArray = (arr: number[]): number[] => {
        let temp = arr[3]; // saving fourth element value into temp
        arr[3] = arr[0]; // we're safe to overide it with fist element value
        arr[0] = temp;
        return arr;
    }

    swapVars(5, 3);
    swapVarsArithmetic(5, 3);
    console.log(swapVarsArray([100, 200, 300, 400, 500]));

    // voting age
    const VoteAge = (age: number) => {
        if (age >= 18) {
            return 'Vote';
        } else if (age < 18) {
            return 'Can not Vote';
        }
    };
    console.log(VoteAge(20));


    // get day name
    const getDayName = (dayNum: number): string => {
        switch (dayNum) {
            case 1: return "Sunday";
            case 2: return "Monday";
            case 3: return "Tuesday";
            case 4: return "Wednesday";
            case 5: return "Thursday";
            case 6: return "Friday";
            case 7: return "Saturday";
            default: return "Invalid Day";
        }
    };

    expect(getDayName(6)).toBe('Friday');
    console.log('getDayName(6): ', getDayName(6));


    // traffic light action
    const getTrafficAction = (color: string): string => {
        switch (color) {
            case 'red': return 'Stop';
            case 'yellow': return 'Caution';
            case 'green': return 'Go';
            default: return 'Not working';
        }
    };
    expect(getTrafficAction('green')).toBe('Go');
    console.log('getTrafficAction(\'green\'): ', getTrafficAction('green'));

}); 