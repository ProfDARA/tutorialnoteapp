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





  // kode baru untuk menampilkan catatan menggunakan custom element 
  // yang disebut note-item 
  class NoteItem extends HTMLElement {
    connectedCallback() {
      this.render();
    }

    render() {
      this.innerHTML = `
        <div class="note">
          <h2>${this.getAttribute('title')}</h2>
          <p>${this.getAttribute('body')}</p>
          <small>${new Date(this.getAttribute('createdAt')).toLocaleString()}</small>
        </div>
      `;
    }
  }
  
  customElements.define('note-item', NoteItem);
  
  // kode lama untuk menampilkan catatan menggunakan elemen HTML biasa
  const displayNotes = () => {
    notesList.innerHTML = '';
    notesData.forEach(note => {
      const noteElement = document.createElement('note-item');
      noteElement.setAttribute('title', note.title);
      noteElement.setAttribute('body', note.body);
      noteElement.setAttribute('createdAt', note.createdAt);
      notesList.appendChild(noteElement);
    });
  };