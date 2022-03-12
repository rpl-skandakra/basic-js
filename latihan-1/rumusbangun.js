// -------------------------------SEGITIGA -------------------------------//

const nama = prompt('Masukkan nama');
alert('Halo ' + nama);

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
console.log('Luas segitiga', segitiga.luas(8, 6));
console.log('Keliling Segitiga', segitiga.keliling(9, 3, 4));

// function kelilingsegitiga(a,b,c) {
//     const kelilingS3 = a + b + c;
//     return kelilingS3;
// }

// function luassegitiga(a,b) {
//     var LuasS3 ;

//     LuasS3 = a*b/2;

//     return LuasS3;
// }

// --------------------------------PERSEGI--------------------------------//

function kelilingpersegi(s) {
  var kelilingpersegi;

  kelilingpersegi = s * 4;

  return kelilingpersegi;
}
// console.log('Persegi',kelilingpersegi(7));

function luaspersegi(s) {
  var Luaspersegi;

  Luaspersegi = s * s;

  return Luaspersegi;
}
// console.log(luaspersegi(5));

// -----------------------------Persegi Panjang---------------------------//

function kelilingpersegipjang(p, l) {
  var kelilingpersegipjang;

  kelilingpersegipjang = (p + l) * 2;

  return kelilingpersegipjang;
}
// console.log(kelilingpersegipjang(5,10));

function luaspersegipjang(p, l) {
  var luaspersegipjang;

  luaspersegipjang = p * l;

  return luaspersegipjang;
}
// console.log(luaspersegipjang(5,10));

// -----------------------------Jajar Genjang-----------------------------//

function kelilijjrgenjang(a, b) {
  var kelilijjrgenjang;

  kelilijjrgenjang = 2 * (a + b);

  return kelilijjrgenjang;
}
// console.log(kelilijjrgenjang(9,5));

function luasjjrgenjang(a, t) {
  var luasjjrgenjang;

  luasjjrgenjang = a * t;

  return luasjjrgenjang;
}
// console.log(luasjjrgenjang(9,4));

// -----------------------------Belah Ketupat-----------------------------//

function kelilingbelahtupat(s) {
  var kelilingbelahtupat;

  kelilingbelahtupat = s * 4;

  return kelilingbelahtupat;
}
// console.log(kelilingbelahtupat(5));

function luasbelahtupat(d1, d2) {
  var luasbelahtupat;

  luasbelahtupat = (d1 * d2) / 2;

  return luasbelahtupat;
}
// console.log(luasbelahtupat(6,4));

// -----------------------------layang-layang-----------------------------//

function kelilinglayang(a, c) {
  var kelilinglayang;

  kelilinglayang = 2 * (a + c);

  return kelilinglayang;
}
// console.log(kelilinglayang(5,6));

function luaslayang(d1, d2) {
  var luaslayang;

  luaslayang = (d1 * d2) / 2;

  return luaslayang;
}
// console.log(luaslayang(6,4));

// ------------------------------Trapesium--------------------------------//

function kelilingtrapesium(a, b, c, d) {
  var kelilingtrapesium;

  kelilingtrapesium = a + b + c + d;

  return kelilingtrapesium;
}
// console.log(kelilingtrapesium(5,6,8,9));

function luastrapesium(a, b, t) {
  var luastrapesium;

  luastrapesium = ((a + b) * t) / 2;

  return luastrapesium;
}
// console.log(luastrapesium(6,4,3));

// ------------------------------Lingkaran--------------------------------//

function kelilinglingkaran(d) {
  var kelilinglingkaran;

  kelilinglingkaran = 2 * Math.PI * d;

  return kelilinglingkaran;
}
// console.log(kelilinglingkaran(14));

function luaslingkaran(r) {
  var luaslingkaran;

  luaslingkaran = Math.PI * r * r;

  return luaslingkaran;
}
// console.log('Luas Lingkaran', luaslingkaran(7));

// ------------------------------Bangun Ruang--------------------------------//
// ---------------------------------Kubus----------------------------------//

const kubus = {
  luas: (sisi) => {
    const luas = 6 * Math.pow(sisi, 2);
    return luas;
  },
  volume: (sisi) => Math.pow(sisi, 3),
};
console.log(kubus.luas(10));
console.log(kubus.volume(10));

// ---------------------------------Balok----------------------------------//

const balok = {
  luas: (panjang, lebar, tinggi) => {
    const luas = 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi);
    return luas;
  },
  volume: (panjang, lebar, tinggi) => {
    const volume = panjang * lebar * tinggi;
    return volume;
  },
};
