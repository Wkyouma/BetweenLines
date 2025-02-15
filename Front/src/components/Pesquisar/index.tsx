import styled from 'styled-components'
import Input from '../input/index'
import { useEffect, useState } from 'react'
import { getLivros } from '../../services/livros'
import Card from '../Card/index'
import Titulo from '../Titulo/index'

interface TypeLivro {
  nome: string;
  src: string;
  id: number;
}

const Pesquisar = () => {
  const [resultadoPesquisa, setResultadoPesquisa] = useState<TypeLivro[]>([]);
  const [livros, setLivros] = useState<TypeLivro[]>([]);

  useEffect(() => {
    const fetchLivros = async () => {
      const LivroApi = await getLivros();
      console.log('Livros recebidos do backend:', LivroApi);
      setLivros(LivroApi);
    };
    fetchLivros();
  }, []);

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const textoDigitado = event.target.value;
    if (textoDigitado === '') {
      setResultadoPesquisa([]);
      return;
    }
    const resultado = livros.filter(livro =>
      livro.nome.toLowerCase().includes(textoDigitado.toLowerCase())
    );
    setResultadoPesquisa(resultado);
  };

  return (
    <Container>
      <Titulo Cor=''>Já sabe por onde começar?</Titulo>
      <Input placeholder="Escreva sua próxima leitura" onBlur={handleBlur} />

      <ResultadoPesquisa>
        {resultadoPesquisa.slice(0, 12).map((livro) => (
          <Card key={livro.id || livro.nome} id={livro.id} nome={livro.nome} />
        ))}
      </ResultadoPesquisa>
    </Container>
  );
};

export default Pesquisar;

const Container = styled.section`
  height: auto;
  min-height: 600px;
  background-image: linear-gradient(90deg, #002f52 35%, #326589);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  width: 100%;
`;

const ResultadoPesquisa = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  max-width: 80%;
  margin: auto;
  color: #fff;
`;
