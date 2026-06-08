import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function TambahSiswa() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const [form, setForm] = useState({
        nama: '',
        alamat: '',
        tgl_lahir: '',
        jurusan: '',
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSimpan = (e) => {
        e.preventDefault();
        setIsLoading(true);

        axios.post(`http://localhost:5000/api/siswa/`, form)
            .then((res) => {
                alert("Berhasil Menambahkan Data!");

                setIsLoading(false);
                navigate('/');
            })
            .catch((err) => {
                console.error("Error: ", err);
                alert("Gagal Menambahkan Data!");
                setIsLoading(false);
            });
    };

    return (
        <>
            <div className="container mt-5">
                <h2 className="mb-4">Tambah Data Siswa</h2>

                <form onSubmit={handleSimpan} className="w-50">
                    <div className="mb-3">
                        <label className="form-label">Nama</label>
                        <input type="text" className="form-control" name="nama" value={form.nama} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Alamat</label>
                        <input type="text" className="form-control" name="alamat" value={form.alamat} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Tanggal Lahir</label>
                        <input type="date" className="form-control" name="tgl_lahir" value={form.tgl_lahir} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Jurusan</label>
                        <input type="text" className="form-control" name="jurusan" value={form.jurusan} onChange={handleChange} required />
                    </div>

                    <button type="submit" className="btn btn-success me-2" disabled={isLoading}>
                        {isLoading ? 'Menyimpan...' : 'Simpan Data'}
                    </button>
                    <button type="button" className="btn btn-secondary" onClick={() => navigate('/')}>Batal</button>
                </form>
            </div>
        </>
    );

};

export default TambahSiswa;