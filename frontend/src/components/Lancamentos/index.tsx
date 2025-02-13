import styled from "styled-components";
import Dados from '../Pesquisar/Dados.json'
import Card from '../Card/index'
import Titulo from "../Titulo";
const Lancamentos = () =>{
    return(
        <Secao>
                <Titulo Cor="black">Últimos lançamentos</Titulo>
                <Container>
                {Dados.map((livro, index) => {
                    if (livro.Data > 20240212) {
                        return <Card id={index} nome={livro.nome} src={livro.src} />;
                    }
                    return null;
                })}
                </Container>
        </Secao>
    )
}
export default Lancamentos;

const Secao = styled.section`
width: 100%;
height: auto;
background-color: white;

`

const Container = styled.div`
display: flex;
justify-content: center;
gap:1%;
`