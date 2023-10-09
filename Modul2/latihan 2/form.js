const form = document.getElementById("myForm");
const btnSubmit = document.getElementById("btn-submit");

function submit() {
  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const alamat = document.getElementById("alamat").value;

  if (!nama || !email || !alamat) {
    alert("Anda Harus Mengisi Data Dengan Lengkap");
  } else {
    alert("Data berhasil di submit");
  }
}

btnSubmit.addEventListener("click", submit);