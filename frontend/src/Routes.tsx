
import {Route,Routes, BrowserRouter} from "react-router-dom"
import Homes from './pages/Home/index'
import Informar from './pages/Info/index'
import './App.css'


function App() {

  return (
    <BrowserRouter>
      <Routes><Route  path='/' element={<Homes/>} ></Route></Routes>
      <Routes><Route path='/info/:id' element={<Informar/>} ></Route></Routes>
    </BrowserRouter> 
    
   
  )
}

export default App
