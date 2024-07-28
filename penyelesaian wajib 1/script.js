// ini adalah fungsi supaya data dari notes.js dapat ditampilkan
// di dalam elemen HTML dengan id 'notes-list'. Fungsi ini akan
// dijalankan setelah seluruh elemen HTML selesai dimuat (loaded).
// addEventListener() adalah metode yang digunakan untuk menambahkan
// event listener ke elemen tertentu. Event listener adalah fungsi yang
// akan dijalankan ketika suatu event terjadi pada elemen tersebut.
document.addEventListener('DOMContentLoaded', () => {

  // document.getElementById() adalah metode yang digunakan untuk
  // mengambil elemen HTML berdasarkan id-nya. Dalam kasus ini, kita
  // mengambil elemen dengan id 'notes-list' yang akan digunakan
  // untuk menampilkan daftar catatan.
  const notesList = document.getElementById('notes-list');
  
  // notesData adalah variabel yang menyimpan data catatan yang
  // diimpor dari file notes.js. notesData adalah array of objects
  // yang berisi informasi mengenai setiap catatan.
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
        // pembuatan catatan. new Date() adalah konstruktor yang
        // digunakan untuk membuat objek tanggal. toLocaleString()
        // adalah metode yang digunakan untuk mengubah objek tanggal
        // menjadi string dengan format tanggal dan waktu lokal.

    // appendChild() adalah metode yang digunakan untuk menambahkan
    // elemen HTML sebagai anak dari elemen lain. Dalam kasus
    // ini, kita menambahkan elemen <div> yang menampilkan catatan
    // sebagai anak dari elemen dengan id 'notes-list'.    
    notesList.appendChild(noteElement);
  });
});