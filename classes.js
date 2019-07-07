"use strict";
// class Person {
//   // public name: string;
//   private type: string = '';
//   protected age: number = 27;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
        if (username === void 0) { username = '123'; }
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
        console.log(type);
    };
    return Person;
}());
var person = new Person('Costas', '123K');
// person.setType('married');
// person.print('Cool Guy');
console.log(person);
// Inheritance
var Costas = /** @class */ (function (_super) {
    __extends(Costas, _super);
    function Costas(name, age, username) {
        var _this = _super.call(this, name, username) || this;
        _this.age = age;
        return _this;
    }
    return Costas;
}(Person));
var littleCostas = new Costas('Coco', 38);
console.log('Cotsas:', littleCostas);
//# sourceMappingURL=classes.js.map