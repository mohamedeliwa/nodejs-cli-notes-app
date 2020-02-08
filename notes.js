const fs = require("fs");
const chalk = require("chalk");


const addNotes = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find(note => note.title === title);
  if (!duplicateNote) {
    notes.push({ title, body });
    saveNotes(notes);
    console.log(chalk.bgGreen("New note added!!"));
  } else {
    console.log(chalk.bgRed("this note is a duplicate !!"));
  }
};

const removeNotes = title => {
  const notes = loadNotes();
  const updatedNotes = notes.filter(note => note.title !== title);

  if (updatedNotes.length === notes.length) {
    console.log(chalk.bgRed("No note found!"));
  } else {
    console.log(chalk.bgGreen("Note Removed!"));
    saveNotes(updatedNotes);
  }

  console.log(updatedNotes);
};

const listNotes = () => {
  const notes = loadNotes();
  const mark = chalk.green("-");
  console.log(`\n${chalk.green("Your Notes:")}`);
  notes.forEach(note => {
    console.log(`${mark} ${note.title}`);
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find(note => note.title === title);
  if (note){
    console.log(chalk.green(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red('no such note found!'));
  }
}


const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("./notes.json");
    const dataJSON = dataBuffer.toString();
    const notes = JSON.parse(dataJSON);
    return notes;
  } catch (e) {
    // in case there is no file, to prevent error, it returns empty array.
    // as empty array is what we are gonna have if there is an empty file and we tried to read it.
    return [];
  }
};
const saveNotes = notes => {
  dataJSON = JSON.stringify(notes);
  fs.writeFileSync("./notes.json", dataJSON);
};

module.exports = {
  adddNotes: addNotes,
  removeNotes: removeNotes,
  listNotes: listNotes,
  readNote: readNote
};
