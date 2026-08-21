
export default class Project{
    #id;
    #name;
    #categoria;

    constructor(id, name, categoria){
        this.#id = id;
        this.#name = name;
        this.#categoria = categoria;
    }

    get id(){
        return this.#id;
    }

    set id(id){
        this.#id = id;
    }

    get name(){
        return this.#name;
    }

    set name(name){
        this.#name = name;
    }

    get categoria(){
        return this.#categoria;
    }   

    set categoria(categoria){
        this.#categoria = categoria;
    }

    toJSON(){
        return {
            id: this.#id,
            name: this.#name,
            categoria: this.#categoria
        }
        
    }
}