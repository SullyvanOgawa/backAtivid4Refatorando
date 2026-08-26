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

    async editar(request, response){}

    async excluir(request, response){}

    async consultar(request, response){}
}