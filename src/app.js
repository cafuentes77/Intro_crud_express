import express from 'express';
import fileRouter from './router/router.js';


const app = express();
const PORT = 3000;

app.use('/api/v1', fileRouter)

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto 3000`);
}) 