function echo(data: any) {
  return data;
}

console.log(echo('Costas').length);
console.log(echo(123));
console.log(echo({ name: 'Costas' }));

// Better Generic way

function betterEcho<T>(data: T) {
  return data;
}

console.log(betterEcho('Costas').length);
console.log(betterEcho(123));
console.log(betterEcho({ name: 'Costas' }));

// Built-in Generics
const taskResults: Array<number> = [1, 2];

//Array

function printAll<T>(args: T[]) {
  args.forEach(el => console.log(el));
}

printAll<string>(['Apple', 'Orange']);

//Generic Types
const echo2: <T>(data: T) => T = betterEcho;

// type functions
type funcBab = (data: string) => string;
echo2<string>('Costas');

//Generic classes
class SimpleMath<T extends number | string, U extends number | string> {
  baseValue: T;
  multipleValue: U;
  cacl(): number {
    return +this.baseValue * +this.multipleValue;
  }
}

const simpleMath = new SimpleMath<string, string>();
simpleMath.baseValue = '100';
simpleMath.multipleValue = '2';
console.log('Generic', simpleMath.cacl());
