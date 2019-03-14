import { addNumbers, doubleNum } from './dappermath';
let arr = ['', 1];
arr = [1,1, true];


console.log(addNumbers(1,2,3));
console.log(doubleNum(2));

// Benefits

// Prevent invalid types from being passed as arguments
// console.log(doubleNum('2'));

function sayHello(language: 'Spanish'): void;
function sayHello(language: 'English'): void;
function sayHello(language: 'French'): void;
function sayHello(language: string): void {
    let result: any;
    switch (language) {
        case 'Spanish':
            console.log('Hola!');
            break;
        case 'English':
            console.log('Hello!');
            break;
        case 'French':
            console.log('Bonjour!');
        default:
            console.log('Invalid option');
            break;
    }
};

sayHello('English');
sayHello('Spanish');
// a similar way
