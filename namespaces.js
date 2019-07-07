"use strict";
//Namespace
var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calcCirm(diameter) {
        return diameter * PI;
    }
    MyMath.calcCirm = calcCirm;
})(MyMath || (MyMath = {}));
console.log(MyMath.calcCirm(5));
//# sourceMappingURL=namespaces.js.map