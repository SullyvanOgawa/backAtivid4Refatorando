
import {Router} from "express";
import ProjectCtrl from '../controller/projectCtrl.js';

const routerProject = Router();
const projectCtrl = new ProjectCtrl();

routerProject.post('/project', (request, response) => {
    projectCtrl.gravar(request, response);
});

export default routerProject;


