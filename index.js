"use strict";
///<reference path="circleMath.ts"/>
///<reference path="rectangleMath.ts"/>
///<reference path="namespaces.ts"/>
//string
var myName = 'Costas';
// numbers
var myAge = 27.5;
//Boolean
var hasHobbies = true;
// hasHobbies = 1;
var myRealAge1 = 27;
// myRealAge = '27';
var hobbies = ['cooking', 'sport'];
hobbies.push(1);
console.log(typeof hobbies);
// tuples
var address = ['super street', 99];
// enums
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Bluetsc"] = 101] = "Bluetsc";
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
// any
var car1 = 'bmw';
console.log(car1);
//functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void
function sayHello() {
    console.log('Hello');
}
// agrgument types
function multiply(arg1, arg2) {
    return arg1 * arg2;
}
console.log(multiply(2, 2));
// function types
var myMultiply;
// Objects
var user = {
    name: 'Costas',
    age: 38
};
var user2 = {
    name: 'Eleni',
    age: 34
};
var complex = {
    data: [1, 2, 3],
    output: function (all) {
        return this.data;
    }
};
var funcAndread = function (num1) {
    return num1;
};
var complex2 = {
    data: [1, 2, 3],
    output: function (all) {
        return this.data;
    }
};
// union types
var myRealAge;
// check types
var finalValue = 'A string';
if (typeof finalValue === 'string') {
    console.log(finalValue);
}
// never
function neverReturn() {
    throw new Error('An error!');
}
// Nullable Types
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
var canThisBeAny = null;
//# sourceMappingURL=index.js.map