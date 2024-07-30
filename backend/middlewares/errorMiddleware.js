// Middleware untuk menangani kesalahan
const errorMiddleware = (err, req, res, next) => {
  console.error(err.stack); // Log kesalahan ke konsol

  const statusCode = err.statusCode || 500; // Jika tidak ada statusCode, gunakan 500 sebagai default
  const message = err.message || 'Internal Server Error'; // Jika tidak ada pesan, gunakan 'Internal Server Error' sebagai default

  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message
  });
};

module.exports = errorMiddleware;

