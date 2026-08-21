
export default class Category{
    #id;
    #name;

    constructor(id, name){
        this.#id = id;
        this.#name = name;
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


    toJSON(){
        return {
            id: this.#id,
            name: this.#name
        }
    }
}