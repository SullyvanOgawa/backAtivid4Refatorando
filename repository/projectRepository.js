import Project from '../model/project.js';
import Category from '../model/category.js';
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

    async editar(project) {

        const sql = `
            UPDATE projeto SET proj_nome = ?, cat_id = ? WHERE proj_id = ?`;

        const parametros = [
            project.name,
            project.category.id,
            project.id
        ];

        const conexao = await pool.getConnection();
        await conexao.execute(sql,parametros);
        conexao.release();
    }


    async excluir(id) {

        const sql = `
            DELETE FROM projeto WHERE proj_id = ?`;

        const conexao = await pool.getConnection();
        await conexao.execute(sql, [id]);
        conexao.release();

    }


    async consultar(termoBusca) {

        let sql;
        let parametros;

        if (!isNaN(Number(termoBusca)) && Number(termoBusca) > 0) {

            sql = `
                SELECT
                    p.proj_id,
                    p.proj_nome,
                    c.cat_id,
                    c.cat_nome
                FROM projeto p
                INNER JOIN categoria c
                    ON p.cat_id = c.cat_id
                WHERE p.proj_id = ?
            `;

            parametros = [termoBusca];

        } else {

            sql = `
                SELECT
                    p.proj_id,
                    p.proj_nome,
                    c.cat_id,
                    c.cat_nome
                FROM projeto p
                INNER JOIN categoria c
                    ON p.cat_id = c.cat_id
                WHERE p.proj_nome LIKE ?
            `;

            parametros = [`%${termoBusca}%`];
        }

        const conexao = await pool.getConnection();
        const resultado = await conexao.execute(sql, parametros);
        conexao.release();

            let listaProjetos = [];

            for (const registro of resultado[0]) {

                const category = new Category(
                    registro.cat_id,
                    registro.cat_nome
                );

                const project = new Project(
                    registro.proj_id,
                    registro.proj_nome,
                    category
                );

                listaProjetos.push(project);
            }

            return listaProjetos;
       
    }

  

}