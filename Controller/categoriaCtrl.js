
import { application } from "express";
import Categoria from "../Model/categoria";

export default class categoriaCtrl{

    gravar(requisicao, resposta){
        if(requisicao.method === "POST" && requisicao.is("application/json")){
            const nome = requisicao.body.nome;
            const descricao = requisicao.body.descricao;

            if(nome && descricao){
                const categoria = new Categoria(null, nome, descricao);

                categoria.gravar().then(() => {
                    resposta.status(201).json({
                        "status":true,
                        "mensagem": "Categoria cadastrada com sucesso!",
                        "id": categoria.id
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
}