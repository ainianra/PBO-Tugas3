// Class untuk kapal
class Kapal {
    constructor(nama, jenis, kapasitas, panjang, lebar, tahun) {
        this.nama = nama;
        this.jenis = jenis;
        this.kapasitas = kapasitas;
        this.panjang = panjang;
        this.lebar = lebar;
        this.tahun = tahun;
    }

    infoKapal() {
        return `Kapal ini bernama ${this.nama}, berjenis kapal ${this.jenis}, dengan kapasitas ${this.kapasitas} orang. Dimensi kapal adalah ${this.panjang} x ${this.lebar} meter dan dibuat pada tahun ${this.tahun}.`;
    }

    // Method baru untuk memperbarui kapasitas kapal
    updateKapasitas(kapasitasBaru) {
        this.kapasitas = kapasitasBaru;
        return `Kapasitas kapal ${this.nama} telah diperbarui menjadi ${kapasitasBaru} orang.`;
    }

    // Method baru untuk menampilkan umur kapal
    umurKapal() {
        const tahunSekarang = new Date().getFullYear();
        return `Umur kapal ${this.nama} adalah ${tahunSekarang - this.tahun} tahun.`;
    }
}

// Class turunan baru: KapalPenumpang
class KapalPenumpang extends Kapal {
    constructor(nama, kapasitas, panjang, lebar, tahun, rute) {
        super(nama, "Penumpang", kapasitas, panjang, lebar, tahun);
        this.rute = rute;
    }

    // Method untuk menampilkan informasi rute kapal
    infoRute() {
        return `Kapal ${this.nama} beroperasi pada rute ${this.rute}.`;
    }
}

// Class turunan baru: KapalKargo
class KapalKargo extends Kapal {
    constructor(nama, kapasitas, panjang, lebar, tahun, beratMaks) {
        super(nama, "Kargo", kapasitas, panjang, lebar, tahun);
        this.beratMaks = beratMaks; // Berat maksimum yang bisa diangkut
    }

    // Method untuk menampilkan informasi berat maksimum muatan
    infoBeratMaks() {
        return `Kapal ${this.nama} dapat mengangkut muatan hingga ${this.beratMaks} ton.`;
    }
}

// Membuat instance dari KapalPenumpang
let kapalPenumpang = new KapalPenumpang("Budiono Siregar", 500, 200, 100, 2005, "Jakarta - Surabaya");
console.log(kapalPenumpang.infoKapal());
console.log(kapalPenumpang.infoRute());
console.log(kapalPenumpang.umurKapal());
console.log(kapalPenumpang.updateKapasitas(600));

// Membuat instance dari KapalKargo
let kapalKargo = new KapalKargo("Cahaya Samudera", 20, 300, 120, 2010, 10000);
console.log(kapalKargo.infoKapal());
console.log(kapalKargo.infoBeratMaks());
console.log(kapalKargo.umurKapal());
