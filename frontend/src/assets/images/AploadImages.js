const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Setup storage engine untuk Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Tentukan folder penyimpanan file
    const uploadDir = 'uploads/';
    
    // Buat folder jika belum ada
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    // Ganti nama file agar tidak duplikat
    const ext = path.extname(file.originalname);
    const filename = Date.now() + ext;
    cb(null, filename);
  }
});

// Inisialisasi Multer dengan konfigurasi storage
const upload = multer({ storage: storage });

const app = express();
const port = 3000;

// Route untuk mengunggah gambar
app.post('/upload', upload.single('image'), (req, res) => {
  // req.file adalah file yang diunggah
  // req.body adalah field lain dalam form
  if (!req.file) {
    return res.status(400).send('No file uploaded');
  }
  
  res.send(`File uploaded successfully: ${req.file.filename}`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

