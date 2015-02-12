require('6to5/polyfill');

let test = function* () {
  yield 'Hello';
  yield 'World';
  return 'Hello World';
};

let t = test();
console.log(t);
console.log(t.next());
console.log(t.next());
