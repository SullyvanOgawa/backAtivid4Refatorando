
import Category from '../model/category.js';
import CategoryRepository from '../repository/categoryRepository.js';

export default class CategoryService{
    constructor(){
        this.categoryRepository = new CategoryRepository();
    }

    async gravar(categorias){
        const category = new Category(
                                null, 
                                categorias.name
                            );

        const id = await this.categoryRepository.gravar(category);
        category.id = id;
        
        return category;
    }
}