// let nilai = 16                                                   // KESALAHAN DISINI KARENA TIDAK PAKAI FOR
// function hipHura() {
//     // Write your code here
//     if (nilai % 3 === 0) {
//         console.log ('Hip')
//     } else if (nilai % 5 === 0) {
//         console.log('Hura')
//     } else if (nilai % 3 === 0 && nilai % 5 === 0) {
//         consol.log('Hip Hura')
//     } else {
//         console.log(nilai)
//     }
//     return nilai
// }

// ======================================================

// OUTPUT MENGGUNAKAN ARRAY
function hitungHipHura(n) {
    let hasil = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            hasil.push("Hip Hura");
        } else if (i % 3 === 0) {
            hasil.push("Hip");
        } else if (i % 5 === 0) {
            hasil.push("Hura");
        } else {
            hasil.push(i);
        }
    }
    return hasil.join('\n');
}

let output = hitungHipHura(20);
console.log(output);

// ========================================

// OUTPUT MENGGUNAKAN CONSOLE
function hitungHipHura(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("Hip Hura");
        } else if (i % 3 === 0) {
            console.log("Hip");
        } else if (i % 5 === 0) {
            console.log("Hura");
        } else {
            console.log(i);
        }
    }
}
// Contoh penggunaan fungsi
hitungHipHura(20);          // 20 adalah nilai dari n