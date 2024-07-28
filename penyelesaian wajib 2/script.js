//ini adalah tambahan fungsi logika untuk menambahkan catatan baru
  document.addEventListener('DOMContentLoaded', () => {
    const notesList = document.getElementById('notes-list');

    // notesForm adalah elemen form yang digunakan untuk menambahkan catatan baru.
    const noteForm = document.getElementById('note-form');

    // titleInput adalah elemen input yang digunakan untuk mengisi judul catatan.
    const titleInput = document.getElementById('title');

    // bodyInput adalah elemen textarea yang digunakan untuk mengisi isi catatan.
    const bodyInput = document.getElementById('body');
  
    // displayNotes adalah fungsi yang digunakan untuk menampilkan catatan
    const displayNotes = () => {

      // notesList.innerHTML = ''; adalah metode yang digunakan untuk menghapus
      notesList.innerHTML = '';

      // notesData.forEach() adalah metode yang digunakan untuk melakukan iterasi
      // pada setiap elemen dalam array
      notesData.forEach(note => {

        // document.createElement() adalah metode yang digunakan untuk
        // membuat elemen HTML baru. Dalam kasus ini, kita membuat sebuah
        // elemen <div> yang akan menampilkan informasi mengenai catatan.
        const noteElement = document.createElement('div');

        // classList.add() adalah metode yang digunakan untuk menambahkan
        // kelas CSS ke elemen HTML. Dalam kasus ini, kita menambahkan
        // kelas 'note' ke elemen <div> yang menunjukkan bahwa elemen
        // tersebut adalah elemen yang menampilkan catatan.
        noteElement.classList.add('note');

        // innerHTML adalah properti yang digunakan untuk mengatur atau
        // mendapatkan konten HTML dari suatu elemen. Dalam kasus ini,
        // kita mengatur konten HTML dari elemen <div> yang menampilkan
        // judul, isi, dan tanggal pembuatan catatan.
        noteElement.innerHTML = `
          <h2>${note.title}</h2>
          <p>${note.body}</p>
          <small>${new Date(note.createdAt).toLocaleString()}</small>
        `; // note.createdAt adalah properti yang menyimpan tanggal

        // appendChild() adalah metode yang digunakan untuk menambahkan
        // elemen HTML sebagai anak dari elemen lain. Dalam kasus
        // ini, kita menambahkan elemen <div> yang menampilkan catatan
        // sebagai anak dari elemen dengan id 'notes-list
        notesList.appendChild(noteElement);
      });
    };
  
    // noteForm.addEventListener() adalah metode yang digunakan untuk menambahkan
    // event listener ke elemen form. Event listener adalah fungsi yang
    // akan dijalankan ketika suatu event terjadi pada elemen tersebut.
    noteForm.addEventListener('submit', (event) => {

      // event.preventDefault() adalah metode yang digunakan untuk mencegah
      // perilaku default dari suatu event. Dalam kasus ini, kita mencegah
      // perilaku default dari event 'submit' pada elemen form.
      event.preventDefault();

      // const newNote = { ... }; adalah sintaks yang digunakan untuk membuat
      // objek baru yang berisi informasi mengenai catatan baru yang akan
      // ditambahkan. Objek ini memiliki properti id, title, body, createdAt,
      // dan archived.
      const newNote = {
        id: `notes-${Date.now()}`,
        title: titleInput.value,
        body: bodyInput.value,
        createdAt: new Date().toISOString(),
        archived: false,
      };

      // notesData.push() adalah metode yang digunakan untuk menambahkan
      // elemen baru ke dalam array notesData. Dalam kasus ini, kita
      // menambahkan objek newNote ke dalam array notesData.
      notesData.push(newNote);

      // displayNotes() adalah fungsi yang digunakan untuk menampilkan catatan
      displayNotes();

      // noteForm.reset() adalah metode yang digunakan untuk menghapus
      // nilai dari elemen form. Dalam kasus ini, kita menghapus nilai
      // dari elemen input dan textarea pada elemen form.
      noteForm.reset();
    });
  
    displayNotes();
  });