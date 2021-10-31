const add = require("./utils");
const { performance } = require("perf_hooks");
var startTime = performance.now();
console.log(add(5, 5));
var endTime = performance.now();

console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);
