"use strict";
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
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.type = '';
        this.age = 27;
        this.name = name;
    }
    Person.prototype.print = function (type) {
        this.setType(type);
        console.log(this.type);
        return this.age;
    };
    Person.prototype.setType = function (type) {
        this.type = type;
    };
    return Person;
}());
var person = new Person('Costas', '123K');
// person.setType('married');
person.print('Cool Guy');
console.log(person);
//# sourceMappingURL=classes.js.map