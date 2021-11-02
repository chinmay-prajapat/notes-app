const notes = require("./notes");
const yargs = require("yargs");
const chalk = require("chalk");
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
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});
yargs.command({
  command: "remove",
  describe: "removing notes",
  handler(argv) {
    notes.removeNote(argv.title);
  },
});
yargs.command({
  command: "list",
  describe: "show the list of notes",
  handler() {
    console.log(chalk.bgBlue.black("Your Notes"));
    notes.list();
  },
});
yargs.command({
  command: "read",
  describe: "Read command",
  handler() {
    console.log("Here are list of command");
  },
});
// console.log(yargs.argv);
yargs.parse();
