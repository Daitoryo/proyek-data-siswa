const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const siswaRoutes = require('./routes/siswaRoutes');

app.use('/api/siswa', siswaRoutes);

app.listen(PORT, () => {
    console.log(`Server Berjalan di PORT ${PORT}`);
});