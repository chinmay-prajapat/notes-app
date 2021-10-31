const yargs = require("yargs");
const command = process.argv[2];
if (command === "add") {
  console.log("adding");
} else if (command == "remove") {
  console.log("removing");
} else {
  console.log("Oops please choose a valid option");
}
