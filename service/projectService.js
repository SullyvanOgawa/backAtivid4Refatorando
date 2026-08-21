
import Project from '../model/project.js';
import Categoria from '../model/category.js';
import ProjectRepository from '../repository/projectRepository.js';

export default class ProjectService{
    constructor(){
        this.projectRepository = new ProjectRepository();
    }

    async gravar(projects){

        const category = new Categoria(
                            projects.category.id, 
                            projects.category.name
                        );

        const project = new Project(
                            null, 
                            projects.name, 
                            category
                        );

        const id = await this.projectRepository.gravar(project);
        project.id = id;
        
        return project;
    }
}