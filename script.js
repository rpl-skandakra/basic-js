// const heading = document.querySelector('h1');
// heading.textContent = 'Hello World!';

// console.log(heading);

/**
 * 1. Variabel => tempat untuk menyimpan data
 */
// var
// const
// let

// var => bisa diubah ubah
// var nama = 'Hendra';
// nama = 'Agil';
// console.log(nama);

// const => tidak bisa diubah ubah
// const umur = 18;
// umur = 17;
// console.log(umur);

// let => bisa diubah ubah (mirip dengan var)
// let sekolah = 'SMKN 2 Karanganyar';
// sekolah = 'SMKN 1 Karanganyar';
// console.log(sekolah);

/**
 * 2. Tipe data
 */
// String
// const nama = "Hendra";
// const nama = 'Agil';

// Number
// const umur = 18;

// Boolean
// const sudahLulus = true |

// Array
// const bahasa = ['HTML', 'CSS', true, 18, 'JS'];
// console.log(bahasa);
// console.log(bahasa[1]);

// Object
// const identitas = {
//   nama: 'Hendra',
//   umur: 18,
//   'sudah-lulus': true
// }
// console.log(identitas);

// identitas.sekolah = 'SMKN 2 Karanganyar';
// console.log(identitas);

/**
 * Ini komentar
 */

/**
 * 3. Operator
 */
// +
// const nomorA = 10;
// const nomorB = 20;
// const hasil = nomorA + nomorB;
// console.log(hasil);

// -
// const nomorA = 10;
// const nomorB = 20;
// const hasil = nomorA - nomorB;
// console.log(hasil);

// *
// const nomorA = 10;
// const nomorB = 20;
// const hasil = nomorA * nomorB;
// console.log(hasil);

// /
// const nomorA = 10;
// const nomorB = 20;
// const hasil = nomorA / nomorB;
// console.log(hasil);

// ===
// const nomorA = 10;
// const nomorB = '10';
// console.log(nomorA === nomorB);

// !==
// const nomorA = 10;
// const nomorB = '10';
// console.log(nomorA != nomorB);

// !
// const sudahLulus = true;
// console.log(!sudahLulus);

/**
 * 4. Kondisi
 */
// const sudahLulus = true;
// const nomorA = '11';
// const nomorB = '10';

// if else
// if (nomorA === nomorB) {
//   console.log('Nomor A sama dengan Nomor B');
// } else {
//   console.log('Nomor A tidak sama dengan Nomor B');
// }

// switch case
// switch (nomorA) {
//   case 10:
//     console.log('Sepuluh');
//     break;
//   case 11:
//     console.log('Sebelas');
//     break;

//   default:
//     console.log('Nomor A itu bukan angka');    
//     break;
// }

/**
 * 5. Looping / perulangan
 */
// const bahasa = ['HTML', 'CSS', 'JavaScript'];
// for (let i = 0; i < bahasa.length; i++) {
//   console.log(bahasa[i]);
// }

// let i = 0;
// do {
//   console.log('DO WHILE >>', i);
//   i++;
// } while (i < 2);

// let j = 0;
// while (j < 2) {
//   console.log('WHILE DO >>', j);
//   j++;
// }

// bahasa.forEach(item => {
//   console.log(item);
// })

// bahasa.map(item => {
//   console.log(item);
// })

/**
 * 6. Function / fungsi
 */
// Regular function
// function pengurangan(angka1, angka2) {
//   return angka1 - angka2;
// }

// Arrow function
// const pengurangan = (angka1, angka2) => {
//   return angka1 - angka2;
// }

// Anonymous function
// const operator = {
//   pengurangan: function(angka1, angka2) {
//     return angka1 - angka2;
//   },
//   perkalian: (angka1, angka2) => {
//     return angka1 * angka2;
//   }
// }

// const nomorA = 20000;
// const nomorB = 10000;
// console.log(operator.pengurangan(nomorA, nomorB));

// const nomorC = 30;
// const nomorD = 50;
// console.log(operator.perkalian(nomorC, nomorD));