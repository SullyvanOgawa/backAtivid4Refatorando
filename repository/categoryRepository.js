import Category from '../model/category.js';
import pool from "../dataBase/db.js";

export default class CategoryRepository{
    async gravar(category){
        const sql = 'INSERT INTO categoria(cat_nome) VALUES (?)';

        const parametros = [category.name];

        const conexao = await pool.getConnection();
        const resultado = await conexao.execute(sql, parametros);
        category.id = resultado[0].insertId;

        conexao.release();
    }

    async editar(category){
        const sql = 'UPDATE categoria SET cat_nome = ? WHERE cat_id = ?';

        const parametros = [category.name, category.id];

        const conexao = await pool.getConnection();
        await conexao.execute(sql, parametros);
        conexao.release();
    }

    async excluir(id){
        const sql = 'DELETE FROM categoria WHERE cat_id = ?';

        const conexao = await pool.getConnection();
        await conexao.execute(sql, [id]);
        conexao.release();
    }

    async consultar(termoBusca){
        let sql = '';
        let parametros = [];

        if (!isNaN(Number(termoBusca)) && Number(termoBusca) > 0){
            
            sql = `SELECT cat_id, cat_nome FROM categoria WHERE cat_id = ?`;
            parametros = [termoBusca];
        }
        else{
            sql = `SELECT cat_id, cat_nome FROM categoria WHERE cat_nome LIKE ?`;
            parametros = [`%${termoBusca}%`];
        }

        const conexao = await pool.getConnection();
        const resultados = await conexao.execute(sql, parametros);
        conexao.release();

        let listCategorias = [];

        for(const resultado of resultados[0]){
            const category = new Category(resultado.cat_id, resultado.cat_nome);
            
            listCategorias.push(category);
        }

        return listCategorias;
    }


}

