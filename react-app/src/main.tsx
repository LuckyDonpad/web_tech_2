import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "xp.css/dist/XP.css"
import "./style/style.css"
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
