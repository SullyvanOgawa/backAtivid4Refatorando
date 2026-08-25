
export default class Project{
    #id;
    #name;
    #category;

    constructor(id, name, category){
        this.#id = id;
        this.#name = name;
        this.#category = category;
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

    get category(){
        return this.#category;
    }   

    set category(category){
        this.#category = category;
    }

    toJSON(){
        return {
            id: this.#id,
            name: this.#name,
            category: this.#category
        }
        
    }
}