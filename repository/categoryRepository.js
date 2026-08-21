import pool from "../dataBase/db.js";

export default class CategoryRepository{
    async gravar(category){
        const sql = 'INSERT INTO categoria(cat_nome) VALUES (?)';

        const parametros = [category.name];

        const conexao = await pool.getConnection();
        const resultado = await conexao.execute(sql, parametros);
        category.id = resultado[0].insertId;
       
        return category.id;
    }


}