
import Project from '../model/project.js';
import ProjectRepository from '../repository/projetoRepository.js';

export default class ProjectService{
    constructor(){
        this.projectRepository = new ProjectRepository();
    }

    async gravar(projects){

        const project = new Project(projects.name);

        const id = await this.projectRepository.gravar(project);
        project.id = id;
        return project;
    }
}