import ProjectService from '../service/projectService.js';

export default class ProjectCtrl{
    constructor(){
        this.projectService = new ProjectService();
    }

    async gravar(request, response){
        try {
            const project = await this.projectService.gravar(request.body);

            if(project){
                response.status(201).json({
                    status: true,
                    mensagem: 'Projeto cadastrado com sucesso',
                    project: project
                });
            }

        }
        catch(error){
            response.status(500).json({
                status: false,
                mensagem: 'Não foi possível cadastrar o projeto' + error.message,
            });
        }
    }
}