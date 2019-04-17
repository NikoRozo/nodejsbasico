const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Estoy en la ruta Home');
});

app.listen(3000, () => {
    console.log('Servidor Express esta Iniciado en el puerto 3000');
});