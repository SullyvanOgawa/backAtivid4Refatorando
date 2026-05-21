
import Categoria from "../Model/categoria.js";

export default class CategoriaCtrl{

    async gravar(requisicao, resposta){
        if(requisicao.method === "POST" && requisicao.is("application/json")){
            const nome = requisicao.body.nome;
            const descricao = requisicao.body.descricao;

            if(nome && descricao){
                const categoria = new Categoria(null, nome, descricao);

                categoria.gravar().then(() => {
                    resposta.status(201).json({
                        "status":true,
                        "mensagem": "Categoria cadastrada com sucesso!"
                    });
                })
                .catch((erro) => {
                    resposta.status(500).json({
                        "status": false,
                        "mensagem": "Não foi possível cadastrar a Categoria, tente mais tarde!. Erro: " + erro.message
                    });
                });
            }
            else{
                resposta.status(400).json({
                    "status": false,
                    "mensagem": "Todos os campos devem ser preenchidos!"
                });
            }
        }
        else{
            resposta.status(405).json({
                "status": false,
                "mensagem": "Método não permitido. Consulte a documentação da API"
            });
        }
    }

    async editar(requisicao, resposta){
        if((requisicao.method === "PUT" || requisicao.method === "PATCH") && requisicao.is("application/json")){
            const id = requisicao.params.id;
            const nome = requisicao.body.nome;
            const descricao = requisicao.body.descricao;
            
            if(id > 0 && nome && descricao){
                const categoria = new Categoria(id, nome, descricao);

                categoria.editar()
                .then(() => {
                    resposta.status(200).json({
                        "status":true,
                        "mensagem": "Categoria Atualizada com sucesso!"
                    });
                })
                .catch((erro) =>{
                    resposta.status(500).json({
                        "status": false,
                        "mensagem": "Erro ao atualizar a categoria!" + erro.message
                    });
                })
            }
            else{
                resposta.status(400).json({
                    "status": true,
                    "mensagem": "Todos os campos devem ser preenchidos!"
                });
            }
        }
        else{
            resposta.status(405).json({
                "status": false,
                "mensagem": "Método não permitido. Consulte a documentação da API."
            });
        }
    }

     async excluir(requisicao, resposta){
        if(requisicao.method === "DELETE"){
            const id = requisicao.params.id;

            if(id > 0){
                const categoria = new Categoria(id);

                categoria.excluir()
                .then(() => {
                    resposta.status(200).json({
                        "status": true,
                        "mensagem": "Categoria excluida com sucesso."
                    });
                })
                .catch((erro) => {
                    resposta.status(500).json({
                        "status": false,
                        "mensagem": "Erro ao excluir a categoria: " + erro.message
                    });
                });
            }
            else{
                resposta.status(400).json({
                    "status": false,
                    "mensagem": "Informe um id valido. Consulte a documentação da API."
                });
            }
        }
        else{
            resposta.status(405).json({
                "status": false,
                "mensagem": "Metodo não permitido. Consulte a documentação da API."
            });
        }
    }

    async consultar(requisicao, resposta){
        if(requisicao.method === "GET"){
            let termoBusca;

            const id = requisicao.params.id;
            if(!isNaN(id)){ 
                termoBusca = id; 
            }else{
                termoBusca = ''; 
            }

            const categoria = new Categoria();
            categoria.consultar(termoBusca)
            .then(listCategorias =>{
                resposta.status(200).json({
                    "status": true,
                    "mensagem": "Consulta realizada com sucesso.",
                    "categorias": listCategorias
                });
            })
            .catch(erro => {
                resposta.status(500).json({
                    "status": false,
                    "mensagem": "Erro ao consultar a cidade: " + erro.message
                });
            });
        }
    }
    
}