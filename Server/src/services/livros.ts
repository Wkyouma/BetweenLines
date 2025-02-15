import fs from 'fs';
import pool from '../dataBase'
import mysql from 'mysql2';

interface Livro {
    id: number;
    nome: string;
}

async function getTodosLivros(): Promise<Livro[]> {
    const [rows] = await pool.query("SELECT * FROM livros");
    console.log('Livros retornados:', rows);
    return rows as Livro[];
}

async function getIdLivro(id: number) {
    try {
      const [results] = await pool.query('SELECT * FROM livros WHERE idLivros = ?', [id]);
      console.log(results); 
    } catch (err) {
      console.error(err); 
    }
  }
  
  async function insereLivro(LivroNovo: { nome: string, autor: string, img: string, data_publicacao: string }) {
    const { nome, autor, img, data_publicacao } = LivroNovo;
    if(nome.trim() === ""){
        throw new Error('Erro ao modificar livro: ' )
    }
    const query = 'INSERT INTO livros (nome, autor, img, data_publicacao) VALUES (?, ?, ?, ?)';
  
    return pool.execute(query, [nome, autor, img, data_publicacao]);
  }
  
async function modificaLivro(modificacao: Partial<Livro>, id: number): Promise<void> {
  const fields = Object.keys(modificacao).map(key => `${key} = ?`).join(', ');
  const values = Object.values(modificacao);

  const query = `UPDATE livros SET ${fields} WHERE idLivros = ?`;
  try {
    await pool.query(query, [...values, id]);
    console.log('Livro modificado com sucesso');
  } catch (err: unknown) {
    if (err instanceof Error) {
        throw new Error('Erro ao modificar livro: ' + err.message);}
  }
}
async function deleteLivro(id: number): Promise<void> {
    const query = 'DELETE FROM livros WHERE idLivros = ?';
  
    try {
      await pool.query(query, [id]);
      console.log('Livro deletado com sucesso');
    } catch (err: unknown) {
        if (err instanceof Error) {
            throw new Error('Erro ao deletar livro: ' + err.message);}
      }
  }
  
export { getTodosLivros, getIdLivro, insereLivro, modificaLivro, deleteLivro};
