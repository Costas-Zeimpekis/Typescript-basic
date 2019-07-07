"use strict";
// class Person1 {
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
// let person1 = new Person('Costas', 'asdasd');
// console.log(person1);
// person1.printAge('Eleni');
// // person1.setType('Max');
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
var Person1 = /** @class */ (function () {
    function Person1(name, username) {
        if (username === void 0) { username = '123'; }
        this.username = username;
        this.type = '';
        this.age = 27;
        this.name = name;
    }
    Person1.prototype.print = function (type) {
        this.setType(type);
        console.log(this.type);
        return this.age;
    };
    Person1.prototype.setType = function (type) {
        this.type = type;
        console.log(type);
    };
    return Person1;
}());
var person1 = new Person1('Costas', '123K');
// person1.setType('married');
// person1.print('Cool Guy');
console.log(person1);
// Inheritance
var Costas = /** @class */ (function (_super) {
    __extends(Costas, _super);
    function Costas(name, age, username) {
        var _this = _super.call(this, name, username) || this;
        _this.age = age;
        return _this;
    }
    return Costas;
}(Person1));
var littleCostas = new Costas('Coco', 38);
console.log('Cotsas:', littleCostas);
//Getters & Setters
var Plants = /** @class */ (function () {
    function Plants() {
        this._species = 'Default';
    }
    Object.defineProperty(Plants.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = 'Default';
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plants;
}());
var plant = new Plants();
console.log('Species', plant.species);
plant.species = 'Paparouna';
console.log('Species', plant.species);
//Static Properties & Methods
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calc = function (diameter) {
        var res = this.PI * diameter;
        return res;
        // console.log(diameter);
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
Helpers.calc(2);
// Abstract Classes
// You can not instanciet from them directly you can only use for inheritance
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = '';
        this.budget = NaN;
    }
    Project.prototype.calcBudget = function () {
        return this.budget;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
//Thius will not work
// const newProject = new Project();
var newProject = new ITProject();
newProject.projectName = 'Giannis';
newProject.changeName('Giorgos');
console.log(newProject);
//Private Constructors
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only one');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
// const wrong = new OnlyOne('The only One');
var right = OnlyOne.getInstance();
//Readonly
var Read = /** @class */ (function () {
    function Read(title) {
        this.title = title;
    }
    return Read;
}());
var article = new Read('Typescript');
// This will not work with readonly
// article.title = 'Js';
console.log(article.title);
//# sourceMappingURL=classes.js.map