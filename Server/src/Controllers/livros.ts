import { Request, Response } from 'express';
import { getIdLivro, getTodosLivros, insereLivro, modificaLivro, deleteLivro } from '../services/livros';

import pool from '../dataBase'; 

async function getLivros(req: Request, res: Response): Promise<void> {
  try {
    const [livros] = await pool.execute('SELECT * FROM livros');
    console.log('Livros a serem enviados:', livros);
    res.send(livros);  
  } catch (err) {
    console.error('Erro ao buscar livros:', err);
    if (err instanceof Error) {
      res.status(500).send(err.message); 
    }
  }
}

function getLivrosId(req:Request, res:Response):void{
    try{
        const id = req.params.id;
        const livro = getIdLivro(parseInt(id));
        res.send(livro);
    }catch(err ){
        if (err instanceof Error) {
        res.status(500).send(err.message);
    }
}
}

async function postLivro(req: Request, res: Response): Promise<void> {
    const { nome, autor, img, data_publicacao } = req.body;
  
    if (!/^\d{4}-\d{2}-\d{2}$/.test(data_publicacao)) {
      res.status(400).json({ message: 'Data inválida. Formato esperado: YYYY-MM-DD.' });
      return;
    }
    try {
      const [results] = await insereLivro({ nome, autor, img, data_publicacao });
      res.status(201).json({ message: 'Livro inserido com sucesso', data: results });
    } catch (err: unknown) {
      if (err instanceof Error) {
        res.status(500).json({ message: 'Erro ao inserir livro', error: err.message });
      }
    }
  }
  
  
  async function pathLivro(req: Request, res: Response): Promise<void> {
    try {
      const { idLivros, nome, autor, data_publicacao } = req.body;
      const modificacao = { nome, autor, data_publicacao };
      await modificaLivro(modificacao, parseInt(idLivros));
      
      res.send("Livro modificado com sucesso");
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send(err.message);
      }
    }
  }
  
  async function handleDeleteLivro(req: Request, res: Response): Promise<void> {
    try {
      const { idLivros } = req.body; 
  
      if (isNaN(idLivros)) {  
        res.status(400).send('ID inválido');
        return;
      }
  
      await deleteLivro(idLivros);  
  
      res.send("Livro deletado com sucesso");
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send(err.message);
      }
    }
  }
  
export {getLivros,getLivrosId, postLivro, pathLivro, handleDeleteLivro}