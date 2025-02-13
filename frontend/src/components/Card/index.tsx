import { Link } from "react-router-dom";
import styled from "styled-components"

interface CardType{
    id: number;
    nome: string;
    src: string;
}

const CardLivro = ({id , nome, src} :CardType) => {
    const livro = { id, nome, src };
    return(
        <Card key={id}>
            <img src={src} alt={nome} />
            <p>{nome}</p>
            <Link to={`./Info/${id}`} state={{ livro }} ><button></button></Link>
        </Card>
    )
}
export default CardLivro

const Card = styled.div`
width: 250px;
display: flex;
flex-direction: column;
&:hover{
    scale: 110%;
    transition-duration: 100ms;
}
`