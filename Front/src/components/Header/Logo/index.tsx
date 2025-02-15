import { Link } from "react-router-dom";
import styled from "styled-components";


interface imgTypes{
    url:string;
}

const Logo = ({ url } :imgTypes) => {
    const ImgUrl = `./imagens/${url}.png`
    const ImgAlt = url
   
    return(
        <>
        <Link to={"/"}><Img src={ImgUrl} alt={ImgAlt}></Img></Link>
        <Titulo><Negrito>Between</Negrito>Lines</Titulo>
        </>
    )
}
export default Logo

const Img = styled.img`
margin:1%;
width: 37%;
height: 37%;
cursor: pointer;`

const Negrito = styled.span`
font-weight: bold;
`
const Titulo = styled.p`
font-size: 40px ;`
