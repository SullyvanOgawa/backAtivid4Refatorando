
import Project from '../model/project.js';
import Categoria from '../model/categoria.js';
import ProjectRepository from '../repository/projectRepository.js';

export default class ProjectService{
    constructor(){
        this.projectRepository = new ProjectRepository();
    }

    async gravar(projects){

        const categoria = new Categoria(
                            projects.categoria.id, 
                            projects.categoria.name
                        );

        const project = new Project(
                            null, 
                            projects.name, 
                            categoria
                        );

        const id = await this.projectRepository.gravar(project);
        project.id = id;
        
        return project;
    }
}