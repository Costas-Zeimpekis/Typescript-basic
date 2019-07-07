"use strict";
function echo(data) {
    return data;
}
console.log(echo('Costas').length);
console.log(echo(123));
console.log(echo({ name: 'Costas' }));
// Better Generic way
function betterEcho(data) {
    return data;
}
console.log(betterEcho('Costas').length);
console.log(betterEcho(123));
console.log(betterEcho({ name: 'Costas' }));
// Built-in Generics
var taskResults = [1, 2];
//Array
function printAll(args) {
    args.forEach(function (el) { return console.log(el); });
}
printAll(['Apple', 'Orange']);
//Generic Types
var echo2 = betterEcho;
echo2('Costas');
//Generic classes
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.cacl = function () {
        return +this.baseValue * +this.multipleValue;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseValue = '100';
simpleMath.multipleValue = '2';
console.log('Generic', simpleMath.cacl());
//# sourceMappingURL=generics.js.map