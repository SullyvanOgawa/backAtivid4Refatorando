import express from 'express';
import rotaCategoria from './Routes/rotaCategoria.js';
import rotaProjeto from './Routes/rotaProjeto.js';

const app = express();
const PORT = 3000;

app.use(express.json());


app.use('/api/categoria', rotaCategoria);
app.use('/api/projeto', rotaProjeto);

app.get('/', (requisicao, resposta) => {
    resposta.json({ status: 'API Rodando!' });
});

app.listen(PORT, () => {
    console.log(`Servidor em http://localhost:${PORT}`);
});
