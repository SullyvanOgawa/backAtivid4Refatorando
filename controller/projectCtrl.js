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

    async editar(request, response) {

        try {

            const id = request.params.id;

            const project = await this.projectService.editar(id, request.body);

            response.status(200).json({
                status: true,
                mensagem: 'Projeto editado com sucesso',
                project: project
            });

        }
        catch (error) {

            response.status(500).json({
                status: false,
                mensagem: 'Não foi possível editar o projeto',
                erro: error.message
            });

        }
    }


    async excluir(request, response) {

        try {

            const id = request.params.id;

            await this.projectService.excluir(id);

            response.status(200).json({
                status: true,
                mensagem: 'Projeto excluído com sucesso'
            });

        }
        catch (error) {

            response.status(500).json({
                status: false,
                mensagem: 'Não foi possível excluir o projeto',
                erro: error.message
            });

        }
    }


    async consultar(request, response) {

        try {

            const termoBusca = request.params.id ?? '';

            const projects = await this.projectService.consultar(
                termoBusca
            );

            response.status(200).json({
                status: true,
                mensagem: 'Consulta realizada com sucesso',
                projects: projects
            });

        }
        catch (error) {

            response.status(500).json({
                status: false,
                mensagem: 'Não foi possível consultar os projetos',
                erro: error.message
            });

        }
    }

}