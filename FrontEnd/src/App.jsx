import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ListSiswa from './pages/ListSiswa';
import FormSiswa from './pages/FormSiswa';
import TambahSiswa from './pages/TambahSiswa';

function App() {

  return (
    <>
     <Navbar />
      <Routes>
        <Route path ="/" element={<ListSiswa/>}/>
        <Route path ="/edit/:id" element={<FormSiswa/>}/>
        <Route path ="/tambah" element={<TambahSiswa/>}/>
      </Routes>
    </>
  )
}

export default App;
