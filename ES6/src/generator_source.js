function* test () {
  yield 'Hello';
  yield 'World';
  return 'Hello World';
}

var t = test();

console.log(t);
console.log(t.next());
console.log(t.next());