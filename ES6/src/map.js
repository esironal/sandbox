var m = new Map();
var obj = {
  p: 'hello world'
};

m.set(obj, 'content');
m.get(obj);

console.log(m.has(obj));
m.delete(obj);