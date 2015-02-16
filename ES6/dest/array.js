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