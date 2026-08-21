import express from 'express';
// import cors from 'cors';
import routerCategory from './routes/routerCategory.js';
import routerProject from './routes/routerProject.js';

const app = express();

app.use(express.json());

app.use('/category', routerCategory);
app.use('/project', routerProject );


app.listen(port, localhost, () => console.log(`API Executando na porta ${port}`));