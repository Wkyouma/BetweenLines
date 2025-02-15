import express from 'express';
import { router as rotaLivro } from './Routes/livros'; 

const cors = require("cors")
const app = express();
const port = 3000;
app.use(cors({origin:"*"}))
app.use(express.json())
app.use('/livros',rotaLivro)

app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

app.listen(port, () => {
  console.log(`Servidor rodando na http://localhost:${port}`);
});
