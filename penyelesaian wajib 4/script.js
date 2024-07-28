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
    // connectedCallback() adalah metode yang dipanggil ketika elemen
    // berhasil terhubung ke dokumen HTML (DOM).
    connectedCallback() {
      // render() adalah metode yang digunakan untuk menampilkan elemen
      // HTML pada custom element. Metode ini akan dipanggil setiap kali
      // custom element ditambahkan ke dokumen HTML.
      this.render();
    }
  
    // render() adalah metode yang digunakan untuk menampilkan elemen
    // HTML pada custom element. Metode ini akan dipanggil setiap kali
    // custom element ditambahkan ke dokumen HTML.
    render() {
      // innerHTML adalah properti yang digunakan untuk mengatur atau
      // mendapatkan konten HTML dari suatu elemen. Dalam kasus ini,
      // kita mengatur konten HTML dari custom element <note-item> yang
      // menampilkan judul, isi, dan tanggal pembuatan catatan.
      this.innerHTML = `
        <div class="note">
          <h2>${this.getAttribute('title')}</h2>
          <p>${this.getAttribute('body')}</p>
          <small>${new Date(this.getAttribute('createdAt')).toLocaleString()}</small>
        </div>
      `;
    }
  }
  
  // customElements.define() adalah metode yang digunakan untuk mendefinisikan
  // custom element baru. Dalam kasus ini, kita mendefinisikan custom element
  // dengan nama 'note-item' yang akan menampilkan judul, isi, dan tanggal
  // pembuatan catatan.
  customElements.define('note-item', NoteItem);
  
  // displayNotes() adalah fungsi yang digunakan untuk menampilkan catatan
  // menggunakan custom element <note-item>. Fungsi ini akan menghapus
  // elemen HTML yang menampilkan catatan sebelumnya dan menambahkan
  // custom element <note-item> untuk setiap catatan yang ada.
  const displayNotes = () => {

    // notesList adalah variabel yang menyimpan elemen HTML dengan id 'notes-list'.
    notesList.innerHTML = '';

    // notesData.forEach() adalah metode yang digunakan untuk melakukan iterasi
    // pada setiap catatan yang ada dan menambahkan custom element <note-item>
    // untuk setiap catatan.
    notesData.forEach(note => {
      const noteElement = document.createElement('note-item');
      noteElement.setAttribute('title', note.title);
      noteElement.setAttribute('body', note.body);
      noteElement.setAttribute('createdAt', note.createdAt);
      notesList.appendChild(noteElement);
    });
  };