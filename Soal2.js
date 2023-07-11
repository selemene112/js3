const getMonth = (callback) => {
  setTimeout(() => {
    let error = true;
    let month = ['january', 'maret', 'april', 'mei', 'juni', 'juli', 'agustus', 'september', 'oktober', 'november', 'desember'];
    if (!error) {
      callback(null, month);
    } else {
      callback(new Error('Sorry Data Not Found'), []);
    }
  }, 4000);
};

const processMonths = (error, months) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log(months.map((month) => month));
  }
};

getMonth(processMonths);
