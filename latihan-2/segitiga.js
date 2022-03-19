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
const buttonLuasSegitiga = document.getElementById('luas-segitiga');
const buttonKelilingSegitiga = document.getElementById('keliling-segitiga');
const teksHasilSegitiga = document.getElementById('hasil-segitiga');
// const main = document.querySelector('main');

// buttonLuasSegitiga.addEventListener('click', () => {
//   const alas = Number(inputAlas.value);
//   const tinggi = Number(inputTinggi.value);
//   if (alas && tinggi) {
//     const hasil = segitiga.luas(alas, tinggi);
//     const elemenHasil = document.createElement('p');
//     const teksHasilSegitiga = document.createTextNode('Hasil: ' + hasil);
//     elemenHasil.setAttribute('id', 'hasil');
//     elemenHasil.appendChild(teksHasilSegitiga);
//     main.appendChild(elemenHasil);
//   } else {
//     alert('Silahkan masukkan alas dan tinggi');
//   }
// });

// buttonKelilingSegitiga.addEventListener('click', () => {
//   const alas = Number(inputAlas.value);
//   const tinggi = Number(inputTinggi.value);
//   if (alas && tinggi) {
//     const hasil = segitiga.keliling(alas, tinggi);
//     const elemenHasil = document.createElement('p');
//     const teksHasilSegitiga = document.createTextNode('Hasil: ' + hasil);
//     elemenHasil.setAttribute('id', 'hasil');
//     elemenHasil.appendChild(teksHasilSegitiga);
//     main.appendChild(elemenHasil);
//   } else {
//     alert('Silahkan masukkan alas dan tinggi');
//   }
// });

buttonLuasSegitiga.addEventListener('click', () => {
  const alas = Number(inputAlas.value);
  const tinggi = Number(inputTinggi.value);
  if (alas && tinggi) {
    const hasil = segitiga.luas(alas, tinggi);
    teksHasilSegitiga.textContent = 'Hasil: ' + hasil;
  } else {
    alert('Silahkan masukkan alas dan tinggi');
  }
});

buttonKelilingSegitiga.addEventListener('click', () => {
  const alas = Number(inputAlas.value);
  const tinggi = Number(inputTinggi.value);
  if (alas && tinggi) {
    const hasil = segitiga.keliling(alas, tinggi);
    teksHasilSegitiga.textContent = 'Hasil: ' + hasil;
  } else {
    alert('Silahkan masukkan alas dan tinggi');
  }
});
