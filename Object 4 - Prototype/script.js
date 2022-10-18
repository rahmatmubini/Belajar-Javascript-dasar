//Prototype
//Constraction Function langsung menggunakan Object Create
//menyimpan method pada object literal
//Matikan code yang lain untuk menjalankan fungsi ini

function Mahasiswa (nama, energi){
    // let this = Object.create(Mahasiswa.prototype); --Dibuat oleh sistem
    this.nama = nama;
    this.energi = energi;

    // return this; --Dibuat oleh sistem
}

Mahasiswa.prototype.makan = function(porsi){
    this.energi += porsi;
    console.log(`halo ${this.nama}, Selamat Makan`);
}

let mahasiswa30 = new Mahasiswa('rahmat', 10);

//versi class --sistem akan membuat fungsi seperti pada code dia atas di belakang layar
class Mahasiswa {
    constructor(nama, energi){
        this.nama = nama;
        this.energi = energi;
    }
        
    makan(porsi) {
        this.energi += porsi;
        return `Halo ${this.nama}, selamat Makan`;
    }
    
}

let mahasiswa40 = new Mahasiswa('rahmat', 10);