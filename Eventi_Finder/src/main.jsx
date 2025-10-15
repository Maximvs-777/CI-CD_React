import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Evento from './Evento.jsx'
import './Evento.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Evento />
  </StrictMode>,
)
