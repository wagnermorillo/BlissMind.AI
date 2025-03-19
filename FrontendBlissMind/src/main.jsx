import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App'
import { StrictMode } from 'react'
import './styles/styles.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)