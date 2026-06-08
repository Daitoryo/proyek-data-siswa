import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ListSiswa = () => {
    const [siswa, setSiswa] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const getData = () => {
        setIsLoading(true)
        axios.get('http://localhost:5000/api/siswa')
            .then(response => {
                setSiswa(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error(error);
                setIsLoading(false);
            });
    };

    const hapusData = (id) => {
        if(window.confirm("Yakin ingin menghapus data ini?")) {
            axios.delete(`http://localhost:5000/api/siswa/${id}`)
                .then(() => {
                    alert("Data berhasil dihapus!");
                    getData();
                })
                .catch(error => console.error(error));
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="fw-bold">Data Siswa</h2>
                <button className="btn btn-primary" onClick={() => navigate('/tambah')}>
                     Tambah Data
                </button>
            </div>

            {isLoading ? (
                <p>Loading data...</p>
            ) : (
                <table className="table table-bordered text-center">
                    <thead className="table-dark">
                        <tr>
                            <th>No</th>
                            <th>Nama</th>
                            <th>Alamat</th>
                            <th>Tgl Lahir</th>
                            <th>Jurusan</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {siswa.map((item, index) => (
                            <tr key={item.kode_siswa}>
                                <td>{index + 1}</td>
                                <td>{item.nama}</td>
                                <td>{item.alamat}</td>
                                <td>{item.tgl_lahir}</td>
                                <td>{item.jurusan}</td>
                                <td>
                                    <button className="btn btn-warning btn-sm me-2" onClick={() => navigate(`/edit/${item.kode_siswa}`)}>
                                        Edit
                                    </button>
                                    <button className="btn btn-danger btn-sm" onClick={() => hapusData(item.kode_siswa)}>
                                        Hapus
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};


export default ListSiswa;