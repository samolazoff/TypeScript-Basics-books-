//Numbers
let myNum = 10;
let anotherNum: number = 20;

myNum = 12; //right
myNum = '12'; //wrong (is not number)

anotherNum = 30; //right
anotherNum = false; //wrong (is not number)

//String

let myStr: string = 'Hello';
let anotherStr = 'World';

myStr = true; //wrong (is not string)
anotherStr = 45; //wrong (is not string)

//Boolean

let myBool: boolean = true;
let anotherBool = false;

myBool = 'true'; //wrong (is not boolean)
anotherBool = 76; //wrong (is not boolean)

//Objects

const developer = {
    firstName: 'Nabendu',
    lastName: 'Biswas',
    age: 40,
    isTrainer: true
}

const newDeveloper: { name: string; age: number; isDev: boolean } = {
    name: 'Mousam',
    age: 39,
    isDev: true
}

newDeveloper.name = 'Mousam Mishra'; //right
newDeveloper.age = 'Forty'; //wrong (is not number)
newDeveloper.firstName = 'Mousam'; //wrong (is not string)

//Arrays

const languages = ['React', 'Angular', 'Vue'];

languages.push('TypeScript'); //right
languages.push(56); //wrong  (is not string)
languages.push(true); //wrong (is not string)

const numbers: number[] = [51, 22, 33];

numbers.push(56); //right
numbers.push('56'); //wrong (is not number)
numbers.push(true); //wrong (is not number)

// Complex Arrays

const arrOfObj: { name: string; age: number }[] = [
    { name: 'Nabendu', age: 40 },
    { name: 'Mousam', age: 39 }
];
arrOfObj.push({ name: 'Shikha', age: 39 }); //right
arrOfObj.push({ name: 'Hriday', age: 'Eight' }); //wrong (is not number)

const arrOfArrays: number[][] = [
    [11, 32, 43],
    [34, 75, 64]
];

arrOfArrays.push([21, 32, 13]); //right

//Functions

const addNums = (num1, num2) => {
    return num1 + num2;
};

addNums(10, 20); //right
addNums(10, '20'); //right

const multiNums = (num1: number, num2: number) => {
    return num1 * num2;
};

multiNums(10, 20); //right
multiNums(10, '20'); //wrong (is not number)

const modNums = (num1: number, num2: number): number => {
    return num1 > num2 // wrong (is not number)
};

modNums(10, 20); //right
modNums(10, '20'); //wrong (is not number)

// if function hadn't got return to provide "void"

const printSum = (num1: number, num2: number): void => {
    console.log(num1 + num2);
}; 

printSum(10, 20); //right
printSum(10, '20'); //wrong (is not number)