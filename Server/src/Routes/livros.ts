import {Router} from 'express';
import { getLivros, getLivrosId, postLivro, pathLivro, handleDeleteLivro } from '../Controllers/livros';

const router = Router()

router.get("/",getLivros)
router.get("/:id",getLivrosId)
router.post('/',postLivro)
router.patch("/",pathLivro)
router.delete('/', handleDeleteLivro)

export {router}