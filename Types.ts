///<reference path="circleMath.ts"/>
///<reference path="rectangleMath.ts"/>
///<reference path="namespaces.ts"/>

// import { calcCirc } from "./Math/circle";

// import { calcCirc } from './Math/circle';
// import { calcRentangle } from './Math/rectangle';

// const {calcCirc} = require('./Math/circle');

//string
let myName = 'Costas';

// numbers
let myAge = 27.5;

//Boolean
let hasHobbies = true;
// hasHobbies = 1;

let myRealAge1: number = 27;
// myRealAge = '27';

let hobbies: any[] = ['cooking', 'sport'];
hobbies.push(1);
console.log(typeof hobbies);

// tuples
let address: [string, number] = ['super street', 99];

// enums
enum Color {
  Gray,
  Green = 100,
  Bluetsc
}

let myColor: Color = Color.Green;

console.log(myColor);

// any
let car1 = 'bmw';

console.log(car1);

//functions
function returnMyName(): string {
  return myName;
}

console.log(returnMyName());

// void
function sayHello(): void {
  console.log('Hello');
}

// agrgument types
function multiply(arg1: number, arg2: number): number {
  return arg1 * arg2;
}

console.log(multiply(2, 2));

// function types
let myMultiply: (a: number, b: number) => number;

// Objects
let user: { name: string; age: number } = {
  name: 'Costas',
  age: 38
};

let user2: Users = {
  name: 'Eleni',
  age: 34
};

let complex: Complex = {
  data: [1, 2, 3],
  output(all: boolean): number[] {
    return this.data;
  }
};

//type alias
type Complex = {
  data: number[];
  output: (all: boolean) => number[];
};

type myFunc = (num1: number) => number;

const funcAndread: myFunc = (num1: number): number => {
  return num1;
};

let complex2: Complex = {
  data: [1, 2, 3],
  output(all: boolean): number[] {
    return this.data;
  }
};

interface Users {
  name: string;
  age: number;
}

// union types
let myRealAge: number | string;

// check types
let finalValue = 'A string';

if (typeof finalValue === 'string') {
  console.log(finalValue);
}

//Destructuring
const [a, b]: [number, string] = [1, 'Costas'];

let { nam1e, age }: { nam1e: string; age: number } = {
  nam1e: 'Costas',
  age: 20
};

// never
function neverReturn(): never {
  throw new Error('An error!');
}

// Nullable Types
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;

let canThisBeAny = null;

// console.log(calcCirc(10));
