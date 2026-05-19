import CategoriaDB from "../DB/categoriaDB.js";

export default class Categoria {
    #id
    #nome
    #descricao

    get id() {
        return this.#id
    }

    set id(idNovo) {
        this.#id = idNovo
    }

    get nome() {
        return this.#nome
    }

    get descricao() {
        return this.#descricao
    }

    constructor(id, nome, descricao) {
        this.#id = id;
        this.#nome = nome;
        this.#descricao = descricao;
    }

    toString(){
        return `
        Categoria: ${this.#nome}
        Descrição: ${this.#descricao}
        `;
    }

    async gravar(){
        const categoriaDB = new CategoriaDB();
        await categoriaDB.gravar(this);
    }

    async editar(){
        const categoriaDB = new CategoriaDB();
        await categoriaDB.editar(this);
    }

    async excluir(){
        const categoriaDB = new CategoriaDB();
        await categoriaDB.excluir(this);
    }

    async consultar(termoBusca){
        const categoriaDB = new CategoriaDB();
        return await categoriaDB.consultar(termoBusca);
    }

    toJSON(){
        return {
            id: this.#id,
            nome: this.#nome,
            descricao: this.#descricao
        }
    }
}