import { Router } from 'express';
import CategoryCtrl from '../controller/categoryCtrl.js';   

const routerCategory = Router();
const categoryCtrl = new CategoryCtrl();

routerCategory.post('/category', (request, response) => {
    categoryCtrl.gravar(request, response);
});

routerCategory.get('/category/:id', (request, response) => {
    categoryCtrl.consultar(request, response);
});

routerCategory.get('/category/', (request, response) => {
    categoryCtrl.consultar(request, response);
});

routerCategory.put('/category/:id', (request, response) => {
    categoryCtrl.editar(request, response);
});

routerCategory.patch('/category/:id', (request, response) => {
    categoryCtrl.editar(request, response);
});

routerCategory.delete('/category/:id', (request, response) => {
    categoryCtrl.excluir(request, response);
});

export default routerCategory;