
import {Router} from "express";
import ProjectCtrl from '../controller/projectCtrl.js';

const routerProject = Router();
const projectCtrl = new ProjectCtrl();

routerProject.post('/project', (request, response) => {
    projectCtrl.gravar(request, response);
});

routerProject.get('/project/:id', (request, response) => {
    projectCtrl.consultar(request, response);
});

routerProject.get('/project/', (request, response) => {
    projectCtrl.consultar(request, response);
});

routerProject.put('/project/:id', (request, response) => {
    projectCtrl.editar(request, response);
});

routerProject.delete('/project/:id', (request, response) => {
    projectCtrl.excluir(request, response);
});

export default routerProject;


