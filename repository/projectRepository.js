
import pool from '../dataBase/db.js';

export default class ProjectRepository{
    async gravar(projeto){
        const sql = 'INSERT INTO projeto (proj_nome) VALUES (?)';

        const parametros = [projeto.nome];

        const conexao = await pool();
        const resultado = await conexao.execute(sql, parametros);
        projeto.id = resultado[0].insertId;

        conexao.release();
    }

    

}