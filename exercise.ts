let bankAccount: BankAccount = {
  money: 2000,
  deposit(value) {
    this.money += value;
  }
};

interface BankAccount {
  money: number;
  deposit: (val: number) => void | BankAccount;
  hobbies?: string[];
}

let myself = {
  name: 'Max',
  bankAccount: bankAccount,
  hobbies: ['Sports', 'Cooking']
};

myself.bankAccount.deposit(3000);

console.log(myself);

let noEmit: string | number = 12;
noEmit = 'noEmit';

let anything;
anything = 12;
