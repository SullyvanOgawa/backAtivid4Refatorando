
import {Router} from 'express';
import CategoriaCtrl from '../Controller/categoriaCtrl.js';

const rotaCategoria = Router();
const categoriaCtrl = new CategoriaCtrl();

rotaCategoria.get("/", categoriaCtrl.consultar);
rotaCategoria.get("/:id", categoriaCtrl.consultar);
rotaCategoria.post("/", categoriaCtrl.gravar);
rotaCategoria.patch("/:id", categoriaCtrl.editar);
rotaCategoria.put("/:id", categoriaCtrl.editar);
rotaCategoria.delete("/:id", categoriaCtrl.excluir);

export default rotaCategoria;
