
import express from 'express';
import cors from 'cors';
import routerProject from './routes/routerProjeto.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/project', routerProject);

export default app;