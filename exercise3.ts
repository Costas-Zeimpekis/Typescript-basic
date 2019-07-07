// Exercise 1 - How was your TypeScript Class?
// function Car(name) {
//   this.name = name;
//   this.acceleration = 0;

//   this.honk = function() {
//       console.log("Toooooooooot!");
//   };

//   this.accelerate = function(speed) {
//       this.acceleration = this.acceleration + speed;
//   }
// }

class Car {
  public acceleration: number = 0;

  constructor(public name: string) {}

  honk() {
    console.log('Toooooo!');
  }

  accelerate(speed: number) {
    this.acceleration += speed;
  }
}

const car = new Car('BMW');
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// Exercise 2 - Two objects, based on each other ...
var baseObject = {
  width: 0,
  length: 0
};

var rectangle1 = Object.create(baseObject);

class BaseObject {
  protected width: number = 0;
  protected length: number = 0;
}

class rectangle extends BaseObject {
  static readonly width: number = 5;
  protected length: number = 2;

  static calcSize() {
    return this.width * this.length;
  }
}

type Calc = () => number;

console.log(rectangle.calcSize());

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)

class Person {
  private _firstName: string = '';

  set firstName(firsName: string) {
    if (firsName.length > 3) this._firstName = firsName;
  }

  get firstName() {
    return this._firstName;
  }
}

const person = new Person();

// var person = {
//   _firstName: ''
// };
// Object.defineProperty(person, 'firstName', {
//   get: function() {
//     return this._firstName;
//   },
//   set: function(value) {
//     if (value.length > 3) {
//       this._firstName = value;
//     } else {
//       this._firstName = '';
//     }
//   },
//   enumerable: true,
//   configurable: true
// });
console.log(person.firstName);
person.firstName = 'Ma';
console.log(person.firstName);
person.firstName = 'Maximilian';
console.log(person.firstName);

function myFuncCostas(): void {
  console.log('Costas');
}

type myFuncZeb = (num1: number) => number;

const myFuncEleni: myFuncZeb = (num1: number): number => {
  const takis = 'Pethero';
  return num1;
};
