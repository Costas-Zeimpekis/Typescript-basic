"use strict";
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: 'Max',
    bankAccount: bankAccount,
    hobbies: ['Sports', 'Cooking']
};
myself.bankAccount.deposit(3000);
console.log(myself);
var noEmit = 12;
noEmit = 'noEmit';
var anything;
anything = 12;
//# sourceMappingURL=exercise.js.map