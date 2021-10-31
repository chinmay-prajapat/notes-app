const validator = require("validator");
const chalk = require("./chalk");
const note = require("./notes");
const { performance } = require("perf_hooks");
var startTime = performance.now();

console.log(note());
console.log(validator.isEmail("c@gmal.com"));
console.log(chalk);
var endTime = performance.now();

console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);
