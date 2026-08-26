
import Category from '../model/category.js';
import CategoryRepository from '../repository/categoryRepository.js';

export default class CategoryService{
    constructor(){
        this.categoryRepository = new CategoryRepository();
    }

    async gravar(categories){
        const category = new Category(
                                null,
                                categories.name
                            );

        const id = await this.categoryRepository.gravar(category);
        category.id = id;
        
        return category;
    }

    async editar(id, categories){
        const category = new Category(
            id, 
            categories.name
        );

        await this.categoryRepository.editar(category);

        return category;
    }

    async excluir(id){
        await this.categoryRepository.excluir(id);
    }

    async consultar(termoBusca){
        const categories = await this.categoryRepository.consultar(termoBusca);

        return categories;
    }
}