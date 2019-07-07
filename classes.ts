// class Person {
//   // public name: string;
//   private type: string = '';
//   protected age: number = 27;

//   constructor(public name: string, public username: string) {}

//   printAge(type: string) {
//     console.log(this.age);
//     this.setType(type);
//   }

//   private setType(type: string) {
//     this.type = type;
//     console.log(this.type);
//   }
// }

// let person = new Person('Costas', 'asdasd');
// console.log(person);

// person.printAge('Eleni');
// // person.setType('Max');

// class Costas extends Person {
//   constructor(username: string) {
//     super('Max', username);
//   }
// }

// const eleni = new Costas('Tasos');
// console.log(eleni.name);

// // Getter & Setters

// class Plant {
//   private _species: string;

//   set species(value: string) {}
// }
class Person {
  name: string;
  private type: string = '';
  protected age: number = 27;

  constructor(name: string, public username: string = '123') {
    this.name = name;
  }

  private print(type: string) {
    this.setType(type);
    console.log(this.type);
    return this.age;
  }

  protected setType(type: string) {
    this.type = type;
    console.log(type);
  }
}

const person = new Person('Costas', '123K');

// person.setType('married');
// person.print('Cool Guy');

console.log(person);

// Inheritance
class Costas extends Person {
  constructor(name: string, public age: number, username?: string) {
    super(name, username);
  }
}

const littleCostas = new Costas('Coco', 38);
console.log('Cotsas:', littleCostas);

//Getters & Setters
class Plants {
  private _species: string = 'Default';

  set species(value: string) {
    if (value.length > 3) {
      this._species = value;
    } else {
      this._species = 'Default';
    }
  }

  get species() {
    return this._species;
  }
}

const plant = new Plants();

console.log('Species', plant.species);
plant.species = 'Paparouna';
console.log('Species', plant.species);

//Static Properties & Methods
class Helpers {
  static PI: number = 3.14;

  static calc(diameter: number): number {
    const res = this.PI * diameter;
    return res;

    // console.log(diameter);
  }
}

Helpers.calc(2);

// Abstract Classes
// You can not instanciet from them directly you can only use for inheritance
abstract class Project {
  projectName: string = '';
  budget: number = NaN;

  abstract changeName(name: string): void;

  calcBudget() {
    return this.budget;
  }
}

class ITProject extends Project {
  changeName(name: string) {
    this.projectName = name;
  }
}

//Thius will not work
// const newProject = new Project();

const newProject = new ITProject();
newProject.projectName = 'Giannis';
newProject.changeName('Giorgos');

console.log(newProject);
