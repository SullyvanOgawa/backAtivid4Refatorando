import express from 'express';
import rotaCategoria from './Routes/rotaCategoria.js';
// import rotaProduto from './Routes/rotaProduto.js';

const app = express();
const PORT = 3000;

app.use(express.json());


app.use('/api/categoria', rotaCategoria);
// app.use('/api/produto', rotaProduto);

app.get('/', (requisicao, resposta) => {
    resposta.json({ status: 'API Rodando!' });
});

app.listen(PORT, () => {
    console.log(`Servidor em http://localhost:${PORT}`);
});
