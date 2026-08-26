import CategoryService from '../service/categoryService.js';    

export default class CategoryCtrl{
    constructor(){
        this.categoryService = new CategoryService();
    }

    async gravar(request, response){
        try{
            const category = await this.categoryService.gravar(request.body);

            if(category){
                response.status(201).json({
                    status: true,
                    mensagem: 'Categoria cadastrada com sucesso.',
                    category: category
                });
            }
        }
        catch(error){
            response.status(500).json({
                status: false,
                mensagem: 'Não foi possível cadastrar a categoria.' + error.message
            });
        }
    }

    async editar(request, response){
        try{

            const id = request.params.id;
            const category = await this.categoryService.editar(id, request.body);

            response.status(200).json({
                status:true,
                mensagem: 'Categoria editada com sucesso.',
                category: category
            });

        }
        catch(error){
            response.status(500).json({
                status: false,
                mensagem: 'Erro ao editar a categoria.' + error.message
            });
        }
    }

    async excluir(request, response){
        try{

            const id = request.params.id;
            await this.categoryService.excluir(id);

            response.status(200).json({
                status: true,
                mensagem: 'Categoria excluída com sucesso.'
            });

        }
        catch(error){
            response.status(500).json({
                status: false,
                mensagem: 'Erro ao excluir categoria.' + error.message
            });
        }
    }

    async consultar(request, response){
        try{
            const termoBusca = request.params.id ?? '';
            
            const category = await this.categoryService.consultar(termoBusca);

            response.status(200).json({
                status: true,
                mensagem: 'Consulta realizada com sucesso.',
                category: category
            });

        }
        catch(error){
            response.status(500).json({
                status: false,
                mensagem: 'Erro ao consultar categorias.' + error.message
            });
        }
    }
    
    
}