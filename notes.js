const fs = require("fs");
const chalk = require("chalk");
const getNotes = () => {};
const list = () => {
  const listData = fs.readFileSync("notes.json");
  return JSON.parse(listData).forEach((item) => console.log(item.title));
};
const addNote = (title, body) => {
  const notes = loadNotes();
  const note = notes.some((item) => item.title === title);
  if (!note) {
    notes.push({ title: title, body: body });
    saveNotes(notes);
  } else {
    console.log("Oops title already taken");
  }
};
const removeNote = (title) => {
  const notes = loadNotes();

  const note = notes.filter((item) => item.title !== title);
  notes.length > note.length
    ? console.log(chalk.bgGreen.black("Item removed"))
    : console.log(chalk.bgRed.black("Item not found"));

  saveNotes(note);
};
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const parsedData = JSON.parse(dataBuffer);
    return parsedData;
  } catch (e) {
    return [];
  }
};
module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  list: list,
};
