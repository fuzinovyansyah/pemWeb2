// untuk mengakses elemen pada html agar dapat dilakukan beberapa aksi seperti mengambil nilai dari form dsb
const bilanganPertamaInput = document.getElementById("bilanganPertama");
const bilanganKeduaInput = document.getElementById("bilanganKedua");
const btnHitung = document.getElementById("btn-hitung");
const btnReset = document.getElementById("btn-reset");

// Fungsi untuk menghitung dan menampilkan hasil dalam alert
function hitung() {
  const bilanganPertama = parseFloat(bilanganPertamaInput.value);
  const bilanganKedua = parseFloat(bilanganKeduaInput.value);

  // isNaN merupakan function bawaan dari javascript untuk cek apakah value merupakan number atau bukan
  if (!isNaN(bilanganPertama) && !isNaN(bilanganKedua)) {
    const hasil = bilanganPertama + bilanganKedua;
    alert(`Hasil penjumlahan: ${hasil}`);
  } else {
    alert("Masukkan bilangan yang valid");
  }
}

// Fungsi untuk menghapus nilai dalam input form
function reset() {
  bilanganPertamaInput.value = "";
  bilanganKeduaInput.value = "";
}

// Tambahkan event listener untuk tombol hitung
btnHitung.addEventListener("click", hitung);

// Tambahkan event listener untuk tombol reset
btnReset.addEventListener("click", reset);
