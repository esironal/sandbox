"use strict";

require("6to5/polyfill");

var obj = {
  0: "a",
  1: "b",
  2: "c",
  length: 3
};

Array.from(obj);

Array.of(1, 2, 3);

[1, 3, 5, 7, 9].find(function (val, index, arr) {
  return val > 4;
});

[1, 3, 5, 7, 9].findIndex(function (val, index, arr) {
  return val > 4;
});

// Fill the array with specified element
["a", "b", "c"].fill(6);