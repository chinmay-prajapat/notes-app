const { describe } = require("yargs");
const yargs = require("yargs");
yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: function () {
    console.log("Adding new note");
  },
});
yargs.command({
  command: "remove",
  describe: "removing notes",
  handler: function () {
    console.log("remove note");
  },
});
yargs.command({
  command: "list",
  describe: "show the list of notes",
  handler: function () {
    console.log("List of notes");
  },
});
yargs.command({
  command: "read",
  describe: "Read command",
  handler: function () {
    console.log("Here are list of command");
  },
});
console.log(yargs.argv);
