import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

pool.getConnection()
  .then(connection => {
    console.log('Conexão bem-sucedida com o banco de dados!');
    connection.release();  
  })
  .catch(err => {
    console.error('Erro na conexão com o banco de dados:', err.message);
  });

export default pool;
