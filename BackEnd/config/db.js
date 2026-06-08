const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'db_sekolah',
    dateStrings: true
});

db.connect((err) => {
    if (err) {
        console.error('Koneksi Dengan Database Gagal', err);
        return;
    }
    console.log('Berhasil Terhubung dengan Database!');
});

module.exports = db;