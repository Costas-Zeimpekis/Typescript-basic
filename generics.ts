//Simple Generic

function echo(data: any) {
  return data;
}

console.log(echo('Max'));
console.log(echo(27));
console.log(echo({ name: 'Costas' }));

//Better Generic
function betterEcho<T>(data: T): string {
  return String(data);
}

console.log(betterEcho('Max').length);
console.log(betterEcho<number>(27).length);
console.log(betterEcho({ name: 'Costas' }));

//Built-in Generic
const testResults: Array<number> = [1, 2];
const testResults2: number[] = [1, 2];
const testResults3: [number, number] = [1, 2];

testResults.push(1);
testResults2.push(1);
testResults3.push(1);

console.log(testResults);

//Arrays

function printAll<T>(args: T[]) {
  args.forEach((el: T): void => console.log(el));
}

printAll<string>(['Apples', 'Oragne']);

//Generic Types
const echo2: <T>(data: T) => T = echo;

console.log(echo2<string>('Max'));

//Generic Classes
class SimpleMath<T extends number | string, U extends number | string> {
  baseValue: T;
  multiplyValue: U;

  calc(): number {
    return +this.baseValue * +this.multiplyValue;
  }
}

const simpleMath = new SimpleMath<string, number>();
simpleMath.baseValue = '10';
simpleMath.multiplyValue = 20;

console.log(simpleMath.calc());
