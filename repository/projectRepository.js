
import pool from '../dataBase/db.js';

export default class ProjectRepository{
    async gravar(project){
        const sql = 'INSERT INTO projeto (proj_nome) VALUES (?)';

        const parametros = [project.name];

        const conexao = await pool.getConnection();
        const resultado = await conexao.execute(sql, parametros);
        project.id = resultado[0].insertId;
       
        return project.id;
    }

    async consultar(termoBusca){
       let sql = "";
       let parametros = [];

       if(!isNaN(Number(termoBusca)) && Number(termoBusca) > 0){
           sql = 'SELECT proj_id, proj_nome FROM projeto WHERE proj_id = ?';
           parametros = [termoBusca];
       }
       else{
           sql = 'SELECT proj_id, proj_nome FROM projeto WHERE proj_nome LIKE ?';
           parametros = [`%${termoBusca}%`];
       }

       const conexao = await pool.getConnection();
       const resultados = await conexao.query(sql, parametros);
       conexao.release();

       let listProjects = [];

       for(const resultado of resultados[0]){
           const project = new Project(resultado.proj_id, resultado.proj_nome);
           listProjects.push(project);
       }

       return listProjects;
    }

    

}