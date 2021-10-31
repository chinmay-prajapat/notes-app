const { argv } = require("process");
const { describe, demandOption } = require("yargs");
const yargs = require("yargs");
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("Title:", argv.title);
    console.log("Body:", argv.body);
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
// console.log(yargs.argv);
yargs.parse();
