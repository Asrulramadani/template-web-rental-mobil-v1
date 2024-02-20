const btnPesan = document.querySelector("#btn-pesan");
const formCekKetersediaan = document.querySelector("#cek-ketersediaan");
const formPesan = document.querySelector("#pesan");
const alert = document.querySelector(".alert");

btnPesan.addEventListener("click", (e) => {
  e.preventDefault();
  formCekKetersediaan.classList.add("d-none");
  formPesan.classList.remove("d-none");
  alert.classList.add("d-none");
});
