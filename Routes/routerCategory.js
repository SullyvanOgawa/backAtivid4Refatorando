import { Router } from 'express';
import CategoryCtrl from '../controller/categoryCtrl.js';   

const routerCategory = Router();
const categoryCtrl = new CategoryCtrl();

routerCategory.post('/category', (request, response) => {
    categoryCtrl.gravar(request, response);
});

export default routerCategory;