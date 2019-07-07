"use strict";
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
function greet(person) {
    console.log('Hello, ' + person.firstName);
}
var personC = {
    firstName: 'Costas',
    age: 28,
    greet: function (lastName) {
        console.log(lastName);
    }
};
personC.greet('Coist');
greet(personC);
console.log(personC.age);
var PeopleZ = /** @class */ (function () {
    function PeopleZ(hairColor) {
        this.hairColor = hairColor;
    }
    return PeopleZ;
}());
var Person2 = /** @class */ (function (_super) {
    __extends(Person2, _super);
    function Person2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.firstName = '';
        _this.age = NaN;
        return _this;
    }
    Person2.prototype.greet = function (value) {
        console.log(value);
    };
    return Person2;
}(PeopleZ));
var costasZ = new Person2('Balck');
costasZ.firstName = 'Costas Eleni';
costasZ.age = 38;
greet(costasZ);
var doubleFunc = function (num1, num2) {
    return num1 * num2;
};
var Eleni = {
    height: 1.8,
    firstName: 'Eleni',
    greet: function (lastName) {
        console.log(lastName);
    }
};
//# sourceMappingURL=interface.js.map