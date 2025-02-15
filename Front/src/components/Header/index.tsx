import { Link } from 'react-router-dom'
import Logo from './Logo/index'
import styled from 'styled-components'

const Itens = ['Categorias', 'Favoritos', 'Estante']

const Header = () => {
    return (
        <Cabecalho>
            <Container>
                <Logo url='logo' />
                <Lista>
                    {Itens.map((texto, index) => (
                       <Link to={`/${texto}`}><Item key={index}>{texto}</Item></Link> 
                    ))}
                </Lista>
                <Icone src='/imagens/perfil.svg' alt='perfil' />
                <Icone src='/imagens/sacola.svg' alt='sacola' />
            </Container>
        </Cabecalho>
    )
}

export default Header

const Cabecalho = styled.header`
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Container = styled.div`
    margin-left: 30px;
    margin-right: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    gap: 15px;
`

const Lista = styled.ul`
    display: flex;
    justify-content: center;
    text-decoration: none;
    list-style-type: none;
    gap: 80px;
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
`

const Item = styled.li`
    &:hover {
        color: grey;
        cursor: pointer;
    }
`

const Icone = styled.img`
    width: 24px;
    height: 24px;
`
