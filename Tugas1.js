class Kapal {
    constructor (nama, jenis, kapasitas, panjang, lebar, tahun) {
        this.nama = nama,
        this.jenis = jenis,
        this.kapasitas = kapasitas,
        this.panjang = panjang,
        this.lebar = lebar,
        this.tahun = tahun
    }

    infoKapal(){
        return `kapal ini bernama ${this.nama} yang berjenis kapal ${this.jenis} dengan kapasitas ${this.kapasitas} orang, memiliki dimensi ${this.panjang} x ${this.lebar} dan di buat tahun ${this.tahun}`;
    }
}

let kapalPenumpang = new Kapal("Budiono Siregar", "Ferry", 500, 200, 100, 2005)
console.log(kapalPenumpang.infoKapal())
document.getElementById ("object").innerHTML = kapalPenumpang.infoKapal()

class InfoTiket extends Kapal {
    constructor(nama, jenis, kapasitas, panjang, lebar, tahun, hargaTiket) {
        super(nama, jenis, kapasitas, panjang, lebar, tahun);
        this.hargaTiket = hargaTiket;
        this._status = "Tersedia";
    }

    getStatusTiket() {
        return this._status;
    }

    setStatusTiket() {
        if (this._status === "Tersedia") {
            return `Tiket kapal ${this.nama} dengan harga Rp${this.hargaTiket} masih tersedia diloket.`;
        } else{
            return `Tiket kapal ${this.nama} dengan harga Rp${this.hargaTiket} sudah habis terjual`;
        }
    }

    infoHargaTiket() {
        return `Harga tiket kapal ${this.nama} adalah Rp${this.hargaTiket}.`;
    }
}

let tiketKapal = new InfoTiket ("Ferry Nusantara", "Feri", 500, 100, 25, 2015, 300000);
console.log(tiketKapal.infoHargaTiket());
console.log(tiketKapal.getStatusTiket());
document.getElementById ("object1").innerHTML = tiketKapal.setStatusTiket()

class JadwalKeberangkatan extends Kapal {
    constructor(nama, jenis, kapasitas, panjang, lebar, tahun, jadwal) {
        super(nama, jenis, kapasitas, panjang, lebar, tahun);
        this.jadwal = jadwal;
    }

    infoJadwal() {
        return `Jadwal keberangkatan kapal ${this.nama} pada pukul ${this.jadwal} WIB.`;
    }
} 

let jadwalBerlayar = new JadwalKeberangkatan ("Ferry Nusantara", "Feri", 500, 100, 25, 2015, "09:30")
console.log (jadwalBerlayar.infoJadwal());
document.getElementById("object2").innerHTML = jadwalBerlayar.infoJadwal()