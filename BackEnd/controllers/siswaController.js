const db = require('../config/db');

const createSiswa = (req, res) => {
    const { nama, alamat, tgl_lahir, jurusan } = req.body;

    if (!nama || !alamat || !tgl_lahir || !jurusan) {
        return res.status(400).json({ error: "Nama, Alamat, Tanggal Lahir, dan Jurusan Wajib Diisi!"});
    }
    const query = "INSERT INTO siswa (nama, alamat, tgl_lahir, jurusan) VALUES (?, ?, ?, ?)";

    db.query(query, [nama, alamat, tgl_lahir, jurusan], (err, result) => {
        if (err) {
            console.error("Error saat menyimpan data:", err);
            return res.status(500).json({ error: "Gagal menyimpan data"})
        }
        res.status(201).json({ message: "Data Berhasil Ditambahkan!", kode_siswa: result.insertId});
    });
};

const getSiswa = (req,res) => {
    const query = "SELECT * FROM siswa";

    db.query(query, (err, results) => {
        if (err) {
            console.error("Error mengambil data siswa:", err);
            return res.status(500).json({error: "Gagal mengambil data dari database" });
        }
        res.status(200).json(results);
    });
};

const getSiswaById = (req,res) => {
    const { id } = req.params;

    const query = "SELECT * FROM siswa "

    db.query(query, (err, results) => {
        if (err) {
            console.error("Error mengambil data siswa:", err);
            return res.status(500).json({error: "Gagal mengambil data dari database" });
        }
        res.status(200).json(results);
    });
};


const updateSiswa = (req,res) => {
    const { id } = req.params;
    const { nama, alamat, tgl_lahir, jurusan } = req.body;

    if (!nama || !alamat || !tgl_lahir || !jurusan) {
        return res.status(400).json({ error: "Nama, Alamat, Tanggal Lahir, dan Jurusan Wajib Diisi!"});
    }

        const query = "UPDATE siswa SET nama = ?, alamat = ?, tgl_lahir = ?, jurusan = ? WHERE kode_siswa = ?";

        db.query(query, [nama, alamat, tgl_lahir, jurusan, id], (err, result) => {
            if(err) {
                console.error("Error saat memperbarui data:", err);
                return res.status(500).json({error: "Gagal Memperbarui Data"});
            }
            if (result.affectedRows === 0) {
                return res.status(404).json({ message: "Data siswa tidak ditemukan"});
            }
            res.status(200).json({ message: "Data siswa berhasil diperbarui! "});
        });
    }

const deleteSiswa = (req,res) => {
    const { id } = req.params;

    const query = "DELETE FROM siswa WHERE kode_siswa = ?";

    db.query(query, [id], (err, result) => {
        if (err) {
            console.error("Error saat menghapus data:", err);
            return res.status(500).json({error: "Gagal Menghapus Data"});
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Tidak menemukan data siswa"});
        }
        res.status(200).json({ message: "Data Berhasil Terhapus!"});
    });
}

module.exports = { createSiswa, getSiswa, updateSiswa, getSiswaById, deleteSiswa };
