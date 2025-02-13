import styled from 'styled-components'
import Header from '../../components/Header'
import Pesquisar from '../../components/Pesquisar'
import Lancamentos from '../../components/Lancamentos'

function App() {
  const Container = styled.div`
  
  `
  return (
    <Container>
     <Header></Header>
     <Pesquisar></Pesquisar>
     <Lancamentos></Lancamentos>
   </Container>
  )
}

export default App
