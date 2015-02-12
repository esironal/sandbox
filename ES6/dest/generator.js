"use strict";

require("6to5/polyfill");

var test = regeneratorRuntime.mark(function callee$0$0() {
  return regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return "Hello";
      case 2:
        context$1$0.next = 4;
        return "World";
      case 4:
        return context$1$0.abrupt("return", "Hello World");
      case 5:
      case "end":
        return context$1$0.stop();
    }
  }, callee$0$0, this);
});

var t = test();
console.log(t);
console.log(t.next());
console.log(t.next());