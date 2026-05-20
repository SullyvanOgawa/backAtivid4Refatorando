import express from 'express';
import rotaCategoria from './Routes/rotaCategoria.js';
// import cors from 'cors';

const localhost = '0.0.0.0';
const port = 5000;
const app = express();

app.use(express.json());
app.use("/categorias", rotaCategoria);

app.listen(port, localhost, () => console.log(`API Executando na porta ${port}`));
