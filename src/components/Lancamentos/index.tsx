import styled from "styled-components";
import Titulo from "../Titulo";
import SimpleSlider from "../Carroussel";
const Lancamentos = () =>{
    return(
        <Secao>
                <Titulo Cor="black">Últimos lançamentos</Titulo>
                <Container>
                <SimpleSlider>

                </SimpleSlider>
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