const notes = [];

function saveNote(content, id) {
  notes.push({ content: `${content}`, id: id });
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes);

function getNote(noteId) {
  let result = notes.find(({ id }) => id === noteId);
  return result ? result : "Note not found";
}

function logOutNotesFormatted() {
  for (const element of notes) {
    console.log(
      `The note with id: ${element.id} has the following note text: ${element.content}`
    );
  }
}

logOutNotesFormatted();
