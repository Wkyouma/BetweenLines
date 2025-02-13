import styled from 'styled-components'
import Input from '../input/index'
import { useState } from 'react'
import livros from './Dados.json'
import Card from '../Card/index'
import Titulo from '../Titulo/index'

const Pesquisar = () => {
    const [resultadoPesquisa, setResultadoPesquisa] = useState<{ nome: string, src: string }[]>([])

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        const textoDigitado = event.target.value
        if(textoDigitado ===""){
            setResultadoPesquisa([]);
            return;
        }
        const resultado = livros.filter(livro => livro.nome.includes(textoDigitado))
        console.log(resultado)

        setResultadoPesquisa(resultado)
    }

    return (
        <Container>
            <Titulo Cor=''>Já sabe por onde começar?</Titulo>
            <Input placeholder="Escreva sua próxima leitura" onBlur={handleBlur} />
            <ResultadoPesquisa>
                {resultadoPesquisa.map((livro, index) => (
                    <Card id={index} nome={livro.nome} src={livro.src}></Card>
                ))}
            </ResultadoPesquisa>
        </Container>
    )
}

export default Pesquisar

// Estilos
const Container = styled.section`
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: auto;
    width: 100%;
`


const ResultadoPesquisa = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    margin-top: 20px;
    color: #FFF;

`
