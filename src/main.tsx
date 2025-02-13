import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Routes.tsx'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    margin: 0%;
    text-align: center;
    padding: 0%;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);

`

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
