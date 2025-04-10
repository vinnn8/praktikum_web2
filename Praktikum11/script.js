let notes = JSON.parse(localStorage.getItem("notes")) || [];

function renderNotes() {
  const noteList = document.getElementById("noteList");
  noteList.innerHTML = "";

  notes.forEach((note, index) => {
    const li = document.createElement("li");
    li.className = "list-group-item";

    const textSpan = document.createElement("span");
    textSpan.textContent = note;

    const editBtn = document.createElement("button");
    editBtn.className = "btn btn-sm btn-warning btn-edit";
    editBtn.textContent = "Edit";
    editBtn.onclick = () => editNote(index);

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-sm btn-danger btn-delete";
    deleteBtn.textContent = "Hapus";
    deleteBtn.onclick = () => deleteNote(index);

    li.appendChild(textSpan);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    noteList.appendChild(li);
  });

  localStorage.setItem("notes", JSON.stringify(notes));
}

function addNote() {
  const input = document.getElementById("noteInput");
  const newNote = input.value.trim();

  if (newNote !== "") {
    notes.push(newNote);
    input.value = "";
    renderNotes();
  }
}

function clearInput() {
  document.getElementById("noteInput").value = "";
}

function editNote(index) {
  const newContent = prompt("Edit catatan:", notes[index]);
  if (newContent !== null) {
    notes[index] = newContent.trim();
    renderNotes();
  }
}

function deleteNote(index) {
  if (confirm("Hapus catatan ini?")) {
    notes.splice(index, 1);
    renderNotes();
  }
}

// Load notes saat pertama kali
renderNotes();