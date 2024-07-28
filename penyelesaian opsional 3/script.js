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
  /* kode lama untuk pembanding
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
  }*/

  //kode baru untuk menampilkan catatan menggunakan custom element
  class NoteItem extends HTMLElement {
    static get observedAttributes() {
      return ['title', 'body', 'createdAt'];
    }
    
    // fungsi ini akan dipanggil ketika nilai dari atribut yang diamati berubah
    attributeChangedCallback(name, oldValue, newValue) {
      this.render();
    }
  
    // fungsi ini akan dipanggil ketika elemen ini ditambahkan ke DOM
    connectedCallback() {
      this.render();
    }
  
    // fungsi ini digunakan untuk merender tampilan catatan
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
  // kode lama tetap sama
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

  // ini adalah bagian baru untuk validaasi input
  // ketika input title atau body kosong, maka form tidak bisa di-submit
  // karena input tersebut dianggap tidak valid
  titleInput.addEventListener('input', () => {
    if (titleInput.value.trim() === '') {
      titleInput.setCustomValidity('Title tidak boleh kosong.');
    } else {
      titleInput.setCustomValidity('');
    }
  });
  
  bodyInput.addEventListener('input', () => {
    if (bodyInput.value.trim() === '') {
      bodyInput.setCustomValidity('Body tidak boleh kosong.');
    } else {
      bodyInput.setCustomValidity('');
    }
  });