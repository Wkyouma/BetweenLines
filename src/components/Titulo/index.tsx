import styled from 'styled-components'


interface TituloType {
    children:string;
    Cor:string;
}

const Titulo = ({children , Cor}:TituloType) =>{
    return(
        <Titulos Cor={Cor}>{children}</Titulos>
    )
}
export default Titulo

const Titulos = styled.h2<{Cor:string}>`
    color: ${(props) => props.Cor || "#ffff"}; 
    font-size: 36px;
    text-align: center;
    width: 100%;
`

