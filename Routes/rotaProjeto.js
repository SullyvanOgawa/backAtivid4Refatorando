
import {Router} from 'express';
import pool from '../dataBase/db.js';

const rotaProjeto = Router();

rotaProjeto.post('/', async (requisicao, resposta) => {
    try{
        const {nome} = requisicao.body;

        if(!nome){
            return resposta.status(400).json({ error: 'O nome do projeto é obrigatório' });
        }

        const [proj] = await pool.query(
            'Select proj_nome from projeto where proj_nome = ? ', [nome]
        );

        if(proj.length > 0){
            return resposta.status(400).json({ error: 'Projeto já existe' });
        }

        const [resultado] = await pool.query('insert into projeto (proj_nome) values (?)', [nome]);

        resposta.status(201).json({ id: resultado.insertId, nome});

    }
    catch(erro){
        console.error(erro);
        resposta.status(500).json({ error: 'Erro ao criar o projeto' + erro.message });
    }
});

rotaProjeto.get('/:id', async (requisicao, resposta) => {
    try{
        const { id } = requisicao.params;

        const [proj] = await pool.query(
            'SELECT proj_id, proj_nome FROM projeto WHERE proj_id = ?', [id]
        );

        if(proj.length === 0){
            return resposta.status(404).json({ error: 'Projeto não encontrado' });
        }

        const projeto = proj[0];
        resposta.json(projeto);
    }
    catch (erro) {
        console.error(erro);
        resposta.status(500).json({ error: 'Erro ao consultar o projeto' + erro.message });
    }
});

export default rotaProjeto;
