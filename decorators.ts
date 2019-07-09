function logged(constructorFn: Function) {
  console.log(constructorFn);
}

@logged
class Arhidia {
  constructor() {
    console.log('Ante gamisou');
  }
}
