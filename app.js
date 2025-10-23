// app.js
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => res.send('Hola Mundo desde GitHub Actions y Docker'));

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));

module.exports = app; // para pruebas
