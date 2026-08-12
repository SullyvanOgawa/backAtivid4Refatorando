

export default class Projeto{
    #id
    #nome
    #categoria

    get id() {
        return this.#id
    }

    set id(idNovo) {
        this.#id = idNovo
    }

    get nome() {
        return this.#nome
    }

    get categoria() {
        return this.#categoria
    }

    constructor(id, nome, categoria) {
        this.#id = id;
        this.#nome = nome;
        this.#categoria = categoria;
    }

    toString(){
        return `
        Projeto: ${this.#nome}
        Categoria: ${this.#categoria.nome}
        `;
    }

    async gravar(){
        const projetoDB = new ProjetoDB();
        await projetoDB.gravar(this);
    }

    async editar(){
        const projetoDB = new ProjetoDB();
        await projetoDB.editar(this);
    }

    async excluir(){
        const projetoDB = new ProjetoDB();
        await projetoDB.excluir(this);
    }

    async consultar(termoBusca){
        const projetoDB = new ProjetoDB();
        return await projetoDB.consultar(termoBusca);
    }

    toJSON(){
        return {
            id: this.#id,
            nome: this.#nome,
            categoria: this.#categoria.toJSON()
        }
    }
}