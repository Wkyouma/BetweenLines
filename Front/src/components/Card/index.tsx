import { Link } from "react-router-dom";
import styled from "styled-components"

interface CardType{
    id: number;
    nome: string;
}

const CardLivro = ({id , nome } :CardType) => {
    const livro = { id, nome };
    return(
        <Card key={id}>
            <Img src={`/imagens/livro${id}.png`} alt={nome} />
            <p>{nome}</p>
            <Link to={`./Info/${id}`} state={{ livro }} ><button>Ler</button></Link>
        </Card>
    )
}
export default CardLivro

const Img = styled.img`
&:hover{
    scale: 110%;
    transition-duration: 100ms;
}
`

const Card = styled.div`
width: 200px;
display: flex;
flex-direction: column;

`