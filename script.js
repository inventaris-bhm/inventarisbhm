function searchInventory() {
  var input = document.getElementById("searchInput");
  var filter = input.value.trim().toUpperCase(); // Menggunakan trim untuk menghapus spasi ekstra

  // Mengambil tabel dan semua baris
  var table = document.getElementById("inventoryTable");
  var rows = table.getElementsByTagName("tr");

  // Menyembunyikan tabel jika input kosong
  if (filter.length > 0) {
    table.style.display = "table"; // Menampilkan tabel jika ada input
  } else {
    table.style.display = "none"; // Menyembunyikan tabel jika input kosong
  }

  // Loop untuk memeriksa setiap baris tabel
  for (var i = 1; i < rows.length; i++) {
    var cells = rows[i].getE
