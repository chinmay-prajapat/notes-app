const fs = require("fs");

const getNotes = function () {};

const addNote = function (title, body) {
  const notes = loadNotes();
  const note = notes.some((item) => item.title === title);
  if (!note) {
    notes.push({ title: title, body: body });
    saveNotes(notes);
  } else {
    console.log("Oops title already taken");
  }
};
const removeNote = function (title) {
  const notes = loadNotes();

  const note = notes.filter((item) => {
    console.log("the note is removed");
    item.title !== title;
  });
  saveNotes(note);
};
const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};
const loadNotes = function () {
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
};
