      // Tampilkan tabel jika input tidak kosong
      if (filter.length > 0) {
        table.style.display = "table"; // Menampilkan tabel ketika ada input
      } else {
        table.style.display = "none"; // Menyembunyikan tabel jika input kosong
      }

      // Loop untuk memeriksa setiap baris tabel
      for (var i = 1; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName("td");
        var match = false;

        // Cek apakah ada kecocokan dengan nomor inventaris
        if (cells.length > 0) {
          var nomorInventaris = cells[0].textContent || cells[0].innerText;
          // Periksa apakah nomor inventaris cocok dengan pencarian, tanpa memperhatikan huruf besar/kecil
          if (nomorInventaris.toUpperCase().includes(filter)) {
            match = true;
          }
        }

        // Tampilkan atau sembunyikan baris berdasarkan kecocokan
        if (match) {
          rows[i].style.display = ""; // Menampilkan baris jika ada kecocokan
        } else {
          rows[i].style.display = "none"; // Menyembunyikan baris jika tidak ada kecocokan
        }
      }
    }
  </script>
</body>
</html>
