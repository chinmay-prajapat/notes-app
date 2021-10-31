const validator = require("validator");

const note = require("./notes");
const { performance } = require("perf_hooks");
var startTime = performance.now();

note();
console.log(validator.isEmail("c@gmal.com"));
var endTime = performance.now();

console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);
