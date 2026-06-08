import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function FormSiswa() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const [form, setForm] = useState({
        nama: '',
        alamat: '',
        tgl_lahir: '',
        jurusan: '',
    });

    useEffect(() => {
        axios.get(`http://localhost:5000/api/siswa/${id}`)
            .then((res) => {
                const data = res.data;
                if (data.tgl_lahir) {
                    data.tgl_lahir = data.tgl_lahir.split('T')[0];
                }
                setForm(res.data);
            })
            .catch((err) => console.error("Error mengambil data:", err));
    }, [id]);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        setIsLoading(true);

        axios.put(`http://localhost:5000/api/siswa/${id}`, form)
            .then((res) => {
                alert(res.data.message);

                setIsLoading(false);
                navigate('/');
            })
            .catch((err) => {
                console.error("Error: ", err);
                alert("Gagal memperbarui data");
                setIsLoading(false);
            });
    };

    return (
        <>
            <div className="container mt-5">
                <h2 className="mb-4">Edit Data Siswa</h2>

                {/* Form HTML kita masukkan ke sini dan dihubungkan dengan fungsi instruktur Anda */}
                <form onSubmit={handleUpdate} className="w-50">
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
                        {isLoading ? 'Menyimpan...' : 'Update Data'}
                    </button>
                    <button type="button" className="btn btn-secondary" onClick={() => navigate('/')}>Batal</button>
                </form>
            </div>
        </>
    );

};

export default FormSiswa;