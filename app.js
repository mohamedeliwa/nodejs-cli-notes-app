const fs = require("fs");
const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes");

// Customize yargs
/*  commands e.g add, remove, read, list,
    help option of each command,
    options to pass data
*/

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note Title",
      alias: "t",
      demand: true, //in the course he used demandOption key instead of demand, but the two works for now
      type: "string"
    },
    body: {
      describe: "Note Body",
      alias: "b",
      demand: true,
      type: "string"
    }
  },
  handler: argv => notes.adddNotes(argv.title, argv.body)
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "removing a note",
  builder: {
    title: {
      describe: "Note title",
      alias: "t",
      type: "string",
      demand: true
    }
  },
  handler: argv => notes.removeNotes(argv.title)
});

// Create list command
yargs.command({
  command: "list",
  describe: "list notes",
  handler: () => notes.listNotes()
});

// Create read command
yargs.command({
  command: "read",
  describe: "read notes",
  builder: {
    title: {
      describe: "Note title",
      alias: "t",
      demand: true,
      type: "srting"
    }
  },
  handler: (argv) => notes.readNote(argv.title)
});

//console.log(process.argv);
//console.log(yargs.argv);
yargs.parse();
