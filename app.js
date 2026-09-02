import express from 'express';
import routerCategory from './routes/routerCategory.js';
import routerProject from './routes/routerProject.js';
import cors from 'cors';

const app = express();
app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use(express.json());

app.use('/', routerCategory);
app.use('/', routerProject );

export default app;