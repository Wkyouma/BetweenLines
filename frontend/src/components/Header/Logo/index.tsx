import styled from "styled-components";


interface imgTypes{
    url:string;
}

const Logo = ({ url } :imgTypes) => {
    const ImgUrl = `./imagens/${url}.svg`
    const ImgAlt = url
   
    return(
        <>
        <Img src={ImgUrl} alt={ImgAlt}></Img>
        <Titulo><Negrito>Between</Negrito>Lines</Titulo>
        </>
    )
}
export default Logo

const Img = styled.img`
margin:1%;
cursor: pointer;`

const Negrito = styled.span`
font-weight: bold;
`
const Titulo = styled.p`
font-size: 40px ;`
