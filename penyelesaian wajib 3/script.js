//ini adalah tambahan fungsi logika untuk menambahkan catatan baru
  document.addEventListener('DOMContentLoaded', () => {
    const notesList = document.getElementById('notes-list');
    const noteForm = document.getElementById('note-form');
    const titleInput = document.getElementById('title');
    const bodyInput = document.getElementById('body');
    const displayNotes = () => {
      notesList.innerHTML = '';
      notesData.forEach(note => {
        const noteElement = document.createElement('div');
        noteElement.classList.add('note');
        noteElement.innerHTML = `
          <h2>${note.title}</h2>
          <p>${note.body}</p>
          <small>${new Date(note.createdAt).toLocaleString()}</small>
        `;
        notesList.appendChild(noteElement);
      });
    };
  
    // ini adalah event listener yang digunakan untuk menangani
    // submit event pada form. Ketika form di-submit, maka fungsi
    // yang didefinisikan akan dijalankan.
    noteForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const newNote = {
        id: `notes-${Date.now()}`,
        title: titleInput.value,
        body: bodyInput.value,
        createdAt: new Date().toISOString(),
        archived: false,
      };
      notesData.push(newNote);

      // displayNotes() adalah fungsi yang digunakan untuk menampilkan catatan
      displayNotes();

      // noteForm.reset() adalah metode yang digunakan untuk menghapus
      // nilai dari elemen form. 
      noteForm.reset();
    });
  
    displayNotes();
  });