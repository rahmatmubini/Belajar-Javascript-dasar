//function Declaration menggunakan Object Create
//menyimpan method pada object literal
//Matikan code yang lain untuk menjalankan fungsi ini
const methodMahasiswa = {
    makan: function(porsi){
        this.energi += porsi;
        console.log(`Halo ${this.nama}, Selamat Makan`);
    },

    bermain: function(jam){
        this.energi -= jam;
        console.log(`Halo ${this.nama}, Selamat Bermain`);
    },

    tidur: function(jam){
        this.energi += jam * 2;
        console.log(`Halo ${this.nama}, Selamat Tidur`);
    }
};

function Mahasiswa (nama, energi){
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    
//Jika Menggunakan Object.creaet() hal berikut tidak perlu di gunakan
    // mahasiswa.makan = methodMahasiswa.makan;
    // mahasiswa.bermain = methodMahasiswa.bermain;
    // mahasiswa.tidur = methodMahasiswa.tidur;

    return mahasiswa;
}

let mahasiswa30 = Mahasiswa('rahmat', 10);
let mahasiswa40 = Mahasiswa('kakak', 8);