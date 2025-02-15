
import {Route,Routes, BrowserRouter} from "react-router-dom"
import Homes from './pages/Home/index'
import Informar from './pages/Info/index'
import './App.css'
import Categoria from "./pages/Categoria"
import Favoritos from "./pages/Favoritos"
import MinhaEstante from "./pages/Estante"
import Header from "./components/Header"


function App() {

  return (
    <BrowserRouter>
    <Header></Header>
      <Routes><Route  path='/' element={<Homes/>} ></Route></Routes>
      <Routes><Route  path='/Categorias' element={<Categoria></Categoria>} ></Route></Routes>
      <Routes><Route  path='/Favoritos' element={<Favoritos></Favoritos>} ></Route></Routes>
      <Routes><Route  path='/Estante' element={<MinhaEstante></MinhaEstante>} ></Route></Routes>
      <Routes><Route path='/info/:id' element={<Informar/>} ></Route></Routes>
    </BrowserRouter> 
    
   
  )
}

export default App
