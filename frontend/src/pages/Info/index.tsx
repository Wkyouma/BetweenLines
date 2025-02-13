import { useLocation } from "react-router-dom";

const Informar = () => {
  const location = useLocation();
  const livro = location.state?.livro;

  if (!livro) {
    return <h1>Livro não encontrado</h1>;
  }

  return (
    <>
      <h1>{livro.nome}</h1>
      <img src={livro.src} alt={livro.nome} />
      <p>Autor: {livro.autor}</p>
      <p>Descrição: {livro.descricao}</p>
    </>
  );
};

export default Informar;
