const segitiga = {
  luas: (alas, tinggi) => {
    let luasSegitiga = alas * tinggi;
    luasSegitiga = luasSegitiga / 2;
    return luasSegitiga;
  },
  keliling: (alas, tinggi) => {
    const miring = Math.sqrt(Math.pow(alas, 2) + Math.pow(tinggi, 2));
    const kelilingSegitiga = alas + tinggi + miring;
    return kelilingSegitiga.toFixed(2);
  },
};

const inputAlas = document.getElementById('alas');
const inputTinggi = document.getElementById('tinggi');
const buttonLuas = document.getElementById('luas');
const buttonKeliling = document.getElementById('keliling');
const teksHasil = document.getElementById('hasil');
// const main = document.querySelector('main');

// buttonLuas.addEventListener('click', () => {
//   const alas = Number(inputAlas.value);
//   const tinggi = Number(inputTinggi.value);
//   if (alas && tinggi) {
//     const hasil = segitiga.luas(alas, tinggi);
//     const elemenHasil = document.createElement('p');
//     const teksHasil = document.createTextNode('Hasil: ' + hasil);
//     elemenHasil.setAttribute('id', 'hasil');
//     elemenHasil.appendChild(teksHasil);
//     main.appendChild(elemenHasil);
//   } else {
//     alert('Silahkan masukkan alas dan tinggi');
//   }
// });

// buttonKeliling.addEventListener('click', () => {
//   const alas = Number(inputAlas.value);
//   const tinggi = Number(inputTinggi.value);
//   if (alas && tinggi) {
//     const hasil = segitiga.keliling(alas, tinggi);
//     const elemenHasil = document.createElement('p');
//     const teksHasil = document.createTextNode('Hasil: ' + hasil);
//     elemenHasil.setAttribute('id', 'hasil');
//     elemenHasil.appendChild(teksHasil);
//     main.appendChild(elemenHasil);
//   } else {
//     alert('Silahkan masukkan alas dan tinggi');
//   }
// });

buttonLuas.addEventListener('click', () => {
  const alas = Number(inputAlas.value);
  const tinggi = Number(inputTinggi.value);
  if (alas && tinggi) {
    const hasil = segitiga.luas(alas, tinggi);
    teksHasil.textContent = 'Hasil: ' + hasil;
  } else {
    alert('Silahkan masukkan alas dan tinggi');
  }
});

buttonKeliling.addEventListener('click', () => {
  const alas = Number(inputAlas.value);
  const tinggi = Number(inputTinggi.value);
  if (alas && tinggi) {
    const hasil = segitiga.keliling(alas, tinggi);
    teksHasil.textContent = 'Hasil: ' + hasil;
  } else {
    alert('Silahkan masukkan alas dan tinggi');
  }
});
