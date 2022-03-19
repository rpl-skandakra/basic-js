const persegi = {
  luas: (sisi) => {
    const luasPersegi = sisi * sisi;
    return luasPersegi;
  },
  keliling: (sisi) => {
    const kelilingPersegi = sisi * 4;
    return kelilingPersegi;
  },
};

const inputSisi = document.getElementById('sisi');
const buttonLuasPersegi = document.getElementById('luas-persegi');
const buttonKelilingPersegi = document.getElementById('keliling-persegi');
const teksHasilPersegi = document.getElementById('hasil-persegi');

buttonLuasPersegi.addEventListener('click', () => {
  const sisi = Number(inputSisi.value);
  if (sisi) {
    const hasil = persegi.luas(sisi);
    teksHasilPersegi.textContent = 'Hasil: ' + hasil;
  } else {
    alert('Silahkan masukkan sisi');
  }
});

buttonKelilingPersegi.addEventListener('click', () => {
  const sisi = Number(inputSisi.value);
  if (sisi) {
    const hasil = persegi.keliling(sisi);
    teksHasilPersegi.textContent = 'Hasil: ' + hasil;
  } else {
    alert('Silahkan masukkan sisi');
  }
});
