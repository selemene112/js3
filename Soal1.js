const cehHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      // ================= Validasi//////////////////////////////////
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error('Hari ini bukan hari kerja'));
      }
    }, 3000);
  });
};

//========================================================================================================================================================================================================

//=================================================================================
//then catch
cehHariKerja('senin') // input
  .then((hari) => {
    console.log(hari); // memunculkan nama hari apabila solve
  })
  .catch((error) => {
    // apabila reject output bukan hari kerja akan keluar
    console.log(error.message); // pesan error
  });

// Menggunakan try-catch
(async () => {
  try {
    const hari = await cehHariKerja('selasa'); //input
    console.log(hari); // Output: selasa
  } catch (error) {
    console.log(error.message); // Output: Hari ini bukan hari kerja
  }
})();
