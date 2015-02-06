"use strict";

var s = new Set();

[1, 2, 3].map(function (x) {
  return s.add(x);
});

// Get the size of a Set
console.log(s.size);
// If a Set has a specified element
console.log(s.has(2));

var s2 = new Set([1, 2, 3, 4, 4, 5, 2]);

// A Set can could only has one unique element
// Expected: [1, 2, 3, 4, 5]
s2.forEach(function (x) {
  return console.log(x);
});
