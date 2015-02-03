"use strict";

var s = new Set();

[1, 2, 3].map(function (x) {
  return s.add(x);
});

console.log(s.size());
