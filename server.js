const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.json());

const categoriaRoutes = require('.Routes/rotaCategoria');
const produtoRoutes = require('./Routes/rotaProduto');

app.use('/api/categoria', categoriaRoutes);
app.use('/api/produto', produtoRoutes);

app.get('/', (requisicao, resposta) => {
    resposta.json({ status: 'API Rodando!' });
});

app.listen(PORT, () => {
    console.log(`Servidor em http://localhost:${PORT}`);
});