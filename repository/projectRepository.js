
import pool from '../dataBase/db.js';

export default class ProjectRepository{
    async gravar(project){
        const sql = 'INSERT INTO projeto (proj_nome, cat_id) VALUES (?, ?)';

        const parametros = [project.name, 
                            project.category.id];

        const conexao = await pool.getConnection();
        const resultado = await conexao.execute(sql, parametros);
        project.id = resultado[0].insertId;
        conexao.release();
    }

    

}