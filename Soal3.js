const Rentcar = (car) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const tipecar = ['car0', 'car1', 'car2', 'car3', 'car4']; // ARRAY
      let cek = tipecar.find((item) => {
        return item === car;
      });
      //===================================== VALIDASI===========================================

      if (typeof car !== 'string') {
        // Validasi Number
        reject(new Error('Input Harus String'));
      } else if (!tipecar.includes(car.toLowerCase())) {
        // Validasi Hari Kerja Dengan Lower case
        reject(new Error('Mobil Tidak Ada'));
      } else {
        resolve(car.toLowerCase());
      }
      //===================================== END=================================================
      //
    }, 3000); // Delay
  });
};

(async () => {
  try {
    const namecar = await Rentcar('CAR1'); //input
    console.log(namecar);
  } catch (error) {
    console.log(error.message);
  }
})();

//=========================================================== SOAL 3 no 2====================================================

const logik = (logic) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const number = ['Satu', 'Dua', 'Tiga', 'Empat', 'Lima']; // ARRAY

      //===================================== VALIDASI===========================================
      if (typeof logic !== 'string') {
        // Validasi String
        reject(new Error('Input harus berupa string'));
      } else if (logic === 'map') {
        // memunculkan array
        // Map
        resolve(number);
      } else if (logic === 'uppercase') {
        // Uppercase
        const uppercaseArray = number.map((item) => item.toUpperCase()); // merubah array menjadi huruf besar semua
        resolve(uppercaseArray);
      } else if (logic === 'lowercase') {
        // Lowercase
        const lowercaseArray = number.map((item) => item.toLowerCase()); // Merubah array menjadi huruf kecil semua
        resolve(lowercaseArray);
      } else {
        reject(new Error('Input tidak valid')); // Message Error
      }
      //===================================== END=================================================
    }, 3000); // Delay
  });
};

//====================================================== Call =================================================

(async () => {
  try {
    const namecar = await logik('map'); //input
    console.log(namecar);
  } catch (error) {
    console.log(error.message); // call error
  }
})();
