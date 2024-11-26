let countUserInputPassword = 0; // Inisialisasi variabel untuk menghitung jumlah percobaan input password

const user = {                  // Membuat object user dengan properti name, password, dan khodam
  name: "",
  password: "masuk kampus",
  khodam: "",
};

alert("SELAMAT DATANG DI WEB KHODAM CEKK!!");

// Minta nama user
user.name = prompt("Masukkan nama kamu:");  // Meminta input nama user dan menyimpannya di properti name dari object user

// Fungsi untuk menghitung jumlah kata dalam sebuah string
function wordCount(str) {                 // Memotong spasi di awal dan akhir string, lalu memisah string berdasarkan spasi untuk menghitung jumlah kata
  return str.trim().split(/\s+/).length;  // trim(): Menghapus spasi di awal dan akhir string.  // split(' '): Membagi string menjadi array kata berdasarkan satu spasi. // /\s+/: "Cari satu atau lebih karakter spasi."
}                                         /* / Tanda garis miring digunakan untuk menandai awal dan akhir dari ekspresi reguler.
\s: Karakter ini adalah kelas karakter yang mencocokkan setiap jenis karakter spasi, termasuk spasi biasa, tab, dan baris baru.
+: Operator ini menunjukkan bahwa elemen sebelumnya (dalam hal ini \s) harus muncul satu kali atau lebih. */

// Skema login
let userInputPassword;
do {
  userInputPassword = prompt("Masukkan Password:");
  countUserInputPassword++;                       // memakai syntax ini karena program membutuhkan data berapa kali user input password
  if (userInputPassword !== user.password) {      // Jika password yang dimasukkan salah
    alert("Password yang anda masukkan salah.\nclue: perusahaan TERSUKSES" );  // Tampilkan pesan kesalahan
  }
} while (userInputPassword !== user.password);    // Ulangi loop sampai password yang dimasukkan benar

// Menghitung jumlah kata pada nama user
let userNameWordCount = wordCount(user.name);

// Meminta input hari lahir setelah login berhasil
let userInputBirthDay;

// Loop do-while untuk meminta user menginput hari sampai input valid
do {
  userInputBirthDay = prompt("Masukkan hari apa kamu lahir!");
  khodam = getKhodam(userInputBirthDay);    // kalo ga pake syntax ini maka ketika inputan harinya salah langsung ngeblank //  Memanggil fungsi getKhodam dengan input dari user dan menyimpan hasilnya
  if (khodam === null) {                    // Jika hasil dari getKhodam adalah null, berarti input tidak valid
    alert("Hari tidak ditemukan. Silakan masukkan hari yang valid.");
  }
} while (khodam === null);                  // Ulangi loop jika input tidak valid (khodam === null)


// Fungsi untuk menentukan khodam berdasarkan hari lahir
function getKhodam(day) {
  switch (day.toLowerCase()) {              // Konversi input user ke huruf kecil untuk menghindari masalah dengan kapitalisasi
      case 'senin':
          return 'Jin Iprit';
      case 'selasa':
          return 'Harimau Ompong';
      case 'rabu':
          return 'Risol Adem';
      case 'kamis':
          return 'Biduan Nasdem';
      case 'jumat':
          return 'Bintara Nyeblak';
      case 'sabtu':
          return 'Babayo';
      case 'minggu':
          return 'Naga Bearbrand';
      default:
          return null;
  }
}

// Menentukan khodam user
user.khodam = getKhodam(userInputBirthDay);

// Menampilkan hasil di halaman web
document.write(`<h2>SELAMAT DATANG ${user.name.toUpperCase()}!!</h2>`);                       // Backticks digunakan untuk membuat template literals, yang memungkinkan interpolasi variabel dan ekspresi secara langsung ke dalam string menggunakan ${}.
document.write(
  `<h3>Kamu telah mencoba memasukkan password sebanyak ${countUserInputPassword} kali</h3>`   // Dengan menggunakan ${}, Anda bisa menyisipkan variabel dan ekspresi langsung ke dalam string.
);
document.write(`<h3>Jumlah kata pada nama kamu adalah ${userNameWordCount}</h3>`);
document.write(`<h1>KHODAM KAMU ADALAH ${user.khodam.toUpperCase()}!!</h1>`);



