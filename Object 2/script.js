//cara membuat object

//Object literal
//Matikan code yang lain untuk menjalankan fungsi ini
// let mahasiswa1 = {
//     nama: 'rahmat',
//     energi: 10,
//     makan: function(porsi){
//         this.energi = this.energi + porsi;  
//         console.log(`Halo ${this.nama}, Selamat Makan`);
//     }
// }

// let mahasiswa2 = {
//     nama: 'rahmat',
//     energi: 10,
//     makan: function(porsi){
//         this.energi = this.energi + porsi;  
//         console.log(`Halo ${this.nama}, Selamat Makan`);
//     }
// }

//function Declaration
//Matikan code yang lain untuk menjalankan fungsi ini
function Mahasiswa (nama, energi){
    let mahasiswa = {}
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    mahasiswa.makan = function(porsi){
        this.energi += porsi;
        console.log(`Halo ${this.nama}, Selamat Makan`);
    }

    mahasiswa.bermain = function(jam){
        this.energi -= jam;
        console.log(`Halo ${this.nama}, Selamat Bermain`);
    }

    return mahasiswa;
}

let mahasiswa3 = Mahasiswa('rahmat', 10);
let mahasiswa4 = Mahasiswa('kakak', 8);


//constructor function
//keyword new
//Matikan code yang lain untuk menjalankan fungsi ini
// let mahasiswa = function(nama, energi){
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat Makan`);
//     }

//     this.bermain = function(jam){
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Energi Anda Berkurang ${jam}`);
//     }
// }

// let mahasiswa5 = new mahasiswa('rahmat', 10);
// let mahasiswa6 = new mahasiswa('kakak', 8);