
import {Router} from "express";
import pool from '../db.js';

const rotaCategoria = Router();

rotaCategoria.post('/', async (requisicao, resposta) => {
    try{
        const {nome} = requisicao.body;

        if(!nome){
            return resposta.status(400).json({ error: 'Nome da categoria é obrigatório' });
        }

        const [cat] = await pool.query(
            'Select cat_nome from categoria where cat_nome = ? ', [nome]
        );

        if(cat.length > 0){
            return resposta.status(400).json({ error: 'Categoria já existe' });
        }

        const [resultado] = await pool.query('insert into categoria (cat_nome) values (?)', [nome]);

        resposta.status(201).json({ id: resultado.insertId, nome});
    }
    catch (erro) {
        resposta.status(500).json({ error: 'Erro ao criar a categoria' + erro.message });
    }
});

rotaCategoria.get('/:id', async (requisicao, resposta) => {
    try{
        const { id } = requisicao.params;

        const [cat] = await pool.query(
            'SELECT * FROM categoria WHERE cat_id = ?', [id]
        );

        if(cat.length === 0){
            return resposta.status(404).json({ error: 'Categoria não encontrada' });
        }

        const [projetos] = await pool.query(
            'SELECT * FROM projeto WHERE cat_id = ?', [id]
        );

        const categoria = cat[0];

        categoria.projetos = projetos;
        resposta.json(categoria);
    }
    catch (erro) {
        console.error(erro);
        resposta.status(500).json({ error: 'Erro ao consultar a categoria' + erro.message });
    }
});

export default rotaCategoria;