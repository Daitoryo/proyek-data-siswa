const express = require('express');
const router = express.Router();
const { createSiswa, getSiswa, updateSiswa, getSiswaById, deleteSiswa} = require('../controllers/siswaController');

router.get('/', getSiswa);
router.get('/:id', getSiswaById);
router.post('/', createSiswa);
router.put('/:id', updateSiswa);
router.delete('/:id', deleteSiswa);

module.exports = router;