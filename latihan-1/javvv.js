const aa = parseInt(prompt('silahkan pilih bangun datar \n 1.segitiga \n 2.persegi'));

const segitiga = function(alas, tinggi) {
    return alert(alas * tinggi * 0.5);
}

const persegi = function(panjang, lebar) {
    return alert(panjang * lebar);
}

if( aa === 1 ) {
    const alas = parseInt(prompt('alas'));
    const tinggi = parseInt(prompt('tinggi'));
    console.log(segitiga(alas, tinggi));
} else if ( aa === 2 ) {
    const panjang = parseInt(prompt('panjang'));
    const lebar = parseInt(prompt('lebar'));
    console.log(persegi(panjang,lebar));
} else {
    alert('yang anda masukkan salah');
}
