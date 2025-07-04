const notes = [];

function saveNote(content, id) {
  notes.push({ content: content, id: id });
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

function getNote(id) {
  if (!id || typeof id != "number") {
    console.log("Invalid ID");
  } else {
    let foundNote;
    for (let i = 0; i < notes.length; i++) {
      if (notes[i].id === id) {
        foundNote = notes[i];
      } else {
        if (foundNote) {
          return logOutNotesFormatted(foundNote);
        } else {
          return "No content for this id " + id;
        }
      }
    }
  }
}

const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

function logOutNotesFormatted(note) {
  // your code here
  return (
    "The note with id: " + note.id,
    "has the following note text: " + note.content + "."
  );
}

// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry
