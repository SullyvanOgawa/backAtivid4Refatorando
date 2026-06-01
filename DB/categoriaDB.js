import Categoria from "../Model/categoria.js";
import obterConexao from "./conexao.js";


export default class CategoriaDB {
    async gravar(categoria){
        if(categoria instanceof Categoria){
            const sql = `INSERT INTO categorias(cat_nome, cat_descricao) 
                         VALUES(?, ?)`;

            const parametros =[
                categoria.nome,
                categoria.descricao
            ];

            const conexao = await obterConexao();
            const resultado = await conexao.execute(sql, parametros);
            categoria.id = resultado[0].insertId;

            conexao.release();
        }
    }

    async editar(categoria){
        if(categoria instanceof Categoria){
            const sql = `UPDATE categorias
                         SET cat_nome = ?, cat_descricao = ?
                         WHERE cat_id = ?`;
            
            const parametros = [
                categoria.nome,
                categoria.descricao,
                categoria.id
            ];

            const conexao = await obterConexao();
            await conexao.execute(sql, parametros);
            conexao.release();
        }
    }

    async excluir(categoria){
        if(categoria instanceof Categoria){
            const sql = `DELETE FROM categorias
                         WHERE cat_id = ?`;

            const conexao = await obterConexao();
            await conexao.execute(sql, [categoria.id]);
            conexao.release();
        }
    }
    
    async consultar(termoBusca){
        let sql = "";
        let parametros = [];

        if(!isNaN(Number(termoBusca)) && Number(termoBusca) > 0){
            sql = `SELECT   cat_id,
                            cat_nome,
                            cat_descricao
                    FROM categorias WHERE cat_id = ?`;
            parametros = [termoBusca];
        }
        else{
            sql = `SELECT   cat_id,
                            cat_nome,
                            cat_descricao
                    FROM categorias WHERE cat_nome LIKE ?`;
            parametros = [`%${termoBusca}%`];
        }

        const conexao = await obterConexao();
        const resultados = await conexao.query(sql, parametros);
        conexao.release();

        let listCategorias = [];

        for(const resultado of resultados[0]){
            const categoria = new Categoria(resultado.cat_id,
                                            resultado.cat_nome,
                                            resultado.cat_descricao
            );

            listCategorias.push(categoria);
        }

        return listCategorias;
    }
    
}