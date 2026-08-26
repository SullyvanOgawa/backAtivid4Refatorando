import express from 'express';
import routerCategory from './routes/routerCategory.js';
import routerProject from './routes/routerProject.js';

const app = express();

app.use(express.json());

app.use('/', routerCategory);
app.use('/', routerProject );

export default app;