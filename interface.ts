interface InterPerson {
  firstName: string;
  age?: number;
  [propName: string]: any;
  greet(value: string): void;
}

function greet(person: InterPerson): void {
  console.log('Hello, ' + person.firstName);
}

const personC: InterPerson = {
  firstName: 'Costas',
  age: 28,
  greet(lastName) {
    console.log(lastName);
  }
};

personC.greet('Coist');

greet(personC);

console.log(personC.age);

class PeopleZ {
  constructor(public hairColor: string) {}
}

class Person2 extends PeopleZ implements InterPerson {
  firstName: string = '';
  age: number = NaN;

  greet(value: string) {
    console.log(value);
  }
}

const costasZ = new Person2('Balck');
costasZ.firstName = 'Costas Eleni';
costasZ.age = 38;

greet(costasZ);

//Function types
interface DoubleValueFunc {
  (num1: number, num2: number): number;
}

const doubleFunc: DoubleValueFunc = (num1: number, num2: number): number => {
  return num1 * num2;
};

//Interface Inheritance
interface HeightPerson extends InterPerson {
  height: number;
}

const Eleni: HeightPerson = {
  height: 1.8,
  firstName: 'Eleni',
  greet(lastName: string) {
    console.log(lastName);
  }
};
