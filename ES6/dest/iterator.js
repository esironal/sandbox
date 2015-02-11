"use strict";

var foo = [1, 2, 3];

// for...in...
for (var obj in foo) {
  console.log(obj);
}

// for...of...
for (var _iterator = foo[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
  var num = _step.value;
  console.log(num);
}