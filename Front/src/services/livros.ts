import axios from "axios";

const livrosApi = axios.create({baseURL:"http://localhost:3000/livros"});

async function getLivros(){
    try {
        const response = await livrosApi.get('/');
        return response.data
    } catch (error) {
        console.error("Erro ao buscar livros:", error);
        return []; 
      }
}

export {
    getLivros  
}