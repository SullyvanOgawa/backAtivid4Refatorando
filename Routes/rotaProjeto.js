
import express from 'express';
import {Router} from 'express';
import pool from '../db.js';

const rotaProjeto = Router();

rotaProjeto.post('/', async (requisicao, resposta) => {
    try{
        const {nome, projeto_id} = requisicao.body;

        if(!nome || !projeto_id){
            return resposta.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

        const [proj] = await pool.query(
            'Select proj_id from projeto where proj_id = ? ', [projeto_id]
        );

        if(proj.length === 0){
            return resposta.status(400).json({ error: 'Projeto não encontrado' });
        }

        const [resultado] = await pool.query('insert into projeto (proj_id, proj_nome) values (?, ?)', [projeto_id, nome]);

        resposta.status(201).json({ id: resultado.insertId, nome, id });

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
            'SELECT * FROM projeto WHERE id = ?', [id]
        );

        if(proj.length === 0){
            return resposta.status(404).json({ error: 'Projeto não encontrado' });
        }

        const projeto = proj[0];
    }
    catch (erro) {
        console.error(erro);
        resposta.status(500).json({ error: 'Erro ao consultar o projeto' + erro.message });
    }
});

export default rotaProjeto;
