
export default class Categoria{
    #id;
    #nome;
    #projeto;

    constructor(id, nome){
        this.#id = id;
        this.#nome = nome;
    }

    get id(){
        return this.#id;
    }

    set id(id){
        this.#id = id;
    }

    get nome(){
        return this.#nome;
    }

    set nome(nome){
        this.#nome = nome;
    }

    get projeto(){
        return this.#projeto;
    }

    set projeto(projeto){
        this.#projeto = projeto;
    }

    toJSON(){
        return {
            id: this.#id,
            nome: this.#nome,
            projeto: this.#projeto
        }
    }
}