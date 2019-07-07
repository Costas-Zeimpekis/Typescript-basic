//Namespace
namespace MyMath {
  const PI = 3.14;

  export function calcCirm(diameter: number): number {
    return diameter * PI;
  }
}

console.log(MyMath.calcCirm(5));
