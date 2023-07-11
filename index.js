fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json()) // mengubah respons menjadi format JSON dengan menggunakan metode .json().
  .then((data) => {
    const userList = document.getElementById('user-list'); // Mengambil elemen dengan ID "user-list" dari HTML, yang merupakan elemen tbody tempat kita akan menambahkan baris-baris tabel pengguna.
    data.forEach((user, index) => {
      const row = document.createElement('tr'); // Membuat elemen <tr> baru yang akan menjadi baris dalam tabel pengguna.
      //Mengatur HTML dalam elemen <tr> yang telah dibuat sebelumnya.
      row.innerHTML = ` 
              <th scope="row">${index + 1}</th>
              <td>${user.name}</td>
            `;
      userList.appendChild(row);
    });
  })
  .catch((error) => console.error(error)); // Menggunakan metode .catch() untuk menangani kesalahan jika terjadi kesalahan saat melakukan permintaan atau pemrosesan data.
