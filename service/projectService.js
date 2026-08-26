
import Project from '../model/project.js';
import Category from '../model/category.js';
import ProjectRepository from '../repository/projectRepository.js';

export default class ProjectService{
    constructor(){
        this.projectRepository = new ProjectRepository();
    }

    async gravar(projects){

        const category = new Category(
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

      async editar(id, projects) {

        const category = new Category(
            projects.category.id,
            projects.category.name
        );

        const project = new Project(
            id,
            projects.name,
            category
        );

        await this.projectRepository.editar(project);

        return project;
    }


    async excluir(id) {

        await this.projectRepository.excluir(id);

    }


    async consultar(termoBusca) {

        const projects = await this.projectRepository.consultar(termoBusca);

        return projects;
    }

    
}