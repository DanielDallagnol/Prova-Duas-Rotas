import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {ExportaRouter} from './Router.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ExportaRouter/>
  </StrictMode>,
)
